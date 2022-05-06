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
const TextField_1 = __importDefault(require("@mui/material/TextField"));
const react_i18next_1 = require("react-i18next");
const translation_1 = require("../utilities/translation");
function default_1(_a) {
    var { label, placeholder, title } = _a, props = __rest(_a, ["label", "placeholder", "title"]);
    const { t } = (0, react_i18next_1.useTranslation)();
    const translatedLabel = (0, translation_1.translate)(label, t);
    const translatedPlaceholder = (0, translation_1.translate)(placeholder, t);
    const translatedTitle = (0, translation_1.translate)(title, t);
    return ((0, jsx_runtime_1.jsx)(TextField_1.default
    // @ts-ignore
    , Object.assign({ 
        // @ts-ignore
        label: translatedLabel, 
        // @ts-ignore
        placeholder: translatedPlaceholder, 
        // @ts-ignore
        title: translatedTitle, "aria-label": translatedTitle }, props), void 0));
}
exports.default = default_1;
