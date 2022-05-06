"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/styles");
const classnames_1 = __importDefault(require("classnames"));
const useStyles = (0, styles_1.makeStyles)((theme) => ({
    root: {
        backgroundColor: theme.palette.grey[300],
        display: 'flex',
    },
}), { name: 'RaPlaceholder' });
const Placeholder = (props) => {
    const classes = useStyles(props);
    return ((0, jsx_runtime_1.jsx)("span", Object.assign({ className: (0, classnames_1.default)(classes.root, props.className) }, { children: "\u00A0" }), void 0));
};
exports.default = Placeholder;
