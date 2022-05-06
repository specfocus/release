"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleFetchError = exports.handleLogout = exports.handleCheck = exports.handleLogin = void 0;
const effects_1 = require("redux-saga/effects");
const connected_react_router_1 = require("connected-react-router");
const notificationActions_1 = require("../actions/notificationActions");
const authActions_1 = require("../actions/authActions");
const fetchActions_1 = require("../actions/fetchActions");
const clearActions_1 = require("../actions/clearActions");
exports.default = (authProvider) => {
    if (!authProvider) {
        return () => null;
    }
    return function* watchAuthActions() {
        yield (0, effects_1.all)([
            (0, effects_1.takeEvery)(authActions_1.USER_LOGIN, (0, exports.handleLogin)(authProvider)),
            (0, effects_1.takeEvery)(authActions_1.USER_CHECK, (0, exports.handleCheck)(authProvider)),
            (0, effects_1.takeEvery)(authActions_1.USER_LOGOUT, (0, exports.handleLogout)(authProvider)),
            (0, effects_1.takeLatest)(fetchActions_1.FETCH_ERROR, (0, exports.handleFetchError)(authProvider)),
        ]);
    };
};
const nextPathnameSelector = state => {
    const locationState = state.router.location.state;
    return locationState && locationState.nextPathname;
};
const currentPathnameSelector = state => state.router.location;
const getErrorMessage = (error, defaultMessage) => typeof error === 'string'
    ? error
    : typeof error === 'undefined' || !error.message
        ? defaultMessage
        : error.message;
const handleLogin = (authProvider) => function* (action) {
    const { payload, meta } = action;
    try {
        yield (0, effects_1.put)({ type: authActions_1.USER_LOGIN_LOADING });
        const authPayload = yield (0, effects_1.call)([authProvider, 'login'], payload);
        yield (0, effects_1.put)({
            type: authActions_1.USER_LOGIN_SUCCESS,
            payload: authPayload,
        });
        const redirectTo = yield meta.pathName ||
            (0, effects_1.select)(nextPathnameSelector);
        yield (0, effects_1.put)((0, connected_react_router_1.push)(redirectTo || '/'));
    }
    catch (e) {
        yield (0, effects_1.put)({
            type: authActions_1.USER_LOGIN_FAILURE,
            error: e,
            meta: { auth: true },
        });
        const errorMessage = getErrorMessage(e, 'ra.auth.sign_in_error');
        yield (0, effects_1.put)((0, notificationActions_1.showNotification)(errorMessage, 'warning'));
    }
};
exports.handleLogin = handleLogin;
const handleCheck = (authProvider) => function* (action) {
    const { payload, meta } = action;
    try {
        yield (0, effects_1.call)([authProvider, 'checkAuth'], payload);
    }
    catch (error) {
        const redirectTo = yield (0, effects_1.call)([authProvider, 'logout'], undefined);
        yield (0, effects_1.put)((0, connected_react_router_1.replace)({
            pathname: (error && error.redirectTo) || redirectTo || '/login',
            state: { nextPathname: meta.pathName },
        }));
        // Clear the state before showing a notification as it would be dismissed immediately otherwise
        yield (0, effects_1.put)((0, clearActions_1.clearState)());
        const errorMessage = getErrorMessage(error, 'ra.auth.auth_check_error');
        yield (0, effects_1.put)((0, notificationActions_1.showNotification)(errorMessage, 'warning'));
    }
};
exports.handleCheck = handleCheck;
const handleLogout = (authProvider) => function* (action) {
    const { payload } = action;
    const redirectTo = yield (0, effects_1.call)([authProvider, 'logout'], undefined);
    yield (0, effects_1.put)((0, connected_react_router_1.push)((payload && payload.redirectTo) || redirectTo || '/login'));
    yield (0, effects_1.put)((0, clearActions_1.clearState)());
};
exports.handleLogout = handleLogout;
const handleFetchError = (authProvider) => function* (action) {
    const { error } = action;
    try {
        yield (0, effects_1.call)([authProvider, 'checkError'], error);
    }
    catch (e) {
        const nextPathname = yield (0, effects_1.select)(currentPathnameSelector);
        const redirectTo = yield (0, effects_1.call)([authProvider, 'logout'], undefined);
        yield (0, effects_1.put)((0, connected_react_router_1.push)({
            pathname: redirectTo || '/login',
            state: { nextPathname },
        }));
        // Clear the state before showing a notification as it would be dismissed immediately otherwise
        yield (0, effects_1.put)((0, clearActions_1.clearState)());
        yield (0, effects_1.put)((0, notificationActions_1.hideNotification)());
        yield (0, effects_1.put)((0, notificationActions_1.showNotification)('ra.notification.logged_out', 'warning'));
    }
};
exports.handleFetchError = handleFetchError;
