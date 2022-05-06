"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const TranslationContext_1 = require("./TranslationContext");
/**
 * Translate a string using the current locale and the translations from the i18nProvider
 *
 * @see Polyglot.t()
 * @link https://airbnb.io/polyglot.js/#polyglotprototypetkey-interpolationoptions
 *
 * @return {Function} A translation function, accepting two arguments
 *   - a string used as key in the translations
 *   - an interpolationOptions object
 *
 * @example
 *
 * import { useTranslate } from '../app';
 *
 * const SettingsMenu = () => {
 *     const translate = useTranslate();
 *     return <MenuItem>{translate('settings')}</MenuItem>;
 * }
 */
const useTranslate = () => {
    const { i18nProvider, locale } = (0, react_1.useContext)(TranslationContext_1.TranslationContext);
    const translate = (0, react_1.useCallback)((key, options) => i18nProvider.translate(key, options), 
    // update the hook each time the locale changes
    [i18nProvider, locale] // eslint-disable-line react-hooks/exhaustive-deps
    );
    return i18nProvider ? translate : identity;
};
const identity = key => key;
exports.default = useTranslate;
