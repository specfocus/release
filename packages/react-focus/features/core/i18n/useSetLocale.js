"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const TranslationContext_1 = require("./TranslationContext");
const loading_1 = require("../loading");
const sideEffect_1 = require("../sideEffect");
/**
 * Set the current locale using the TranslationContext
 *
 * This hook re-renders when the locale changes.
 *
 * @example
 *
 * import { useSetLocale } from '../app';
 *
 * const availableLanguages = {
 *     en: 'English',
 *     fr: 'Français',
 * }
 * const LanguageSwitcher = () => {
 *     const setLocale = useSetLocale();
 *     return (
 *         <ul>{
 *             Object.keys(availableLanguages).map(locale => {
 *                  <li key={locale} onClick={() => setLocale(locale)}>
 *                      {availableLanguages[locale]}
 *                  </li>
 *              })
 *         }</ul>
 *     );
 * }
 */
const useSetLocale = () => {
    const { setLocale, i18nProvider } = (0, react_1.useContext)(TranslationContext_1.TranslationContext);
    const { startLoading, stopLoading } = (0, loading_1.useUpdateLoading)();
    const notify = (0, sideEffect_1.useNotify)();
    return (0, react_1.useCallback)((newLocale) => new Promise(resolve => {
        startLoading();
        // so we systematically return a Promise for the messages
        // i18nProvider may return a Promise for language changes,
        resolve(i18nProvider.changeLocale(newLocale));
    })
        .then(() => {
        stopLoading();
        setLocale(newLocale);
    })
        .catch(error => {
        stopLoading();
        notify('ra.notification.i18n_error', 'warning');
        console.error(error);
    }), [i18nProvider, notify, setLocale, startLoading, stopLoading]);
};
exports.default = useSetLocale;
