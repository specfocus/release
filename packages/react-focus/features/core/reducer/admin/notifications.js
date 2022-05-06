"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firstNotification = void 0;
const notificationActions_1 = require("../../actions/notificationActions");
const undoActions_1 = require("../../actions/undoActions");
const recoil_1 = require("recoil");
const state_1 = require("../../state");
const initialState = [];
const notificationsReducer = (previousState = initialState, action) => {
    switch (action.type) {
        case notificationActions_1.SHOW_NOTIFICATION:
            return previousState.concat(action.payload);
        case notificationActions_1.HIDE_NOTIFICATION:
        case undoActions_1.UNDO:
            return previousState.slice(1);
        case notificationActions_1.RESET_NOTIFICATION:
            return initialState;
        default:
            return previousState;
    }
};
exports.default = notificationsReducer;
/**
 * Returns the first available notification to show
 */
exports.firstNotification = (0, recoil_1.selector)({
    key: 'firstNotification',
    get: ({ get }) => {
        const notifications = get(state_1.selectorNotifications);
        return notifications[0];
    }
});
