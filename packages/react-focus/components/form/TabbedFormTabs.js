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
exports.getTabFullPath = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const prop_types_1 = __importDefault(require("prop-types"));
const Tabs_1 = __importDefault(require("@mui/material/Tabs"));
const react_router_dom_1 = require("react-router-dom");
const TabbedFormTabs = (props) => {
    const { children, classes, url, syncWithLocation, value } = props, rest = __rest(props, ["children", "classes", "url", "syncWithLocation", "value"]);
    const location = (0, react_router_dom_1.useLocation)();
    const validTabPaths = react_1.Children.map(children, (tab, index) => {
        if (!(0, react_1.isValidElement)(tab))
            return undefined;
        return (0, exports.getTabFullPath)(tab, index, url);
    });
    // This ensures we don't get warnings from material-ui Tabs component when
    // the current location pathname targets a dynamically added Tab
    // In the case the targeted Tab is not present at first render (when
    // using permissions for example) we temporarily switch to the first
    // available tab. The current location will be applied again on the
    // first render containing the targeted tab. This is almost transparent
    // for the user who may just see a short tab selection animation
    const tabValue = validTabPaths.includes(location.pathname)
        ? location.pathname
        : validTabPaths[0];
    return ((0, jsx_runtime_1.jsx)(Tabs_1.default, Object.assign({ value: syncWithLocation ? tabValue : value, indicatorColor: "primary" }, rest, { children: react_1.Children.map(children, (tab, index) => {
            if (!(0, react_1.isValidElement)(tab))
                return null;
            // Builds the full tab which is the concatenation of the last matched route in the
            // TabbedShowLayout hierarchy (ex: '/posts/create', '/posts/12', , '/posts/12/show')
            // and the tab path.
            // This will be used as the Tab's value
            const tabPath = (0, exports.getTabFullPath)(tab, index, url);
            return (0, react_1.cloneElement)(tab, {
                intent: 'header',
                value: syncWithLocation ? tabPath : index,
                classes,
                syncWithLocation,
            });
        }) }), void 0));
};
TabbedFormTabs.propTypes = {
    children: prop_types_1.default.node,
    classes: prop_types_1.default.object,
    url: prop_types_1.default.string,
    tabsWithErrors: prop_types_1.default.arrayOf(prop_types_1.default.string),
};
const getTabFullPath = (tab, index, baseUrl) => `${baseUrl}${tab.props.path ? `/${tab.props.path}` : index > 0 ? `/${index}` : ''}`.replace('//', '/'); // Because baseUrl can be a single / when on the first tab
exports.getTabFullPath = getTabFullPath;
exports.default = TabbedFormTabs;
