"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const defaultIdentity = { id: '' };
const defaultProvider = {
    login: () => Promise.resolve(),
    logout: () => Promise.resolve(),
    checkAuth: () => Promise.resolve(),
    checkError: () => Promise.resolve(),
    getPermissions: () => Promise.resolve(),
    getIdentity: () => Promise.resolve(defaultIdentity),
};
const AuthContext = (0, react_1.createContext)(defaultProvider);
AuthContext.displayName = 'AuthContext';
exports.default = AuthContext;
