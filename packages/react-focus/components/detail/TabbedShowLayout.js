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
exports.TabbedShowLayout = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const prop_types_1 = __importDefault(require("prop-types"));
const styles_1 = require("@mui/material/styles");
const material_1 = require("@mui/material");
const react_router_dom_1 = require("react-router-dom");
const react_router_dom_2 = require("react-router-dom");
const core_1 = require("../../features/core");
const TabbedShowLayoutTabs_1 = require("./TabbedShowLayoutTabs");
const PREFIX = 'RaTabbedShowLayout';
const classes = {
    content: `${PREFIX}-content`,
};
const Root = (0, styles_1.styled)('div')(({ theme }) => ({
    [`& .${classes.content}`]: {
        paddingTop: theme.spacing(1),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
    },
}));
const sanitizeRestProps = (_a) => {
    var { children, className, record, resource, basePath, version, initialValues, staticContext, translate, tabs } = _a, rest = __rest(_a, ["children", "className", "record", "resource", "basePath", "version", "initialValues", "staticContext", "translate", "tabs"]);
    return rest;
};
/**
 * Tabbed Layout for a Show view, showing fields grouped in tabs.
 *
 * Receives the current `record` from the parent `<Show>` component,
 * and passes it to its children. Children should be Tab components.
 * The component passed as `tabs` props replaces the default material-ui's <Tabs> component.
 *
 * @example
 *     // in src/posts.js
 *     import * as React from "react";
 *     import { Show, TabbedShowLayout, Tab, TextField } from '../../app';
 *
 *     export const PostShow = (props) => (
 *         <Show {...props}>
 *             <TabbedShowLayout>
 *                 <Tab label="Content">
 *                     <TextField source="title" />
 *                     <TextField source="subtitle" />
 *                </Tab>
 *                 <Tab label="Metadata">
 *                     <TextField source="category" />
 *                </Tab>
 *             </TabbedShowLayout>
 *         </Show>
 *     );
 *
 *     // in src/App.js
 *     import * as React from "react";
 *     import { Admin, Resource } from '../../app';
 *
 *     import { PostShow } from './posts';
 *
 *     const App = () => (
 *         <Admin dataProvider={...}>
 *             <Resource name="posts" show={PostShow} />
 *         </Admin>
 *     );
 *     export default App;
 */
const TabbedShowLayout = (props) => {
    const { basePath, children, className, record, resource, syncWithLocation = true, tabs, value, version } = props, rest = __rest(props, ["basePath", "children", "className", "record", "resource", "syncWithLocation", "tabs", "value", "version"]);
    const match = (0, react_router_dom_2.useMatch)('');
    const nonNullChildren = react_1.Children.toArray(children).filter(child => child !== null);
    const [tabValue, setTabValue] = (0, react_1.useState)(0);
    const handleTabChange = (event, value) => {
        if (!syncWithLocation) {
            setTabValue(value);
        }
    };
    return ((0, jsx_runtime_1.jsxs)(Root, Object.assign({ className: className }, sanitizeRestProps(rest), { children: [(0, react_1.cloneElement)(tabs, {
                syncWithLocation,
                onChange: handleTabChange,
                value: tabValue,
            }, nonNullChildren), (0, jsx_runtime_1.jsx)(material_1.Divider, {}, void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: classes.content }, { children: react_1.Children.map(nonNullChildren, (tab, index) => tab && (0, react_1.isValidElement)(tab) ? (syncWithLocation ? ((0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: (0, core_1.escapePath)((0, TabbedShowLayoutTabs_1.getTabFullPath)(tab, index, match === null || match === void 0 ? void 0 : match.pathname)), element: () => (0, react_1.cloneElement)(tab, {
                        context: 'content',
                        resource,
                        record,
                        basePath,
                    }) }, void 0)) : tabValue === index ? ((0, react_1.cloneElement)(tab, {
                    context: 'content',
                    resource,
                    record,
                    basePath,
                })) : null) : null) }), void 0)] }), version));
};
exports.TabbedShowLayout = TabbedShowLayout;
exports.TabbedShowLayout.propTypes = {
    basePath: prop_types_1.default.string,
    children: prop_types_1.default.node,
    className: prop_types_1.default.string,
    location: prop_types_1.default.object,
    match: prop_types_1.default.object,
    record: prop_types_1.default.object,
    resource: prop_types_1.default.string,
    syncWithLocation: prop_types_1.default.bool,
    tabs: prop_types_1.default.element,
    value: prop_types_1.default.number,
    version: prop_types_1.default.number,
};
exports.TabbedShowLayout.defaultProps = {
    tabs: (0, jsx_runtime_1.jsx)(TabbedShowLayoutTabs_1.TabbedShowLayoutTabs, {}, void 0),
};
