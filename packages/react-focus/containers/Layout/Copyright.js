"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Link_1 = __importDefault(require("@mui/material/Link"));
const Typography_1 = __importDefault(require("@mui/material/Typography"));
function Copyright() {
    return ((0, jsx_runtime_1.jsxs)(Typography_1.default, Object.assign({ variant: "body2", color: "textSecondary", align: "center" }, { children: ['Copyright © ', (0, jsx_runtime_1.jsx)(Link_1.default, Object.assign({ color: "inherit", href: "https://ufinet.com/" }, { children: "ufinet.com" }), void 0), ' ', new Date().getFullYear().toString(), '.'] }), void 0));
}
exports.default = Copyright;
