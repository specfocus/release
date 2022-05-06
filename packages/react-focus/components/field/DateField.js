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
exports.DateField = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const prop_types_1 = __importDefault(require("prop-types"));
const get_1 = __importDefault(require("lodash/get"));
const material_1 = require("@mui/material");
const core_1 = require("../../features/core");
const sanitizeFieldRestProps_1 = __importDefault(require("./sanitizeFieldRestProps"));
const types_1 = require("./types");
const toLocaleStringSupportsLocales = (() => {
    // from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
    try {
        new Date().toLocaleString('i');
    }
    catch (error) {
        return error instanceof RangeError;
    }
    return false;
})();
/**
 * Display a date value as a locale string.
 *
 * Uses Intl.DateTimeFormat() if available, passing the locales and options props as arguments.
 * If Intl is not available, it outputs date as is (and ignores the locales and options props).
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
 * @example
 * <DateField source="published_at" />
 * // renders the record { id: 1234, published_at: new Date('2012-11-07') } as
 * <span>07/11/2012</span>
 *
 * <DateField source="published_at" className="red" />
 * // renders the record { id: 1234, new Date('2012-11-07') } as
 * <span class="red">07/11/2012</span>
 *
 * <DateField source="share" options={{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }} />
 * // renders the record { id: 1234, new Date('2012-11-07') } as
 * <span>Wednesday, November 7, 2012</span>
 *
 * <DateField source="price" locales="fr-FR" options={{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }} />
 * // renders the record { id: 1234, new Date('2012-11-07') } as
 * <span>mercredi 7 novembre 2012</span>
 */
exports.DateField = (0, react_1.memo)(props => {
    const { className, emptyText, locales, options, showTime = false, source } = props, rest = __rest(props, ["className", "emptyText", "locales", "options", "showTime", "source"]);
    const record = (0, core_1.useRecordContext)(props);
    if (!record) {
        return null;
    }
    const value = (0, get_1.default)(record, source);
    if (value == null || value === '') {
        return emptyText ? ((0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ component: "span", variant: "body2", className: className }, (0, sanitizeFieldRestProps_1.default)(rest), { children: emptyText }), void 0)) : null;
    }
    const date = value instanceof Date ? value : new Date(value);
    const dateString = showTime
        ? toLocaleStringSupportsLocales
            ? date.toLocaleString(locales, options)
            : date.toLocaleString()
        : toLocaleStringSupportsLocales
            ? date.toLocaleDateString(locales, options)
            : date.toLocaleDateString();
    return ((0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ component: "span", variant: "body2", className: className }, (0, sanitizeFieldRestProps_1.default)(rest), { children: dateString }), void 0));
});
exports.DateField.defaultProps = {
    addLabel: true,
};
exports.DateField.propTypes = Object.assign(Object.assign(Object.assign({}, material_1.Typography.propTypes), types_1.fieldPropTypes), { locales: prop_types_1.default.oneOfType([
        prop_types_1.default.string,
        prop_types_1.default.arrayOf(prop_types_1.default.string),
    ]), options: prop_types_1.default.object, showTime: prop_types_1.default.bool });
exports.DateField.displayName = 'DateField';
exports.default = exports.DateField;
