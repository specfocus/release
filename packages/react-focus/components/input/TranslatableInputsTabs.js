"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslatableInputsTabs = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const material_1 = require("@mui/material");
const core_1 = require("../../features/core");
const TranslatableInputsTab_1 = require("./TranslatableInputsTab");
const PREFIX = 'RaTranslatableInputsTabs';
const classes = {
    root: `${PREFIX}-root`,
    tabs: `${PREFIX}-tabs`,
};
const StyledAppBar = (0, styles_1.styled)(material_1.AppBar)(({ theme }) => ({
    [`&.${classes.root}`]: {
        boxShadow: 'none',
        borderRadius: 0,
        borderTopLeftRadius: theme.shape.borderRadius,
        borderTopRightRadius: theme.shape.borderRadius,
        border: `1px solid ${theme.palette.divider}`,
    },
    [`& .${classes.tabs}`]: {
        minHeight: theme.spacing(3),
    },
}));
/**
 * Default locale selector for the TranslatableInputs component. Generates a tab for each specified locale.
 * @see TranslatableInputs
 */
const TranslatableInputsTabs = (props) => {
    const { groupKey, TabsProps: tabsProps } = props;
    const { locales, selectLocale, selectedLocale } = (0, core_1.useTranslatableContext)();
    const handleChange = (event, newLocale) => {
        selectLocale(newLocale);
    };
    return ((0, jsx_runtime_1.jsx)(StyledAppBar, Object.assign({ color: "default", position: "static", className: classes.root }, { children: (0, jsx_runtime_1.jsx)(material_1.Tabs, Object.assign({ value: selectedLocale, onChange: handleChange, indicatorColor: "primary", textColor: "primary", className: classes.tabs }, tabsProps, { children: locales.map(locale => ((0, jsx_runtime_1.jsx)(TranslatableInputsTab_1.TranslatableInputsTab, { value: locale, locale: locale, groupKey: groupKey }, locale))) }), void 0) }), void 0));
};
exports.TranslatableInputsTabs = TranslatableInputsTabs;
