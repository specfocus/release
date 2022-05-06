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
const react_1 = require("react");
const get_1 = __importDefault(require("lodash/get"));
const sanitizeFieldRestProps_1 = __importDefault(require("./sanitizeFieldRestProps"));
const material_1 = require("@mui/material");
const core_1 = require("../../features/core");
const types_1 = require("./types");
const UrlField = (0, react_1.memo)(props => {
    const { className, emptyText, source } = props, rest = __rest(props, ["className", "emptyText", "source"]);
    const record = (0, core_1.useRecordContext)(props);
    const value = (0, get_1.default)(record, source);
    if (value == null) {
        return ((0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ component: "span", variant: "body2", className: className }, (0, sanitizeFieldRestProps_1.default)(rest), { children: emptyText }), void 0));
    }
    return ((0, jsx_runtime_1.jsx)(material_1.Link, Object.assign({ className: className, href: value, variant: "body2" }, (0, sanitizeFieldRestProps_1.default)(rest), { children: value }), void 0));
});
UrlField.defaultProps = {
    addLabel: true,
};
UrlField.propTypes = types_1.fieldPropTypes;
UrlField.displayName = 'UrlField';
exports.default = UrlField;
