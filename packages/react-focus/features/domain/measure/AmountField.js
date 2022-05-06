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
const CheckBox_1 = __importDefault(require("@mui/icons-material/CheckBox"));
const CheckBoxOutlineBlank_1 = __importDefault(require("@mui/icons-material/CheckBoxOutlineBlank"));
const Autocomplete_1 = __importDefault(require("@mui/material/Autocomplete"));
const Checkbox_1 = __importDefault(require("@mui/material/Checkbox"));
const Chip_1 = __importDefault(require("@mui/material/Chip"));
const MixedField_1 = __importDefault(require("../../../components/MixedField"));
const react_1 = __importDefault(require("react"));
const styles_1 = require("@mui/material/styles");
const Option = (0, styles_1.styled)('li')(({ theme }) => ({
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    '&span': {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    }
}));
const icon = (0, jsx_runtime_1.jsx)(CheckBoxOutlineBlank_1.default, { fontSize: "small" }, void 0);
const checkedIcon = (0, jsx_runtime_1.jsx)(CheckBox_1.default, { fontSize: "small" }, void 0);
function AmountField(_a) {
    var { children, color, label, onClick, translations, value: initialValue, variant } = _a, props = __rest(_a, ["children", "color", "label", "onClick", "translations", "value", "variant"]);
    const freeSolo = Array.isArray(props.options) && props.options.length === 0;
    const handleChange = react_1.default.useCallback((event, value) => {
        if (freeSolo && props.onChange) {
            props.onChange(event, value, 'createOption');
        }
    }, [freeSolo, props.onChange]);
    const handleInput = react_1.default.useCallback((event) => {
        if (freeSolo && props.onInput) {
            props.onInput(event);
        }
    }, [freeSolo, props.onInput]);
    const extendedProps = react_1.default.useMemo(() => {
        let internalProps = Object.assign({}, props);
        if (freeSolo) {
            Object.assign(internalProps, { freeSolo });
        }
        if (props.multiple) {
            const multipleProps = {
                renderOption: (props, option, { selected }) => ((0, jsx_runtime_1.jsxs)(Option, Object.assign({}, props, { children: [(0, jsx_runtime_1.jsx)(Checkbox_1.default, { icon: icon, checkedIcon: checkedIcon, style: { marginRight: 8 }, checked: selected }, void 0), option] }), void 0)),
                renderTags: (tagValue, getTagProps) => tagValue.map((option, index) => ((0, jsx_runtime_1.jsx)(Chip_1.default, Object.assign({ label: option }, getTagProps({ index })), void 0)))
            };
            Object.assign(internalProps, multipleProps);
        }
        return internalProps;
    }, [props]);
    const isOptionEqualToValue = (option, value) => {
        if (!props.options.includes(option)) {
            return false;
        }
        return option === value;
    };
    const getOptionLabel = (option) => {
        // this works to clear when there is an option change
        if (!props.options.includes(option)) {
            return '';
        }
        return translations ? translations[option] || option : option;
    };
    return ((0, jsx_runtime_1.jsx)(Autocomplete_1.default, Object.assign({ autoComplete: true, freeSolo: freeSolo, getOptionLabel: getOptionLabel, isOptionEqualToValue: isOptionEqualToValue, renderInput: (params) => {
            const onChange = (...args) => {
                // @ts-ignore
                handleChange(...args);
                if (params.onChange) {
                    params.onChange(...args);
                }
            };
            const onInput = (...args) => {
                // @ts-ignore
                handleInput(...args);
                if (params.onInput) {
                    params.onInput(...args);
                }
            };
            return ((0, jsx_runtime_1.jsx)(MixedField_1.default, Object.assign({}, params, { buttonSx: { marginLeft: 0 }, color: color, label: label, onChange: onChange, onClick: onClick, onInput: onInput }, { children: children }), void 0));
        } }, extendedProps), void 0));
}
;
exports.default = AmountField;
