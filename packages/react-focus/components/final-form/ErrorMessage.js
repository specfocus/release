"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showErrorOnBlur = exports.showErrorOnChange = exports.useFieldForErrors = exports.ErrorMessage = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_final_form_1 = require("react-final-form");
const material_1 = require("@mui/material");
function ErrorMessage({ showError, meta, formHelperTextProps, helperText }) {
    if (showError) {
        return (0, jsx_runtime_1.jsx)(material_1.FormHelperText, Object.assign({}, formHelperTextProps, { children: meta.error || meta.submitError }), void 0);
    }
    else if (helperText) {
        return (0, jsx_runtime_1.jsx)(material_1.FormHelperText, Object.assign({}, formHelperTextProps, { children: helperText }), void 0);
    }
    else {
        return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}, void 0);
    }
}
exports.ErrorMessage = ErrorMessage;
const config = {
    subscription: {
        error: true,
        submitError: true,
        dirtySinceLastSubmit: true,
        touched: true,
        modified: true,
    },
};
const useFieldForErrors = (name) => (0, react_final_form_1.useField)(name, config);
exports.useFieldForErrors = useFieldForErrors;
const showErrorOnChange = ({ meta: { submitError, dirtySinceLastSubmit, error, touched, modified }, }) => !!(((submitError && !dirtySinceLastSubmit) || error) && (touched || modified));
exports.showErrorOnChange = showErrorOnChange;
const showErrorOnBlur = ({ meta: { submitError, dirtySinceLastSubmit, error, touched }, }) => !!(((submitError && !dirtySinceLastSubmit) || error) && touched);
exports.showErrorOnBlur = showErrorOnBlur;
