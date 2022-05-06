"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const prop_types_1 = __importDefault(require("prop-types"));
const TextField_1 = __importDefault(require("@mui/material/TextField"));
const ReferenceError = ({ label, error }) => ((0, jsx_runtime_1.jsx)(TextField_1.default, { error: true, disabled: true, label: label, value: error, margin: "normal" }, void 0));
ReferenceError.propTypes = {
    error: prop_types_1.default.string.isRequired,
    label: prop_types_1.default.string.isRequired,
};
exports.default = ReferenceError;
