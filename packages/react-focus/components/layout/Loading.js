"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const prop_types_1 = __importDefault(require("prop-types"));
const classnames_1 = __importDefault(require("classnames"));
const CircularProgress_1 = __importDefault(require("@mui/material/CircularProgress"));
const core_1 = require("../../features/core");
const PREFIX = 'RaLoading';
const classes = {
    container: `${PREFIX}-container`,
    icon: `${PREFIX}-icon`,
    message: `${PREFIX}-message`,
};
const Root = (0, styles_1.styled)('div')(({ theme }) => ({
    [`&.${classes.container}`]: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        [theme.breakpoints.up('md')]: {
            height: '100%',
        },
        [theme.breakpoints.down('xl')]: {
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
}));
const Loading = props => {
    const { className, loadingPrimary = 'ra.page.loading', loadingSecondary = 'ra.message.loading', } = props;
    const translate = (0, core_1.useTranslate)();
    return ((0, jsx_runtime_1.jsx)(Root, Object.assign({ className: (0, classnames_1.default)(classes.container, className) }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: classes.message }, { children: [(0, jsx_runtime_1.jsx)(CircularProgress_1.default, { className: classes.icon, color: "primary" }, void 0), (0, jsx_runtime_1.jsx)("h1", { children: translate(loadingPrimary) }, void 0), (0, jsx_runtime_1.jsxs)("div", { children: [translate(loadingSecondary), "."] }, void 0)] }), void 0) }), void 0));
};
Loading.propTypes = {
    className: prop_types_1.default.string,
    loadingPrimary: prop_types_1.default.string,
    loadingSecondary: prop_types_1.default.string,
};
Loading.defaultProps = {
    loadingPrimary: 'ra.page.loading',
    loadingSecondary: 'ra.message.loading',
};
exports.default = Loading;
