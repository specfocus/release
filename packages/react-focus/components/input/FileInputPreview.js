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
const react_1 = require("react");
const prop_types_1 = __importDefault(require("prop-types"));
const RemoveCircle_1 = __importDefault(require("@mui/icons-material/RemoveCircle"));
const IconButton_1 = __importDefault(require("@mui/material/IconButton"));
const core_1 = require("../../features/core");
const PREFIX = 'RaFileInputPreview';
const classes = {
    removeButton: `${PREFIX}-removeButton`,
    removeIcon: `${PREFIX}-removeIcon`,
};
const Root = (0, styles_1.styled)('div')(({ theme }) => ({
    [`& .${classes.removeButton}`]: {},
    [`& .${classes.removeIcon}`]: {
        color: theme.palette.error.main,
    },
}));
const FileInputPreview = (props) => {
    const { children, classes: classesOverride, className, onRemove, file } = props, rest = __rest(props, ["children", "classes", "className", "onRemove", "file"]);
    const translate = (0, core_1.useTranslate)();
    (0, react_1.useEffect)(() => {
        return () => {
            const preview = file.rawFile ? file.rawFile.preview : file.preview;
            if (preview) {
                window.URL.revokeObjectURL(preview);
            }
        };
    }, [file]);
    return ((0, jsx_runtime_1.jsxs)(Root, Object.assign({ className: className }, rest, { children: [(0, jsx_runtime_1.jsx)(IconButton_1.default, Object.assign({ className: classes.removeButton, onClick: onRemove, "aria-label": translate('ra.action.delete'), title: translate('ra.action.delete'), size: "large" }, { children: (0, jsx_runtime_1.jsx)(RemoveCircle_1.default, { className: classes.removeIcon }, void 0) }), void 0), children] }), void 0));
};
FileInputPreview.propTypes = {
    children: prop_types_1.default.element.isRequired,
    className: prop_types_1.default.string,
    file: prop_types_1.default.object,
    onRemove: prop_types_1.default.func.isRequired,
};
FileInputPreview.defaultProps = {
    file: undefined,
};
exports.default = FileInputPreview;
