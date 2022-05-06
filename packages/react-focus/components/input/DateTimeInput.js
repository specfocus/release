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
const sanitizeInputRestProps_1 = __importDefault(require("./sanitizeInputRestProps"));
const InputHelperText_1 = __importDefault(require("./InputHelperText"));
const leftPad = (nb = 2) => value => ('0'.repeat(nb) + value).slice(-nb);
const leftPad4 = leftPad(4);
const leftPad2 = leftPad(2);
/**
 * @param {Date} value value to convert
 * @returns {String} A standardized datetime (yyyy-MM-ddThh:mm), to be passed to an <input type="datetime-local" />
 */
const convertDateToString = (value) => {
    if (!(value instanceof Date) || isNaN(value.getDate()))
        return '';
    const yyyy = leftPad4(value.getFullYear());
    const MM = leftPad2(value.getMonth() + 1);
    const dd = leftPad2(value.getDate());
    const hh = leftPad2(value.getHours());
    const mm = leftPad2(value.getMinutes());
    return `${yyyy}-${MM}-${dd}T${hh}:${mm}`;
};
// yyyy-MM-ddThh:mm
const dateTimeRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/;
const defaultInputLabelProps = { shrink: true };
/**
 * Converts a date from the Redux store, with timezone, to a date string
 * without timezone for use in an <input type="datetime-local" />.
 *
 * @param {Date | String} value date string or object
 */
const formatDateTime = (value) => {
    // null, undefined and empty string values should not go through convertDateToString
    // otherwise, it returns undefined and will make the input an uncontrolled one.
    if (value == null || value === '') {
        return '';
    }
    if (value instanceof Date) {
        return convertDateToString(value);
    }
    // valid dates should not be converted
    if (dateTimeRegex.test(value)) {
        return value;
    }
    return convertDateToString(new Date(value));
};
/**
 * Converts a datetime string without timezone to a date object
 * with timezone, using the browser timezone.
 *
 * @param {string} value Date string, formatted as yyyy-MM-ddThh:mm
 * @return {Date}
 */
const parseDateTime = (value) => new Date(value);
/**
 * Input component for entering a date and a time with timezone, using the browser locale
 */
const DateTimeInput = (_a) => {
    var { defaultValue, format = formatDateTime, initialValue, label, helperText, margin = 'dense', onBlur, onChange, onFocus, options, source, resource, parse = parseDateTime, validate, variant = 'filled' } = _a, rest = __rest(_a, ["defaultValue", "format", "initialValue", "label", "helperText", "margin", "onBlur", "onChange", "onFocus", "options", "source", "resource", "parse", "validate", "variant"]);
    const { id, input, isRequired, meta } = (0, core_1.useInput)(Object.assign({ defaultValue,
        format,
        initialValue,
        onBlur,
        onChange,
        onFocus,
        parse,
        resource,
        source, type: 'datetime-local', validate }, rest));
    const { error, submitError, touched } = meta;
    return ((0, jsx_runtime_1.jsx)(TextField_1.default, Object.assign({ id: id }, input, { 
        // Workaround https://github.com/final-form/react-final-form/issues/529
        // and https://github.com/final-form/react-final-form/issues/431
        value: format(input.value) || '', variant: variant, margin: margin, error: !!(touched && (error || submitError)), helperText: (0, jsx_runtime_1.jsx)(InputHelperText_1.default, { touched: touched, error: error || submitError, helperText: helperText }, void 0), label: (0, jsx_runtime_1.jsx)(core_1.FieldTitle, { label: label, source: source, resource: resource, isRequired: isRequired }, void 0), InputLabelProps: defaultInputLabelProps }, options, (0, sanitizeInputRestProps_1.default)(rest)), void 0));
};
DateTimeInput.propTypes = {
    label: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.bool]),
    options: prop_types_1.default.object,
    resource: prop_types_1.default.string,
    source: prop_types_1.default.string,
};
DateTimeInput.defaultProps = {
    options: {},
};
exports.default = DateTimeInput;
