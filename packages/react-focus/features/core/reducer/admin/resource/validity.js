"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const actions_1 = require("../../../actions");
const core_1 = require("../../../core");
const initialState = {};
const validityReducer = (previousState = initialState, { type, payload, requestPayload, meta }) => {
    if (type === actions_1.REFRESH_VIEW) {
        return initialState;
    }
    if (!meta ||
        !meta.fetchResponse ||
        meta.fetchStatus !== actions_1.FETCH_END ||
        meta.fromCache === true) {
        return previousState;
    }
    if (payload.validUntil) {
        // store the validity date
        switch (meta.fetchResponse) {
            case core_1.GET_LIST:
            case core_1.GET_MANY:
            case core_1.GET_MANY_REFERENCE:
                return addIds(payload.data.map(record => record.id), payload.validUntil, previousState);
            case core_1.UPDATE_MANY:
                return addIds(payload.data, payload.validUntil, previousState);
            case core_1.UPDATE:
            case core_1.CREATE:
            case core_1.GET_ONE:
                return addIds([payload.data.id], payload.validUntil, previousState);
            case core_1.DELETE:
            case core_1.DELETE_MANY:
                throw new Error('Responses to dataProvider.delete() or dataProvider.deleteMany() should not contain a validUntil param');
            default:
                return previousState;
        }
    }
    else {
        // remove the validity date
        switch (meta.fetchResponse) {
            case core_1.GET_LIST:
            case core_1.GET_MANY:
            case core_1.GET_MANY_REFERENCE:
                return removeIds(payload.data.map(record => record.id), previousState);
            case core_1.UPDATE:
            case core_1.CREATE:
            case core_1.GET_ONE:
                return removeIds([payload.data.id], previousState);
            case core_1.UPDATE_MANY:
                return removeIds(payload.data, previousState);
            case core_1.DELETE:
                return removeIds([requestPayload.id], previousState);
            case core_1.DELETE_MANY:
                return removeIds(requestPayload.ids, previousState);
            default:
                return previousState;
        }
    }
};
const addIds = (ids = [], validUntil, oldValidityRegistry) => {
    const validityRegistry = Object.assign({}, oldValidityRegistry);
    ids.forEach(id => {
        validityRegistry[id] = validUntil;
    });
    return validityRegistry;
};
const removeIds = (ids = [], oldValidityRegistry) => {
    const validityRegistry = Object.assign({}, oldValidityRegistry);
    ids.forEach(id => {
        delete validityRegistry[id];
    });
    return validityRegistry;
};
exports.default = validityReducer;
