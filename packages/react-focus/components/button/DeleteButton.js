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
exports.DeleteButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const prop_types_1 = __importDefault(require("prop-types"));
const core_1 = require("../../features/core");
const DeleteWithUndoButton_1 = require("./DeleteWithUndoButton");
const DeleteWithConfirmButton_1 = require("./DeleteWithConfirmButton");
/**
 * Button used to delete a single record. Added by default by the <Toolbar> of edit and show views.
 *
 * @typedef {Object} Props The props you can use (other props are injected if you used it in the <Toolbar>)
 * @prop {boolean} undoable Confirm the deletion using an undo button in a notification or a confirmation dialog. Defaults to 'false'.
 * @prop {Object} record The current resource record
 * @prop {string} className
 * @prop {string} label Button label. Defaults to 'ra.action.delete, translated.
 * @prop {boolean} disabled Disable the button.
 * @prop {string} variant Material-ui variant for the button. Defaults to 'contained'.
 * @prop {ReactElement} icon Override the icon. Defaults to the Delete icon from material-ui.
 *
 * @param {Props} props
 *
 * @example Usage in the <TopToolbar> of an <Edit> form
 *
 * import * as React from 'react';
 * import { Edit, DeleteButton, TopToolbar } from '../../app';
 *
 * const EditActions = props => {
 *     const { basePath, data, resource } = props;
 *     return (
 *         <TopToolbar>
 *             <DeleteButton
 *                 basePath={basePath}
 *                 record={data}
 *                 resource={resource}
 *                 undoable={false} // Renders the <DeleteWithConfirmButton>
 *             />
 *         </TopToolbar>
 *     );
 * };
 *
 * const Edit = props => {
 *     return <Edit actions={<EditActions />} {...props} />;
 * };
 */
const DeleteButton = (props) => {
    const { undoable, mutationMode, record } = props, rest = __rest(props, ["undoable", "mutationMode", "record"]);
    const mode = (0, core_1.getMutationMode)(mutationMode, undoable);
    if (!record || record.id == null) {
        return null;
    }
    return mode === 'undoable' ? ((0, jsx_runtime_1.jsx)(DeleteWithUndoButton_1.DeleteWithUndoButton, Object.assign({ record: record }, rest), void 0)) : ((0, jsx_runtime_1.jsx)(DeleteWithConfirmButton_1.DeleteWithConfirmButton, Object.assign({ mutationMode: mode, record: record, undoable: undoable }, rest), void 0));
};
exports.DeleteButton = DeleteButton;
exports.DeleteButton.propTypes = {
    basePath: prop_types_1.default.string,
    label: prop_types_1.default.string,
    mutationMode: prop_types_1.default.oneOf(['pessimistic', 'optimistic', 'undoable']),
    record: prop_types_1.default.any,
    // @ts-ignore
    redirect: prop_types_1.default.oneOfType([
        prop_types_1.default.string,
        prop_types_1.default.bool,
        prop_types_1.default.func,
    ]),
    resource: prop_types_1.default.string,
    undoable: prop_types_1.default.bool,
    icon: prop_types_1.default.element,
};
