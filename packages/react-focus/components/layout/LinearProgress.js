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
const LinearProgress_1 = __importDefault(require("@mui/material/LinearProgress"));
const prop_types_1 = __importDefault(require("prop-types"));
const classnames_1 = __importDefault(require("classnames"));
const core_1 = require("../../features/core");
const PREFIX = 'RaLinearProgress';
const classes = {
    root: `${PREFIX}-root`,
};
const StyledProgress = (0, styles_1.styled)(LinearProgress_1.default)(({ theme }) => ({
    [`&.${classes.root}`]: {
        margin: `${theme.spacing(1)} 0`,
        width: theme.spacing(20),
    },
}));
/**
 * Progress bar formatted to replace an input or a field in a form layout
 *
 * Avoids visual jumps when replaced by value or form input
 *
 * @see ReferenceField
 * @see ReferenceInput
 *
 * @typedef {Object} Props the props you can use
 * @prop {Object} classes CSS class names
 * @prop {string} className CSS class applied to the LinearProgress component
 * @prop {integer} timeout Milliseconds to wait before showing the progress bar. One second by default
 *
 * @param {Props} props
 */
const LinearProgress = (_a) => {
    var { timeout = 1000 } = _a, props = __rest(_a, ["timeout"]);
    const { className } = props, rest = __rest(props, ["className"]);
    const oneSecondHasPassed = (0, core_1.useTimeout)(timeout);
    return oneSecondHasPassed ? ((0, jsx_runtime_1.jsx)(StyledProgress, Object.assign({ className: (0, classnames_1.default)(classes.root, className) }, rest), void 0)) : null;
};
LinearProgress.propTypes = {
    className: prop_types_1.default.string,
    timeout: prop_types_1.default.number,
};
// What? TypeScript loses the displayName if we don't set it explicitly
LinearProgress.displayName = 'LinearProgress';
exports.default = LinearProgress;
