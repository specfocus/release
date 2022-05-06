"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslatableFieldsTabs = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const AppBar_1 = __importDefault(require("@mui/material/AppBar"));
const Tabs_1 = __importDefault(require("@mui/material/Tabs"));
const core_1 = require("../../features/core");
const TranslatableFieldsTab_1 = require("./TranslatableFieldsTab");
const PREFIX = 'RaTranslatableFieldsTabs';
const classes = {
    root: `${PREFIX}-root`,
};
const StyledAppBar = (0, styles_1.styled)(AppBar_1.default)(({ theme }) => ({
    [`&.${classes.root}`]: {
        boxShadow: 'none',
        borderRadius: 0,
        borderTopLeftRadius: theme.shape.borderRadius,
        borderTopRightRadius: theme.shape.borderRadius,
        border: `1px solid ${theme.palette.divider}`,
    },
}));
/**
 * Default locale selector for the TranslatableFields component. Generates a tab for each specified locale.
 * @see TranslatableFields
 */
const TranslatableFieldsTabs = (props) => {
    const { groupKey, TabsProps: tabsProps } = props;
    const { locales, selectLocale, selectedLocale } = (0, core_1.useTranslatableContext)();
    const handleChange = (event, newLocale) => {
        selectLocale(newLocale);
    };
    return ((0, jsx_runtime_1.jsx)(StyledAppBar, Object.assign({ color: "default", position: "static", className: classes.root }, { children: (0, jsx_runtime_1.jsx)(Tabs_1.default, Object.assign({ value: selectedLocale, onChange: handleChange, indicatorColor: "primary", textColor: "primary" }, tabsProps, { children: locales.map(locale => ((0, jsx_runtime_1.jsx)(TranslatableFieldsTab_1.TranslatableFieldsTab, { value: locale, locale: locale, groupKey: groupKey }, locale))) }), void 0) }), void 0));
};
exports.TranslatableFieldsTabs = TranslatableFieldsTabs;
