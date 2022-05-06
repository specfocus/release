"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accumulateFactory = exports.finalizeFactory = void 0;
const effects_1 = require("redux-saga/effects");
/**
 * Distinct reducer on ids
 *
 * @example
 * addIds([1, 2, 3], { payload: { ids: [3, 4] } })
 *   => [1, 2, 3, 4]
 */
const addIds = (oldIds, { payload: { ids } }) => {
    // Using a Set ensure we only keep distinct values
    const oldIdsSet = new Set(oldIds);
    ids.forEach(id => oldIdsSet.add(id));
    return Array.from(oldIdsSet);
};
// We need a factory for this saga in order to unit test it by providing its context (current tasks and accumulations)
const finalizeFactory = (tasks, accumulations) => 
/**
 * Fetch the accumulated value after a delay
 *
 * As this gets canceled by subsequent calls to accumulate(), only the last
 * call to finalize() will not be canceled. The delay acts as a
 * debounce.
 *
 * @see https://redux-saga.js.org/docs/recipes/#debouncing
 */
function* finalize(key, actionCreator) {
    // combined with cancel(), this debounces the calls
    yield (0, effects_1.delay)(50);
    // Get the latest accumulated value for the provided key
    const accumulatedValue = accumulations[key];
    // Remove the latest accumulated value so that they do not interfere with later calls
    delete accumulations[key];
    // For backward compatibility, we pass the key (which may be a resource name) as the first parameter
    const action = actionCreator(key, accumulatedValue);
    yield (0, effects_1.put)(action);
    delete tasks[key];
};
exports.finalizeFactory = finalizeFactory;
// We need a factory for this saga in order to unit test it by providing its context (current tasks and accumulations)
const accumulateFactory = (tasks, accumulations, finalize) => 
/**
 * Accumulate actions and eventually redispatch an action with the accumulated payload
 *
 * @example
 * accumulate({
 *    type: CRUD_GET_MANY_ACCUMULATE,
 *    payload: { ids: [1, 2, 3], resource: 'posts' },
 *    meta: { accumulate: crudGetMany }
 * });
 * accumulate({
 *    type: CRUD_GET_MANY_ACCUMULATE,
 *    payload: { ids: [4, 5], resource: 'posts' },
 *    meta: { accumulate: crudGetMany }
 * });
 *   => crudGetMany({ ids: [1, 2, 3, 4, 5], resource: 'posts' })
 *
 * @example
 * accumulate({
 *    type: CRUD_GET_MATCHING_ACCUMULATE,
 *    meta: {
 *      accumulate: crudGetMatching('posts', 'posts@comments[1].authorId', { page:1, perPage: 10 }, {field: 'id', order: 'DESC' }, {}),
 *      accumulateValues: () => true,
 *      accumulateKey: '{"resource":"authors", "pagination":{"page":1,"perPage":10},"sort":{"field":"id","order":"DESC"},"filter":{}}'
 *    }
 * });
 * accumulate({
 *    type: CRUD_GET_MATCHING_ACCUMULATE,
 *    meta: {
 *      accumulate: crudGetMatching('posts', 'posts@comments[1].authorId', { page:1, perPage: 10 }, {field: 'id', order: 'DESC' }, {}),
 *      accumulateValues: () => true,
 *      accumulateKey: '{"resource":"authors", "pagination":{"page":1,"perPage":10},"sort":{"field":"id","order":"DESC"},"filter":{}}'
 *    }
 * });
 *   => crudGetMatching('posts', 'posts@comments[1].authorId', { page:1, perPage: 10 }, {field: 'id', order: 'DESC' }, {})
 */
function* accumulate(action) {
    // For backward compatibility, if no accumulateKey is provided, fallback to the resource
    const key = action.meta.accumulateKey || action.payload.resource;
    if (tasks[key]) {
        yield (0, effects_1.cancel)(tasks[key]);
    }
    // For backward compatibility, if no accumulateValues function is provided, fallback to the old
    // addIds function (used by the crudGetManyAccumulate action for example)
    const accumulateValues = action.meta.accumulateValues || addIds;
    // accumulateValues is a reducer function, it receives the previous accumulatedValues for
    // the provided key, and must return the updated accumulatedValues
    accumulations[key] = accumulateValues(accumulations[key], action);
    tasks[key] = yield (0, effects_1.fork)(finalize, key, action.meta.accumulate);
};
exports.accumulateFactory = accumulateFactory;
function* default_1() {
    /**
     * Example
     *
     * const accumulations = {
     *   posts: [4, 7, 345 ], // a CRUD_GET_MANY_ACCUMULATE action
     *   authors: [23, 47, 78 ], // another CRUD_GET_MANY_ACCUMULATE action
     *   '{"resource":"authors", "pagination":{"page":1,"perPage":10},"sort":{"field":"id","order":"DESC"},"filter":{}}': true, // a CRUD_GET_MATCHING_ACCUMULATE action
     *   '{"resource":"authors", "pagination":{"page":1,"perPage":10},"sort":{"field":"id","order":"DESC"},"filter":{"hasValidEmail":true}}': true, // another CRUD_GET_MATCHING_ACCUMULATE action
     * }
     */
    const accumulations = {};
    const tasks = {};
    yield (0, effects_1.takeEvery)(action => action.meta && action.meta.accumulate, (0, exports.accumulateFactory)(tasks, accumulations, (0, exports.finalizeFactory)(tasks, accumulations)));
}
exports.default = default_1;
