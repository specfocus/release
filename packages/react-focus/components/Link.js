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
const prop_types_1 = __importDefault(require("prop-types"));
const classnames_1 = __importDefault(require("classnames"));
const react_router_dom_1 = require("react-router-dom");
const styles_1 = require("@mui/styles");
const useStyles = (0, styles_1.makeStyles)((theme) => ({
    link: {
        textDecoration: 'none',
        color: theme.palette.primary.main,
    },
}), { name: 'RaLink' });
const Link = (props) => {
    const { to, children, classes: classesOverride, className } = props, rest = __rest(props, ["to", "children", "classes", "className"]);
    const classes = useStyles(props);
    return ((0, jsx_runtime_1.jsx)(react_router_dom_1.Link, Object.assign({ to: to, className: (0, classnames_1.default)(classes.link, className) }, rest, { children: children }), void 0));
};
Link.propTypes = {
    className: prop_types_1.default.string,
    children: prop_types_1.default.node,
    to: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
};
exports.default = Link;
