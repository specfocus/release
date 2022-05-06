"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const warning_1 = __importDefault(require("../util/warning"));
const useAuthenticated_1 = __importDefault(require("./useAuthenticated"));
const usePermissionsOptimized_1 = __importDefault(require("./usePermissionsOptimized"));
const isEmptyChildren = children => react_1.Children.count(children) === 0;
/**
 * After checking that the user is authenticated,
 * retrieves the user's permissions for a specific context.
 *
 * Useful for Route components ; used internally by Resource.
 * Use it to decorate your custom page components to require
 * a custom role. It will pass the permissions as a prop to your
 * component.
 *
 * You can set additional `authParams` at will if your authProvider
 * requires it.
 *
 * @example
 *     import { WithPermissions } from '../app';
 *
 *     const Foo = ({ permissions }) => (
 *         {permissions === 'admin' ? <p>Sensitive data</p> : null}
 *         <p>Not sensitive data</p>
 *     );
 *
 *     const customRoutes = [
 *         <Route path="/foo" render={() =>
 *             <WithPermissions
 *                  authParams={{ foo: 'bar' }}
 *                  render={({ permissions, ...props }) => <Foo permissions={permissions} {...props} />}
 *              />
 *         } />
 *     ];
 *     const App = () => (
 *         <Admin customRoutes={customRoutes}>
 *             ...
 *         </Admin>
 *     );
 */
const WithPermissions = props => {
    const { authParams, children, component, staticContext } = props, rest = __rest(props, ["authParams", "children", "component", "staticContext"]);
    (0, useAuthenticated_1.default)(authParams);
    const { permissions } = (0, usePermissionsOptimized_1.default)(authParams);
    // render even though the usePermissions() call isn't finished (optimistic rendering)
    if (component) {
        return (0, react_1.createElement)(component, Object.assign({ permissions }, rest));
    }
    (0, warning_1.default)((children && !isEmptyChildren(children)) ||
        (component && children && !isEmptyChildren(children)), 'You should only use one of the `component`, `render` and `children` props in <WithPermissions>');
    return null;
};
exports.default = WithPermissions;
