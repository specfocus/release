"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const prop_types_1 = __importDefault(require("prop-types"));
const classnames_1 = __importDefault(require("classnames"));
const CardContent_1 = __importDefault(require("@mui/material/CardContent"));
const PREFIX = 'RaCardContentInner';
const classes = {
    root: `${PREFIX}-root`,
};
const Root = (0, styles_1.styled)(CardContent_1.default)(({ theme }) => ({
    [`&.${classes.root}`]: {
        paddingTop: 0,
        paddingBottom: 0,
        '&:first-of-type': {
            paddingTop: 16,
        },
        '&:last-child': {
            paddingBottom: 16,
            [theme.breakpoints.only('xs')]: {
                paddingBottom: 70,
            },
        },
    },
}));
/**
 * Overrides material-ui CardContent to allow inner content
 *
 * When using several CardContent inside the same Card, the top and bottom
 * padding double the spacing between each CardContent, leading to too much
 * wasted space. Use this component as a CardContent alternative.
 */
const CardContentInner = (props) => {
    const { className, children } = props;
    return ((0, jsx_runtime_1.jsx)(Root, Object.assign({ className: (0, classnames_1.default)(classes.root, className) }, { children: children }), void 0));
};
CardContentInner.propTypes = {
    className: prop_types_1.default.string,
    classes: prop_types_1.default.object,
    children: prop_types_1.default.node,
};
exports.default = CardContentInner;
