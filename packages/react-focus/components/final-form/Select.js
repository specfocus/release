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
exports.Select = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const ErrorMessage_1 = require("./ErrorMessage");
const react_final_form_1 = require("react-final-form");
function Select(props) {
    const { name, label, data, children, required, multiple, helperText, fieldProps, inputLabelProps, formControlProps, formHelperTextProps, menuItemProps, showError = ErrorMessage_1.showErrorOnChange } = props, restSelectProps = __rest(props, ["name", "label", "data", "children", "required", "multiple", "helperText", "fieldProps", "inputLabelProps", "formControlProps", "formHelperTextProps", "menuItemProps", "showError"]);
    if (!data && !children) {
        throw new Error('Please specify either children or data as an attribute.');
    }
    const { variant } = restSelectProps;
    const field = (0, ErrorMessage_1.useFieldForErrors)(name);
    const isError = showError(field);
    return ((0, jsx_runtime_1.jsx)(react_final_form_1.Field, Object.assign({ name: name, render: (_a) => {
            var _b = _a.input, { name, value, onChange } = _b, restInput = __rest(_b, ["name", "value", "onChange"]);
            // prevents an error that happens if you don't have initialValues defined in advance
            const finalValue = multiple && !value ? [] : value;
            const labelId = `select-input-${name}`;
            return ((0, jsx_runtime_1.jsxs)(material_1.FormControl, Object.assign({ required: required, error: isError, fullWidth: true, variant: variant }, formControlProps, { children: [!!label && ((0, jsx_runtime_1.jsx)(material_1.InputLabel, Object.assign({ id: labelId }, inputLabelProps, { children: label }), void 0)), (0, jsx_runtime_1.jsx)(material_1.Select, Object.assign({ name: name, value: finalValue, onChange: onChange, multiple: multiple, label: label, labelId: labelId, inputProps: Object.assign({ required }, restInput) }, restSelectProps, { children: data
                            ? data.map((item) => ((0, jsx_runtime_1.jsx)(material_1.MenuItem, Object.assign({ value: item.value, disabled: item.disabled }, menuItemProps, { children: item.label }), item.value)))
                            : children }), void 0), (0, jsx_runtime_1.jsx)(ErrorMessage_1.ErrorMessage, { showError: isError, meta: field.meta, formHelperTextProps: formHelperTextProps, helperText: helperText }, void 0)] }), void 0));
        } }, fieldProps), void 0));
}
exports.Select = Select;
