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
exports.ResettableTextFieldStyles = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const react_1 = require("react");
const prop_types_1 = __importDefault(require("prop-types"));
const classnames_1 = __importDefault(require("classnames"));
const material_1 = require("@mui/material");
const Clear_1 = __importDefault(require("@mui/icons-material/Clear"));
const core_1 = require("../../features/core");
const PREFIX = 'RaResettableTextField';
const classes = {
    clearIcon: `${PREFIX}-clearIcon`,
    visibleClearIcon: `${PREFIX}-visibleClearIcon`,
    clearButton: `${PREFIX}-clearButton`,
    selectAdornment: `${PREFIX}-selectAdornment`,
    inputAdornedEnd: `${PREFIX}-inputAdornedEnd`,
};
exports.ResettableTextFieldStyles = {
    [`& .${classes.clearIcon}`]: {
        height: 16,
        width: 0,
    },
    [`& .${classes.visibleClearIcon}`]: {
        width: 16,
    },
    [`& .${classes.clearButton}`]: {
        height: 24,
        width: 24,
        padding: 0,
    },
    [`& .${classes.selectAdornment}`]: {
        position: 'absolute',
        right: 24,
    },
    [`& .${classes.inputAdornedEnd}`]: {
        paddingRight: 0,
    },
};
const StyledTextField = (0, styles_1.styled)(material_1.TextField)(exports.ResettableTextFieldStyles);
/**
 * An override of the default Material-UI TextField which is resettable
 */
const ResettableTextField = (props) => {
    const { clearAlwaysVisible, InputProps, value, resettable, disabled, variant = 'filled', margin = 'dense' } = props, rest = __rest(props, ["clearAlwaysVisible", "InputProps", "value", "resettable", "disabled", "variant", "margin"]);
    const translate = (0, core_1.useTranslate)();
    const { onChange, onFocus, onBlur } = props;
    const handleClickClearButton = (0, react_1.useCallback)(event => {
        event.preventDefault();
        onChange('');
    }, [onChange]);
    const handleFocus = (0, react_1.useCallback)(event => {
        onFocus && onFocus(event);
    }, [onFocus]);
    const handleBlur = (0, react_1.useCallback)(event => {
        onBlur && onBlur(event);
    }, [onBlur]);
    const { clearButton, clearIcon, inputAdornedEnd, selectAdornment, visibleClearIcon } = classes, restClasses = __rest(classes, ["clearButton", "clearIcon", "inputAdornedEnd", "selectAdornment", "visibleClearIcon"]);
    const _a = InputProps || {}, { endAdornment } = _a, InputPropsWithoutEndAdornment = __rest(_a, ["endAdornment"]);
    if (clearAlwaysVisible && endAdornment) {
        throw new Error('ResettableTextField cannot display both an endAdornment and a clear button always visible');
    }
    const getEndAdornment = () => {
        if (!resettable) {
            return endAdornment;
        }
        else if (!value) {
            if (clearAlwaysVisible) {
                // show clear button, inactive
                return ((0, jsx_runtime_1.jsx)(material_1.InputAdornment, Object.assign({ position: "end", classes: {
                        root: props.select ? selectAdornment : null,
                    } }, { children: (0, jsx_runtime_1.jsx)(material_1.IconButton, Object.assign({ className: clearButton, "aria-label": translate('ra.action.clear_input_value'), title: translate('ra.action.clear_input_value'), disableRipple: true, disabled: true, size: "large" }, { children: (0, jsx_runtime_1.jsx)(Clear_1.default, { className: (0, classnames_1.default)(clearIcon, visibleClearIcon) }, void 0) }), void 0) }), void 0));
            }
            else {
                if (endAdornment) {
                    return endAdornment;
                }
                else {
                    // show spacer
                    return ((0, jsx_runtime_1.jsx)(material_1.InputAdornment, Object.assign({ position: "end", classes: {
                            root: props.select ? selectAdornment : null,
                        } }, { children: (0, jsx_runtime_1.jsx)("span", Object.assign({ className: clearButton }, { children: "\u00A0" }), void 0) }), void 0));
                }
            }
        }
        else {
            // show clear
            return ((0, jsx_runtime_1.jsx)(material_1.InputAdornment, Object.assign({ position: "end", classes: {
                    root: props.select ? selectAdornment : null,
                } }, { children: (0, jsx_runtime_1.jsx)(material_1.IconButton, Object.assign({ className: clearButton, "aria-label": translate('ra.action.clear_input_value'), title: translate('ra.action.clear_input_value'), disableRipple: true, onClick: handleClickClearButton, onMouseDown: handleMouseDownClearButton, disabled: disabled, size: "large" }, { children: (0, jsx_runtime_1.jsx)(Clear_1.default, { className: (0, classnames_1.default)(clearIcon, {
                            [visibleClearIcon]: clearAlwaysVisible || value,
                        }) }, void 0) }), void 0) }), void 0));
        }
    };
    return ((0, jsx_runtime_1.jsx)(StyledTextField, Object.assign({ classes: restClasses, value: value, InputProps: Object.assign({ classes: props.select && variant === 'filled'
                ? { adornedEnd: inputAdornedEnd }
                : {}, endAdornment: getEndAdornment() }, InputPropsWithoutEndAdornment), disabled: disabled, variant: variant, margin: margin }, rest, { onFocus: handleFocus, onBlur: handleBlur }), void 0));
};
const handleMouseDownClearButton = event => {
    event.preventDefault();
};
ResettableTextField.propTypes = {
    clearAlwaysVisible: prop_types_1.default.bool,
    disabled: prop_types_1.default.bool,
    InputProps: prop_types_1.default.object,
    onBlur: prop_types_1.default.func,
    onChange: prop_types_1.default.func.isRequired,
    onFocus: prop_types_1.default.func,
    resettable: prop_types_1.default.bool,
    value: prop_types_1.default.any.isRequired,
};
exports.default = ResettableTextField;
