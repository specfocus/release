"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
/**
 * Turn a function-based authProvider to an object-based one
 *
 * Allows using legacy authProviders transparently.
 *
 * @param {Function} legacyAuthProvider A legacy authProvider (type, params) => Promise<any>
 *
 * @returns {Object} An authProvider that ../../app can use
 */
exports.default = (legacyAuthProvider) => {
    const authProvider = (...args) => legacyAuthProvider.apply(null, args);
    authProvider.login = params => legacyAuthProvider(types_1.AUTH_LOGIN, params);
    authProvider.logout = params => legacyAuthProvider(types_1.AUTH_LOGOUT, params);
    authProvider.checkAuth = params => legacyAuthProvider(types_1.AUTH_CHECK, params);
    authProvider.checkError = error => legacyAuthProvider(types_1.AUTH_ERROR, error);
    authProvider.getPermissions = params => legacyAuthProvider(types_1.AUTH_GET_PERMISSIONS, params);
    return authProvider;
};
