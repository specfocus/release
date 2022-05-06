"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.takeFetchAction = exports.handleFetch = void 0;
const effects_1 = require("redux-saga/effects");
const actions_1 = require("../actions");
const __1 = require("..");
function validateResponseFormat(response, type, logger = console.error // eslint-disable-line no-console
) {
    if (!response.hasOwnProperty('data')) {
        logger(`The response to '${type}' must be like { data: ... }, but the received response does not have a 'data' key. The dataProvider is probably wrong for '${type}'.`);
        throw new Error('ra.notification.data_provider_error');
    }
    if (__1.fetchActionsWithArrayOfRecordsResponse.includes(type) &&
        !Array.isArray(response.data)) {
        logger(`The response to '${type}' must be like { data : [...] }, but the received data is not an array. The dataProvider is probably wrong for '${type}'`);
        throw new Error('ra.notification.data_provider_error');
    }
    if (__1.fetchActionsWithArrayOfIdentifiedRecordsResponse.includes(type) &&
        Array.isArray(response.data) &&
        response.data.length > 0 &&
        response.data.some(d => !d.hasOwnProperty('id'))) {
        logger(`The response to '${type}' must be like { data : [{ id: 123, ...}, ...] }, but at least one received data item do not have an 'id' key. The dataProvider is probably wrong for '${type}'`);
        throw new Error('ra.notification.data_provider_error');
    }
    if (__1.fetchActionsWithRecordResponse.includes(type) &&
        !response.data.hasOwnProperty('id')) {
        logger(`The response to '${type}' must be like { data: { id: 123, ... } }, but the received data does not have an 'id' key. The dataProvider is probably wrong for '${type}'`);
        throw new Error('ra.notification.data_provider_error');
    }
    if (__1.fetchActionsWithTotalResponse.includes(type) &&
        !response.hasOwnProperty('total')) {
        logger(`The response to '${type}' must be like  { data: [...], total: 123 }, but the received response does not have a 'total' key. The dataProvider is probably wrong for '${type}'`);
        throw new Error('ra.notification.data_provider_error');
    }
}
function* handleFetch(dataProvider, action) {
    const { type, payload } = action, _a = action.meta, { fetch: fetchMeta, onSuccess, onFailure } = _a, meta = __rest(_a, ["fetch", "onSuccess", "onFailure"]);
    const restType = fetchMeta;
    const successSideEffects = onSuccess instanceof Function ? {} : onSuccess;
    const failureSideEffects = onFailure instanceof Function ? {} : onFailure;
    try {
        const isOptimistic = yield (0, effects_1.select)((state) => state.admin.ui.optimistic);
        if (isOptimistic) {
            // in optimistic mode, all fetch actions are canceled,
            // so the admin uses the store without synchronization
            return;
        }
        yield (0, effects_1.all)([
            (0, effects_1.put)({ type: `${type}_LOADING`, payload, meta }),
            (0, effects_1.put)({ type: actions_1.FETCH_START }),
        ]);
        const response = yield (0, effects_1.call)(dataProvider[(0, __1.sanitizeFetchType)(restType)], meta.resource, payload);
        if (process.env.NODE_ENV !== 'production') {
            validateResponseFormat(response, restType);
        }
        yield (0, effects_1.put)({
            type: `${type}_SUCCESS`,
            payload: response,
            requestPayload: payload,
            meta: Object.assign(Object.assign(Object.assign({}, meta), successSideEffects), { fetchResponse: restType, fetchStatus: actions_1.FETCH_END }),
        });
        yield (0, effects_1.put)({ type: actions_1.FETCH_END });
    }
    catch (error) {
        yield (0, effects_1.put)({
            type: `${type}_FAILURE`,
            error: (error && (error.message ? error.message : error)) || null,
            payload: (error && error.body) || null,
            requestPayload: payload,
            meta: Object.assign(Object.assign(Object.assign({}, meta), failureSideEffects), { fetchResponse: restType, fetchStatus: actions_1.FETCH_ERROR }),
        });
        yield (0, effects_1.put)({ type: actions_1.FETCH_ERROR, error });
    }
    finally {
        if (yield (0, effects_1.cancelled)()) {
            yield (0, effects_1.put)({ type: actions_1.FETCH_CANCEL });
            return;
        }
    }
}
exports.handleFetch = handleFetch;
const takeFetchAction = action => action.meta && action.meta.fetch;
exports.takeFetchAction = takeFetchAction;
const fetch = (dataProvider) => {
    return function* watchFetch() {
        yield (0, effects_1.takeEvery)(exports.takeFetchAction, handleFetch, dataProvider);
    };
};
exports.default = fetch;
