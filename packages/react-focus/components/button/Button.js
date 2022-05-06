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
exports.sanitizeButtonRestProps = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const classnames_1 = __importDefault(require("classnames"));
const core_1 = require("../../features/core");
const PREFIX = 'RaButton';
const classes = {
    button: `${PREFIX}-button`,
    label: `${PREFIX}-label`,
    labelRightIcon: `${PREFIX}-labelRightIcon`,
    smallIcon: `${PREFIX}-smallIcon`,
    mediumIcon: `${PREFIX}-mediumIcon`,
    largeIcon: `${PREFIX}-largeIcon`,
};
const StyledButton = (0, styles_1.styled)(material_1.Button)({
    [`& .${classes.button}`]: {
        display: 'inline-flex',
        alignItems: 'center',
    },
    [`& .${classes.label}`]: {
        paddingLeft: '0.5em',
    },
    [`& .${classes.labelRightIcon}`]: {
        paddingRight: '0.5em',
    },
    [`& .${classes.smallIcon}`]: {
        fontSize: 20,
    },
    [`& .${classes.mediumIcon}`]: {
        fontSize: 22,
    },
    [`& .${classes.largeIcon}`]: {
        fontSize: 24,
    },
});
/**
 * A generic Button with side icon. Only the icon is displayed on small screens.
 *
 * The component translates the label. Pass the icon as child.
 * The icon displays on the left side of the button by default. Set alignIcon prop to 'right' to inverse.
 *
 * @example
 *
 * <Button label="Edit" color="secondary" onClick={doEdit}>
 *   <ContentCreate />
 * </Button>
 *
 */
const Button = (props) => {
    const { alignIcon = 'left', children, classes: classesOverride, className, disabled, label, color = 'primary', size = 'small' } = props, rest = __rest(props, ["alignIcon", "children", "classes", "className", "disabled", "label", "color", "size"]);
    const translate = (0, core_1.useTranslate)();
    const isXSmall = (0, material_1.useMediaQuery)((theme) => theme.breakpoints.down('sm'));
    const restProps = (0, exports.sanitizeButtonRestProps)(rest);
    return isXSmall ? (label && !disabled ? ((0, jsx_runtime_1.jsx)(material_1.Tooltip, Object.assign({ title: translate(label, { _: label }) }, { children: (0, jsx_runtime_1.jsx)(material_1.IconButton, Object.assign({ "aria-label": translate(label, { _: label }), className: className, color: color }, restProps, { size: "large" }, { children: children }), void 0) }), void 0)) : ((0, jsx_runtime_1.jsx)(material_1.IconButton, Object.assign({ className: className, color: color, disabled: disabled }, restProps, { size: "large" }, { children: children }), void 0))) : ((0, jsx_runtime_1.jsxs)(StyledButton, Object.assign({ className: (0, classnames_1.default)(classes.button, className), color: color, size: size, "aria-label": label ? translate(label, { _: label }) : undefined, disabled: disabled }, restProps, { children: [alignIcon === 'left' &&
                children &&
                React.cloneElement(children, {
                    className: classes[`${size}Icon`],
                }), label && ((0, jsx_runtime_1.jsx)("span", Object.assign({ className: (0, classnames_1.default)({
                    [classes.label]: alignIcon === 'left',
                    [classes.labelRightIcon]: alignIcon !== 'left',
                }) }, { children: translate(label, { _: label }) }), void 0)), alignIcon === 'right' &&
                children &&
                React.cloneElement(children, {
                    className: classes[`${size}Icon`],
                })] }), void 0));
};
const sanitizeButtonRestProps = (_a) => {
    var { 
    // The next props are injected by Toolbar
    basePath, handleSubmit, handleSubmitWithRedirect, invalid, onSave, pristine, record, redirect, resource, saving, submitOnEnter, undoable } = _a, rest = __rest(_a, ["basePath", "handleSubmit", "handleSubmitWithRedirect", "invalid", "onSave", "pristine", "record", "redirect", "resource", "saving", "submitOnEnter", "undoable"]);
    return rest;
};
exports.sanitizeButtonRestProps = sanitizeButtonRestProps;
Button.propTypes = {
    alignIcon: prop_types_1.default.oneOf(['left', 'right']),
    children: prop_types_1.default.element,
    classes: prop_types_1.default.object,
    className: prop_types_1.default.string,
    color: prop_types_1.default.oneOf(['default', 'inherit', 'primary', 'secondary']),
    disabled: prop_types_1.default.bool,
    label: prop_types_1.default.string,
    size: prop_types_1.default.oneOf(['small', 'medium', 'large']),
};
exports.default = Button;
