"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceContextProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ResourceContext_1 = require("./ResourceContext");
const ResourceContextProvider = ({ children, value, }) => ((0, jsx_runtime_1.jsx)(ResourceContext_1.ResourceContext.Provider, Object.assign({ value: value }, { children: children }), void 0));
exports.ResourceContextProvider = ResourceContextProvider;
