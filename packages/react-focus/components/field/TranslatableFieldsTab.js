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
exports.TranslatableFieldsTab = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Tab_1 = __importDefault(require("@mui/material/Tab"));
const core_1 = require("../../features/core");
const inflection_1 = require("inflection");
/**
 * Single tab that selects a locale in a TranslatableFields component.
 * @see TranslatableFields
 */
const TranslatableFieldsTab = (props) => {
    const { locale, groupKey = '' } = props, rest = __rest(props, ["locale", "groupKey"]);
    const translate = (0, core_1.useTranslate)();
    return ((0, jsx_runtime_1.jsx)(Tab_1.default, Object.assign({ id: `translatable-header-${groupKey}${locale}`, label: translate(`ra.locales.${groupKey}${locale}`, {
            _: (0, inflection_1.capitalize)(locale),
        }) }, rest), void 0));
};
exports.TranslatableFieldsTab = TranslatableFieldsTab;
