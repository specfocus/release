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
const core_1 = require("../../features/core");
const classnames_1 = __importDefault(require("classnames"));
const PREFIX = 'RaCardActions';
const classes = {
    cardActions: `${PREFIX}-cardActions`,
};
const Root = (0, styles_1.styled)('div')({
    [`&.${classes.cardActions}`]: {
        zIndex: 2,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        flexWrap: 'wrap',
        padding: 0,
    },
});
const CardActions = props => {
    const { className, children } = props, rest = __rest(props, ["className", "children"]);
    (0, core_1.warning)(true, '<CardActions> is deprecated. Please use the <TopToolbar> component instead to wrap your action buttons');
    return ((0, jsx_runtime_1.jsx)(Root, Object.assign({ className: (0, classnames_1.default)(classes.cardActions, className) }, rest, { children: children }), void 0));
};
CardActions.propTypes = {
    children: prop_types_1.default.node,
    className: prop_types_1.default.string,
};
exports.default = CardActions;
