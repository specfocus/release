/**
 * Resolve the browser locale according to the value of the global window.navigator
 *
 * Use it to determine the <Admin> locale at runtime.
 *
 * @example
 *     import * as React from "react";
 *     import { Admin, Resource, resolveBrowserLocale } from '../app';
 *     import englishMessages from 'ra-language-english';
 *     import frenchMessages from 'ra-language-french';
 *     const messages = {
 *        fr: frenchMessages,
 *        en: englishMessages,
 *     };
 *     const App = () => (
 *         <Admin locale={resolveBrowserLocale()} messages={messages}>
 *             ...
 *         </Admin>
 *     );
 *
 * @param {string} defaultLocale Defaults to 'en'
 */
export declare const resolveBrowserLocale: (defaultLocale?: string) => string;
/**
 * Compose translations from multiple packages for a single language (eg: 'english').
 *
 * Use it to merge translations from addons with the main ../../app translations.
 *
 * @example
 *     import * as React from "react";
 *     import { Admin, Resource, mergeTranslations } from '../app';
 *     import englishMessages from 'ra-language-english';
 *     import englishTreeMessages from 'ra-tree-language-english';
 *     const messages = {
 *        en: mergeTranslations(englishMessages, englishTreeMessages),
 *     };
 *     const App = () => (
 *         <Admin locale="en" messages={messages}>
 *             ...
 *         </Admin>
 *     );
 */
export declare const mergeTranslations: (...translationsModules: object[]) => any;
