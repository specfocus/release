"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslatableContextProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const TranslatableContext_1 = require("./TranslatableContext");
const TranslatableContextProvider = ({ children, value, }) => {
    return ((0, jsx_runtime_1.jsx)(TranslatableContext_1.TranslatableContext.Provider, Object.assign({ value: value }, { children: children }), void 0));
};
exports.TranslatableContextProvider = TranslatableContextProvider;
