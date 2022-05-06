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
const Paper_1 = __importDefault(require("@mui/material/Paper"));
const styles_1 = require("@mui/styles");
const useStyles = (0, styles_1.makeStyles)((theme) => ({
    paper: {
        marginTop: theme.spacing(0),
        marginBottom: theme.spacing(0),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + parseInt(theme.spacing(2)) * 2)]: {
            marginTop: theme.spacing(0),
            marginBottom: theme.spacing(0),
            padding: theme.spacing(2),
        },
    }
}));
function Paper(_a) {
    var { children } = _a, otherProps = __rest(_a, ["children"]);
    const classes = useStyles();
    return ((0, jsx_runtime_1.jsx)(Paper_1.default, Object.assign({ className: classes.paper }, otherProps, { children: children }), void 0));
}
exports.default = Paper;
