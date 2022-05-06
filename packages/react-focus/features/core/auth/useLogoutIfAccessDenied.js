"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useAuthProvider_1 = __importDefault(require("./useAuthProvider"));
const useLogout_1 = __importDefault(require("./useLogout"));
const sideEffect_1 = require("../sideEffect");
const react_router_dom_1 = require("react-router-dom");
let timer;
/**
 * Returns a callback used to call the authProvider.checkError() method
 * and an error from the dataProvider. If the authProvider rejects the call,
 * the hook logs the user out and shows a logged out notification.
 *
 * Used in the useDataProvider hook to check for access denied responses
 * (e.g. 401 or 403 responses) and trigger a logout.
 *
 * @see useLogout
 * @see useDataProvider
 *
 * @returns {Function} logoutIfAccessDenied callback
 *
 * @example
 *
 * import { useLogoutIfAccessDenied, useNotify, DataProviderContext } from '../app';
 *
 * const FetchRestrictedResource = () => {
 *     const dataProvider = useContext(DataProviderContext);
 *     const logoutIfAccessDenied = useLogoutIfAccessDenied();
 *     const notify = useNotify()
 *     useEffect(() => {
 *         dataProvider.getOne('secret', { id: 123 })
 *             .catch(error => {
 *                  logoutIfAccessDenied(error);
 *                  notify('server error', 'warning');
 *              })
 *     }, []);
 *     // ...
 * }
 */
const useLogoutIfAccessDenied = () => {
    const authProvider = (0, useAuthProvider_1.default)();
    const logout = (0, useLogout_1.default)();
    const notify = (0, sideEffect_1.useNotify)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const logoutIfAccessDenied = (0, react_1.useCallback)((error, disableNotification) => authProvider
        .checkError(error)
        .then(() => false)
        .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const logoutUser = (_a = e === null || e === void 0 ? void 0 : e.logoutUser) !== null && _a !== void 0 ? _a : true;
        //manual debounce
        if (timer) {
            // side effects already triggered in this tick, exit
            return true;
        }
        timer = setTimeout(() => {
            timer = undefined;
        }, 0);
        const shouldNotify = !(disableNotification ||
            (e && e.message === false) ||
            (error && error.message === false));
        if (shouldNotify) {
            // notify only if not yet logged out
            authProvider
                .checkAuth({})
                .then(() => {
                if (logoutUser) {
                    notify('ra.notification.logged_out', 'warning');
                }
                else {
                    notify('ra.notification.not_authorized', 'warning');
                }
            })
                .catch(() => { });
        }
        const redirectTo = e && e.redirectTo
            ? e.redirectTo
            : error && error.redirectTo
                ? error.redirectTo
                : undefined;
        if (logoutUser) {
            logout({}, redirectTo);
        }
        else {
            navigate(redirectTo);
        }
        return true;
    })), [authProvider, logout, notify, history]);
    return authProvider
        ? logoutIfAccessDenied
        : logoutIfAccessDeniedWithoutProvider;
};
const logoutIfAccessDeniedWithoutProvider = () => Promise.resolve(false);
exports.default = useLogoutIfAccessDenied;
