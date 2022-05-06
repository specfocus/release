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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const useAuthProvider_1 = __importStar(require("./useAuthProvider"));
const clearActions_1 = require("../actions/clearActions");
const react_router_dom_1 = require("react-router-dom");
/**
 * Get a callback for calling the authProvider.logout() method,
 * redirect to the login page, and clear the Redux state.
 *
 * @see useAuthProvider
 *
 * @returns {Function} logout callback
 *
 * @example
 *
 * import { useLogout } from '../app';
 *
 * const LogoutButton = () => {
 *     const logout = useLogout();
 *     const handleClick = () => logout();
 *     return <button onClick={handleClick}>Logout</button>;
 * }
 */
const useLogout = () => {
    const authProvider = (0, useAuthProvider_1.default)();
    const dispatch = (0, react_redux_1.useDispatch)();
    /**
     * We need the current location to pass in the router state
     * so that the login hook knows where to redirect to as next route after login.
     *
     * But if we used useLocation to get it, the logout function
     * would be rebuilt each time the user changes location. Consequently, that
     * would force a rerender of all components using this hook upon navigation
     * (BaseAppRouter for example).
     *
     * To avoid that, we read the location directly from history which is mutable.
     * See: https://reacttraining.com/react-router/web/api/history/history-is-mutable
     */
    const location = (0, react_router_dom_1.useLocation)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const logout = (0, react_1.useCallback)((params = {}, redirectTo = useAuthProvider_1.defaultAuthParams.loginUrl, redirectToCurrentLocationAfterLogin = true) => authProvider.logout(params).then(redirectToFromProvider => {
        dispatch((0, clearActions_1.clearState)());
        if (redirectToFromProvider === false) {
            // do not redirect
            return;
        }
        // redirectTo can contain a query string, e.g. '/login?foo=bar'
        // we must split the redirectTo to pass a structured location to navigate()
        const redirectToParts = (redirectToFromProvider || redirectTo).split('?');
        const newLocation = {
            pathname: redirectToParts[0],
        };
        let state = {};
        if (redirectToCurrentLocationAfterLogin &&
            location.pathname) {
            state = {
                nextPathname: location.pathname,
                nextSearch: location.search,
            };
        }
        if (redirectToParts[1]) {
            newLocation.search = redirectToParts[1];
        }
        navigate(newLocation, state);
        return redirectToFromProvider;
    }), [authProvider, history, dispatch]);
    const logoutWithoutProvider = (0, react_1.useCallback)(_ => {
        navigate({
            pathname: useAuthProvider_1.defaultAuthParams.loginUrl,
        }, {
            state: {
                nextPathname: location.pathname,
            }
        });
        dispatch((0, clearActions_1.clearState)());
        return Promise.resolve();
    }, [dispatch, history]);
    return authProvider ? logout : logoutWithoutProvider;
};
exports.default = useLogout;
