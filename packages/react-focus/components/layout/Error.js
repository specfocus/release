"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const react_1 = require("react");
const prop_types_1 = __importDefault(require("prop-types"));
const classnames_1 = __importDefault(require("classnames"));
const material_1 = require("@mui/material");
const Report_1 = __importDefault(require("@mui/icons-material/Report"));
const ExpandMore_1 = __importDefault(require("@mui/icons-material/ExpandMore"));
const History_1 = __importDefault(require("@mui/icons-material/History"));
const core_1 = require("../../features/core");
const Title_1 = __importStar(require("./Title"));
const PREFIX = 'RaError';
const classes = {
    container: `${PREFIX}-container`,
    title: `${PREFIX}-title`,
    icon: `${PREFIX}-icon`,
    panel: `${PREFIX}-panel`,
    panelDetails: `${PREFIX}-panelDetails`,
    toolbar: `${PREFIX}-toolbar`,
    advice: `${PREFIX}-advice`,
};
const Root = (0, styles_1.styled)('div')(({ theme }) => ({
    [`&.${classes.container}`]: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.down('md')]: {
            padding: '1em',
        },
        fontFamily: 'Roboto, sans-serif',
        opacity: 0.5,
    },
    [`& .${classes.title}`]: {
        display: 'flex',
        alignItems: 'center',
    },
    [`& .${classes.icon}`]: {
        width: '2em',
        height: '2em',
        marginRight: '0.5em',
    },
    [`& .${classes.panel}`]: {
        marginTop: '1em',
        maxWidth: '60em',
    },
    [`& .${classes.panelDetails}`]: {
        whiteSpace: 'pre-wrap',
    },
    [`& .${classes.toolbar}`]: {
        marginTop: '2em',
    },
    [`& .${classes.advice}`]: {
        marginTop: '2em',
    },
}));
function goBack() {
    window.history.go(-1);
}
const Error = (props) => {
    const { error, errorInfo, className, title } = props, rest = __rest(props, ["error", "errorInfo", "className", "title"]);
    const translate = (0, core_1.useTranslate)();
    return ((0, jsx_runtime_1.jsxs)(react_1.Fragment, { children: [title && (0, jsx_runtime_1.jsx)(Title_1.default, { defaultTitle: title }, void 0), (0, jsx_runtime_1.jsxs)(Root, Object.assign({ className: (0, classnames_1.default)(classes.container, className) }, rest, { children: [(0, jsx_runtime_1.jsxs)("h1", Object.assign({ className: classes.title, role: "alert" }, { children: [(0, jsx_runtime_1.jsx)(Report_1.default, { className: classes.icon }, void 0), translate('ra.page.error')] }), void 0), (0, jsx_runtime_1.jsx)("div", { children: translate('ra.message.error') }, void 0), process.env.NODE_ENV !== 'production' && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(material_1.Accordion, Object.assign({ className: classes.panel }, { children: [(0, jsx_runtime_1.jsx)(material_1.AccordionSummary, Object.assign({ expandIcon: (0, jsx_runtime_1.jsx)(ExpandMore_1.default, {}, void 0) }, { children: translate(error.toString(), {
                                            _: error.toString(),
                                        }) }), void 0), errorInfo && ((0, jsx_runtime_1.jsx)(material_1.AccordionDetails, Object.assign({ className: classes.panelDetails }, { children: errorInfo.componentStack }), void 0))] }), void 0), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: classes.advice }, { children: [(0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ align: "center" }, { children: "Need help with this error? Try the following:" }), void 0), (0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ component: "div" }, { children: (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsxs)("li", { children: ["Check the", ' ', (0, jsx_runtime_1.jsx)("a", Object.assign({ href: "https://marmelab.com/../../app/Readme.html" }, { children: "../../app documentation" }), void 0)] }, void 0), (0, jsx_runtime_1.jsxs)("li", { children: ["Search on", ' ', (0, jsx_runtime_1.jsx)("a", Object.assign({ href: "https://stackoverflow.com/questions/tagged/../../app" }, { children: "StackOverflow" }), void 0), ' ', "for community answers"] }, void 0), (0, jsx_runtime_1.jsxs)("li", { children: ["Get help from the core team via", ' ', (0, jsx_runtime_1.jsx)("a", Object.assign({ href: "https://marmelab.com/ra-enterprise/#fromsww" }, { children: "../../app Enterprise Edition" }), void 0)] }, void 0)] }, void 0) }), void 0)] }), void 0)] }, void 0)), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: classes.toolbar }, { children: (0, jsx_runtime_1.jsx)(material_1.Button, Object.assign({ variant: "contained", startIcon: (0, jsx_runtime_1.jsx)(History_1.default, {}, void 0), onClick: goBack }, { children: translate('ra.action.back') }), void 0) }), void 0)] }), void 0)] }, void 0));
};
Error.propTypes = {
    className: prop_types_1.default.string,
    error: prop_types_1.default.object.isRequired,
    errorInfo: prop_types_1.default.object,
    title: Title_1.TitlePropType,
};
exports.default = Error;
