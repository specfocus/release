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
const recoil_1 = require("recoil");
const AsideDrawer_1 = __importDefault(require("../../features/aside/AsideDrawer"));
const Loading_1 = __importDefault(require("./Loading"));
const Material_1 = __importDefault(require("./Material"));
const Navigation_1 = __importDefault(require("./Navigation"));
const Sidebar_1 = __importDefault(require("../../lib/view/sidebar/Sidebar"));
const Titlebar_1 = __importDefault(require("../../features/titlebar/Titlebar"));
const Root = (_a) => {
    var { children, fallback } = _a, recoil = __rest(_a, ["children", "fallback"]);
    return ((0, jsx_runtime_1.jsx)(recoil_1.RecoilRoot, Object.assign({}, recoil, { children: (0, jsx_runtime_1.jsx)(Material_1.default, { children: (0, jsx_runtime_1.jsx)(Navigation_1.default, { children: (0, jsx_runtime_1.jsx)(react_1.Suspense, Object.assign({ fallback: fallback || ((0, jsx_runtime_1.jsx)(Loading_1.default, {}, void 0)) }, { children: (0, jsx_runtime_1.jsx)(Sidebar_1.default, { children: (0, jsx_runtime_1.jsxs)(Titlebar_1.default, Object.assign({ position: "relative" }, { children: [(0, jsx_runtime_1.jsx)(react_1.Suspense, Object.assign({ fallback: fallback || ((0, jsx_runtime_1.jsx)(Loading_1.default, {}, void 0)) }, { children: children }), void 0), (0, jsx_runtime_1.jsx)(AsideDrawer_1.default, {}, void 0)] }), void 0) }, void 0) }), void 0) }, void 0) }, void 0) }), void 0));
};
exports.default = Root;
