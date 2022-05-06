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
const Checkbox_1 = __importDefault(require("@mui/material/Checkbox"));
const react_i18next_1 = require("react-i18next");
const translation_1 = require("../utilities/translation");
const FormControlLabel_1 = __importDefault(require("@mui/material/FormControlLabel"));
const TranslatedCheckbox = (_a) => {
    var { label, labelPlacement } = _a, otherProps = __rest(_a, ["label", "labelPlacement"]);
    const { t } = (0, react_i18next_1.useTranslation)();
    const translatedLabel = (0, translation_1.translate)(label, t);
    return ((0, jsx_runtime_1.jsx)(FormControlLabel_1.default
    // @ts-ignore
    , { 
        // @ts-ignore
        label: translatedLabel, labelPlacement: labelPlacement, control: ((0, jsx_runtime_1.jsx)(Checkbox_1.default, Object.assign({}, otherProps), void 0)) }, void 0));
};
exports.default = TranslatedCheckbox;
