"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useAuthProvider_1 = __importStar(require("./useAuthProvider"));
const useLogout_1 = __importDefault(require("./useLogout"));
const useNotify_1 = __importDefault(require("../sideEffect/useNotify"));
/**
 * Get a callback for calling the authProvider.checkAuth() method.
 * In case of rejection, redirects to the login page, displays a notification,
 * and throws an error.
 *
 * This is a low level hook. See those more specialized hooks
 * for common authentication tasks, based on useCheckAuth.
 *
 * @see useAuthenticated
 * @see useAuthState
 *
 * @returns {Function} checkAuth callback
 *
 * @example
 *
 * import { useCheckAuth } from '../app';
 *
 * const MyProtectedPage = () => {
 *     const checkAuth = useCheckAuth();
 *     useEffect(() => {
 *         checkAuth().catch(() => {});
 *     }, []);
 *     return <p>Private content: EZAEZEZAET</p>
 * } // tip: use useAuthenticated() hook instead
 *
 * const MyPage = () => {
 *     const checkAuth = useCheckAuth();
 *     const [authenticated, setAuthenticated] = useState(true); // optimistic auth
 *     useEffect(() => {
 *         checkAuth({}, false)
 *              .then(() => setAuthenticated(true))
 *              .catch(() => setAuthenticated(false));
 *     }, []);
 *     return authenticated ? <Bar /> : <BarNotAuthenticated />;
 * } // tip: use useAuthState() hook instead
 */
const useCheckAuth = () => {
    const authProvider = (0, useAuthProvider_1.default)();
    const notify = (0, useNotify_1.default)();
    const logout = (0, useLogout_1.default)();
    const checkAuth = (0, react_1.useCallback)((params = {}, logoutOnFailure = true, redirectTo = useAuthProvider_1.defaultAuthParams.loginUrl, disableNotification = false) => authProvider.checkAuth(params).catch(error => {
        if (logoutOnFailure) {
            logout({}, error && error.redirectTo
                ? error.redirectTo
                : redirectTo);
            const shouldSkipNotify = disableNotification ||
                (error && error.message === false);
            !shouldSkipNotify &&
                notify(getErrorMessage(error, 'ra.auth.auth_check_error'), 'warning');
        }
        throw error;
    }), [authProvider, logout, notify]);
    return authProvider ? checkAuth : checkAuthWithoutAuthProvider;
};
const checkAuthWithoutAuthProvider = () => Promise.resolve();
const getErrorMessage = (error, defaultMessage) => typeof error === 'string'
    ? error
    : typeof error === 'undefined' || !error.message
        ? defaultMessage
        : error.message;
exports.default = useCheckAuth;
