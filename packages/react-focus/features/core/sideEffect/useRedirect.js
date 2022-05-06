"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const history_1 = require("history");
const resolveRedirectTo_1 = __importDefault(require("../util/resolveRedirectTo"));
const uiActions_1 = require("../actions/uiActions");
/**
 * Hook for Redirection Side Effect
 *
 * @example
 *
 * const redirect = useRedirect();
 * // redirect to list view
 * redirect('list', '/posts');
 * // redirect to edit view
 * redirect('edit', '/posts', 123);
 * // redirect to edit view with state data
 * redirect('edit', '/comment', 123, {}, { record: { post_id: record.id } });
 * // do not redirect (resets the record form)
 * redirect(false);
 * // redirect to the result of a function
 * redirect((redirectTo, basePath, id, data) => ...)
 */
const useRedirect = () => {
    const dispatch = (0, react_redux_1.useDispatch)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const location = (0, react_router_dom_1.useLocation)();
    return (0, react_1.useCallback)((redirectTo, basePath = '', id, data, state = {}) => {
        if (!redirectTo) {
            if (location.state || location.search) {
                navigate(location.pathname);
            }
            else {
                dispatch((0, uiActions_1.refreshView)());
            }
            return;
        }
        if (typeof redirectTo === 'string' &&
            redirectTo.startsWith('http') &&
            window) {
            // redirection to an absolute url
            // history doesn't handle that case, so we handle it by hand
            window.location.href = redirectTo;
        }
        else {
            navigate((0, history_1.parsePath)((0, resolveRedirectTo_1.default)(redirectTo, basePath, id, data))
            // state: { _scrollToTop: true, ...state },
            );
        }
    }, [dispatch, location]);
};
exports.default = useRedirect;
