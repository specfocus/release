"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const prop_types_1 = __importDefault(require("prop-types"));
const useScrollTrigger_1 = __importDefault(require("@mui/material/useScrollTrigger"));
const Slide_1 = __importDefault(require("@mui/material/Slide"));
function HideOnScroll(props) {
    const { children } = props;
    const trigger = (0, useScrollTrigger_1.default)();
    return ((0, jsx_runtime_1.jsx)(Slide_1.default, Object.assign({ appear: false, direction: "down", in: !trigger }, { children: children }), void 0));
}
HideOnScroll.propTypes = {
    children: prop_types_1.default.node.isRequired,
};
exports.default = HideOnScroll;
