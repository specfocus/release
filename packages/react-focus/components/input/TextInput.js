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
const prop_types_1 = __importDefault(require("prop-types"));
const core_1 = require("../../features/core");
const ResettableTextField_1 = __importDefault(require("./ResettableTextField"));
const InputHelperText_1 = __importDefault(require("./InputHelperText"));
const sanitizeInputRestProps_1 = __importDefault(require("./sanitizeInputRestProps"));
/**
 * An Input component for a string
 *
 * @example
 * <TextInput source="first_name" />
 *
 * You can customize the `type` props (which defaults to "text").
 * Note that, due to a React bug, you should use `<NumberField>` instead of using type="number".
 * @example
 * <TextInput source="email" type="email" />
 * <NumberInput source="nb_views" />
 *
 * The object passed as `options` props is passed to the <ResettableTextField> component
 */
const TextInput = (props) => {
    const { label, format, helperText, onBlur, onFocus, onChange, options, parse, resource, source, validate } = props, rest = __rest(props, ["label", "format", "helperText", "onBlur", "onFocus", "onChange", "options", "parse", "resource", "source", "validate"]);
    const { id, input, isRequired, meta: { error, submitError, touched }, } = (0, core_1.useInput)(Object.assign({ format,
        onBlur,
        onChange,
        onFocus,
        parse,
        resource,
        source, type: 'text', validate }, rest));
    return ((0, jsx_runtime_1.jsx)(ResettableTextField_1.default, Object.assign({ id: id }, input, { label: label !== '' &&
            label !== false && ((0, jsx_runtime_1.jsx)(core_1.FieldTitle, { label: label, source: source, resource: resource, isRequired: isRequired }, void 0)), error: !!(touched && (error || submitError)), helperText: (0, jsx_runtime_1.jsx)(InputHelperText_1.default, { touched: touched, error: error || submitError, helperText: helperText }, void 0) }, options, (0, sanitizeInputRestProps_1.default)(rest)), void 0));
};
TextInput.propTypes = {
    className: prop_types_1.default.string,
    label: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.bool]),
    options: prop_types_1.default.object,
    resource: prop_types_1.default.string,
    source: prop_types_1.default.string,
};
TextInput.defaultProps = {
    options: {},
};
exports.default = TextInput;
