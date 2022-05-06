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
const classnames_1 = __importDefault(require("classnames"));
const react_redux_1 = require("react-redux");
const styles_2 = require("@mui/material/styles");
const CircularProgress_1 = __importDefault(require("@mui/material/CircularProgress"));
const core_1 = require("../../features/core");
const RefreshIconButton_1 = __importDefault(require("../button/RefreshIconButton"));
const PREFIX = 'RaLoadingIndicator';
const classes = {
    loader: `${PREFIX}-loader`,
    loadedIcon: `${PREFIX}-loadedIcon`,
};
const Root = (0, styles_1.styled)('div')(({ theme }) => ({
    [`& .${classes.loader}`]: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
    },
    [`& .${classes.loadedIcon}`]: {},
}));
const LoadingIndicator = (props) => {
    const { className } = props, rest = __rest(props, ["className"]);
    (0, core_1.useRefreshWhenVisible)();
    const loading = (0, react_redux_1.useSelector)(state => state.admin.loading > 0);
    const theme = (0, styles_2.useTheme)();
    return ((0, jsx_runtime_1.jsx)(Root, { children: loading ? ((0, jsx_runtime_1.jsx)(CircularProgress_1.default, Object.assign({ className: (0, classnames_1.default)('app-loader', classes.loader, className), color: "inherit", size: theme.spacing(2), thickness: 6 }, rest), void 0)) : ((0, jsx_runtime_1.jsx)(RefreshIconButton_1.default, { className: classes.loadedIcon }, void 0)) }, void 0));
};
LoadingIndicator.propTypes = {
    classes: prop_types_1.default.object,
    className: prop_types_1.default.string,
    width: prop_types_1.default.string,
};
exports.default = LoadingIndicator;
