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
const get_1 = __importDefault(require("lodash/get"));
const Typography_1 = __importDefault(require("@mui/material/Typography"));
const classnames_1 = __importDefault(require("classnames"));
const core_1 = require("../../features/core");
const sanitizeFieldRestProps_1 = __importDefault(require("./sanitizeFieldRestProps"));
const types_1 = require("./types");
const PREFIX = 'RaImageField';
const classes = {
    list: `${PREFIX}-list`,
    image: `${PREFIX}-image`,
};
const List = (0, styles_1.styled)('ul')({
    [`&.${classes.list}`]: {
        display: 'flex',
        listStyleType: 'none',
    },
    [`& .${classes.image}`]: {
        margin: '0.5rem',
        maxHeight: '10rem',
    },
});
const ImageField = (props) => {
    const { className, classes: classesOverride, emptyText, source, src, title } = props, rest = __rest(props, ["className", "classes", "emptyText", "source", "src", "title"]);
    const record = (0, core_1.useRecordContext)(props);
    const sourceValue = (0, get_1.default)(record, source);
    if (!sourceValue) {
        return emptyText ? ((0, jsx_runtime_1.jsx)(Typography_1.default, Object.assign({ component: "span", variant: "body2", className: className }, (0, sanitizeFieldRestProps_1.default)(rest), { children: emptyText }), void 0)) : ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: className }, (0, sanitizeFieldRestProps_1.default)(rest)), void 0));
    }
    if (Array.isArray(sourceValue)) {
        return ((0, jsx_runtime_1.jsx)(List, Object.assign({ className: (0, classnames_1.default)(classes.list, className) }, (0, sanitizeFieldRestProps_1.default)(rest), { children: sourceValue.map((file, index) => {
                const fileTitleValue = (0, get_1.default)(file, title) || title;
                const srcValue = (0, get_1.default)(file, src) || title;
                return ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("img", { alt: fileTitleValue, title: fileTitleValue, src: srcValue, className: classes.image }, void 0) }, index));
            }) }), void 0));
    }
    const titleValue = (0, get_1.default)(record, title) || title;
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: className }, (0, sanitizeFieldRestProps_1.default)(rest), { children: (0, jsx_runtime_1.jsx)("img", { title: titleValue, alt: titleValue, src: sourceValue, className: classes.image }, void 0) }), void 0));
};
// What? TypeScript loses the displayName if we don't set it explicitly
ImageField.displayName = 'ImageField';
ImageField.defaultProps = {
    addLabel: true,
};
ImageField.propTypes = Object.assign(Object.assign({}, types_1.fieldPropTypes), { src: prop_types_1.default.string, title: prop_types_1.default.string });
exports.default = ImageField;
