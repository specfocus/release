"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleRedirection = void 0;
const effects_1 = require("redux-saga/effects");
const connected_react_router_1 = require("connected-react-router");
const resolveRedirectTo_1 = __importDefault(require("../util/resolveRedirectTo"));
const uiActions_1 = require("../actions/uiActions");
/**
 * Redirection Side Effects
 */
function* handleRedirection({ payload, requestPayload, meta: { basePath, redirectTo }, }) {
    if (!redirectTo) {
        yield (0, effects_1.put)((0, uiActions_1.refreshView)());
        return;
    }
    yield (0, effects_1.put)((0, connected_react_router_1.push)((0, resolveRedirectTo_1.default)(redirectTo, basePath, payload
        ? payload.id || (payload.data ? payload.data.id : null)
        : requestPayload
            ? requestPayload.id
            : null, payload && payload.data
        ? payload.data
        : requestPayload && requestPayload.data
            ? requestPayload.data
            : null)));
}
exports.handleRedirection = handleRedirection;
function* default_1() {
    yield (0, effects_1.takeEvery)(
    // @ts-ignore
    action => action.meta && typeof action.meta.redirectTo !== 'undefined', handleRedirection);
}
exports.default = default_1;
