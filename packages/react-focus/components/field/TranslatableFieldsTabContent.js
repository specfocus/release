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
exports.TranslatableFieldsTabContent = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const react_1 = require("react");
const core_1 = require("../../features/core");
const input_1 = require("../input");
const PREFIX = 'RaTranslatableFieldsTabContent';
const classes = {
    root: `${PREFIX}-root`,
};
const Root = (0, styles_1.styled)('div')(({ theme }) => ({
    [`&.${classes.root}`]: {
        flexGrow: 1,
        padding: theme.spacing(2),
        borderRadius: 0,
        borderBottomLeftRadius: theme.shape.borderRadius,
        borderBottomRightRadius: theme.shape.borderRadius,
        border: `1px solid ${theme.palette.divider}`,
        borderTop: 0,
    },
}));
/**
 * Default container for a group of translatable fields inside a TranslatableFields components.
 * @see TranslatableFields
 */
const TranslatableFieldsTabContent = (props) => {
    const { basePath, children, groupKey = '', locale, record, resource } = props, other = __rest(props, ["basePath", "children", "groupKey", "locale", "record", "resource"]);
    const { selectedLocale, getLabel, getSource } = (0, core_1.useTranslatableContext)();
    return ((0, jsx_runtime_1.jsx)(Root, Object.assign({ role: "tabpanel", hidden: selectedLocale !== locale, id: `translatable-content-${groupKey}${locale}`, "aria-labelledby": `translatable-header-${groupKey}${locale}`, className: classes.root }, other, { children: react_1.Children.map(children, field => field && (0, react_1.isValidElement)(field) ? ((0, jsx_runtime_1.jsx)("div", { children: field.props.addLabel ? ((0, jsx_runtime_1.jsx)(input_1.Labeled, Object.assign({ record: record, resource: resource, basePath: basePath, label: field.props.label, source: field.props.source, disabled: false }, { children: (0, react_1.cloneElement)(field, Object.assign(Object.assign({}, field.props), { label: getLabel(field.props.source), source: getSource(field.props.source, locale) })) }), void 0)) : typeof field === 'string' ? (field) : ((0, react_1.cloneElement)(field, Object.assign(Object.assign({}, field.props), { label: getLabel(field.props.source), source: getSource(field.props.source, locale) }))) }, field.props.source)) : null) }), void 0));
};
exports.TranslatableFieldsTabContent = TranslatableFieldsTabContent;
