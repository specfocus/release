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
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/styles");
const translation_1 = require("../utilities/translation");
const Paper_1 = __importDefault(require("./Paper"));
const TranslatedTypography_1 = __importDefault(require("./TranslatedTypography"));
const useStyles = (0, styles_1.makeStyles)((theme) => ({
    subtitle: {
        fontSize: 14,
        // padding: 6px 12px;
        // overflow: hidden;
        // position: relative;
        // font-size: 0.875rem;
        // max-width: 264px;
        // min-width: 72px;
        // box-sizing: border-box;
        // min-height: 48px;
        textAlign: 'center',
        // flex-shrink: 0;
        // font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        // font-weight: 500;
        // line-height: 1.75;
        // white-space: normal;
        // letter-spacing: 0.02857em;
        textTransform: 'uppercase'
    },
}));
function Fieldset(_a) {
    var { children, subtitle } = _a, otherProps = __rest(_a, ["children", "subtitle"]);
    const classes = useStyles();
    const i18nKey = (0, translation_1.formattedKey)(subtitle);
    return ((0, jsx_runtime_1.jsxs)(Paper_1.default, Object.assign({}, otherProps, { children: [subtitle && ((0, jsx_runtime_1.jsx)(TranslatedTypography_1.default, Object.assign({ i18nKey: i18nKey, className: classes.subtitle, color: "textSecondary", gutterBottom: true }, { children: subtitle }), void 0)), children] }), void 0));
}
exports.default = Fieldset;
