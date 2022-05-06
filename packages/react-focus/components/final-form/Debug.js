"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Debug = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_final_form_1 = require("react-final-form");
function Debug() {
    return ((0, jsx_runtime_1.jsx)(react_final_form_1.FormSpy, Object.assign({ subscription: { values: true } }, { children: ({ values }) => (0, jsx_runtime_1.jsx)("pre", { children: JSON.stringify(values, undefined, 2) }, void 0) }), void 0));
}
exports.Debug = Debug;
