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
const debounce_1 = __importDefault(require("lodash/debounce"));
const react_1 = require("react");
const quill_1 = __importDefault(require("quill"));
const core_1 = require("../../features/core");
const __1 = require("..");
const material_1 = require("@mui/material");
const styles_1 = require("@mui/styles");
const prop_types_1 = __importDefault(require("prop-types"));
const styles_2 = __importDefault(require("./styles"));
// @ts-ignore
const useStyles = (0, styles_1.makeStyles)(styles_2.default);
const RichTextInput = props => {
    const { options = {}, // Quill editor options
    toolbar = true, fullWidth = true, classes: classesOverride, configureQuill, helperText, label, source, resource, variant, margin = 'dense' } = props, rest = __rest(props, ["options", "toolbar", "fullWidth", "classes", "configureQuill", "helperText", "label", "source", "resource", "variant", "margin"]);
    const classes = useStyles(props);
    const quillInstance = (0, react_1.useRef)();
    const divRef = (0, react_1.useRef)();
    const editor = (0, react_1.useRef)();
    const { id, isRequired, input: { value, onChange }, meta: { touched, error }, } = (0, core_1.useInput)(Object.assign({ source }, rest));
    const lastValueChange = (0, react_1.useRef)(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const onTextChange = (0, react_1.useCallback)((0, debounce_1.default)(() => {
        var _a, _b;
        const value = ((_a = editor.current) === null || _a === void 0 ? void 0 : _a.innerHTML) === '<p><br></p>'
            ? ''
            : (_b = editor.current) === null || _b === void 0 ? void 0 : _b.innerHTML;
        if (lastValueChange.current !== value) {
            lastValueChange.current = value;
            onChange(value);
        }
    }, 500), [onChange]);
    (0, react_1.useEffect)(() => {
        var _a;
        quillInstance.current = new quill_1.default(divRef.current, Object.assign({ modules: { toolbar, clipboard: { matchVisual: false } }, theme: 'snow' }, options));
        if (configureQuill) {
            configureQuill(quillInstance.current);
        }
        quillInstance.current.setContents(quillInstance.current.clipboard.convert(value));
        editor.current = ((_a = divRef.current) === null || _a === void 0 ? void 0 : _a.querySelector('.ql-editor')) || undefined;
        quillInstance.current.on('text-change', onTextChange);
        return () => {
            var _a;
            (_a = quillInstance.current) === null || _a === void 0 ? void 0 : _a.off('text-change', onTextChange);
            if (onTextChange.cancel) {
                onTextChange.cancel();
            }
            quillInstance.current = undefined;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    (0, react_1.useEffect)(() => {
        var _a, _b, _c, _d, _e;
        if (lastValueChange.current !== value) {
            const selection = (_a = quillInstance.current) === null || _a === void 0 ? void 0 : _a.getSelection();
            (_b = quillInstance.current) === null || _b === void 0 ? void 0 : _b.setContents((_c = quillInstance.current) === null || _c === void 0 ? void 0 : _c.clipboard.convert(value));
            if (selection && ((_d = quillInstance.current) === null || _d === void 0 ? void 0 : _d.hasFocus())) {
                (_e = quillInstance.current) === null || _e === void 0 ? void 0 : _e.setSelection(selection);
            }
        }
    }, [value]);
    return ((0, jsx_runtime_1.jsxs)(material_1.FormControl, Object.assign({ error: !!(touched && error), fullWidth: fullWidth, className: "ra-rich-text-input", margin: margin }, { children: [(0, jsx_runtime_1.jsx)(material_1.InputLabel, Object.assign({ shrink: true, htmlFor: id, className: classes.label }, { children: (0, jsx_runtime_1.jsx)(core_1.FieldTitle, { label: label, source: source, resource: resource, isRequired: isRequired }, void 0) }), void 0), (0, jsx_runtime_1.jsx)("div", { "data-testid": "quill", 
                // @ts-ignore
                ref: divRef, className: variant }, void 0), (0, jsx_runtime_1.jsx)(material_1.FormHelperText, Object.assign({ error: !!error, className: !!error ? 'ra-rich-text-input-error' : '' }, { children: (0, jsx_runtime_1.jsx)(__1.InputHelperText, { error: error, helperText: helperText, touched: touched || false }, void 0) }), void 0)] }), void 0));
};
RichTextInput.propTypes = {
    // @ts-ignore
    label: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.bool]),
    options: prop_types_1.default.object,
    source: prop_types_1.default.any,
    fullWidth: prop_types_1.default.bool,
    configureQuill: prop_types_1.default.func,
};
exports.default = RichTextInput;
