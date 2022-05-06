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
exports.handleUndoRace = void 0;
const effects_1 = require("redux-saga/effects");
const notificationActions_1 = require("../actions/notificationActions");
const undoActions_1 = require("../actions/undoActions");
const uiActions_1 = require("../actions/uiActions");
function* handleUndoRace(undoableAction) {
    const { payload: { action }, } = undoableAction;
    const _a = action.meta, { onSuccess, onFailure } = _a, metaWithoutSideEffects = __rest(_a, ["onSuccess", "onFailure"]);
    yield (0, effects_1.put)((0, undoActions_1.startOptimisticMode)());
    // dispatch action in optimistic mode (no fetch), with success side effects
    yield (0, effects_1.put)(Object.assign(Object.assign({}, action), { type: `${action.type}_OPTIMISTIC`, meta: Object.assign(Object.assign(Object.assign({}, metaWithoutSideEffects), onSuccess), { optimistic: true }) }));
    // waitFor for undo or delay
    const { complete } = yield (0, effects_1.race)({
        undo: (0, effects_1.take)(undoActions_1.UNDO),
        complete: (0, effects_1.take)(undoActions_1.COMPLETE),
    });
    yield (0, effects_1.put)((0, undoActions_1.stopOptimisticMode)());
    if (complete) {
        // if not cancelled, redispatch the action, this time immediate, and without success side effect
        yield (0, effects_1.put)(Object.assign(Object.assign({}, action), { meta: Object.assign(Object.assign({}, metaWithoutSideEffects), { onSuccess: { refresh: true }, onFailure: Object.assign(Object.assign({}, onFailure), { refresh: true }) }) }));
    }
    else {
        yield (0, effects_1.put)((0, notificationActions_1.showNotification)('ra.notification.canceled'));
        yield (0, effects_1.put)((0, uiActions_1.refreshView)());
    }
}
exports.handleUndoRace = handleUndoRace;
function* watchUndoable() {
    // @ts-ignore
    yield (0, effects_1.takeEvery)(undoActions_1.UNDOABLE, handleUndoRace);
}
exports.default = watchUndoable;
