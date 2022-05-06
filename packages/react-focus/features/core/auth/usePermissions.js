"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useGetPermissions_1 = __importDefault(require("./useGetPermissions"));
const hooks_1 = require("../util/hooks");
const emptyParams = {};
/**
 * Hook for getting user permissions
 *
 * Calls the authProvider.getPermissions() method asynchronously.
 * If the authProvider returns a rejected promise, returns empty permissions.
 *
 * The return value updates according to the request state:
 *
 * - start: { loading: true, loaded: false }
 * - success: { permissions: [any], loading: false, loaded: true }
 * - error: { error: [error from provider], loading: false, loaded: true }
 *
 * Useful to enable features based on user permissions
 *
 * @param {Object} params Any params you want to pass to the authProvider
 *
 * @returns The current auth check state. Destructure as { permissions, error, loading, loaded }.
 *
 * @example
 *     import { usePermissions } from '../app';
 *
 *     const PostDetail = props => {
 *         const { loaded, permissions } = usePermissions();
 *         if (loaded && permissions == 'editor') {
 *             return <PostEdit {...props} />
 *         } else {
 *             return <PostShow {...props} />
 *         }
 *     };
 */
const usePermissions = (params = emptyParams) => {
    const [state, setState] = (0, hooks_1.useSafeSetState)({
        loading: true,
        loaded: false,
    });
    const getPermissions = (0, useGetPermissions_1.default)();
    (0, react_1.useEffect)(() => {
        getPermissions(params)
            .then(permissions => {
            setState({ loading: false, loaded: true, permissions });
        })
            .catch(error => {
            setState({
                loading: false,
                loaded: true,
                error,
            });
        });
    }, [getPermissions, params, setState]);
    return state;
};
exports.default = usePermissions;
