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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteWithoutLayout = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
/**
 * Custom route with no layout, to be used in the <Admin customRoutes> array.
 *
 * @example
 * // in src/customRoutes.js
 * import * as React from "react";
 * import { Route } from 'react-router-dom';
 * import { RouteWithoutLayout } from '../app';
 * import Foo from './Foo';
 * import Register from './Register';
 *
 * export default [
 *     <Route path="/foo" component={Foo} />,
 *     <RouteWithoutLayout path="/register" component={Register} />,
 * ];
 *
 * // in src/App.js
 * import * as React from "react";
 * import { Admin } from '../app';
 *
 * import customRoutes from './customRoutes';
 *
 * const App = () => (
 *     <Admin customRoutes={customRoutes} dataProvider={simpleRestProvider('http://path.to.my.api')}>
 *         ...
 *     </Admin>
 * );
 *
 * export default App;
 */
const RouteWithoutLayout = (_a) => {
    var { noLayout } = _a, props = __rest(_a, ["noLayout"]);
    return ((0, jsx_runtime_1.jsx)(react_router_dom_1.Route, Object.assign({}, props), void 0));
};
exports.RouteWithoutLayout = RouteWithoutLayout;
exports.RouteWithoutLayout.defaultProps = {
    noLayout: true,
};
