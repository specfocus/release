"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeTranslations = exports.resolveBrowserLocale = void 0;
const merge_1 = __importDefault(require("lodash/merge"));
const index_1 = require("./index");
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
const resolveBrowserLocale = (defaultLocale = index_1.DEFAULT_LOCALE) => {
    // from http://blog.ksol.fr/user-locale-detection-browser-javascript/
    // Rely on the window.navigator object to determine user locale
    const { language, browserLanguage, userLanguage, } = window.navigator;
    return (language || browserLanguage || userLanguage || defaultLocale).split('-')[0];
};
exports.resolveBrowserLocale = resolveBrowserLocale;
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
const mergeTranslations = (...translationsModules) => (0, merge_1.default)({}, ...translationsModules);
exports.mergeTranslations = mergeTranslations;
