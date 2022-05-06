"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslatableInputs = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const core_1 = require("../../features/core");
const TranslatableInputsTabs_1 = require("./TranslatableInputsTabs");
const TranslatableInputsTabContent_1 = require("./TranslatableInputsTabContent");
const PREFIX = 'RaTranslatableInputs';
const classes = {
    root: `${PREFIX}-root`,
};
const Root = (0, styles_1.styled)('div')(({ theme }) => ({
    [`&.${classes.root}`]: {
        flexGrow: 1,
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(0.5),
    },
}));
/**
 * Provides a way to edit multiple languages for any input passed as children.
 * It expects the translatable values to have the following structure:
 * {
 *     name: {
 *         en: 'The english value',
 *         fr: 'The french value',
 *         tlh: 'The klingon value',
 *     },
 *     description: {
 *         en: 'The english value',
 *         fr: 'The french value',
 *         tlh: 'The klingon value',
 *     }
 * }
 *
 * @example <caption>Basic usage</caption>
 * <TranslatableInputs locales={['en', 'fr']}>
 *     <TextInput source="title" />
 *     <RichTextInput source="description" />
 * </Translatable>
 *
 * @example <caption>With a custom language selector</caption>
 * <TranslatableInputs
 *     selector={<MyLanguageSelector />}
 *     locales={['en', 'fr']}
 * >
 *     <TextInput source="title" />
 * </Translatable>
 *
 * const MyLanguageSelector = () => {
 *     const {
 *         locales,
 *         selectedLocale,
 *         selectLocale,
 *     } = useTranslatableContext();
 *
 *     return (
 *         <select onChange={event => selectLocale(event.target.value)}>
 *             {locales.map((locale) => (
 *                 <option selected={locale === selectedLocale}>
 *                     {locale}
 *                 </option>
 *             ))}
 *        </select>
 *     );
 * }
 *
 * * @param props The component props
 * * @param {string} props.defaultLocale The locale selected by default. Default to 'en'.
 * * @param {string[]} props.locales An array of the possible locales. For example: `['en', 'fr'].
 * * @param {ReactElement} props.selector The element responsible for selecting a locale. Defaults to Material UI tabs.
 */
const TranslatableInputs = (props) => {
    const { defaultLocale, locales, groupKey = '', selector = (0, jsx_runtime_1.jsx)(TranslatableInputsTabs_1.TranslatableInputsTabs, { groupKey: groupKey }, void 0), children, variant, margin, } = props;
    const context = (0, core_1.useTranslatable)({ defaultLocale, locales });
    return ((0, jsx_runtime_1.jsx)(Root, Object.assign({ className: classes.root }, { children: (0, jsx_runtime_1.jsxs)(core_1.TranslatableContextProvider, Object.assign({ value: context }, { children: [selector, locales.map(locale => ((0, jsx_runtime_1.jsx)(TranslatableInputsTabContent_1.TranslatableInputsTabContent, Object.assign({ locale: locale, groupKey: groupKey, variant: variant, margin: margin }, { children: children }), locale)))] }), void 0) }), void 0));
};
exports.TranslatableInputs = TranslatableInputs;
