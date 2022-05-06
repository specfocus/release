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
exports.CreateActions = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const prop_types_1 = __importDefault(require("prop-types"));
const TopToolbar_1 = __importDefault(require("../layout/TopToolbar"));
const button_1 = require("../button");
const core_1 = require("../../features/core");
/**
 * Action Toolbar for the Create view
 *
 * Internal component. If you want to add or remove actions for a Create view,
 * write your own CreateActions Component. Then, in the <Create> component,
 * use it in the `actions` prop to pass a custom component.
 *
 * @example
 *     import Button from '@mui/material/Button';
 *     import { TopToolbar, Create, ListButton } from '../../app';
 *
 *     const PostCreateActions = ({ basePath }) => (
 *         <TopToolbar>
 *             <ListButton basePath={basePath} />
 *             // Add your custom actions here //
 *             <Button color="primary" onClick={customAction}>Custom Action</Button>
 *         </TopToolbar>
 *     );
 *
 *     export const PostCreate = (props) => (
 *         <Create actions={<PostCreateActions />} {...props}>
 *             ...
 *         </Create>
 *     );
 */
const CreateActions = (_a) => {
    var { className } = _a, rest = __rest(_a, ["className"]);
    const { basePath } = (0, core_1.useCreateContext)(rest);
    const { hasList } = (0, core_1.useResourceDefinition)(rest);
    return ((0, jsx_runtime_1.jsx)(TopToolbar_1.default, Object.assign({ className: className }, sanitizeRestProps(rest), { children: hasList && (0, jsx_runtime_1.jsx)(button_1.ListButton, { basePath: basePath }, void 0) }), void 0));
};
exports.CreateActions = CreateActions;
const sanitizeRestProps = (_a) => {
    var { basePath = null, className = null, hasList = null, resource = null } = _a, rest = __rest(_a, ["basePath", "className", "hasList", "resource"]);
    return rest;
};
exports.CreateActions.propTypes = {
    basePath: prop_types_1.default.string,
    className: prop_types_1.default.string,
    hasCreate: prop_types_1.default.bool,
    hasEdit: prop_types_1.default.bool,
    hasShow: prop_types_1.default.bool,
    hasList: prop_types_1.default.bool,
    resource: prop_types_1.default.string,
};
