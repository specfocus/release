"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const get_1 = __importDefault(require("lodash/get"));
const crudGetMatching_1 = require("../actions/dataActions/crudGetMatching");
const useQueryWithStore_1 = require("./useQueryWithStore");
const reducer_1 = require("../reducer");
const referenceSource = (resource, source) => `${resource}@${source}`;
/**
 * Call the dataProvider.getList() method return the resolved result
 * as well as the loading state.
 *
 * React-admin uses a different store location for the result of this query
 * than for useGetList(). Therefore, calling useGetMatching() does not modify
 * the ids and total for the resource.
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
 * @param {string} resource The referenced resource name, e.g. 'tags'
 * @param {Object} pagination The request pagination { page, perPage }, e.g. { page: 1, perPage: 10 }
 * @param {Object} sort The request sort { field, order }, e.g. { field: 'id', order: 'DESC' }
 * @param {Object} filter The request filters, e.g. { title: 'hello, world' }
 * @param {string} source The field in resource containing the ids of the referenced records, e.g. 'tag_ids'
 * @param {string} referencingResource The resource name, e.g. 'posts'. Used to build a cache key
 * @param {Object} options Options object to pass to the dataProvider.
 * @param {boolean} options.enabled Flag to conditionally run the query. If it's false, the query will not run
 * @param {Function} options.onSuccess Side effect function to be executed upon success, e.g. { onSuccess: { refresh: true } }
 * @param {Function} options.onFailure Side effect function to be executed upon failure, e.g. { onFailure: error => notify(error.message) }
 *
 * @returns The current request state. Destructure as { data, total, ids, error, loading, loaded, refetch }.
 *
 * @example
 *
 * import { useGetMatching } from '../app';
 *
 * const PostTags = () => {
 *     // call dataProvider.getList('tags', { pagination: { page: 1, perPage: 10 }, sort: { { field: 'published_at', order: 'DESC' } } })
 *     const { data, loading, error } = useGetMatching(
 *         'tags',
 *         { page: 1, perPage: 10 },
 *         { field: 'published_at', order: 'DESC' },
 *         {},
 *         'tag_ids',
 *         'posts',
 *     );
 *     if (loading) { return <Loading />; }
 *     if (error) { return <p>ERROR</p>; }
 *     return <ul>{data.map(tag =>
 *         <li key={tag.id}>{tag.name}</li>
 *     )}</ul>;
 * };
 */
const useGetMatching = (resource, pagination, sort, filter, source, referencingResource, options) => {
    const relatedTo = referenceSource(referencingResource, source);
    const payload = { pagination, sort, filter };
    const { data: possibleValues, total, error, loading, loaded, refetch, } = (0, useQueryWithStore_1.useQueryWithStore)({
        type: 'getList',
        resource,
        payload,
    }, Object.assign(Object.assign({}, options), { relatedTo, action: crudGetMatching_1.CRUD_GET_MATCHING }), (state) => (0, reducer_1.getPossibleReferenceValues)(state, {
        referenceSource,
        resource: referencingResource,
        source,
    }), (state) => (0, get_1.default)(state.admin.resources, [
        resource,
        'list',
        'cachedRequests',
        JSON.stringify(payload),
        'total',
    ], null));
    const referenceState = (0, react_redux_1.useSelector)(state => (0, reducer_1.getReferenceResource)(state, {
        reference: resource,
    }));
    const possibleReferences = (0, reducer_1.getPossibleReferences)(referenceState, possibleValues, []);
    return {
        data: possibleReferences,
        ids: possibleValues,
        total,
        error,
        loading,
        loaded,
        refetch,
    };
};
exports.default = useGetMatching;
