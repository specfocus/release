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
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const prop_types_1 = __importDefault(require("prop-types"));
const classnames_1 = __importDefault(require("classnames"));
const CardContentInner_1 = __importDefault(require("../layout/CardContentInner"));
const Labeled_1 = __importDefault(require("../input/Labeled"));
const sanitizeRestProps = (_a) => {
    var { children, className, record, resource, basePath, version, initialValues, translate } = _a, rest = __rest(_a, ["children", "className", "record", "resource", "basePath", "version", "initialValues", "translate"]);
    return rest;
};
/**
 * Simple Layout for a Show view, showing fields in one column.
 *
 * Receives the current `record` from the parent `<Show>` component,
 * and passes it to its children. Children should be Field-like components.
 *
 * @example
 *     // in src/posts.js
 *     import * as React from "react";
 *     import { Show, SimpleShowLayout, TextField } from '../../app';
 *
 *     export const PostShow = (props) => (
 *         <Show {...props}>
 *             <SimpleShowLayout>
 *                 <TextField source="title" />
 *             </SimpleShowLayout>
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
const SimpleShowLayout = (_a) => {
    var { basePath, className, children, record, resource, version } = _a, rest = __rest(_a, ["basePath", "className", "children", "record", "resource", "version"]);
    return ((0, jsx_runtime_1.jsx)(CardContentInner_1.default, Object.assign({ className: className }, sanitizeRestProps(rest), { children: react_1.Children.map(children, field => field && (0, react_1.isValidElement)(field) ? ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: (0, classnames_1.default)(`ra-field ra-field-${field.props.source}`, field.props.className) }, { children: field.props.addLabel ? ((0, jsx_runtime_1.jsx)(Labeled_1.default, Object.assign({ record: record, resource: resource, basePath: basePath, label: field.props.label, source: field.props.source, disabled: false, fullWidth: field.props.fullWidth }, { children: field }), void 0)) : typeof field.type === 'string' ? (field) : ((0, react_1.cloneElement)(field, {
                record,
                resource,
                basePath,
            })) }), field.props.source)) : null) }), version));
};
SimpleShowLayout.propTypes = {
    basePath: prop_types_1.default.string,
    className: prop_types_1.default.string,
    children: prop_types_1.default.node,
    record: prop_types_1.default.object,
    resource: prop_types_1.default.string,
    version: prop_types_1.default.number,
};
exports.default = SimpleShowLayout;
