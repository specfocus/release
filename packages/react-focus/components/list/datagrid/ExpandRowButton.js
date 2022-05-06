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
const ExpandMore_1 = __importDefault(require("@mui/icons-material/ExpandMore"));
const IconButton_1 = __importDefault(require("@mui/material/IconButton"));
const react_1 = require("react");
const core_1 = require("../../../features/core");
const ExpandRowButton = (_a) => {
    var { expanded, expandContentId } = _a, props = __rest(_a, ["expanded", "expandContentId"]);
    const translate = (0, core_1.useTranslate)();
    return ((0, jsx_runtime_1.jsx)(IconButton_1.default, Object.assign({ "aria-label": translate(expanded ? 'ra.action.close' : 'ra.action.expand'), "aria-expanded": expanded, "aria-controls": expandContentId, tabIndex: -1, "aria-hidden": "true", component: "div" }, props, { size: "large" }, { children: (0, jsx_runtime_1.jsx)(ExpandMore_1.default, {}, void 0) }), void 0));
};
exports.default = (0, react_1.memo)(ExpandRowButton);
