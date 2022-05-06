"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultAuthParams = void 0;
const react_1 = require("react");
const AuthContext_1 = __importDefault(require("./AuthContext"));
exports.defaultAuthParams = {
    loginUrl: '/login',
    afterLoginUrl: '/',
};
/**
 * Get the authProvider stored in the context
 */
const useAuthProvider = () => (0, react_1.useContext)(AuthContext_1.default);
exports.default = useAuthProvider;
