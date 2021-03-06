"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useMutation_1 = __importDefault(require("./useMutation"));
/**
 * Get a callback to call the dataProvider.update() method, the result and the loading state.
 *
 * The return value updates according to the request state:
 *
 * - initial: [update, { loading: false, loaded: false }]
 * - start:   [update, { loading: true, loaded: false }]
 * - success: [update, { data: [data from response], loading: false, loaded: true }]
 * - error:   [update, { error: [error from response], loading: false, loaded: false }]
 *
 * @param resource The resource name, e.g. 'posts'
 * @param id The resource identifier, e.g. 123
 * @param data The updates to merge into the record, e.g. { views: 10 }
 * @param previousData The record before the update is applied
 * @param options Options object to pass to the dataProvider. May include side effects to be executed upon success or failure, e.g. { onSuccess: { refresh: true } }
 *
 * @returns The current request state. Destructure as [update, { data, error, loading, loaded }].
 *
 * The update() function can be called in 3 different ways:
 *  - with the same parameters as the useUpdate() hook: update(resource, id, data, previousData, options)
 *  - with the same syntax as useMutation: update({ resource, payload: { id, data, previousData } }, options)
 *  - with no parameter (if they were already passed to useUpdate()): update()
 *
 * @example // set params when calling the update callback
 *
 * import { useUpdate } from '../app';
 *
 * const IncreaseLikeButton = ({ record }) => {
 *     const diff = { likes: record.likes + 1 };
 *     const [update, { loading, error }] = useUpdate();
 *     const handleClick = () => {
 *         update('likes', record.id, diff, record)
 *     }
 *     if (error) { return <p>ERROR</p>; }
 *     return <button disabled={loading} onClick={handleClick}>Like</div>;
 * };
 *
 * @example // set params when calling the hook
 *
 * import { useUpdate } from '../app';
 *
 * const IncreaseLikeButton = ({ record }) => {
 *     const diff = { likes: record.likes + 1 };
 *     const [update, { loading, error }] = useUpdate('likes', record.id, diff, record);
 *     if (error) { return <p>ERROR</p>; }
 *     return <button disabled={loading} onClick={update}>Like</button>;
 * };
 *
 * @example // TypeScript
 * const [update, { data }] = useUpdate<Product>('products', id, changes, product);
 *                    \-- data is Product
 */
const useUpdate = (resource, id, data, previousData, options) => {
    const [mutate, state] = (0, useMutation_1.default)({ type: 'update', resource, payload: { id, data, previousData } }, options);
    const update = (0, react_1.useCallback)((resource, id, data, previousData, options) => {
        if (typeof resource === 'string') {
            const query = {
                type: 'update',
                resource,
                payload: {
                    id: id,
                    data,
                    previousData,
                },
            };
            return mutate(query, options);
        }
        else {
            return mutate(resource, id);
        }
    }, [mutate] // eslint-disable-line react-hooks/exhaustive-deps
    );
    return [update, state];
};
exports.default = useUpdate;
