"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const effects_1 = require("redux-saga/effects");
const notificationActions_1 = require("../actions/notificationActions");
/**
 * Notification Side Effects
 */
function* handleNotification({ error, meta: { notification, optimistic }, }) {
    const { body, level, messageArgs = {} } = notification;
    if (error) {
        return yield (0, effects_1.put)((0, notificationActions_1.showNotification)(typeof error === 'string' ? error : error.message || body, level || 'warning', {
            messageArgs,
            undoable: false,
        }));
    }
    yield (0, effects_1.put)((0, notificationActions_1.showNotification)(body, level || 'info', {
        messageArgs,
        undoable: optimistic,
    }));
}
function* default_1() {
    yield (0, effects_1.takeEvery)(
    // @ts-ignore
    action => action.meta && action.meta.notification, handleNotification);
}
exports.default = default_1;
