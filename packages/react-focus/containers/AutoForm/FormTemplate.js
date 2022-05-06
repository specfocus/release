"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const styles_1 = require("@mui/styles");
const prop_types_1 = __importDefault(require("prop-types"));
const react_1 = require("react");
const react_final_form_1 = require("react-final-form");
const Autocomplete_1 = require("../../components/final-form/Autocomplete");
const Checkboxes_1 = require("../../components/final-form/Checkboxes");
const DatePicker_1 = require("../../components/final-form/DatePicker");
const Radios_1 = require("../../components/final-form/Radios");
const Select_1 = require("../../components/final-form/Select");
const TextField_1 = require("../../components/final-form/TextField");
const TimePicker_1 = require("../../components/final-form/TimePicker");
const Validation_1 = require("../../components/final-form/Validation");
const useStyles = (0, styles_1.makeStyles)((theme) => ({
    centerItem: {
        height: '100px',
        textAlign: 'center'
    }
}));
function FormTemplate({ data, handleSubmit, validationSchema, initialValues, handleCancel, cancel, submitButtonLabel, cancelButtonLabel, cancelDisabled }) {
    const classes = useStyles();
    const getMultiColFormComponent = (formComponentData) => {
        const length = formComponentData.length;
        return formComponentData.map((elem, index) => {
            return ((0, jsx_runtime_1.jsx)(material_1.Grid, Object.assign({ item: true, xs: 12, sm: Math.ceil(12 / length), className: classes.centerItem }, { children: getFormComponentHelper(elem) }), index));
        });
    };
    const getFormComponentHelper = (formComponentData) => {
        const { label, name, type, options, optionLabelKey, optionValueKey, style } = formComponentData;
        const valueKey = optionValueKey || optionLabelKey;
        switch (type) {
            case 'text':
            case 'password':
                return ((0, jsx_runtime_1.jsx)(TextField_1.TextField, { label: label, name: name, variant: "outlined", type: type, style: style }, void 0));
            case 'select':
                return ((0, jsx_runtime_1.jsx)(Select_1.Select, Object.assign({ name: name, label: label, variant: "outlined", style: style }, { children: options.map((option, index) => {
                        return ((0, jsx_runtime_1.jsx)(material_1.MenuItem, Object.assign({ value: option[valueKey] }, { children: option[optionLabelKey] }), `${option[optionLabelKey]}-${index}`));
                    }) }), void 0));
            case 'time':
                return ((0, jsx_runtime_1.jsx)(TimePicker_1.TimePicker, { name: name, label: label, fieldProps: {
                        variant: 'outlined'
                    } }, void 0));
            case 'date':
                return ((0, jsx_runtime_1.jsx)(DatePicker_1.DatePicker, { name: name, label: label, fieldProps: {
                        variant: 'outlined'
                    } }, void 0));
            case 'autocomplete':
                return ((0, jsx_runtime_1.jsx)(Autocomplete_1.Autocomplete, { label: label, name: name, options: options, 
                    // @ts-ignore
                    getOptionValue: (option) => option[valueKey], getOptionLabel: (option) => option[optionLabelKey], textFieldProps: { variant: 'outlined', label: label }, multiple: formComponentData.multiple ? formComponentData.multiple : false }, void 0));
            case 'checkbox':
                return ((0, jsx_runtime_1.jsx)(Checkboxes_1.Checkboxes, { name: name, formGroupProps: { row: true }, data: options }, void 0));
            case 'radio':
                return ((0, jsx_runtime_1.jsx)(Radios_1.Radios, { label: label, name: name, radioGroupProps: { row: true }, data: options }, void 0));
            default:
                return null;
        }
    };
    const getFormComponent = (formComponentData) => {
        return Array.isArray(formComponentData) ? ((0, jsx_runtime_1.jsx)(material_1.Grid, Object.assign({ container: true, direction: "row", sx: {
                justifyItems: 'space-between',
                alignItems: 'center'
            }, spacing: 2 }, { children: (0, jsx_runtime_1.jsx)(material_1.Grid, Object.assign({ item: true }, { children: getMultiColFormComponent(formComponentData) }), void 0) }), void 0)) : ((0, jsx_runtime_1.jsx)(material_1.Grid, Object.assign({ item: true, xs: 12, className: classes.centerItem }, { children: getFormComponentHelper(formComponentData) }), void 0));
    };
    const sleep = () => new Promise((resolve) => setTimeout(resolve, 100));
    return ((0, jsx_runtime_1.jsx)(react_final_form_1.Form, { onSubmit: (data) => __awaiter(this, void 0, void 0, function* () {
            yield sleep();
            handleSubmit(data);
        }), initialValues: initialValues, validate: (0, Validation_1.makeValidate)(validationSchema), render: ({ handleSubmit, form, submitting, pristine, values }) => ((0, jsx_runtime_1.jsx)("form", Object.assign({ onSubmit: handleSubmit, noValidate: true }, { children: (0, jsx_runtime_1.jsxs)(material_1.Grid, Object.assign({ container: true, direction: "row", sx: { justifyItems: 'center', alignItems: 'center' } }, { children: [data.map((formComponentData, index) => {
                        const { name } = formComponentData;
                        return ((0, jsx_runtime_1.jsx)(react_1.Fragment, { children: getFormComponent(formComponentData) }, `${name} ${index}`));
                    }), (0, jsx_runtime_1.jsx)(material_1.Grid, Object.assign({ container: true, direction: "row", sx: { justifyItems: 'center', alignItems: 'center' }, spacing: 2 }, { children: (0, jsx_runtime_1.jsxs)(material_1.Grid, Object.assign({ item: true }, { children: [cancel && ((0, jsx_runtime_1.jsx)(material_1.Grid, Object.assign({ item: true }, { children: (0, jsx_runtime_1.jsx)(material_1.Button, Object.assign({ variant: "contained", color: "secondary", onClick: handleCancel || form.reset, disabled: submitting || cancelDisabled }, { children: cancelButtonLabel || 'Cancel' }), void 0) }), void 0)), (0, jsx_runtime_1.jsxs)(material_1.Grid, Object.assign({ item: true }, { children: [submitting && (0, jsx_runtime_1.jsx)(material_1.LinearProgress, {}, void 0), (0, jsx_runtime_1.jsx)(material_1.Button, Object.assign({ disabled: submitting, type: "submit", color: "primary", variant: "contained" }, { children: submitButtonLabel || 'Submit' }), void 0)] }), void 0)] }), void 0) }), void 0)] }), void 0) }), void 0)) }, void 0));
}
exports.default = FormTemplate;
FormTemplate.propTypes = {
    data: prop_types_1.default.array.isRequired,
    validationSchema: prop_types_1.default.any.isRequired,
    handleSubmit: prop_types_1.default.func.isRequired,
    initialValues: prop_types_1.default.any.isRequired,
    handleCancel: prop_types_1.default.func
};
FormTemplate.defaultProps = {
    cancel: true
};
