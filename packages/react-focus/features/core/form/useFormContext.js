"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFormContext = void 0;
const react_1 = require("react");
const FormContext_1 = require("./FormContext");
/**
 * Retrieve the form context enabling consumers to alter its save function or to register inputs inside a form group.
 * @returns {FormContext} The form context.
 */
const useFormContext = () => (0, react_1.useContext)(FormContext_1.FormContext);
exports.useFormContext = useFormContext;
