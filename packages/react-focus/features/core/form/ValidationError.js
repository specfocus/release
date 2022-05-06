"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const i18n_1 = require("../i18n");
const ValidationError = (props) => {
    const { error } = props;
    const translate = (0, i18n_1.useTranslate)();
    if (error.message) {
        const { message, args } = error;
        return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: translate(message, Object.assign({ _: message }, args)) }, void 0);
    }
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: translate(error, { _: error }) }, void 0);
};
exports.default = ValidationError;
