"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const React = __importStar(require("react"));
const styles_1 = require("@mui/material/styles");
const prop_types_1 = __importDefault(require("prop-types"));
const classnames_1 = __importDefault(require("classnames"));
const Labeled_1 = __importDefault(require("../input/Labeled"));
const PREFIX = 'RaFormInput';
const classes = {
    input: `${PREFIX}-input`,
};
const Root = (0, styles_1.styled)('div')(({ theme }) => ({
    [`& .${classes.input}`]: { width: theme.spacing(32) },
}));
const sanitizeRestProps = (_a) => {
    var { basePath, record } = _a, rest = __rest(_a, ["basePath", "record"]);
    return rest;
};
const FormInput = (props) => {
    const { input } = props, rest = __rest(props, ["input"]);
    const _a = input
        ? input.props
        : { id: undefined, className: undefined }, { id, className } = _a, inputProps = __rest(_a, ["id", "className"]);
    return input ? ((0, jsx_runtime_1.jsx)(Root, Object.assign({ className: (0, classnames_1.default)('ra-input', `ra-input-${input.props.source}`, input.props.formClassName) }, { children: input.props.addLabel ? ((0, jsx_runtime_1.jsx)(Labeled_1.default, Object.assign({ id: id || input.props.source }, inputProps, sanitizeRestProps(rest), { children: React.cloneElement(input, Object.assign(Object.assign({ className: (0, classnames_1.default)({
                    [classes.input]: !input.props.fullWidth,
                }, className), id: input.props.id || input.props.source }, rest), inputProps)) }), void 0)) : (React.cloneElement(input, Object.assign(Object.assign({ className: (0, classnames_1.default)({
                [classes.input]: !input.props.fullWidth,
            }, className), id: input.props.id || input.props.source }, rest), inputProps))) }), void 0)) : null;
};
FormInput.propTypes = {
    classes: prop_types_1.default.object,
    // @ts-ignore
    input: prop_types_1.default.node,
};
// What? TypeScript loses the displayName if we don't set it explicitly
FormInput.displayName = 'FormInput';
exports.default = FormInput;
