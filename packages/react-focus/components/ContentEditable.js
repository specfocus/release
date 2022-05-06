"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const styles_1 = require("@mui/material/styles");
// This is from David Walshes Blog Post 
// https://davidwalsh.name/javascript-debounce-function
// A very simplified but effective version of Underscores debounce function
function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate)
                func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow)
            func.apply(context, args);
    };
}
;
const Content = (0, styles_1.styled)('span')(({ theme }) => ({
    display: 'inline-block',
    minWidth: '1em',
    ':read-write:focus': {
        outline: 'none'
    }
}));
const ContentEditable = ({ blurOn, children, onChange }) => {
    const ref = react_1.default.useRef();
    const handleChange = react_1.default.useCallback(( /* event: React.FormEventHandler<HTMLSpanElement> */) => {
        var _a;
        const value = (_a = ref.current) === null || _a === void 0 ? void 0 : _a.innerText;
        if (onChange) {
            onChange(value);
        }
        ref.current.blur();
    }, [onChange, ref.current]);
    const lazyChange = react_1.default.useCallback(debounce(handleChange, 3000, false), [handleChange]);
    react_1.default.useEffect(() => {
        if (blurOn) {
            const listener = (e) => {
                if (blurOn.includes(e.key)) {
                    ref.current.blur();
                }
            };
            window === null || window === void 0 ? void 0 : window.addEventListener('keydown', listener);
            return () => {
                window.removeEventListener('keydown', listener);
            };
        }
    }, [ref.current]);
    return ((0, jsx_runtime_1.jsx)(Content, Object.assign({ ref: ref, onBlur: handleChange, onChange: lazyChange, onInput: lazyChange, suppressContentEditableWarning: true, contentEditable: true }, { children: children }), void 0));
};
exports.default = ContentEditable;
