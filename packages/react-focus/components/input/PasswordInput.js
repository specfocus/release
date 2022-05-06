"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const core_1 = require("../../features/core");
const material_1 = require("@mui/material");
const Visibility_1 = __importDefault(require("@mui/icons-material/Visibility"));
const VisibilityOff_1 = __importDefault(require("@mui/icons-material/VisibilityOff"));
const TextInput_1 = __importDefault(require("./TextInput"));
const PasswordInput = (props) => {
    const { initiallyVisible = false } = props, rest = __rest(props, ["initiallyVisible"]);
    const [visible, setVisible] = (0, react_1.useState)(initiallyVisible);
    const translate = (0, core_1.useTranslate)();
    const handleClick = () => {
        setVisible(!visible);
    };
    return ((0, jsx_runtime_1.jsx)(TextInput_1.default, Object.assign({}, rest, { type: visible ? 'text' : 'password', InputProps: {
            endAdornment: ((0, jsx_runtime_1.jsx)(material_1.InputAdornment, Object.assign({ position: "end" }, { children: (0, jsx_runtime_1.jsx)(material_1.IconButton, Object.assign({ "aria-label": translate(visible
                        ? 'ra.input.password.toggle_visible'
                        : 'ra.input.password.toggle_hidden'), onClick: handleClick, size: "large" }, { children: visible ? (0, jsx_runtime_1.jsx)(Visibility_1.default, {}, void 0) : (0, jsx_runtime_1.jsx)(VisibilityOff_1.default, {}, void 0) }), void 0) }), void 0)),
        } }), void 0));
};
exports.default = PasswordInput;
