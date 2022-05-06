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
exports.getTabFullPath = exports.TabbedShowLayoutTabs = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const prop_types_1 = __importDefault(require("prop-types"));
const Tabs_1 = __importDefault(require("@mui/material/Tabs"));
const react_router_dom_1 = require("react-router-dom");
const TabbedShowLayoutTabs = (_a) => {
    var { children, syncWithLocation, value } = _a, rest = __rest(_a, ["children", "syncWithLocation", "value"]);
    const location = (0, react_router_dom_1.useLocation)();
    const match = (0, react_router_dom_1.useMatch)('');
    // The location pathname will contain the page path including the current tab path
    // so we can use it as a way to determine the current tab
    const tabValue = location.pathname;
    return ((0, jsx_runtime_1.jsx)(Tabs_1.default, Object.assign({ indicatorColor: "primary", value: syncWithLocation ? tabValue : value }, rest, { children: react_1.Children.map(children, (tab, index) => {
            if (!tab || !(0, react_1.isValidElement)(tab))
                return null;
            // Builds the full tab which is the concatenation of the last matched route in the
            // TabbedShowLayout hierarchy (ex: '/posts/create', '/posts/12', , '/posts/12/show')
            // and the tab path.
            // This will be used as the Tab's value
            const tabPath = (0, exports.getTabFullPath)(tab, index, match === null || match === void 0 ? void 0 : match.pathname);
            return (0, react_1.cloneElement)(tab, {
                context: 'header',
                value: syncWithLocation ? tabPath : index,
                syncWithLocation,
            });
        }) }), void 0));
};
exports.TabbedShowLayoutTabs = TabbedShowLayoutTabs;
const getTabFullPath = (tab, index, baseUrl) => `${baseUrl}${tab.props.path ? `/${tab.props.path}` : index > 0 ? `/${index}` : ''}`.replace('//', '/'); // Because baseUrl can be a single / when on the first tab
exports.getTabFullPath = getTabFullPath;
exports.TabbedShowLayoutTabs.propTypes = {
    children: prop_types_1.default.node,
};
