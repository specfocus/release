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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextFieldWrapper = exports.TextField = exports.TYPE_WEEK = exports.TYPE_TIME = exports.TYPE_MONTH = exports.TYPE_DATETIME_LOCAL = exports.TYPE_DATE = exports.TYPE_TELEPHONE = exports.TYPE_URL = exports.TYPE_NUMBER = exports.TYPE_EMAIL = exports.TYPE_TEXT = exports.TYPE_PASSWORD = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const react_final_form_1 = require("react-final-form");
const ErrorMessage_1 = require("./ErrorMessage");
exports.TYPE_PASSWORD = 'password';
exports.TYPE_TEXT = 'text';
exports.TYPE_EMAIL = 'email';
exports.TYPE_NUMBER = 'number';
exports.TYPE_URL = 'url';
exports.TYPE_TELEPHONE = 'tel';
exports.TYPE_DATE = 'date';
exports.TYPE_DATETIME_LOCAL = 'datetime-local';
exports.TYPE_MONTH = 'month';
exports.TYPE_TIME = 'time';
exports.TYPE_WEEK = 'week';
function TextField(props) {
    const { name, type, fieldProps } = props, rest = __rest(props, ["name", "type", "fieldProps"]);
    return ((0, jsx_runtime_1.jsx)(react_final_form_1.Field, Object.assign({ name: name, type: type, render: ({ input, meta }) => ((0, jsx_runtime_1.jsx)(TextFieldWrapper, Object.assign({ input: input, meta: meta, name: name, type: type }, rest), void 0)) }, fieldProps), void 0));
}
exports.TextField = TextField;
function TextFieldWrapper(props) {
    const _a = props.input, { name, value, type, onChange } = _a, restInput = __rest(_a, ["name", "value", "type", "onChange"]), { meta, required, fullWidth = true, helperText, showError = ErrorMessage_1.showErrorOnChange } = props, rest = __rest(props, ["input", "meta", "required", "fullWidth", "helperText", "showError"]);
    const { error, submitError } = meta;
    const isError = showError({ meta });
    return ((0, jsx_runtime_1.jsx)(material_1.TextField, Object.assign({ fullWidth: fullWidth, helperText: isError ? error || submitError : helperText, error: isError, onChange: onChange, name: name, value: value, type: type, required: required, inputProps: Object.assign({ required }, restInput) }, rest), void 0));
}
exports.TextFieldWrapper = TextFieldWrapper;
