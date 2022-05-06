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
exports.NumberField = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const prop_types_1 = __importDefault(require("prop-types"));
const get_1 = __importDefault(require("lodash/get"));
const Typography_1 = __importDefault(require("@mui/material/Typography"));
const core_1 = require("../../features/core");
const sanitizeFieldRestProps_1 = __importDefault(require("./sanitizeFieldRestProps"));
const types_1 = require("./types");
const hasNumberFormat = !!(typeof Intl === 'object' &&
    Intl &&
    typeof Intl.NumberFormat === 'function');
/**
 * Display a numeric value as a locale string.
 *
 * Uses Intl.NumberFormat() if available, passing the locales and options props as arguments.
 * If Intl is not available, it outputs number as is (and ignores the locales and options props).
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
 * @example
 * <NumberField source="score" />
 * // renders the record { id: 1234, score: 567 } as
 * <span>567</span>
 *
 * <NumberField source="score" className="red" />
 * // renders the record { id: 1234, score: 567 } as
 * <span class="red">567</span>
 *
 * <NumberField source="share" options={{ style: 'percent' }} />
 * // renders the record { id: 1234, share: 0.2545 } as
 * <span>25%</span>
 *
 * <NumberField source="price" options={{ style: 'currency', currency: 'USD' }} />
 * // renders the record { id: 1234, price: 25.99 } as
 * <span>$25.99</span>
 *
 * <NumberField source="price" locales="fr-FR" options={{ style: 'currency', currency: 'USD' }} />
 * // renders the record { id: 1234, price: 25.99 } as
 * <span>25,99 $US</span>
 */
exports.NumberField = (0, react_1.memo)(props => {
    const { className, emptyText, source, locales, options, textAlign } = props, rest = __rest(props, ["className", "emptyText", "source", "locales", "options", "textAlign"]);
    const record = (0, core_1.useRecordContext)(props);
    if (!record) {
        return null;
    }
    const value = (0, get_1.default)(record, source);
    if (value == null) {
        return emptyText ? ((0, jsx_runtime_1.jsx)(Typography_1.default, Object.assign({ component: "span", variant: "body2", className: className }, (0, sanitizeFieldRestProps_1.default)(rest), { children: emptyText }), void 0)) : null;
    }
    return ((0, jsx_runtime_1.jsx)(Typography_1.default, Object.assign({ variant: "body2", component: "span", className: className }, (0, sanitizeFieldRestProps_1.default)(rest), { children: hasNumberFormat ? value.toLocaleString(locales, options) : value }), void 0));
});
// what? TypeScript loses the displayName if we don't set it explicitly
exports.NumberField.displayName = 'NumberField';
exports.NumberField.defaultProps = {
    addLabel: true,
    textAlign: 'right',
};
exports.NumberField.propTypes = Object.assign(Object.assign(Object.assign({}, Typography_1.default.propTypes), types_1.fieldPropTypes), { locales: prop_types_1.default.oneOfType([
        prop_types_1.default.string,
        prop_types_1.default.arrayOf(prop_types_1.default.string),
    ]), options: prop_types_1.default.object });
exports.default = exports.NumberField;
