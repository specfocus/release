"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const TranslationContext_1 = require("./TranslationContext");
/**
 * Get the current locale from the TranslationContext
 *
 * This hook re-renders when the locale changes.
 *
 * @example
 *
 * import { useLocale } from '../app';
 *
 * const availableLanguages = {
 *     en: 'English',
 *     fr: 'Français',
 * }
 * const CurrentLanguage = () => {
 *     const locale = useLocale();
 *     return <span>{availableLanguages[locale]}</span>;
 * }
 */
const useLocale = () => {
    const { locale } = (0, react_1.useContext)(TranslationContext_1.TranslationContext);
    return locale;
};
exports.default = useLocale;
