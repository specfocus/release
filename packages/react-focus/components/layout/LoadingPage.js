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
const styles_1 = require("@mui/material/styles");
const prop_types_1 = __importDefault(require("prop-types"));
const Loading_1 = __importDefault(require("./Loading"));
const LoadingPage = (_a) => {
    var { theme } = _a, props = __rest(_a, ["theme"]);
    return ((0, jsx_runtime_1.jsx)(styles_1.ThemeProvider, Object.assign({ theme: theme }, { children: (0, jsx_runtime_1.jsx)(Loading_1.default, Object.assign({}, props), void 0) }), void 0));
};
LoadingPage.propTypes = {
    theme: prop_types_1.default.object,
    classes: prop_types_1.default.object,
    className: prop_types_1.default.string,
    loadingPrimary: prop_types_1.default.string,
    loadingSecondary: prop_types_1.default.string,
};
LoadingPage.defaultProps = {
    theme: (0, styles_1.createTheme)({}),
    loadingPrimary: 'ra.page.loading',
    loadingSecondary: 'ra.message.loading',
};
exports.default = LoadingPage;
