"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useMutation_1 = __importDefault(require("./useMutation"));
/**
 * Get a callback to call the dataProvider.deleteMany() method, the result
 * of the call (the list of deleted record ids), and the loading state.
 *
 * The return value updates according to the request state:
 *
 * - initial: [deleteMany, { loading: false, loaded: false }]
 * - start:   [deleteMany, { loading: true, loaded: false }]
 * - success: [deleteMany, { data: [data from response], loading: false, loaded: true }]
 * - error:   [deleteMany, { error: [error from response], loading: false, loaded: false }]
 *
 * @param resource The resource name, e.g. 'posts'
 * @param ids The resource identifiers, e.g. [123, 456]
 * @param options Options object to pass to the dataProvider. May include side effects to be executed upon success or failure, e.g. { onSuccess: { refresh: true } }
 *
 * @returns The current request state. Destructure as [deleteMany, { data, error, loading, loaded }].
 *
 * The deleteMany() function can be called in 3 different ways:
 *  - with the same parameters as the useDeleteMany() hook: deleteMany(resource, ids, options)
 *  - with the same syntax as useMutation: deleteMany({ resource, payload: { ids } }, options)
 *  - with no parameter (if they were already passed to useDeleteMany()): deleteMany()
 *
 * @example // set params when calling the deleteMany callback
 *
 * import { useDeleteMany } from '../app';
 *
 * const BulkDeletePostsButton = ({ selectedIds }) => {
 *     const [deleteMany, { loading, error }] = useDeleteMany();
 *     const handleClick = () => {
 *         deleteMany('posts', selectedIds)
 *     }
 *     if (error) { return <p>ERROR</p>; }
 *     return <button disabled={loading} onClick={deleteMany}>Delete selected posts</button>;
 * };
 *
 * @example // set params when calling the hook
 *
 * import { useDeleteMany } from '../app';
 *
 * const BulkDeletePostsButton = ({ selectedIds }) => {
 *     const [deleteMany, { loading, error }] = useDeleteMany('posts', selectedIds);
 *     if (error) { return <p>ERROR</p>; }
 *     return <button disabled={loading} onClick={deleteMany}>Delete selected posts</button>;
 * };
 */
const useDeleteMany = (resource, ids, options) => {
    const [mutate, state] = (0, useMutation_1.default)({ type: 'deleteMany', resource, payload: { ids } }, options);
    const deleteMany = (0, react_1.useCallback)((resource, ids, options) => {
        if (typeof resource === 'string') {
            const query = {
                type: 'deleteMany',
                resource,
                payload: {
                    ids: ids,
                },
            };
            return mutate(query, options);
        }
        else {
            return mutate(resource, ids);
        }
    }, [mutate] // eslint-disable-line react-hooks/exhaustive-deps
    );
    return [deleteMany, state];
};
exports.default = useDeleteMany;
