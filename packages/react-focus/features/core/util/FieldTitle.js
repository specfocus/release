"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldTitle = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const useTranslate_1 = __importDefault(require("../i18n/useTranslate"));
const getFieldLabelTranslationArgs_1 = __importDefault(require("./getFieldLabelTranslationArgs"));
const FieldTitle = (props) => {
    const { resource, source, label, isRequired } = props;
    const translate = (0, useTranslate_1.default)();
    if (label === false || label === '') {
        return null;
    }
    if (label && typeof label !== 'string') {
        return label;
    }
    return ((0, jsx_runtime_1.jsxs)("span", { children: [translate(...(0, getFieldLabelTranslationArgs_1.default)({
                label: label,
                resource,
                source,
            })), isRequired && ' *'] }, void 0));
};
exports.FieldTitle = FieldTitle;
// What? TypeScript loses the displayName if we don't set it explicitly
exports.FieldTitle.displayName = 'FieldTitle';
exports.default = (0, react_1.memo)(exports.FieldTitle);
