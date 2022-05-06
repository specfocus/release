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
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const classnames_1 = __importDefault(require("classnames"));
const prop_types_1 = __importDefault(require("prop-types"));
const React = __importStar(require("react"));
const react_1 = require("react");
const button_1 = require("../button");
const PREFIX = 'RaToolbar';
const classes = {
    toolbar: `${PREFIX}-toolbar`,
    desktopToolbar: `${PREFIX}-desktopToolbar`,
    mobileToolbar: `${PREFIX}-mobileToolbar`,
    defaultToolbar: `${PREFIX}-defaultToolbar`,
    spacer: `${PREFIX}-spacer`,
};
const StyledToolbar = (0, styles_1.styled)(material_1.Toolbar)(({ theme }) => ({
    [`&.${classes.toolbar}`]: {
        backgroundColor: theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
    },
    [`&.${classes.desktopToolbar}`]: {
        marginTop: theme.spacing(2),
    },
    [`&.${classes.mobileToolbar}`]: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '16px',
        width: '100%',
        boxSizing: 'border-box',
        flexShrink: 0,
        zIndex: 2,
    },
    [`&.${classes.defaultToolbar}`]: {
        flex: 1,
        display: 'flex',
        justifyContent: 'space-between',
    },
}));
const valueOrDefault = (value, defaultValue) => typeof value === 'undefined' ? defaultValue : value;
/**
 * The Toolbar displayed at the bottom of forms.
 *
 * @example Always enable the <SaveButton />
 *
 * import * as React from 'react';
 * import {
 *     Create,
 *     DateInput,
 *     TextInput,
 *     SimpleForm,
 *     Toolbar,
 *     required,
 * } from '../../app';
 *
 * const now = new Date();
 * const defaultSort = { field: 'title', order: 'ASC' };
 *
 * const CommentCreate = props => (
 *     <Create {...props}>
 *         <SimpleForm redirect={false} toolbar={<Toolbar alwaysEnableSaveButton={true} />}>
 *             <TextInput
 *                 source="author.name"
 *                 fullWidth
 *             />
 *             <DateInput source="created_at" defaultValue={now} />
 *             <TextInput source="body" fullWidth={true} multiline={true} />
 *         </SimpleForm>
 *     </Create>
 * );
 *
 * @typedef {Object} Props the props you can use (other props are injected by the <SimpleForm>)
 * @prop {boolean} alwaysEnableSaveButton Force enabling the <SaveButton>. If it's not defined, the <SaveButton> will be enabled using the `pristine` and `validating` props (disabled if pristine or validating, enabled otherwise).
 * @prop {ReactElement[]} children Customize the buttons you want to display in the <Toolbar>.
 * @prop {string} width Apply to the mobile or desktop classes depending on its value. Pass `xs` to display the mobile version.
 *
 */
const Toolbar = props => {
    const { alwaysEnableSaveButton, basePath, children, className, handleSubmit, handleSubmitWithRedirect, invalid, pristine, record, redirect, resource, saving, submitOnEnter, undoable, mutationMode, validating } = props, rest = __rest(props, ["alwaysEnableSaveButton", "basePath", "children", "className", "handleSubmit", "handleSubmitWithRedirect", "invalid", "pristine", "record", "redirect", "resource", "saving", "submitOnEnter", "undoable", "mutationMode", "validating"]);
    const isXs = (0, material_1.useMediaQuery)((theme) => theme.breakpoints.down('sm'));
    // Use form pristine and validating to enable or disable the save button
    // if alwaysEnableSaveButton is undefined
    const disabled = !valueOrDefault(alwaysEnableSaveButton, !pristine && !validating);
    return ((0, jsx_runtime_1.jsx)(StyledToolbar, Object.assign({ className: (0, classnames_1.default)(classes.toolbar, {
            [classes.mobileToolbar]: isXs,
            [classes.desktopToolbar]: !isXs,
        }, className), role: "toolbar" }, rest, { children: react_1.Children.count(children) === 0 ? ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: classes.defaultToolbar }, { children: [(0, jsx_runtime_1.jsx)(button_1.SaveButton, { handleSubmitWithRedirect: handleSubmitWithRedirect || handleSubmit, disabled: disabled, invalid: invalid, redirect: redirect, saving: saving || validating, submitOnEnter: submitOnEnter }, void 0), record && typeof record.id !== 'undefined' && ((0, jsx_runtime_1.jsx)(button_1.DeleteButton, { basePath: basePath, record: record, resource: resource, undoable: undoable, mutationMode: mutationMode }, void 0))] }), void 0)) : (
        // @ts-ignore
        react_1.Children.map(children, (button) => button && (0, react_1.isValidElement)(button)
            ? React.cloneElement(button, {
                basePath: valueOrDefault(button.props.basePath, basePath),
                handleSubmit: valueOrDefault(button.props.handleSubmit, handleSubmit),
                handleSubmitWithRedirect: valueOrDefault(button.props.handleSubmitWithRedirect, handleSubmitWithRedirect),
                onSave: button.props.onSave,
                invalid,
                pristine,
                record: valueOrDefault(button.props.record, record),
                resource: valueOrDefault(button.props.resource, resource),
                saving,
                submitOnEnter: valueOrDefault(button.props.submitOnEnter, submitOnEnter),
                undoable: valueOrDefault(button.props.undoable, undoable),
            })
            : null)) }), void 0));
};
Toolbar.propTypes = {
    basePath: prop_types_1.default.string,
    children: prop_types_1.default.node,
    className: prop_types_1.default.string,
    handleSubmit: prop_types_1.default.func,
    handleSubmitWithRedirect: prop_types_1.default.func,
    invalid: prop_types_1.default.bool,
    pristine: prop_types_1.default.bool,
    record: prop_types_1.default.any,
    redirect: prop_types_1.default.oneOfType([
        prop_types_1.default.string,
        prop_types_1.default.bool,
        prop_types_1.default.func,
    ]),
    resource: prop_types_1.default.string,
    saving: prop_types_1.default.bool,
    submitOnEnter: prop_types_1.default.bool,
    undoable: prop_types_1.default.bool,
    validating: prop_types_1.default.bool,
};
Toolbar.defaultProps = {
    submitOnEnter: true,
};
exports.default = Toolbar;
