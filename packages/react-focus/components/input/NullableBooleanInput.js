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
const styles_1 = require("@mui/material/styles");
const prop_types_1 = __importDefault(require("prop-types"));
const TextField_1 = __importDefault(require("@mui/material/TextField"));
const MenuItem_1 = __importDefault(require("@mui/material/MenuItem"));
const classnames_1 = __importDefault(require("classnames"));
const core_1 = require("../../features/core");
const sanitizeInputRestProps_1 = __importDefault(require("./sanitizeInputRestProps"));
const InputHelperText_1 = __importDefault(require("./InputHelperText"));
const PREFIX = 'RaNullableBooleanInput';
const classes = {
    input: `${PREFIX}-input`,
};
const StyledTextField = (0, styles_1.styled)(TextField_1.default)(({ theme }) => ({
    [`&.${classes.input}`]: { width: theme.spacing(16) },
}));
const getBooleanFromString = (value) => {
    if (value === 'true')
        return true;
    if (value === 'false')
        return false;
    return null;
};
const getStringFromBoolean = (value) => {
    if (value === true)
        return 'true';
    if (value === false)
        return 'false';
    return '';
};
const NullableBooleanInput = (props) => {
    const { className, format = getStringFromBoolean, helperText, label, margin = 'dense', onBlur, onChange, onFocus, options, parse = getBooleanFromString, resource, source, validate, variant = 'filled', nullLabel = 'ra.boolean.null', falseLabel = 'ra.boolean.false', trueLabel = 'ra.boolean.true' } = props, rest = __rest(props, ["className", "format", "helperText", "label", "margin", "onBlur", "onChange", "onFocus", "options", "parse", "resource", "source", "validate", "variant", "nullLabel", "falseLabel", "trueLabel"]);
    const translate = (0, core_1.useTranslate)();
    const { id, input, isRequired, meta: { error, submitError, touched }, } = (0, core_1.useInput)(Object.assign({ format,
        onBlur,
        onChange,
        onFocus,
        parse,
        resource,
        source,
        validate }, rest));
    return ((0, jsx_runtime_1.jsxs)(StyledTextField, Object.assign({ id: id }, input, { select: true, margin: margin, label: (0, jsx_runtime_1.jsx)(core_1.FieldTitle, { label: label, source: source, resource: resource, isRequired: isRequired }, void 0), error: !!(touched && (error || submitError)), helperText: (0, jsx_runtime_1.jsx)(InputHelperText_1.default, { touched: touched, error: error || submitError, helperText: helperText }, void 0), className: (0, classnames_1.default)(classes.input, className), variant: variant }, options, (0, sanitizeInputRestProps_1.default)(rest), { children: [(0, jsx_runtime_1.jsx)(MenuItem_1.default, Object.assign({ value: "" }, { children: translate(nullLabel) }), void 0), (0, jsx_runtime_1.jsx)(MenuItem_1.default, Object.assign({ value: "false" }, { children: translate(falseLabel) }), void 0), (0, jsx_runtime_1.jsx)(MenuItem_1.default, Object.assign({ value: "true" }, { children: translate(trueLabel) }), void 0)] }), void 0));
};
NullableBooleanInput.propTypes = {
    label: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.bool]),
    options: prop_types_1.default.object,
    resource: prop_types_1.default.string,
    source: prop_types_1.default.string,
    nullLabel: prop_types_1.default.string,
    falseLabel: prop_types_1.default.string,
    trueLabel: prop_types_1.default.string,
};
exports.default = NullableBooleanInput;
