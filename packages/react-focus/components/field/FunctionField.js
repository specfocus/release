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
const core_1 = require("../../features/core");
const prop_types_1 = __importDefault(require("prop-types"));
const Typography_1 = __importDefault(require("@mui/material/Typography"));
const sanitizeFieldRestProps_1 = __importDefault(require("./sanitizeFieldRestProps"));
const types_1 = require("./types");
/**
 * Field using a render function
 *
 * @example
 * <FunctionField
 *     source="last_name" // used for sorting
 *     label="Name"
 *     render={record => record && `${record.first_name} ${record.last_name}`}
 * />
 */
const FunctionField = (props) => {
    const { className, source = '', render } = props, rest = __rest(props, ["className", "source", "render"]);
    const record = (0, core_1.useRecordContext)(props);
    return (0, react_1.useMemo)(() => record ? ((0, jsx_runtime_1.jsx)(Typography_1.default, Object.assign({ component: "span", variant: "body2", className: className }, (0, sanitizeFieldRestProps_1.default)(rest), { children: render(record, source) }), void 0)) : null, [className, record, source, render, rest]);
};
FunctionField.defaultProps = {
    addLabel: true,
};
FunctionField.propTypes = Object.assign(Object.assign(Object.assign({}, Typography_1.default.propTypes), types_1.fieldPropTypes), { render: prop_types_1.default.func.isRequired });
exports.default = FunctionField;
