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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemIcon = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ListItem_1 = __importDefault(require("@mui/material/ListItem"));
const ListItemIcon_1 = __importDefault(require("@mui/material/ListItemIcon"));
const ListItemText_1 = __importDefault(require("@mui/material/ListItemText"));
const react_router_dom_1 = require("react-router-dom");
const react_i18next_1 = require("react-i18next");
const translation_1 = require("../utilities/translation");
const styles_1 = require("@mui/material/styles");
exports.ItemIcon = (0, styles_1.styled)(ListItemIcon_1.default)(({ theme }) => ({
    color: 'inherit'
}));
const TranslatedListItemLink = (_a) => {
    var { children, caseSensitive, end, icon, primary, reloadDocument, replace, secondary, state, to } = _a, listProps = __rest(_a, ["children", "caseSensitive", "end", "icon", "primary", "reloadDocument", "replace", "secondary", "state", "to"]);
    const { t } = (0, react_i18next_1.useTranslation)();
    const primaryText = (0, translation_1.translate)(primary, t);
    const secondaryText = (0, translation_1.translate)(secondary, t);
    const linkProps = { children, caseSensitive, end, reloadDocument, replace, state, to };
    const Root = (params) => ((0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, Object.assign({}, linkProps, params), void 0));
    return ( // @ts-ignore
    (0, jsx_runtime_1.jsxs)(ListItem_1.default, Object.assign({ component: Root }, listProps, { children: [(0, jsx_runtime_1.jsx)(exports.ItemIcon, { children: icon }, void 0), (0, jsx_runtime_1.jsx)(ListItemText_1.default, { primary: primaryText, secondary: secondaryText }, void 0)] }), void 0));
};
exports.default = TranslatedListItemLink;
