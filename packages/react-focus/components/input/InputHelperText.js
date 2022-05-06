"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const core_1 = require("../../features/core");
const InputHelperText = (props) => {
    const { helperText, touched, error } = props;
    const translate = (0, core_1.useTranslate)();
    return touched && error ? ((0, jsx_runtime_1.jsx)(core_1.ValidationError, { error: error }, void 0)) : typeof helperText === 'string' ? ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: translate(helperText, { _: helperText }) }, void 0)) : helperText !== false ? (
    // material-ui's HelperText cannot reserve space unless we pass a single
    // space as child, which isn't possible when the child is a component.
    // Therefore, we must reserve the space ourselves by passing the same
    // markup as material-ui.
    // @see https://github.com/mui-org/material-ui/blob/62e439b7022d519ab638d65201e204b59b77f8da/packages/material-ui/src/FormHelperText/FormHelperText.js#L85-L90
    // eslint-disable-next-line react/no-danger
    (0, jsx_runtime_1.jsx)("span", { dangerouslySetInnerHTML: defaultInnerHTML }, void 0)) : null;
};
const defaultInnerHTML = { __html: '&#8203;' };
exports.default = InputHelperText;
