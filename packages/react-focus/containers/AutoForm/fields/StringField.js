"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("date-fns");
const TextField_1 = require("../../../components/final-form/TextField");
const DateField_1 = __importDefault(require("./DateField"));
const EnumField_1 = __importDefault(require("./EnumField"));
const StringField = (props) => {
    const { domain } = props;
    switch (domain === null || domain === void 0 ? void 0 : domain.format) {
        case 'date':
            return (
            // @ts-ignore
            (0, jsx_runtime_1.jsx)(DateField_1.default, Object.assign({}, props), void 0));
    }
    if ((domain === null || domain === void 0 ? void 0 : domain.enum) && !props.readonly) {
        return (
        // @ts-ignore
        (0, jsx_runtime_1.jsx)(EnumField_1.default, Object.assign({}, props), void 0));
    }
    const textFieldProps = {
        name: props.name
    };
    if (props.readonly) {
        Object.assign(textFieldProps, {
            disabled: true,
            InputProps: {
                readOnly: true,
            },
            variant: 'outlined',
            'aria-readonly': true,
        });
    }
    return (
    // @ts-ignore
    (0, jsx_runtime_1.jsx)(TextField_1.TextField, Object.assign({}, props, { helperText: props.required && '* Required' }, textFieldProps), void 0));
};
exports.default = StringField;
