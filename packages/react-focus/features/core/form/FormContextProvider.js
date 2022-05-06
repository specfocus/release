"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormContextProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const FormContext_1 = require("./FormContext");
/**
 * Provides utilities to Form children, allowing them to change the default save function or register inputs to a group.
 * @param props The component props
 * @param {ReactNode} props.children The form content
 * @param {FormContextValue} props.value The form context
 */
const FormContextProvider = ({ children, value, }) => (0, jsx_runtime_1.jsx)(FormContext_1.FormContext.Provider, Object.assign({ value: value }, { children: children }), void 0);
exports.FormContextProvider = FormContextProvider;
