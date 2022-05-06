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
exports.ShowActions = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const prop_types_1 = __importDefault(require("prop-types"));
const core_1 = require("../../features/core");
const button_1 = require("../button");
const TopToolbar_1 = __importDefault(require("../layout/TopToolbar"));
const sanitizeRestProps = (_a) => {
    var { basePath, className, hasEdit, hasList, resource } = _a, rest = __rest(_a, ["basePath", "className", "hasEdit", "hasList", "resource"]);
    return rest;
};
/**
 * Action Toolbar for the Show view
 *
 * Internal component. If you want to add or remove actions for a Show view,
 * write your own ShowActions Component. Then, in the <Show> component,
 * use it in the `actions` prop to pass a custom component.
 *
 * @example
 *     import Button from '@mui/material/Button';
 *     import { TopToolbar, EditButton, Show } from '../../app';
 *
 *     const PostShowActions = ({ basePath, record, resource }) => (
 *         <TopToolbar>
 *             <EditButton basePath={basePath} record={record} />
 *             // Add your custom actions here //
 *             <Button color="primary" onClick={customAction}>Custom Action</Button>
 *         </TopToolbar>
 *     );
 *
 *     export const PostShow = (props) => (
 *         <Show actions={<PostShowActions />} {...props}>
 *             ...
 *         </Show>
 *     );
 */
const ShowActions = (_a) => {
    var { className } = _a, rest = __rest(_a, ["className"]);
    const { basePath, record } = (0, core_1.useShowContext)(rest);
    const { hasEdit } = (0, core_1.useResourceDefinition)(rest);
    return ((0, jsx_runtime_1.jsx)(TopToolbar_1.default, Object.assign({ className: className }, sanitizeRestProps(rest), { children: hasEdit && (0, jsx_runtime_1.jsx)(button_1.EditButton, { basePath: basePath, record: record }, void 0) }), void 0));
};
exports.ShowActions = ShowActions;
exports.ShowActions.propTypes = {
    basePath: prop_types_1.default.string,
    className: prop_types_1.default.string,
    data: prop_types_1.default.object,
    hasCreate: prop_types_1.default.bool,
    hasEdit: prop_types_1.default.bool,
    hasShow: prop_types_1.default.bool,
    hasList: prop_types_1.default.bool,
    resource: prop_types_1.default.string,
};
