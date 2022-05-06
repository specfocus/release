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
exports.TimePicker = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const AdapterDateFns_1 = __importDefault(require("@mui/lab/AdapterDateFns"));
const LocalizationProvider_1 = __importDefault(require("@mui/lab/LocalizationProvider"));
const TimePicker_1 = __importDefault(require("@mui/lab/TimePicker"));
const TextField_1 = __importDefault(require("@mui/material/TextField"));
const react_final_form_1 = require("react-final-form");
const ErrorMessage_1 = require("./ErrorMessage");
function TimePicker(props) {
    const { name, fieldProps } = props, rest = __rest(props, ["name", "fieldProps"]);
    return ((0, jsx_runtime_1.jsx)(react_final_form_1.Field, Object.assign({ name: name, render: (params) => (0, jsx_runtime_1.jsx)(TimePickerWrapper, Object.assign({}, params, rest), void 0) }, fieldProps), void 0));
}
exports.TimePicker = TimePicker;
function TimePickerWrapper(props) {
    const _a = props.input, { name, onChange, value } = _a, restInput = __rest(_a, ["name", "onChange", "value"]), { meta, dateFunsUtils, locale, showError = ErrorMessage_1.showErrorOnChange } = props, rest = __rest(props, ["input", "meta", "dateFunsUtils", "locale", "showError"]);
    const { error, submitError } = meta;
    const isError = showError({ meta });
    const { helperText } = rest, lessrest = __rest(rest, ["helperText"]);
    return ((0, jsx_runtime_1.jsx)(LocalizationProvider_1.default, Object.assign({ dateAdapter: AdapterDateFns_1.default }, { children: (0, jsx_runtime_1.jsx)(TimePicker_1.default
        // autoOk={true}
        , Object.assign({ 
            // autoOk={true}
            onChange: onChange, value: value === '' ? null : value }, lessrest, { InputProps: restInput, renderInput: (params) => ((0, jsx_runtime_1.jsx)(TextField_1.default, Object.assign({}, params, { error: isError, name: name, onChange: onChange, helperText: isError ? (error || submitError) : helperText, fullWidth: true }), void 0)) }), void 0) }), void 0));
}
