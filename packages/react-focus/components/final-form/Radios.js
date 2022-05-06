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
exports.Radios = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const ErrorMessage_1 = require("./ErrorMessage");
const react_final_form_1 = require("react-final-form");
function Radios(props) {
    const { name, data, label, required, helperText, formLabelProps, formControlLabelProps, fieldProps, formControlProps, radioGroupProps, formHelperTextProps, showError = ErrorMessage_1.showErrorOnChange } = props, restRadios = __rest(props, ["name", "data", "label", "required", "helperText", "formLabelProps", "formControlLabelProps", "fieldProps", "formControlProps", "radioGroupProps", "formHelperTextProps", "showError"]);
    const field = (0, ErrorMessage_1.useFieldForErrors)(name);
    const isError = showError(field);
    return ((0, jsx_runtime_1.jsxs)(material_1.FormControl, Object.assign({ required: required, error: isError }, formControlProps, { children: [!!label && (0, jsx_runtime_1.jsx)(material_1.FormLabel, Object.assign({}, formLabelProps, { children: label }), void 0), (0, jsx_runtime_1.jsx)(material_1.RadioGroup, Object.assign({}, radioGroupProps, { children: data.map((item, idx) => ((0, jsx_runtime_1.jsx)(material_1.FormControlLabel, Object.assign({ name: name, 
                    // @ts-ignore
                    label: item.label, value: item.value, disabled: item.disabled, control: (0, jsx_runtime_1.jsx)(react_final_form_1.Field, Object.assign({ name: name, type: "radio", render: (_a) => {
                            var _b = _a.input, { name, value, onChange, checked } = _b, restInput = __rest(_b, ["name", "value", "onChange", "checked"]);
                            return ((0, jsx_runtime_1.jsx)(material_1.Radio, Object.assign({ name: name, value: value, onChange: onChange, checked: checked, disabled: item.disabled, required: required, inputProps: Object.assign({ required }, restInput) }, restRadios), void 0));
                        } }, fieldProps), void 0) }, formControlLabelProps), idx))) }), void 0), (0, jsx_runtime_1.jsx)(ErrorMessage_1.ErrorMessage, { showError: isError, meta: field.meta, formHelperTextProps: formHelperTextProps, helperText: helperText }, void 0)] }), void 0));
}
exports.Radios = Radios;
