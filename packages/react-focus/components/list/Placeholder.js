"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const classnames_1 = __importDefault(require("classnames"));
const PREFIX = 'RaPlaceholder';
const classes = {
    root: `${PREFIX}-root`,
};
const Root = (0, styles_1.styled)('span')(({ theme }) => ({
    [`&.${classes.root}`]: {
        backgroundColor: theme.palette.grey[300],
        display: 'flex',
    },
}));
const Placeholder = (props) => {
    return ((0, jsx_runtime_1.jsx)(Root, Object.assign({ className: (0, classnames_1.default)(classes.root, props.className) }, { children: "\u00A0" }), void 0));
};
exports.default = Placeholder;
