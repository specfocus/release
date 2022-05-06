"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const FormField_1 = __importDefault(require("./FormField"));
exports.default = (BaseComponent, fieldProps = {}) => {
    const WithFormField = props => ((0, jsx_runtime_1.jsx)(FormField_1.default, Object.assign({ component: BaseComponent }, fieldProps, props), void 0));
    return WithFormField;
};
