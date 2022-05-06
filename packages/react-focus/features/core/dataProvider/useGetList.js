"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const get_1 = __importDefault(require("lodash/get"));
const useQueryWithStore_1 = require("./useQueryWithStore");
const defaultPagination = { page: 1, perPage: 25 };
const defaultSort = { field: 'id', order: 'DESC' };
const defaultFilter = {};
const defaultIds = [];
const defaultData = {};
/**
 * Call the dataProvider.getList() method and return the resolved result
 * as well as the loading state.
 *
 * The return value updates according to the request state:
 *
 * - start: { loading: true, loaded: false, refetch }
 * - success: { data: [data from store], ids: [ids from response], total: [total from response], loading: false, loaded: true, refetch }
 * - error: { error: [error from response], loading: false, loaded: false, refetch }
 *
 * This hook will return the cached result when called a second time
 * with the same parameters, until the response arrives.
 *
 * @param {string} resource The resource name, e.g. 'posts'
 * @param {Object} pagination The request pagination { page, perPage }, e.g. { page: 1, perPage: 10 }
 * @param {Object} sort The request sort { field, order }, e.g. { field: 'id', order: 'DESC' }
 * @param {Object} filter The request filters, e.g. { title: 'hello, world' }
 * @param {Object} options Options object to pass to the dataProvider.
 * @param {boolean} options.enabled Flag to conditionally run the query. If it's false, the query will not run
 * @param {Function} options.onSuccess Side effect function to be executed upon success, e.g. { onSuccess: { refresh: true } }
 * @param {Function} options.onFailure Side effect function to be executed upon failure, e.g. { onFailure: error => notify(error.message) }
 *
 * @returns The current request state. Destructure as { data, total, ids, error, loading, loaded, refetch }.
 *
 * @example
 *
 * import { useGetList } from '../app';
 *
 * const LatestNews = () => {
 *     const { data, ids, loading, error } = useGetList(
 *         'posts',
 *         { page: 1, perPage: 10 },
 *         { field: 'published_at', order: 'DESC' }
 *     );
 *     if (loading) { return <Loading />; }
 *     if (error) { return <p>ERROR</p>; }
 *     return <ul>{ids.map(id =>
 *         <li key={id}>{data[id].title}</li>
 *     )}</ul>;
 * };
 */
const useGetList = (resource, pagination = defaultPagination, sort = defaultSort, filter = defaultFilter, options) => {
    const requestSignature = JSON.stringify({ pagination, sort, filter });
    const { data: { ids, allRecords }, total, error, loading, loaded, refetch, } = (0, useQueryWithStore_1.useQueryWithStore)({ type: 'getList', resource, payload: { pagination, sort, filter } }, options, 
    // ids and data selector
    (state) => ({
        ids: (0, get_1.default)(state.admin.resources, [resource, 'list', 'cachedRequests', requestSignature, 'ids'], null),
        allRecords: (0, get_1.default)(state.admin.resources, [resource, 'data'], defaultData),
    }), 
    // total selector (may return undefined)
    (state) => (0, get_1.default)(state.admin.resources, [
        resource,
        'list',
        'cachedRequests',
        requestSignature,
        'total',
    ]), isDataLoaded);
    const data = (0, react_1.useMemo)(() => ids === null
        ? defaultData
        : ids
            .map(id => allRecords[id])
            .reduce((acc, record) => {
            if (!record)
                return acc;
            acc[record.id] = record;
            return acc;
        }, {}), [ids, allRecords]);
    return {
        data,
        ids: ids === null ? defaultIds : ids,
        total,
        error,
        loading,
        loaded,
        refetch,
    };
};
const isDataLoaded = (data) => data.ids !== null;
exports.default = useGetList;
