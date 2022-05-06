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
const React = __importStar(require("react"));
const styles_1 = require("@mui/material/styles");
const prop_types_1 = __importDefault(require("prop-types"));
const InputLabel_1 = __importDefault(require("@mui/material/InputLabel"));
const FormControl_1 = __importDefault(require("@mui/material/FormControl"));
const core_1 = require("../../features/core");
const PREFIX = 'RaLabeled';
const classes = {
    label: `${PREFIX}-label`,
    value: `${PREFIX}-value`,
};
const StyledFormControl = (0, styles_1.styled)(FormControl_1.default)(({ theme }) => ({
    [`& .${classes.label}`]: {
        position: 'relative',
    },
    [`& .${classes.value}`]: {
        fontFamily: theme.typography.fontFamily,
        color: 'currentColor',
        padding: `calc(${theme.spacing(1)} 0 ${theme.spacing(1)} / 2)`,
        border: 0,
        boxSizing: 'content-box',
        verticalAlign: 'middle',
        background: 'none',
        margin: 0,
        display: 'block',
        width: '100%',
    },
}));
/**
 * Use any component as read-only Input, labeled just like other Inputs.
 *
 * Useful to use a Field in the Edit or Create components.
 * The child component will receive the current record.
 *
 * This component name doesn't have a typo. We had to choose between
 * the American English "Labeled", and the British English "Labelled".
 * We flipped a coin.
 *
 * @example
 * <Labeled label="Comments">
 *     <FooComponent source="title" />
 * </Labeled>
 */
const Labeled = (props) => {
    const { children, className, fullWidth, id, input, isRequired, label, margin = 'dense', meta, resource, source } = props, rest = __rest(props, ["children", "className", "fullWidth", "id", "input", "isRequired", "label", "margin", "meta", "resource", "source"]);
    if (!label && !source) {
        // @ts-ignore
        const name = children && children.type && children.type.name;
        throw new Error(`Cannot create label for component <${name}>: You must set either the label or source props. You can also disable automated label insertion by setting 'addLabel: false' in the component default props`);
    }
    const restProps = fullWidth ? Object.assign(Object.assign({}, rest), { fullWidth }) : rest;
    return ((0, jsx_runtime_1.jsxs)(StyledFormControl, Object.assign({ className: className, fullWidth: fullWidth, error: meta && meta.touched && !!(meta.error || meta.submitError), margin: margin }, { children: [(0, jsx_runtime_1.jsx)(InputLabel_1.default, Object.assign({ htmlFor: id, shrink: true, className: classes.label }, { children: (0, jsx_runtime_1.jsx)(core_1.FieldTitle, { label: label, source: source, resource: resource, isRequired: isRequired }, void 0) }), void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: classes.value }, { children: children && typeof children.type !== 'string'
                    ? React.cloneElement(children, Object.assign({ input,
                        resource }, restProps))
                    : children }), void 0)] }), void 0));
};
Labeled.propTypes = {
    basePath: prop_types_1.default.string,
    children: prop_types_1.default.element,
    className: prop_types_1.default.string,
    fullWidth: prop_types_1.default.bool,
    id: prop_types_1.default.string,
    input: prop_types_1.default.object,
    isRequired: prop_types_1.default.bool,
    label: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.element]),
    meta: prop_types_1.default.object,
    onChange: prop_types_1.default.func,
    record: prop_types_1.default.object,
    resource: prop_types_1.default.string,
    source: prop_types_1.default.string,
    labelStyle: prop_types_1.default.object,
};
exports.default = Labeled;
