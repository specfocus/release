"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslationContext = void 0;
const react_1 = require("react");
const TranslationContext = (0, react_1.createContext)({
    locale: 'en',
    setLocale: () => { },
    i18nProvider: {
        translate: x => x,
        changeLocale: () => Promise.resolve(),
        getLocale: () => 'en',
    },
});
exports.TranslationContext = TranslationContext;
TranslationContext.displayName = 'TranslationContext';
