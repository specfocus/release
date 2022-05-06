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
const prop_types_1 = __importDefault(require("prop-types"));
const FormControlLabel_1 = __importDefault(require("@mui/material/FormControlLabel"));
const FormHelperText_1 = __importDefault(require("@mui/material/FormHelperText"));
const FormGroup_1 = __importDefault(require("@mui/material/FormGroup"));
const Switch_1 = __importDefault(require("@mui/material/Switch"));
const core_1 = require("../../features/core");
const sanitizeInputRestProps_1 = __importDefault(require("./sanitizeInputRestProps"));
const InputHelperText_1 = __importDefault(require("./InputHelperText"));
const InputPropTypes_1 = __importDefault(require("./InputPropTypes"));
const BooleanInput = (props) => {
    const { format, label, fullWidth, helperText, onBlur, onChange, onFocus, options, disabled, parse, resource, source, validate } = props, rest = __rest(props, ["format", "label", "fullWidth", "helperText", "onBlur", "onChange", "onFocus", "options", "disabled", "parse", "resource", "source", "validate"]);
    const _a = (0, core_1.useInput)(Object.assign({ format,
        onBlur,
        onChange,
        onFocus,
        parse,
        resource,
        source, type: 'checkbox', validate }, rest)), { id } = _a, _b = _a.input, { onChange: finalFormOnChange, type, value } = _b, inputProps = __rest(_b, ["onChange", "type", "value"]), { isRequired, meta: { error, submitError, touched } } = _a;
    const handleChange = (0, react_1.useCallback)((event, value) => {
        finalFormOnChange(value);
    }, [finalFormOnChange]);
    return ((0, jsx_runtime_1.jsxs)(FormGroup_1.default, Object.assign({}, (0, sanitizeInputRestProps_1.default)(rest), { children: [(0, jsx_runtime_1.jsx)(FormControlLabel_1.default, { control: (0, jsx_runtime_1.jsx)(Switch_1.default, Object.assign({ id: id, color: "primary", onChange: handleChange }, inputProps, options, { disabled: disabled }), void 0), label: (0, jsx_runtime_1.jsx)(core_1.FieldTitle, { label: label, source: source, resource: resource, isRequired: isRequired }, void 0) }, void 0), (0, jsx_runtime_1.jsx)(FormHelperText_1.default, Object.assign({ error: !!(error || submitError) }, { children: (0, jsx_runtime_1.jsx)(InputHelperText_1.default, { touched: touched, error: error || submitError, helperText: helperText }, void 0) }), void 0)] }), void 0));
};
BooleanInput.propTypes = Object.assign(Object.assign({}, InputPropTypes_1.default), { 
    // @ts-ignore
    options: prop_types_1.default.shape(Switch_1.default.propTypes), disabled: prop_types_1.default.bool });
BooleanInput.defaultProps = {
    options: {},
};
exports.default = BooleanInput;
