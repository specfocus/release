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
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const react_router_1 = require("react-router");
const WithPermissions_1 = __importDefault(require("../auth/WithPermissions"));
const defaultAuthParams = { route: 'dashboard' };
const RoutesWithLayout = (props) => {
    const { catchAll, children, customRoutes, dashboard, title } = props;
    const childrenAsArray = react_1.default.Children.toArray(children);
    const firstChild = childrenAsArray.length > 0
        ? childrenAsArray[0]
        : null;
    const wrappers = react_1.Children.map(children, (child) => [
        child.props.name,
        (routeProps) => (0, react_1.cloneElement)(child, Object.assign({ 
            // The context prop instruct the Resource component to
            // render itself as a standard component
            intent: 'route' }, props))
    ]);
    const Dashboard = (routeProps) => ((0, jsx_runtime_1.jsx)(WithPermissions_1.default, Object.assign({ authParams: defaultAuthParams, component: dashboard }, routeProps), void 0));
    const CatchAll = (routeProps) => (0, react_1.createElement)(catchAll, Object.assign(Object.assign({}, routeProps), { title }));
    return ((0, jsx_runtime_1.jsxs)(react_router_1.Routes, { children: [customRoutes && customRoutes.map((route, key) => (0, react_1.cloneElement)(route, { key })), wrappers.map(([name, Wrapper]) => ((0, jsx_runtime_1.jsx)(react_router_1.Route, { path: name, element: (0, jsx_runtime_1.jsx)(Wrapper, {}, void 0) }, name))), dashboard ? ((0, jsx_runtime_1.jsx)(react_router_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(Dashboard, {}, void 0) }, void 0))
                : firstChild ? ((0, jsx_runtime_1.jsx)(react_router_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(react_router_1.Navigate, { to: `/${firstChild.props.name}` }, void 0) }, void 0))
                    : null, (0, jsx_runtime_1.jsx)(react_router_1.Route, { element: (0, jsx_runtime_1.jsx)(CatchAll, {}, void 0) }, void 0)] }, void 0));
};
exports.default = RoutesWithLayout;
