"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const i18next_1 = __importDefault(require("i18next"));
const i18next_http_backend_1 = __importDefault(require("i18next-http-backend"));
const i18next_browser_languagedetector_1 = __importDefault(require("i18next-browser-languagedetector"));
const react_i18next_1 = require("react-i18next");
i18next_1.default
    .use(i18next_http_backend_1.default)
    .use(i18next_browser_languagedetector_1.default)
    .use(react_i18next_1.initReactI18next)
    .init({
    defaultNS: 'general',
    fallbackLng: 'en',
    // have a common namespace used around the full app
    ns: ['general', 'errors', 'warnings', 'countries', 'regions', 'states'],
    /*backend: {
      loadPath: `${window.location.pathname}locales/{{lng}}/{{ns}}.json`
    },*/
    // load: 'unspecific',
    react: {
        wait: true
    },
    debug: false,
    interpolation: {
        escapeValue: false, // not needed for react!!
    },
});
exports.default = i18next_1.default;
