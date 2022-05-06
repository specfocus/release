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
const Checkbox_1 = __importDefault(require("@mui/material/Checkbox"));
const FormControlLabel_1 = __importDefault(require("@mui/material/FormControlLabel"));
const react_1 = require("react");
const react_final_form_1 = require("react-final-form");
const ErrorMessage_1 = require("../../../components/final-form/ErrorMessage");
const useFieldset_1 = __importDefault(require("../useFieldset"));
const BooleanFieldGroup = (props) => {
    const { getFieldProps } = (0, useFieldset_1.default)(props);
    const errorField = (0, ErrorMessage_1.useFieldForErrors)(props.name);
    const isError = false; // showError(field);
    return (
    // <FormControl required={required} error={isError} {...formControlProps}>
    // !!label && <FormLabel {...formLabelProps}>{label}</FormLabel>
    Object.entries(props.schema.fields).map(([key, schema]) => {
        const props = getFieldProps(key, schema);
        return ((0, jsx_runtime_1.jsx)(react_1.Fragment, { children: (0, jsx_runtime_1.jsx)(FormControlLabel_1.default, { name: props.name, label: props.label, 
                // value={single ? undefined : item.value}
                disabled: props.disabled, control: (0, jsx_runtime_1.jsx)(react_final_form_1.Field, { type: "checkbox", name: props.name, render: (_a) => {
                        var _b = _a.input, { name, value, onChange, checked } = _b, restInput = __rest(_b, ["name", "value", "onChange", "checked"]);
                        return ((0, jsx_runtime_1.jsx)(Checkbox_1.default, { name: name, value: value, onChange: onChange, checked: checked, disabled: props.disabled, inputProps: Object.assign({}, restInput) }, void 0));
                    } }, void 0) }, void 0) }, props.name));
    }));
};
exports.default = BooleanFieldGroup;
