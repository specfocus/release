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
const Chip_1 = __importDefault(require("@mui/material/Chip"));
const react_i18next_1 = require("react-i18next");
const translation_1 = require("../utilities/translation");
const Cancel_1 = __importDefault(require("@mui/icons-material/Cancel"));
const fakeDelete = () => { };
const TranslatedChip = (_a) => {
    var { label, onDelete, value } = _a, otherProps = __rest(_a, ["label", "onDelete", "value"]);
    const { t } = (0, react_i18next_1.useTranslation)();
    const translatedLabel = (0, translation_1.translate)(label, t);
    return ((0, jsx_runtime_1.jsx)(Chip_1.default, Object.assign({ label: translatedLabel, onDelete: onDelete && fakeDelete, deleteIcon: onDelete && ((0, jsx_runtime_1.jsx)(Cancel_1.default, { onMouseDown: event => {
                if (!otherProps.disabled) {
                    console.log('onDelete');
                    event.stopPropagation();
                    onDelete(value);
                }
            } }, void 0)) }, otherProps), void 0));
};
exports.default = TranslatedChip;
