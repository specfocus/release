"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const actions_1 = require("../../actions");
const uiActions_1 = require("../../actions/uiActions");
// Match the medium breakpoint defined in the material-ui theme
// See https://material-ui.com/customization/breakpoints/#breakpoints
const isDesktop = () => 
// (min-width: 960px) => theme.breakpoints.up('md')
typeof window !== 'undefined' &&
    window.matchMedia &&
    typeof window.matchMedia === 'function'
    ? window.matchMedia('(min-width:960px)').matches
    : false;
const defaultState = {
    automaticRefreshEnabled: true,
    sidebarOpen: isDesktop(),
    optimistic: false,
    viewVersion: 0,
};
const uiReducer = (previousState = defaultState, action) => {
    switch (action.type) {
        case actions_1.TOGGLE_SIDEBAR:
            return Object.assign(Object.assign({}, previousState), { sidebarOpen: !previousState.sidebarOpen });
        case actions_1.SET_SIDEBAR_VISIBILITY:
            return Object.assign(Object.assign({}, previousState), { sidebarOpen: action.payload });
        case uiActions_1.SET_AUTOMATIC_REFRESH:
            return Object.assign(Object.assign({}, previousState), { automaticRefreshEnabled: action.payload });
        case actions_1.REFRESH_VIEW:
            return Object.assign(Object.assign({}, previousState), { viewVersion: previousState.viewVersion + 1 });
        case actions_1.START_OPTIMISTIC_MODE:
            return Object.assign(Object.assign({}, previousState), { optimistic: true });
        case actions_1.STOP_OPTIMISTIC_MODE:
            return Object.assign(Object.assign({}, previousState), { optimistic: false });
        default:
            return previousState;
    }
};
exports.default = uiReducer;
