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
const react_router_dom_1 = require("react-router-dom");
const react_redux_1 = require("react-redux");
const useAuthProvider_1 = __importStar(require("./useAuthProvider"));
const notificationActions_1 = require("../actions/notificationActions");
/**
 * Get a callback for calling the authProvider.login() method
 * and redirect to the previous authenticated page (or the home page) on success.
 *
 * @see useAuthProvider
 *
 * @returns {Function} login callback
 *
 * @example
 *
 * import { useLogin } from '../app';
 *
 * const LoginButton = () => {
 *     const [loading, setLoading] = useState(false);
 *     const login = useLogin();
 *     const handleClick = {
 *         setLoading(true);
 *         login({ username: 'john', password: 'p@ssw0rd' }, '/posts')
 *             .then(() => setLoading(false));
 *     }
 *     return <button onClick={handleClick}>Login</button>;
 * }
 */
const useLogin = () => {
    const authProvider = (0, useAuthProvider_1.default)();
    const location = (0, react_router_dom_1.useLocation)();
    const locationState = location.state;
    const navigate = (0, react_router_dom_1.useNavigate)();
    const dispatch = (0, react_redux_1.useDispatch)();
    const nextPathName = locationState && locationState.nextPathname;
    const nextSearch = locationState && locationState.nextSearch;
    const login = (0, react_1.useCallback)((params = {}, pathName) => authProvider.login(params).then(ret => {
        dispatch((0, notificationActions_1.resetNotification)());
        const redirectUrl = pathName
            ? pathName
            : nextPathName + nextSearch ||
                useAuthProvider_1.defaultAuthParams.afterLoginUrl;
        navigate(redirectUrl);
        return ret;
    }), [authProvider, history, nextPathName, nextSearch, dispatch]);
    const loginWithoutProvider = (0, react_1.useCallback)((_, __) => {
        dispatch((0, notificationActions_1.resetNotification)());
        navigate(useAuthProvider_1.defaultAuthParams.afterLoginUrl);
        return Promise.resolve();
    }, [history, dispatch]);
    return authProvider ? login : loginWithoutProvider;
};
exports.default = useLogin;
