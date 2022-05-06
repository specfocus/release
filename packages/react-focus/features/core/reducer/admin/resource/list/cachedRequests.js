"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const actions_1 = require("../../../../actions");
const core_1 = require("../../../../core");
const ids_1 = __importDefault(require("./cachedRequests/ids"));
const total_1 = __importDefault(require("./cachedRequests/total"));
const validity_1 = __importDefault(require("./cachedRequests/validity"));
const initialState = {};
const initialSubstate = { ids: [], total: null, validity: null };
const cachedRequestsReducer = (previousState = initialState, action) => {
    var _a;
    if (action.type === actions_1.REFRESH_VIEW) {
        if ((_a = action.payload) === null || _a === void 0 ? void 0 : _a.hard) {
            // force refresh
            return initialState;
        }
        else {
            // remove validity only
            const newState = {};
            Object.keys(previousState).forEach(key => {
                newState[key] = Object.assign(Object.assign({}, previousState[key]), { validity: undefined });
            });
            return newState;
        }
    }
    if (action.meta && action.meta.optimistic) {
        if (action.meta.fetch === core_1.CREATE ||
            action.meta.fetch === core_1.DELETE ||
            action.meta.fetch === core_1.DELETE_MANY ||
            action.meta.fetch === core_1.UPDATE ||
            action.meta.fetch === core_1.UPDATE_MANY) {
            // force refresh of all lists because we don't know where the
            // new/deleted/updated record(s) will appear in the list
            return initialState;
        }
    }
    if (!action.meta || action.meta.fetchStatus !== actions_1.FETCH_END) {
        // not a return from the dataProvider
        return previousState;
    }
    if (action.meta.fetchResponse === core_1.CREATE ||
        action.meta.fetchResponse === core_1.DELETE ||
        action.meta.fetchResponse === core_1.DELETE_MANY ||
        action.meta.fetchResponse === core_1.UPDATE ||
        action.meta.fetchResponse === core_1.UPDATE_MANY) {
        // force refresh of all lists because we don't know where the
        // new/deleted/updated record(s) will appear in the list
        return initialState;
    }
    if (action.meta.fetchResponse !== core_1.GET_LIST || action.meta.fromCache) {
        // looks like a GET_MANY, a GET_ONE, or a cached response
        return previousState;
    }
    const requestKey = JSON.stringify(action.requestPayload);
    const previousSubState = previousState[requestKey] || initialSubstate;
    return Object.assign(Object.assign({}, previousState), { [requestKey]: {
            ids: (0, ids_1.default)(previousSubState.ids, action),
            total: (0, total_1.default)(previousSubState.total, action),
            validity: (0, validity_1.default)(previousSubState.validity, action),
        } });
};
exports.default = cachedRequestsReducer;
