"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// reducer for queries called via useQueryWithStore and without a custom action name
const customQueriesReducer = (previousState = {}, { type, requestPayload, payload, meta }) => {
    if (type !== 'CUSTOM_QUERY_SUCCESS') {
        return previousState;
    }
    const key = JSON.stringify({
        type: meta.fetchResponse,
        resource: meta.resource,
        payload: requestPayload,
    });
    return Object.assign(Object.assign({}, previousState), { [key]: payload });
};
exports.default = customQueriesReducer;
