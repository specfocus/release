"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const effects_1 = require("redux-saga/effects");
/**
 * Callback Side Effects
 */
function* handleCallback({ payload, requestPayload, error, meta: { callback }, }) {
    yield (0, effects_1.call)(callback, { payload, requestPayload, error });
}
function* default_1() {
    yield (0, effects_1.takeEvery)(action => action.meta && action.meta.callback, handleCallback);
}
exports.default = default_1;
