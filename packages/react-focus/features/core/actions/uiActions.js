"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setAutomaticRefresh = exports.SET_AUTOMATIC_REFRESH = exports.refreshView = exports.REFRESH_VIEW = exports.setSidebarVisibility = exports.SET_SIDEBAR_VISIBILITY = exports.toggleSidebar = exports.TOGGLE_SIDEBAR = void 0;
exports.TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
const toggleSidebar = () => ({
    type: exports.TOGGLE_SIDEBAR,
});
exports.toggleSidebar = toggleSidebar;
exports.SET_SIDEBAR_VISIBILITY = 'SET_SIDEBAR_VISIBILITY';
const setSidebarVisibility = (isOpen) => ({
    type: exports.SET_SIDEBAR_VISIBILITY,
    payload: isOpen,
});
exports.setSidebarVisibility = setSidebarVisibility;
exports.REFRESH_VIEW = 'REFRESH_VIEW';
const refreshView = (hard) => ({
    type: exports.REFRESH_VIEW,
    payload: { hard },
});
exports.refreshView = refreshView;
exports.SET_AUTOMATIC_REFRESH = 'SET_AUTOMATIC_REFRESH';
const setAutomaticRefresh = (enabled) => ({
    type: exports.SET_AUTOMATIC_REFRESH,
    payload: enabled,
});
exports.setAutomaticRefresh = setAutomaticRefresh;
