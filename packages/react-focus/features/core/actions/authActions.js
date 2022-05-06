"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLogout = exports.USER_LOGOUT = exports.userCheck = exports.USER_CHECK_SUCCESS = exports.USER_CHECK = exports.userLogin = exports.USER_LOGIN_SUCCESS = exports.USER_LOGIN_FAILURE = exports.USER_LOGIN_LOADING = exports.USER_LOGIN = void 0;
exports.USER_LOGIN = 'USER_LOGIN';
exports.USER_LOGIN_LOADING = 'USER_LOGIN_LOADING';
exports.USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';
exports.USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
const userLogin = (payload, pathName) => ({
    type: exports.USER_LOGIN,
    payload,
    meta: { auth: true, pathName },
});
exports.userLogin = userLogin;
exports.USER_CHECK = 'USER_CHECK';
exports.USER_CHECK_SUCCESS = 'USER_CHECK_SUCCESS';
const userCheck = (payload, pathName, routeParams = {}) => ({
    type: exports.USER_CHECK,
    payload: Object.assign(Object.assign({}, payload), { routeParams }),
    meta: { auth: true, pathName },
});
exports.userCheck = userCheck;
exports.USER_LOGOUT = 'USER_LOGOUT';
/**
 * Action to trigger logout of the current user. The entire redux state will be cleared
 * thanks to the resettableAppReducer in Admin.
 * @see: Admin.js
 * @param redirectTo Path to direct to after logout
 * @return {{type: string, payload: {redirectTo: string}, meta: {auth: boolean}}}
 */
const userLogout = (redirectTo) => ({
    type: exports.USER_LOGOUT,
    payload: { redirectTo },
    meta: { auth: true },
});
exports.userLogout = userLogout;
