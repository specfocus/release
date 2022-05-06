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
/**
 * Convert Date object to String
 *
 * @param {Date} value value to convert
 * @returns {String} A standardized date (yyyy-MM-dd), to be passed to an <input type="date" />
 */
const convertDateToString = (value) => {
    if (!(value instanceof Date) || isNaN(value.getDate()))
        return '';
    const pad = '00';
    const yyyy = value.getFullYear().toString();
    const MM = (value.getMonth() + 1).toString();
    const dd = value.getDate().toString();
    return `${yyyy}-${(pad + MM).slice(-2)}-${(pad + dd).slice(-2)}`;
};
const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
const defaultInputLabelProps = { shrink: true };
const getStringFromDate = (value) => {
    // null, undefined and empty string values should not go through dateFormatter
    // otherwise, it returns undefined and will make the input an uncontrolled one.
    if (value == null || value === '') {
        return '';
    }
    if (value instanceof Date) {
        return convertDateToString(value);
    }
    // valid dates should not be converted
    if (dateRegex.test(value)) {
        return value;
    }
    return convertDateToString(new Date(value));
};
/**
 * Form input to edit a Date string value in the "YYYY-MM-DD" format (e.g. '2021-06-23').
 *
 * Renders a date picker (the exact UI depends on the browser).
 *
 * @example
 * import { Edit, SimpleForm, DateInput } from '../../app';
 *
 * const PostEdit = (props) => (
 *     <Edit {...props}>
 *         <SimpleForm>
 *             <DateInput source="published_at" />
 *         </SimpleForm>
 *     </Edit>
 * );
 *
 * @example
 * // If the initial value is a Date object, DateInput converts it to a string
 * // but you must pass a custom parse method to convert the form value
 * // (which is always a date string) back to a Date object.
 * <DateInput source="published_at" parse={val => new Date(val)} />
 */
const DateInput = (_a) => {
    var { defaultValue, format = getStringFromDate, initialValue, label, name, options, source, resource, helperText, margin = 'dense', onBlur, onChange, onFocus, parse, validate, variant = 'filled' } = _a, rest = __rest(_a, ["defaultValue", "format", "initialValue", "label", "name", "options", "source", "resource", "helperText", "margin", "onBlur", "onChange", "onFocus", "parse", "validate", "variant"]);
    const { id, input, isRequired, meta } = (0, core_1.useInput)(Object.assign({ defaultValue,
        format, formatOnBlur: true, initialValue,
        name,
        onBlur,
        onChange,
        onFocus,
        parse,
        resource,
        source,
        validate }, rest));
    const { error, submitError, touched } = meta;
    return ((0, jsx_runtime_1.jsx)(TextField_1.default, Object.assign({ id: id }, input, { 
        // Workaround https://github.com/final-form/react-final-form/issues/529
        // & https://github.com/final-form/react-final-form/issues/431
        value: format(input.value) || '', variant: variant, margin: margin, type: "date", error: !!(touched && (error || submitError)), helperText: (0, jsx_runtime_1.jsx)(InputHelperText_1.default, { touched: touched, error: error || submitError, helperText: helperText }, void 0), label: (0, jsx_runtime_1.jsx)(core_1.FieldTitle, { label: label, source: source, resource: resource, isRequired: isRequired }, void 0), InputLabelProps: defaultInputLabelProps }, options, (0, sanitizeInputRestProps_1.default)(rest)), void 0));
};
DateInput.propTypes = {
    label: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.bool]),
    options: prop_types_1.default.object,
    resource: prop_types_1.default.string,
    source: prop_types_1.default.string,
};
DateInput.defaultProps = {
    options: {},
};
exports.default = DateInput;
