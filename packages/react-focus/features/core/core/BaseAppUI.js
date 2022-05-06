"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const BaseAppRouter_1 = __importDefault(require("./BaseAppRouter"));
const util_1 = require("../util");
const DefaultLayout = ({ children }) => (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: children }, void 0);
const BaseAppUI = (props) => {
    const { catchAll = Noop, children, customRoutes = [], dashboard, disableTelemetry = false, layout = DefaultLayout, loading = Noop, loginPage = false, logout, menu, // deprecated, use a custom layout instead
    ready = util_1.Ready, theme, title = 'React Admin', } = props;
    const logoutElement = (0, react_1.useMemo)(() => logout && (0, react_1.createElement)(logout), [
        logout,
    ]);
    (0, react_1.useEffect)(() => {
        if (disableTelemetry ||
            process.env.NODE_ENV !== 'production' ||
            typeof window === 'undefined' ||
            typeof window.location === 'undefined' ||
            typeof Image === 'undefined') {
            return;
        }
        const img = new Image();
        img.src = `https://../../app-telemetry.marmelab.com/../../app-telemetry?domain=${window.location.hostname}`;
    }, [disableTelemetry]);
    return ((0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [loginPage !== false && loginPage !== true ? ((0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/login", element: props => (0, react_1.createElement)(loginPage, Object.assign(Object.assign({}, props), { title,
                    theme })) }, void 0)) : null, (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", element: props => ((0, jsx_runtime_1.jsx)(BaseAppRouter_1.default, Object.assign({ catchAll: catchAll, customRoutes: customRoutes, dashboard: dashboard, layout: layout, loading: loading, logout: logoutElement, menu: menu, ready: ready, theme: theme, title: title }, props, { children: children }), void 0)) }, void 0)] }, void 0));
};
const Noop = () => null;
exports.default = BaseAppUI;
