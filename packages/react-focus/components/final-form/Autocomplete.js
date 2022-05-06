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
exports.Autocomplete = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Autocomplete_1 = __importDefault(require("@mui/material/Autocomplete"));
const react_final_form_1 = require("react-final-form");
const ErrorMessage_1 = require("./ErrorMessage");
const TextField_1 = __importDefault(require("@mui/material/TextField"));
function Autocomplete(props) {
    const { name, fieldProps } = props, rest = __rest(props, ["name", "fieldProps"]);
    return ((0, jsx_runtime_1.jsx)(react_final_form_1.Field, Object.assign({ name: name, render: (fieldRenderProps) => (0, jsx_runtime_1.jsx)(AutocompleteWrapper, Object.assign({}, fieldRenderProps, rest), void 0) }, fieldProps), void 0));
}
exports.Autocomplete = Autocomplete;
function AutocompleteWrapper(props) {
    const { input: { name, value, onChange }, meta, options, label, required, multiple, textFieldProps, getOptionValue, showError = ErrorMessage_1.showErrorOnChange, placeholder, onChange: onChangeCallback } = props, rest = __rest(props, ["input", "meta", "options", "label", "required", "multiple", "textFieldProps", "getOptionValue", "showError", "placeholder", "onChange"]);
    function getValue(values) {
        if (!getOptionValue) {
            return values;
        }
        // ternary hell...
        return multiple ? (values ? values.map(getOptionValue) : null) : values ? getOptionValue(values) : null;
    }
    const { helperText } = rest, lessrest = __rest(rest, ["helperText"]);
    const _a = textFieldProps || {}, { variant } = _a, restTextFieldProps = __rest(_a, ["variant"]);
    // yuck...
    let defaultValue;
    if (!getOptionValue) {
        defaultValue = value;
    }
    else if (value) {
        options.forEach((option) => {
            const optionValue = getOptionValue(option);
            if (multiple) {
                if (!defaultValue) {
                    defaultValue = [];
                }
                value.forEach((v) => {
                    if (v === optionValue) {
                        defaultValue.push(option);
                    }
                });
            }
            else {
                if (value === optionValue) {
                    defaultValue = option;
                }
            }
        });
    }
    const onChangeFunc = (
    // eslint-disable-next-line @typescript-eslint/ban-types
    event, value, reason, details) => {
        const gotValue = getValue(value);
        onChange(gotValue);
        if (onChangeCallback) {
            // @ts-ignore
            onChangeCallback(event, value, reason, details);
        }
    };
    const { error, submitError } = meta;
    const isError = showError({ meta });
    return ((0, jsx_runtime_1.jsx)(Autocomplete_1.default, Object.assign({ multiple: multiple, onChange: onChangeFunc, options: options, value: defaultValue, renderInput: (params) => {
            var _a, _b, _c, _d, _e;
            return ((0, jsx_runtime_1.jsx)(TextField_1.default, Object.assign({ label: label, required: required, helperText: isError ? error || submitError : helperText, error: isError, name: name, placeholder: placeholder, variant: variant }, params, restTextFieldProps, { InputProps: Object.assign(Object.assign(Object.assign(Object.assign({}, params.InputProps), restTextFieldProps.InputProps), (((_a = restTextFieldProps.InputProps) === null || _a === void 0 ? void 0 : _a.startAdornment) && {
                    startAdornment: ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [restTextFieldProps.InputProps.startAdornment, (_b = params.InputProps) === null || _b === void 0 ? void 0 : _b.startAdornment] }, void 0)),
                })), (((_c = restTextFieldProps.InputProps) === null || _c === void 0 ? void 0 : _c.endAdornment) && {
                    endAdornment: ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(_d = params.InputProps) === null || _d === void 0 ? void 0 : _d.endAdornment, (_e = restTextFieldProps.InputProps) === null || _e === void 0 ? void 0 : _e.endAdornment] }, void 0)),
                })), fullWidth: true }), void 0));
        } }, lessrest), void 0));
}
