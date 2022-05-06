"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFormGroupContext = void 0;
const react_1 = require("react");
const FormGroupContext_1 = require("./FormGroupContext");
/**
 * Retrieve the name of the form group the consumer belongs to. May be undefined if the consumer is not inside a form group.
 */
const useFormGroupContext = () => {
    const context = (0, react_1.useContext)(FormGroupContext_1.FormGroupContext);
    return context;
};
exports.useFormGroupContext = useFormGroupContext;
