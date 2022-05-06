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
const Button_1 = __importDefault(require("@mui/material/Button"));
const InputAdornment_1 = __importDefault(require("@mui/material/InputAdornment"));
const TextField_1 = __importDefault(require("@mui/material/TextField"));
const react_1 = __importDefault(require("react"));
function MixedField(_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j;
    var { buttonSx, children, color, onInput, onChange, onClick, value: initialValue } = _a, spread = __rest(_a, ["buttonSx", "children", "color", "onInput", "onChange", "onClick", "value"]);
    const input = react_1.default.useRef();
    react_1.default.useEffect(() => {
        var _a, _b, _c;
        if (input.current) {
        }
        else if ((_a = spread.inputProps) === null || _a === void 0 ? void 0 : _a.current) {
            input.current = (_b = spread.inputProps) === null || _b === void 0 ? void 0 : _b.current;
        }
        else if ((_c = spread.inputProps) === null || _c === void 0 ? void 0 : _c.ref) {
            input.current = spread.InputProps.ref.current;
        } /* else if (spread.InputProps?.ref) {
          input.current = (spread.InputProps.ref as React.RefObject<HTMLInputElement>).current;
        } */
    }, [(_b = spread.inputProps) === null || _b === void 0 ? void 0 : _b.current, (_c = spread.inputProps) === null || _c === void 0 ? void 0 : _c.ref /*, spread.InputProps?.ref*/]);
    const [value, setValue] = react_1.default.useState(String(initialValue) || '');
    react_1.default.useEffect(() => {
        if (!input.current) {
            setValue(initialValue || '');
        }
        else if (input.current.value !== initialValue) {
            input.current.value = initialValue || '';
            setValue(initialValue || '');
        }
    }, [input.current, initialValue, setValue]);
    const handleChange = react_1.default.useCallback((event) => {
        var _a;
        if (event.target.value !== value) {
            setValue(event.target.value);
        }
        if (onChange) {
            onChange(event, (_a = input.current) === null || _a === void 0 ? void 0 : _a.value);
        }
    }, [(_d = input.current) === null || _d === void 0 ? void 0 : _d.value, onChange]);
    const handleInput = react_1.default.useCallback((event) => {
        var _a;
        if (onInput) {
            onInput(event, (_a = input.current) === null || _a === void 0 ? void 0 : _a.value);
        }
    }, [(_e = input.current) === null || _e === void 0 ? void 0 : _e.value, onChange]);
    const props = react_1.default.useMemo(() => {
        var _a, _b, _c, _d, _e;
        const hasStartAdornment = !!children;
        const hasButtonAdornment = !!onClick;
        const variant = (hasButtonAdornment && (spread.variant === 'filled')) ? 'outlined' : spread.variant;
        const text = (_a = input === null || input === void 0 ? void 0 : input.current) === null || _a === void 0 ? void 0 : _a.value;
        const startAdornment = hasButtonAdornment ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(InputAdornment_1.default, Object.assign({ position: "start" }, { children: (0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({ color: color, disabled: spread.disabled || !((text === null || text === void 0 ? void 0 : text.length) > 0 || !!initialValue), onClick: onClick, size: spread.size, sx: Object.assign({ margin: 0, marginLeft: -1, padding: 0 }, buttonSx), variant: variant === 'standard' ? 'text' : 'contained', disableElevation: true }, { children: children }), void 0) }), "button"), (_b = spread.InputProps) === null || _b === void 0 ? void 0 : _b.startAdornment] }, void 0)) : hasStartAdornment ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(InputAdornment_1.default, Object.assign({ position: "start" }, { children: children }), "button"), (_c = spread.InputProps) === null || _c === void 0 ? void 0 : _c.startAdornment] }, void 0)) : (_d = spread.InputProps) === null || _d === void 0 ? void 0 : _d.startAdornment;
        return Object.assign(Object.assign({}, spread), { inputRef: spread.inputRef || input, onInput: handleInput, onChange: handleChange, inputProps: Object.assign(Object.assign({}, spread.inputProps), { ref: ((_e = spread.inputProps) === null || _e === void 0 ? void 0 : _e.ref) || input }), InputProps: Object.assign(Object.assign({}, spread.InputProps), { 
                // ref: spread.InputProps?.ref || input,
                startAdornment }), value,
            variant });
    }, [
        spread,
        children,
        initialValue,
        (_f = input.current) === null || _f === void 0 ? void 0 : _f.value,
        onClick,
        spread.inputRef,
        (_g = spread.inputProps) === null || _g === void 0 ? void 0 : _g.ref,
        (_h = spread.InputProps) === null || _h === void 0 ? void 0 : _h.ref,
        (_j = spread.InputProps) === null || _j === void 0 ? void 0 : _j.startAdornment,
        value
    ]);
    return ((0, jsx_runtime_1.jsx)(TextField_1.default, Object.assign({}, props), void 0));
}
;
exports.default = MixedField;
