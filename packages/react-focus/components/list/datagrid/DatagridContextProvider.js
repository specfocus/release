"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const DatagridContext_1 = __importDefault(require("./DatagridContext"));
const DatagridContextProvider = ({ children, value, }) => ((0, jsx_runtime_1.jsx)(DatagridContext_1.default.Provider, Object.assign({ value: value }, { children: children }), void 0));
exports.default = DatagridContextProvider;
