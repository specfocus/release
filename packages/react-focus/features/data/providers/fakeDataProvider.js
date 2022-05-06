"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fakerest_1 = __importDefault(require("fakerest"));
/* eslint-disable no-console */
function log(type, resource, params, response) {
    // @ts-ignore
    if (console.group) {
        // Better logging in Chrome
        console.groupCollapsed(type, resource, JSON.stringify(params));
        console.log(response);
        console.groupEnd();
    }
    else {
        console.log('FakeRest request ', type, resource, params);
        console.log('FakeRest response', response);
    }
}
/**
 * Respond to ../../app data queries using a local JavaScript object
 *
 * Useful for debugging and testing - do not use in production.
 *
 * @example
 *
 * import fakeDataProvider from 'data/fakerest';
 * const dataProvider = fakeDataProvider({
 *   posts: [
 *     { id: 0, title: 'Hello, world!' },
 *     { id: 1, title: 'FooBar' },
 *   ],
 *   comments: [
 *     { id: 0, post_id: 0, author: 'John Doe', body: 'Sensational!' },
 *     { id: 1, post_id: 0, author: 'Jane Doe', body: 'I agree' },
 *   ],
 * })
 */
exports.default = (data, loggingEnabled = false) => {
    const restServer = new fakerest_1.default.Server();
    restServer.init(data);
    if (typeof window !== 'undefined') {
        // give way to update data in the console
        window.restServer = restServer;
    }
    function getResponse(type, resource, params) {
        switch (type) {
            case 'getList': {
                const { page, perPage } = params.pagination;
                const { field, order } = params.sort;
                const query = {
                    sort: [field, order],
                    range: [(page - 1) * perPage, page * perPage - 1],
                    filter: params.filter,
                };
                return {
                    data: restServer.getAll(resource, query),
                    total: restServer.getCount(resource, {
                        filter: params.filter,
                    }),
                };
            }
            case 'getOne':
                return {
                    data: restServer.getOne(resource, params.id, Object.assign({}, params)),
                };
            case 'getMany':
                return {
                    data: restServer.getAll(resource, {
                        filter: { id: params.ids },
                    }),
                };
            case 'getManyReference': {
                const { page, perPage } = params.pagination;
                const { field, order } = params.sort;
                const query = {
                    sort: [field, order],
                    range: [(page - 1) * perPage, page * perPage - 1],
                    filter: Object.assign(Object.assign({}, params.filter), { [params.target]: params.id }),
                };
                return {
                    data: restServer.getAll(resource, query),
                    total: restServer.getCount(resource, {
                        filter: query.filter,
                    }),
                };
            }
            case 'update':
                return {
                    data: restServer.updateOne(resource, params.id, Object.assign({}, params.data)),
                };
            case 'updateMany':
                params.ids.forEach((id) => restServer.updateOne(resource, id, Object.assign({}, params.data)));
                return { data: params.ids };
            case 'create':
                return {
                    data: restServer.addOne(resource, Object.assign({}, params.data)),
                };
            case 'delete':
                return { data: restServer.removeOne(resource, params.id) };
            case 'deleteMany':
                params.ids.forEach((id) => restServer.removeOne(resource, id));
                return { data: params.ids };
            default:
                return false;
        }
    }
    /**
     * @param {String} type One of the data Provider methods, e.g. 'getList'
     * @param {String} resource Name of the resource to fetch, e.g. 'posts'
     * @param {Object} params The data request params, depending on the type
     * @returns {Promise} The response
     */
    const handle = (type, resource, params) => {
        const collection = restServer.getCollection(resource);
        if (!collection && type !== 'create') {
            const error = new UndefinedResourceError(`Undefined collection "${resource}"`);
            error.code = 1; // make that error detectable
            return Promise.reject(error);
        }
        let response;
        try {
            response = getResponse(type, resource, params);
        }
        catch (error) {
            console.error(error);
            return Promise.reject(error);
        }
        if (loggingEnabled) {
            log(type, resource, params, response);
        }
        return Promise.resolve(response);
    };
    return {
        getList: (resource, params) => handle('getList', resource, params),
        getOne: (resource, params) => handle('getOne', resource, params),
        getMany: (resource, params) => handle('getMany', resource, params),
        getManyReference: (resource, params) => handle('getManyReference', resource, params),
        update: (resource, params) => handle('update', resource, params),
        updateMany: (resource, params) => handle('updateMany', resource, params),
        create: (resource, params) => handle('create', resource, params),
        delete: (resource, params) => handle('delete', resource, params),
        deleteMany: (resource, params) => handle('deleteMany', resource, params),
    };
};
class UndefinedResourceError extends Error {
}
