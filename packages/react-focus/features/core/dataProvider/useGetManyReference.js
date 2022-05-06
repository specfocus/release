"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_1 = __importDefault(require("lodash/get"));
const react_1 = require("react");
const crudGetManyReference_1 = require("../actions/dataActions/crudGetManyReference");
const useQueryWithStore_1 = require("./useQueryWithStore");
const oneToMany_1 = require("../reducer/admin/references/oneToMany");
const defaultIds = [];
const defaultData = {};
/**
 * Call the dataProvider.getManyReference() method and return the resolved result
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
 * @param {string} resource The referenced resource name, e.g. 'comments'
 * @param {string} target The target resource key, e.g. 'post_id'
 * @param {Object} id The identifier of the record to look for in 'target'
 * @param {Object} pagination The request pagination { page, perPage }, e.g. { page: 1, perPage: 10 }
 * @param {Object} sort The request sort { field, order }, e.g. { field: 'id', order: 'DESC' }
 * @param {Object} filter The request filters, e.g. { body: 'hello, world' }
 * @param {string} referencingResource The resource name, e.g. 'posts'. Used to generate a cache key
 * @param {Object} options Options object to pass to the dataProvider.
 * @param {boolean} options.enabled Flag to conditionally run the query. If it's false, the query will not run
 * @param {Function} options.onSuccess Side effect function to be executed upon success, e.g. { onSuccess: { refresh: true } }
 * @param {Function} options.onFailure Side effect function to be executed upon failure, e.g. { onFailure: error => notify(error.message) }
 *
 * @returns The current request state. Destructure as { data, total, ids, error, loading, loaded, refetch }.
 *
 * @example
 *
 * import { useGetManyReference } from '../app';
 *
 * const PostComments = ({ post_id }) => {
 *     const { data, ids, loading, error } = useGetManyReference(
 *         'comments',
 *         'post_id',
 *         post_id,
 *         { page: 1, perPage: 10 },
 *         { field: 'published_at', order: 'DESC' }
 *         {},
 *         'posts',
 *     );
 *     if (loading) { return <Loading />; }
 *     if (error) { return <p>ERROR</p>; }
 *     return <ul>{ids.map(id =>
 *         <li key={id}>{data[id].body}</li>
 *     )}</ul>;
 * };
 */
const useGetManyReference = (resource, target, id, pagination, sort, filter, referencingResource, options) => {
    const relatedTo = (0, react_1.useMemo)(() => (0, oneToMany_1.nameRelatedTo)(resource, id, referencingResource, target, filter), [filter, resource, id, referencingResource, target]);
    const { data: { ids, allRecords }, total, error, loading, loaded, refetch, } = (0, useQueryWithStore_1.useQueryWithStore)({
        type: 'getManyReference',
        resource: resource,
        payload: { target, id, pagination, sort, filter },
    }, Object.assign(Object.assign({}, options), { relatedTo, action: crudGetManyReference_1.CRUD_GET_MANY_REFERENCE }), 
    // ids and data selector
    (state) => ({
        ids: (0, oneToMany_1.getIds)(state, relatedTo),
        allRecords: (0, get_1.default)(state.admin.resources, [resource, 'data'], defaultData),
    }), (state) => (0, oneToMany_1.getTotal)(state, relatedTo), isDataLoaded);
    const data = (0, react_1.useMemo)(() => ids == null
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
        ids: ids || defaultIds,
        total,
        error,
        loading,
        loaded,
        refetch,
    };
};
const isDataLoaded = (data) => data.ids != null;
exports.default = useGetManyReference;
