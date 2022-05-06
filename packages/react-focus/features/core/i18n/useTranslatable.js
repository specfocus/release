"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTranslatable = void 0;
const react_1 = require("react");
const __1 = require("..");
const util_1 = require("../util");
const useLocale_1 = __importDefault(require("./useLocale"));
const useTranslate_1 = __importDefault(require("./useTranslate"));
/**
 * Hook supplying the logic to translate a field value in multiple languages.
 *
 * @param options The hook options
 * @param {string} options.defaultLocale The locale of the default selected locale. Defaults to 'en'.
 * @param {string[]} options.locales An array of the supported locales. Each is an object with a locale and a name property. For example { locale: 'en', name: 'English' }.
 *
 * @returns
 * An object with following properties and methods:
 * - selectedLocale: The locale of the currently selected locale
 * - locales: An array of the supported locales
 * - getLabel: A function which returns the translated label for the given field
 * - getSource: A function which returns the source for the given field
 * - selectLocale: A function which set the selected locale
 */
const useTranslatable = (options) => {
    const localeFromUI = (0, useLocale_1.default)();
    const { defaultLocale = localeFromUI, locales } = options;
    const [selectedLocale, setSelectedLocale] = (0, react_1.useState)(defaultLocale);
    const resource = (0, __1.useResourceContext)({});
    const translate = (0, useTranslate_1.default)();
    const context = (0, react_1.useMemo)(() => ({
        getSource: (source, locale = selectedLocale) => `${source}.${locale}`,
        getLabel: (source, label) => {
            return translate(...(0, util_1.getFieldLabelTranslationArgs)({
                source,
                resource,
                label,
            }));
        },
        locales,
        selectedLocale,
        selectLocale: setSelectedLocale,
    }), [locales, resource, selectedLocale, translate]);
    return context;
};
exports.useTranslatable = useTranslatable;
