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
const Toolbar_1 = __importDefault(require("@mui/material/Toolbar"));
const classnames_1 = __importDefault(require("classnames"));
const PREFIX = 'RaTopToolbar';
const classes = {
    root: `${PREFIX}-root`,
};
const StyledToolbar = (0, styles_1.styled)(Toolbar_1.default)(({ theme }) => ({
    [`&.${classes.root}`]: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(1),
        minHeight: theme.spacing(5),
        [theme.breakpoints.up('xs')]: {
            paddingLeft: 0,
            paddingRight: 0,
        },
        [theme.breakpoints.down('md')]: {
            paddingRight: theme.spacing(2),
        },
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(1),
            backgroundColor: theme.palette.background.paper,
        },
    },
}));
const TopToolbar = props => {
    const { className, children } = props, rest = __rest(props, ["className", "children"]);
    return ((0, jsx_runtime_1.jsx)(StyledToolbar, Object.assign({ className: (0, classnames_1.default)(classes.root, className) }, rest, { children: children }), void 0));
};
TopToolbar.propTypes = {
    children: prop_types_1.default.node,
    className: prop_types_1.default.string,
};
exports.default = TopToolbar;
