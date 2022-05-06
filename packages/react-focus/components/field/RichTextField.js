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
exports.removeTags = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const prop_types_1 = __importDefault(require("prop-types"));
const get_1 = __importDefault(require("lodash/get"));
const Typography_1 = __importDefault(require("@mui/material/Typography"));
const core_1 = require("../../features/core");
const sanitizeFieldRestProps_1 = __importDefault(require("./sanitizeFieldRestProps"));
const types_1 = require("./types");
const removeTags = (input) => input ? input.replace(/<[^>]+>/gm, '') : '';
exports.removeTags = removeTags;
const RichTextField = (0, react_1.memo)(props => {
    const { className, emptyText, source, stripTags } = props, rest = __rest(props, ["className", "emptyText", "source", "stripTags"]);
    const record = (0, core_1.useRecordContext)(props);
    const value = (0, get_1.default)(record, source);
    return ((0, jsx_runtime_1.jsx)(Typography_1.default, Object.assign({ className: className, variant: "body2", component: "span" }, (0, sanitizeFieldRestProps_1.default)(rest), { children: value == null && emptyText ? (emptyText) : stripTags ? ((0, exports.removeTags)(value)) : ((0, jsx_runtime_1.jsx)("span", { dangerouslySetInnerHTML: { __html: value } }, void 0)) }), void 0));
});
RichTextField.defaultProps = {
    addLabel: true,
    stripTags: false,
};
RichTextField.propTypes = Object.assign(Object.assign(Object.assign({}, Typography_1.default.propTypes), types_1.fieldPropTypes), { stripTags: prop_types_1.default.bool });
RichTextField.displayName = 'RichTextField';
exports.default = RichTextField;
