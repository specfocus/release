"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const prop_types_1 = __importDefault(require("prop-types"));
const Typography_1 = __importDefault(require("@mui/material/Typography"));
function Title(props) {
    return ((0, jsx_runtime_1.jsx)(Typography_1.default, Object.assign({ component: "h2", variant: "h6", color: "primary", gutterBottom: true }, { children: props.children }), void 0));
}
exports.default = Title;
Title.propTypes = {
    children: prop_types_1.default.node,
};
