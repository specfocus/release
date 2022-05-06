"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable eqeqeq */
const pullAt_1 = __importDefault(require("lodash/pullAt"));
const fakeDataProvider_1 = __importDefault(require("../data/providers/fakeDataProvider"));
/**
 * Respond to ../../app data queries using a local database persisted in localStorage
 *
 * Useful for local-first web apps.
 *
 * @example // initialize with no data
 *
 * import localStorageDataProvider from 'ra-data-local-storage';
 * const dataProvider = localStorageDataProvider();
 *
 * @example // initialize with default data (will be ignored if data has been modified by user)
 *
 * import localStorageDataProvider from 'ra-data-local-storage';
 * const dataProvider = localStorageDataProvider({
 *   defaultData: {
 *     posts: [
 *       { id: 0, title: 'Hello, world!' },
 *       { id: 1, title: 'FooBar' },
 *     ],
 *     comments: [
 *       { id: 0, post_id: 0, author: 'John Doe', body: 'Sensational!' },
 *       { id: 1, post_id: 0, author: 'Jane Doe', body: 'I agree' },
 *     ],
 *   }
 * });
 */
exports.default = (params) => {
    const { defaultData = {}, localStorageKey = 'ra-data-local-storage', loggingEnabled = false, localStorageUpdateDelay = 10, // milliseconds
     } = params || {};
    const localStorageData = localStorage.getItem(localStorageKey);
    const data = localStorageData ? JSON.parse(localStorageData) : defaultData;
    // change data by executing callback, then persist in localStorage
    const updateLocalStorage = (callback) => {
        // modify localStorage after the next tick
        setTimeout(() => {
            callback();
            localStorage.setItem(localStorageKey, JSON.stringify(data));
        }, localStorageUpdateDelay);
    };
    const baseDataProvider = (0, fakeDataProvider_1.default)(data, loggingEnabled);
    return {
        // read methods are just proxies to FakeRest
        getList: (resource, params) => baseDataProvider
            .getList(resource, params)
            .catch(error => {
            if (error.code === 1) {
                // undefined collection error: hide the error and return an empty list instead
                return { data: [], total: 0 };
            }
            else {
                throw error;
            }
        }),
        getOne: (resource, params) => baseDataProvider.getOne(resource, params),
        getMany: (resource, params) => baseDataProvider.getMany(resource, params),
        getManyReference: (resource, params) => baseDataProvider
            .getManyReference(resource, params)
            .catch(error => {
            if (error.code === 1) {
                // undefined collection error: hide the error and return an empty list instead
                return { data: [], total: 0 };
            }
            else {
                throw error;
            }
        }),
        // update methods need to persist changes in localStorage
        update: (resource, params) => {
            updateLocalStorage(() => {
                const index = data[resource].findIndex((record) => record.id == params.id);
                data[resource][index] = Object.assign(Object.assign({}, data[resource][index]), params.data);
            });
            return baseDataProvider.update(resource, params);
        },
        updateMany: (resource, params) => {
            updateLocalStorage(() => {
                params.ids.forEach(id => {
                    const index = data[resource].findIndex((record) => record.id == id);
                    data[resource][index] = Object.assign(Object.assign({}, data[resource][index]), params.data);
                });
            });
            return baseDataProvider.updateMany(resource, params);
        },
        create: (resource, params) => {
            // we need to call the fakerest provider first to get the generated id
            return baseDataProvider
                .create(resource, params)
                .then(response => {
                updateLocalStorage(() => {
                    if (!data.hasOwnProperty(resource)) {
                        data[resource] = [];
                    }
                    data[resource].push(response.data);
                });
                return response;
            });
        },
        delete: (resource, params) => {
            updateLocalStorage(() => {
                const index = data[resource].findIndex((record) => record.id == params.id);
                (0, pullAt_1.default)(data[resource], [index]);
            });
            return baseDataProvider.delete(resource, params);
        },
        deleteMany: (resource, params) => {
            updateLocalStorage(() => {
                const indexes = params.ids.map(id => data[resource].findIndex((record) => record.id == id));
                (0, pullAt_1.default)(data[resource], indexes);
            });
            return baseDataProvider.deleteMany(resource, params);
        },
    };
};
