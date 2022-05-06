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
const sanitizeInputRestProps = (_a) => {
    var { afterSubmit, allowEmpty, allowNull, alwaysOn, basePath, beforeSubmit, component, data, defaultValue, error, format, formatOnBlur, formClassName, initialValue, initializeForm, input, isEqual, isRequired, label, limitChoicesToValue, locale, meta, multiple, name, options, optionText, optionValue, parse, record, ref, render, resource, source, submitError, subscription, textAlign, translate, translateChoice, type, validate, validateFields, value } = _a, rest = __rest(_a, ["afterSubmit", "allowEmpty", "allowNull", "alwaysOn", "basePath", "beforeSubmit", "component", "data", "defaultValue", "error", "format", "formatOnBlur", "formClassName", "initialValue", "initializeForm", "input", "isEqual", "isRequired", "label", "limitChoicesToValue", "locale", "meta", "multiple", "name", "options", "optionText", "optionValue", "parse", "record", "ref", "render", "resource", "source", "submitError", "subscription", "textAlign", "translate", "translateChoice", "type", "validate", "validateFields", "value"]);
    return rest;
};
exports.default = sanitizeInputRestProps;
