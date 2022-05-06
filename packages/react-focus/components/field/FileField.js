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
const PREFIX = 'RaFileField';
const classes = {
    root: `${PREFIX}-root`,
};
const Root = (0, styles_1.styled)('div')({
    [`&.${classes.root}`]: { display: 'inline-block' },
});
const StyledList = (0, styles_1.styled)('ul')({
    [`&.${classes.root}`]: { display: 'inline-block' },
});
/**
 * Render a link to a file based on a path contained in a record field
 *
 * @example
 * import { FileField } from '../../app';
 *
 * <FileField source="url" title="title" />
 *
 * // renders the record { id: 123, url: 'doc.pdf', title: 'Presentation' } as
 * <div>
 *     <a href="doc.pdf" title="Presentation">Presentation</a>
 * </div>
 */
const FileField = (props) => {
    const { className, classes: classesOverride, emptyText, source, title, src, target, download, ping, rel } = props, rest = __rest(props, ["className", "classes", "emptyText", "source", "title", "src", "target", "download", "ping", "rel"]);
    const record = (0, core_1.useRecordContext)(props);
    const sourceValue = (0, get_1.default)(record, source);
    if (!sourceValue) {
        return emptyText ? ((0, jsx_runtime_1.jsx)(Typography_1.default, Object.assign({ component: "span", variant: "body2", className: className }, (0, sanitizeFieldRestProps_1.default)(rest), { children: emptyText }), void 0)) : ((0, jsx_runtime_1.jsx)(Root, Object.assign({ className: (0, classnames_1.default)(classes.root, className) }, (0, sanitizeFieldRestProps_1.default)(rest)), void 0));
    }
    if (Array.isArray(sourceValue)) {
        return ((0, jsx_runtime_1.jsx)(StyledList, Object.assign({ className: (0, classnames_1.default)(classes.root, className) }, (0, sanitizeFieldRestProps_1.default)(rest), { children: sourceValue.map((file, index) => {
                const fileTitleValue = (0, get_1.default)(file, title) || title;
                const srcValue = (0, get_1.default)(file, src) || title;
                return ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("a", Object.assign({ href: srcValue, title: fileTitleValue, target: target, download: download, ping: ping, rel: rel }, { children: fileTitleValue }), void 0) }, index));
            }) }), void 0));
    }
    const titleValue = (0, get_1.default)(record, title) || title;
    return ((0, jsx_runtime_1.jsx)(Root, Object.assign({ className: (0, classnames_1.default)(classes.root, className) }, (0, sanitizeFieldRestProps_1.default)(rest), { children: (0, jsx_runtime_1.jsx)("a", Object.assign({ href: sourceValue, title: titleValue, target: target, download: download, ping: ping, rel: rel }, { children: titleValue }), void 0) }), void 0));
};
FileField.defaultProps = {
    addLabel: true,
};
FileField.propTypes = Object.assign(Object.assign({}, types_1.fieldPropTypes), { src: prop_types_1.default.string, title: prop_types_1.default.string, target: prop_types_1.default.string, download: prop_types_1.default.oneOfType([prop_types_1.default.bool, prop_types_1.default.string]), ping: prop_types_1.default.string, rel: prop_types_1.default.string });
exports.default = FileField;
