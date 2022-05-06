"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslatableFields = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const core_1 = require("../../features/core");
const TranslatableFieldsTabs_1 = require("./TranslatableFieldsTabs");
const TranslatableFieldsTabContent_1 = require("./TranslatableFieldsTabContent");
const PREFIX = 'RaTranslatableFields';
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
 * Provides a way to show multiple languages for any field passed as children.
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
 * <TranslatableFields locales={['en', 'fr']}>
 *     <TextField source={getSource('title')} />
 *     <TextField source={getSource('description')} />
 * </TranslatableFields>
 *
 * @example <caption>With a custom language selector</caption>
 * <TranslatableFields
 *     selector={<MyLanguageSelector />}
 *     locales={['en', 'fr']}
 * >
 *     <TextField source={getSource('title')} />
 * <TranslatableFields>
>
 *
 * const MyLanguageSelector = () => {
 *     const {
 *         locales,
 *         selectedLocale,
 *         selectLocale,
 *     } = useTranslatableContext();
 *
 *     return (
 *         <select onChange={selectLocale}>
 *             {locales.map((locale) => (
 *                 <option selected={locale.locale === selectedLocale}>
 *                     {locale.name}
 *                 </option>
 *             ))}
 *        </select>
 *     );
 * }
 *
 * * @param props The component props
 * * @param {string} props.defaultLocale The locale selected by default. Default to 'en'.
 * * @param {string[]} props.locales An array of the possible locales in the form. For example [{ 'en', 'fr' }].
 * * @param {ReactElement} props.selector The element responsible for selecting a locale. Defaults to Material UI tabs.
 */
const TranslatableFields = (props) => {
    const { defaultLocale, locales, groupKey = '', selector = (0, jsx_runtime_1.jsx)(TranslatableFieldsTabs_1.TranslatableFieldsTabs, { groupKey: groupKey }, void 0), children, resource, basePath, } = props;
    const record = (0, core_1.useRecordContext)(props);
    const context = (0, core_1.useTranslatable)({ defaultLocale, locales });
    return ((0, jsx_runtime_1.jsx)(Root, Object.assign({ className: classes.root }, { children: (0, jsx_runtime_1.jsxs)(core_1.TranslatableContextProvider, Object.assign({ value: context }, { children: [selector, locales.map(locale => ((0, jsx_runtime_1.jsx)(TranslatableFieldsTabContent_1.TranslatableFieldsTabContent, Object.assign({ basePath: basePath, locale: locale, record: record, resource: resource, groupKey: groupKey }, { children: children }), locale)))] }), void 0) }), void 0));
};
exports.TranslatableFields = TranslatableFields;
