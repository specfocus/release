"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
const defaultDataProvider = () => Promise.resolve();
defaultDataProvider.create = () => Promise.resolve(null);
defaultDataProvider.delete = () => Promise.resolve(null);
defaultDataProvider.deleteMany = () => Promise.resolve(null);
defaultDataProvider.getList = () => Promise.resolve(null);
defaultDataProvider.getMany = () => Promise.resolve(null);
defaultDataProvider.getManyReference = () => Promise.resolve(null);
defaultDataProvider.getOne = () => Promise.resolve(null);
defaultDataProvider.update = () => Promise.resolve(null);
defaultDataProvider.updateMany = () => Promise.resolve(null);
const fetchMap = {
    create: __1.CREATE,
    delete: __1.DELETE,
    deleteMany: __1.DELETE_MANY,
    getList: __1.GET_LIST,
    getMany: __1.GET_MANY,
    getManyReference: __1.GET_MANY_REFERENCE,
    getOne: __1.GET_ONE,
    update: __1.UPDATE,
    updateMany: __1.UPDATE_MANY,
};
/**
 * Turn a function-based dataProvider to an object-based one
 *
 * Allows using legacy dataProviders transparently.
 *
 * @param {Function} legacyDataProvider A legacy dataProvider (type, resource, params) => Promise<any>
 *
 * @returns {Object} A dataProvider that ../../app can use
 */
const convertLegacyDataProvider = (legacyDataProvider) => {
    const proxy = new Proxy(defaultDataProvider, {
        get(_, name) {
            return (resource, params) => {
                if (Object.keys(fetchMap).includes(name.toString())) {
                    const fetchType = fetchMap[name.toString()];
                    return legacyDataProvider(fetchType, resource, params);
                }
                return legacyDataProvider(name.toString(), resource, params);
            };
        },
        apply(_, __, args) {
            return legacyDataProvider.apply(legacyDataProvider, args);
        },
    });
    return proxy;
};
exports.default = convertLegacyDataProvider;
