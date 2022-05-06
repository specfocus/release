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
const prop_types_1 = __importDefault(require("prop-types"));
const TextField_1 = __importDefault(require("@mui/material/TextField"));
const core_1 = require("../../features/core");
const InputHelperText_1 = __importDefault(require("./InputHelperText"));
const sanitizeInputRestProps_1 = __importDefault(require("./sanitizeInputRestProps"));
const convertStringToNumber = value => {
    const float = parseFloat(value);
    return isNaN(float) ? null : float;
};
/**
 * An Input component for a number
 *
 * @example
 * <NumberInput source="nb_views" />
 *
 * You can customize the `step` props (which defaults to "any")
 * @example
 * <NumberInput source="nb_views" step={1} />
 *
 * The object passed as `options` props is passed to the material-ui <TextField> component
 */
const NumberInput = (_a) => {
    var { format, helperText, label, margin = 'dense', onBlur, onFocus, onChange, options, parse = convertStringToNumber, resource, source, step, min, max, validate, variant = 'filled', inputProps: overrideInputProps } = _a, rest = __rest(_a, ["format", "helperText", "label", "margin", "onBlur", "onFocus", "onChange", "options", "parse", "resource", "source", "step", "min", "max", "validate", "variant", "inputProps"]);
    const { id, input, isRequired, meta: { error, submitError, touched }, } = (0, core_1.useInput)(Object.assign({ format,
        onBlur,
        onChange,
        onFocus,
        parse,
        resource,
        source, type: 'number', validate }, rest));
    const inputProps = Object.assign(Object.assign({}, overrideInputProps), { step, min, max });
    return ((0, jsx_runtime_1.jsx)(TextField_1.default, Object.assign({ id: id }, input, { variant: variant, error: !!(touched && (error || submitError)), helperText: (0, jsx_runtime_1.jsx)(InputHelperText_1.default, { touched: touched, error: error || submitError, helperText: helperText }, void 0), label: (0, jsx_runtime_1.jsx)(core_1.FieldTitle, { label: label, source: source, resource: resource, isRequired: isRequired }, void 0), margin: margin, inputProps: inputProps }, options, (0, sanitizeInputRestProps_1.default)(rest)), void 0));
};
NumberInput.propTypes = {
    label: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.bool]),
    options: prop_types_1.default.object,
    resource: prop_types_1.default.string,
    source: prop_types_1.default.string,
    step: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
};
NumberInput.defaultProps = {
    options: {},
    step: 'any',
    textAlign: 'right',
};
exports.default = NumberInput;
