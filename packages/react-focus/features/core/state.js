"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectorUI = exports.selectorNotifications = exports.atomCoreState = void 0;
const recoil_1 = require("recoil");
exports.atomCoreState = (0, recoil_1.atom)({
    key: 'atomCoreState',
    default: {
        notifications: [],
        ui: {
            sidebarOpen: true
        }
    }
});
exports.selectorNotifications = (0, recoil_1.selector)({
    key: 'selectorNotifications',
    get: ({ get }) => {
        const { notifications } = get(exports.atomCoreState);
        return notifications;
    }
});
exports.selectorUI = (0, recoil_1.selector)({
    key: 'selectorNotifications',
    get: ({ get }) => {
        const { ui } = get(exports.atomCoreState);
        return ui;
    }
});
