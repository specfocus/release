"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_polyglot_1 = __importDefault(require("node-polyglot"));
/**
 * Build a polyglot-based i18nProvider based on a function returning the messages for a locale
 *
 * @example
 *
 * import { Admin, Resource, polyglotI18nProvider } from '../../app';
 * import englishMessages from 'ra-language-english';
 * import frenchMessages from 'ra-language-french';
 *
 * const messages = {
 *     fr: frenchMessages,
 *     en: englishMessages,
 * };
 * const i18nProvider = polyglotI18nProvider(locale => messages[locale])
 */
exports.default = (getMessages, initialLocale = 'en', polyglotOptions = {}) => {
    let locale = initialLocale;
    const messages = getMessages(initialLocale);
    if (messages instanceof Promise) {
        throw new Error(`The i18nProvider returned a Promise for the messages of the default locale (${initialLocale}). Please update your i18nProvider to return the messages of the default locale in a synchronous way.`);
    }
    const polyglot = new node_polyglot_1.default(Object.assign({ locale, phrases: Object.assign({ '': '' }, messages) }, polyglotOptions));
    let translate = polyglot.t.bind(polyglot);
    return {
        translate: (key, options = {}) => translate(key, options),
        changeLocale: (newLocale) => 
        // We systematically return a Promise for the messages because
        // getMessages may return a Promise
        Promise.resolve(getMessages(newLocale)).then((messages) => {
            locale = newLocale;
            const newPolyglot = new node_polyglot_1.default(Object.assign({ locale: newLocale, phrases: Object.assign({ '': '' }, messages) }, polyglotOptions));
            translate = newPolyglot.t.bind(newPolyglot);
        }),
        getLocale: () => locale,
    };
};
