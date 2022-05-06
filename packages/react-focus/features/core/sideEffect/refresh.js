"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const effects_1 = require("redux-saga/effects");
const uiActions_1 = require("../actions/uiActions");
/**
 * Refresh Side Effects
 */
function* handleRefresh() {
    yield (0, effects_1.put)((0, uiActions_1.refreshView)());
}
function* default_1() {
    yield (0, effects_1.takeEvery)(action => action.meta && action.meta.refresh, handleRefresh);
}
exports.default = default_1;
