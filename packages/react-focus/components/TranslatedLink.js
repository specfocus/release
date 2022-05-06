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
const Link_1 = __importDefault(require("@mui/material/Link"));
const react_i18next_1 = require("react-i18next");
const react_router_dom_1 = require("react-router-dom");
const translation_1 = require("../utilities/translation");
function TranslatedLink(_a) {
    var { children, count = 1, i18nKey, to } = _a, otherProps = __rest(_a, ["children", "count", "i18nKey", "to"]);
    if (!i18nKey && typeof children === 'string') {
        i18nKey = (0, translation_1.formattedKey)(children);
    }
    return ((0, jsx_runtime_1.jsx)(Link_1.default, Object.assign({ component: react_router_dom_1.Link, to: to }, otherProps, { children: (0, jsx_runtime_1.jsx)(react_i18next_1.Trans, Object.assign({ i18nKey: i18nKey, count: count }, { children: children }), void 0) }), void 0));
}
exports.default = TranslatedLink;
