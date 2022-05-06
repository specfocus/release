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
exports.Tab = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const react_1 = require("react");
const prop_types_1 = __importDefault(require("prop-types"));
const react_router_dom_1 = require("react-router-dom");
const material_1 = require("@mui/material");
const core_1 = require("../../features/core");
const classnames_1 = __importDefault(require("classnames"));
const Labeled_1 = __importDefault(require("../input/Labeled"));
/**
 * Tab element for the SimpleShowLayout.
 *
 * The `<Tab>` component accepts the following props:
 *
 * - label: The string displayed for each tab
 * - icon: The icon to show before the label (optional). Must be a component.
 * - path: The string used for custom urls
 *
 * @example
 *     // in src/posts.js
 *     import * as React from "react";
 *     import FavoriteIcon from '@mui/icons-material/Favorite';
 *     import PersonPinIcon from '@mui/icons-material/PersonPin';
 *     import { Show, TabbedShowLayout, Tab, TextField } from '../../app';
 *
 *     export const PostShow = (props) => (
 *         <Show {...props}>
 *             <TabbedShowLayout>
 *                 <Tab label="Content" icon={<FavoriteIcon />}>
 *                     <TextField source="title" />
 *                     <TextField source="subtitle" />
 *                </Tab>
 *                 <Tab label="Metadata" icon={<PersonIcon />} path="metadata">
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
const Tab = (_a) => {
    var { basePath, children, contentClassName, context, className, icon, label, record, resource, syncWithLocation = true, value } = _a, rest = __rest(_a, ["basePath", "children", "contentClassName", "context", "className", "icon", "label", "record", "resource", "syncWithLocation", "value"]);
    const translate = (0, core_1.useTranslate)();
    const location = (0, react_router_dom_1.useLocation)();
    const propsForLink = {
        component: react_router_dom_1.Link,
        to: Object.assign(Object.assign({}, location), { pathname: value }),
    };
    const renderHeader = () => ((0, jsx_runtime_1.jsx)(material_1.Tab, Object.assign({ label: translate(label, { _: label }), value: value, icon: icon, className: (0, classnames_1.default)('show-tab', className) }, (syncWithLocation ? propsForLink : {}), rest), label));
    const renderContent = () => ((0, jsx_runtime_1.jsx)("span", Object.assign({ className: contentClassName }, { children: React.Children.map(children, field => field && (0, react_1.isValidElement)(field) ? ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: (0, classnames_1.default)('ra-field', `ra-field-${field.props.source}`, field.props.className) }, { children: field.props.addLabel ? ((0, jsx_runtime_1.jsx)(Labeled_1.default, Object.assign({ label: field.props.label, source: field.props.source, basePath: basePath, record: record, resource: resource }, { children: field }), void 0)) : typeof field.type === 'string' ? (field) : (React.cloneElement(field, {
                basePath,
                record,
                resource,
            })) }), field.props.source)) : null) }), void 0));
    return context === 'header' ? renderHeader() : renderContent();
};
exports.Tab = Tab;
exports.Tab.propTypes = {
    className: prop_types_1.default.string,
    contentClassName: prop_types_1.default.string,
    children: prop_types_1.default.node,
    context: prop_types_1.default.oneOf(['header', 'content']),
    icon: prop_types_1.default.element,
    label: prop_types_1.default.string.isRequired,
    path: prop_types_1.default.string,
    value: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
};
