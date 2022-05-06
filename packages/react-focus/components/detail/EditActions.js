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
exports.EditActions = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const prop_types_1 = __importDefault(require("prop-types"));
const core_1 = require("../../features/core");
const button_1 = require("../button");
const TopToolbar_1 = __importDefault(require("../layout/TopToolbar"));
/**
 * Action Toolbar for the Edit view
 *
 * Internal component. If you want to add or remove actions for an Edit view,
 * write your own EditActions Component. Then, in the <Edit> component,
 * use it in the `actions` prop to pass a custom component.
 *
 * @example
 *     import Button from '@mui/material/Button';
 *     import { TopToolbar, ShowButton, Edit } from '../../app';
 *
 *     const PostEditActions = ({ basePath, record, resource }) => (
 *         <TopToolbar>
 *             <ShowButton basePath={basePath} record={record} />
 *             // Add your custom actions here
 *             <Button color="primary" onClick={customAction}>Custom Action</Button>
 *         </TopToolbar>
 *     );
 *
 *     export const PostEdit = (props) => (
 *         <Edit actions={<PostEditActions />} {...props}>
 *             ...
 *         </Edit>
 *     );
 */
const EditActions = (_a) => {
    var { className } = _a, rest = __rest(_a, ["className"]);
    const { basePath, record } = (0, core_1.useEditContext)(rest);
    const { hasShow } = (0, core_1.useResourceDefinition)(rest);
    return ((0, jsx_runtime_1.jsx)(TopToolbar_1.default, Object.assign({ className: className }, sanitizeRestProps(rest), { children: hasShow && (0, jsx_runtime_1.jsx)(button_1.ShowButton, { basePath: basePath, record: record }, void 0) }), void 0));
};
exports.EditActions = EditActions;
const sanitizeRestProps = (_a) => {
    var { basePath = null, hasCreate = null, hasEdit = null, hasShow = null, hasList = null } = _a, rest = __rest(_a, ["basePath", "hasCreate", "hasEdit", "hasShow", "hasList"]);
    return rest;
};
exports.EditActions.propTypes = {
    basePath: prop_types_1.default.string,
    className: prop_types_1.default.string,
    data: prop_types_1.default.object,
    hasCreate: prop_types_1.default.bool,
    hasEdit: prop_types_1.default.bool,
    hasShow: prop_types_1.default.bool,
    hasList: prop_types_1.default.bool,
    resource: prop_types_1.default.string,
};
