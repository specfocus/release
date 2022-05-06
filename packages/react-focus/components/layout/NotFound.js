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
const styles_1 = require("@mui/material/styles");
const prop_types_1 = __importDefault(require("prop-types"));
const Button_1 = __importDefault(require("@mui/material/Button"));
const HotTub_1 = __importDefault(require("@mui/icons-material/HotTub"));
const History_1 = __importDefault(require("@mui/icons-material/History"));
const classnames_1 = __importDefault(require("classnames"));
const core_1 = require("../../features/core");
const Title_1 = __importDefault(require("./Title"));
const PREFIX = 'RaNotFound';
const classes = {
    container: `${PREFIX}-container`,
    icon: `${PREFIX}-icon`,
    message: `${PREFIX}-message`,
    toolbar: `${PREFIX}-toolbar`,
};
const Root = (0, styles_1.styled)('div')(({ theme }) => ({
    [`&.${classes.container}`]: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        [theme.breakpoints.up('md')]: {
            height: '100%',
        },
        [theme.breakpoints.down('md')]: {
            height: '100vh',
            marginTop: '-3em',
        },
    },
    [`& .${classes.icon}`]: {
        width: '9em',
        height: '9em',
    },
    [`& .${classes.message}`]: {
        textAlign: 'center',
        fontFamily: 'Roboto, sans-serif',
        opacity: 0.5,
        margin: '0 1em',
    },
    [`& .${classes.toolbar}`]: {
        textAlign: 'center',
        marginTop: '2em',
    },
}));
function goBack() {
    window.history.go(-1);
}
const NotFound = props => {
    const { className, title } = props, rest = __rest(props, ["className", "title"]);
    const translate = (0, core_1.useTranslate)();
    (0, core_1.useAuthenticated)();
    return ((0, jsx_runtime_1.jsxs)(Root, Object.assign({ className: (0, classnames_1.default)(classes.container, className) }, sanitizeRestProps(rest), { children: [(0, jsx_runtime_1.jsx)(Title_1.default, { defaultTitle: title }, void 0), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: classes.message }, { children: [(0, jsx_runtime_1.jsx)(HotTub_1.default, { className: classes.icon }, void 0), (0, jsx_runtime_1.jsx)("h1", { children: translate('ra.page.not_found') }, void 0), (0, jsx_runtime_1.jsxs)("div", { children: [translate('ra.message.not_found'), "."] }, void 0)] }), void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: classes.toolbar }, { children: (0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({ variant: "contained", startIcon: (0, jsx_runtime_1.jsx)(History_1.default, {}, void 0), onClick: goBack }, { children: translate('ra.action.back') }), void 0) }), void 0)] }), void 0));
};
const sanitizeRestProps = (_a) => {
    var { staticContext, history, location, match } = _a, rest = __rest(_a, ["staticContext", "history", "location", "match"]);
    return rest;
};
NotFound.propTypes = {
    className: prop_types_1.default.string,
    title: prop_types_1.default.string,
    location: prop_types_1.default.object,
};
exports.default = NotFound;
