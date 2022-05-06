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
exports.CenterContainer = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Grid_1 = __importDefault(require("@mui/material/Grid"));
const CenterContainer = (_a) => {
    var { children } = _a, grid = __rest(_a, ["children"]);
    return ((0, jsx_runtime_1.jsx)(Grid_1.default, Object.assign({ container: true, spacing: 0, direction: "column", alignItems: "center", justifyContent: "center", style: { minHeight: '80vh' } }, grid, { children: children }), void 0));
};
exports.CenterContainer = CenterContainer;
const Center = (_a) => {
    var { children } = _a, grid = __rest(_a, ["children"]);
    return ((0, jsx_runtime_1.jsx)(exports.CenterContainer, { children: (0, jsx_runtime_1.jsx)(Grid_1.default, Object.assign({ item: true, xs: 12 }, grid, { children: children }), void 0) }, void 0));
};
exports.default = Center;
