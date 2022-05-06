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
exports.TranslatableInputsTab = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const Tab_1 = __importDefault(require("@mui/material/Tab"));
const core_1 = require("../../features/core");
const inflection_1 = require("inflection");
const classnames_1 = __importDefault(require("classnames"));
const PREFIX = 'RaTranslatableInputsTab';
const classes = {
    root: `${PREFIX}-root`,
    error: `${PREFIX}-error`,
};
const StyledTab = (0, styles_1.styled)(Tab_1.default)(({ theme }) => ({
    [`&.${classes.root}`]: {
        fontSize: '0.8em',
        minHeight: theme.spacing(3),
        minWidth: theme.spacing(6),
    },
    [`& .${classes.error}`]: { color: theme.palette.error.main },
}));
/**
 * Single tab that selects a locale in a TranslatableInputs component.
 * @see TranslatableInputs
 */
const TranslatableInputsTab = (props) => {
    const { groupKey = '', locale } = props, rest = __rest(props, ["groupKey", "locale"]);
    const { invalid, touched } = (0, core_1.useFormGroup)(`${groupKey}${locale}`);
    const translate = (0, core_1.useTranslate)();
    return ((0, jsx_runtime_1.jsx)(StyledTab, Object.assign({ id: `translatable-header-${groupKey}${locale}`, label: translate(`ra.locales.${locale}`, {
            _: (0, inflection_1.capitalize)(locale),
        }), className: (0, classnames_1.default)(classes.root, {
            [classes.error]: invalid && touched,
        }) }, rest), void 0));
};
exports.TranslatableInputsTab = TranslatableInputsTab;
