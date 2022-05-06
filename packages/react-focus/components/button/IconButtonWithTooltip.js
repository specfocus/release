"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconButtonWithTooltip = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const material_1 = require("@mui/material");
const core_1 = require("../../features/core");
/**
 * An IconButton with a tooltip which ensures the tooltip is closed on click to avoid ghost tooltips
 * when the button position changes.
 */
const IconButtonWithTooltip = (_a) => {
    var { label, onClick } = _a, props = __rest(_a, ["label", "onClick"]);
    const translate = (0, core_1.useTranslate)();
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };
    const translatedLabel = translate(label, { _: label });
    const handleClick = (event) => {
        handleClose();
        onClick(event);
    };
    return ((0, jsx_runtime_1.jsx)(material_1.Tooltip, Object.assign({ title: translatedLabel, open: open, onOpen: handleOpen, onClose: handleClose }, { children: (0, jsx_runtime_1.jsx)(material_1.IconButton, Object.assign({ "aria-label": translatedLabel, onClick: handleClick }, props, { size: "large" }), void 0) }), void 0));
};
exports.IconButtonWithTooltip = IconButtonWithTooltip;
