"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const get_1 = __importDefault(require("lodash/get"));
const TranslationContext_1 = require("./TranslationContext");
exports.default = ({ translate, messages, children }) => ((0, jsx_runtime_1.jsx)(TranslationContext_1.TranslationContext.Provider, Object.assign({ value: {
        locale: 'en',
        setLocale: () => Promise.resolve(),
        i18nProvider: {
            translate: messages
                ? (key, options) => (0, get_1.default)(messages, key)
                    ? (0, get_1.default)(messages, key)
                    : options._
                : translate,
            changeLocale: () => Promise.resolve(),
            getLocale: () => 'en',
        },
    } }, { children: children }), void 0));
