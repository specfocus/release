"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslatableInputsTabContent = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const react_1 = require("react");
const core_1 = require("../../features/core");
const form_1 = require("../form");
const core_2 = require("../../features/core");
const PREFIX = 'RaTranslatableInputsTabContent';
const classes = {
    root: `${PREFIX}-root`,
};
const Root = (0, styles_1.styled)('div')(({ theme }) => ({
    [`&.${classes.root}`]: {
        flexGrow: 1,
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        borderRadius: 0,
        borderBottomLeftRadius: theme.shape.borderRadius,
        borderBottomRightRadius: theme.shape.borderRadius,
        border: `1px solid ${theme.palette.divider}`,
        borderTop: 0,
    },
}));
/**
 * Default container for a group of translatable inputs inside a TranslatableInputs component.
 * @see TranslatableInputs
 */
const TranslatableInputsTabContent = (props) => {
    const { basePath, children, groupKey = '', locale, margin, variant } = props, other = __rest(props, ["basePath", "children", "groupKey", "locale", "margin", "variant"]);
    const { selectedLocale, getLabel, getSource } = (0, core_1.useTranslatableContext)();
    const record = (0, core_1.useRecordContext)(props);
    const resource = (0, core_2.useResourceContext)(props);
    return ((0, jsx_runtime_1.jsx)(core_1.FormGroupContextProvider, Object.assign({ name: `${groupKey}${locale}` }, { children: (0, jsx_runtime_1.jsx)(Root, Object.assign({ role: "tabpanel", hidden: selectedLocale !== locale, id: `translatable-content-${groupKey}${locale}`, "aria-labelledby": `translatable-header-${groupKey}${locale}`, className: classes.root }, other, { children: react_1.Children.map(children, child => (0, react_1.isValidElement)(child) ? ((0, jsx_runtime_1.jsx)(form_1.FormInput, { basePath: basePath, input: (0, react_1.cloneElement)(child, Object.assign(Object.assign({}, child.props), { label: getLabel(child.props.source, child.props.label), source: getSource(child.props.source, locale) })), record: record, resource: resource, variant: child.props.variant || variant, margin: child.props.margin || margin }, void 0)) : null) }), void 0) }), void 0));
};
exports.TranslatableInputsTabContent = TranslatableInputsTabContent;
