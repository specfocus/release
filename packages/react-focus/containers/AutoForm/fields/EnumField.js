"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumField = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Button_1 = __importDefault(require("@mui/material/Button"));
const InputAdornment_1 = __importDefault(require("@mui/material/InputAdornment"));
const react_1 = require("react");
const react_final_form_1 = require("react-final-form");
const useStyles_1 = __importDefault(require("../../../app/useStyles"));
const Autocomplete_1 = require("../../../components/final-form/Autocomplete");
const TextField_1 = require("../../../components/final-form/TextField");
const EnumField = ({ api, domain, disabled, dispatch, filter, label: label, name, placeholder, readonly, schema, t, value, values }) => {
    const classes = (0, useStyles_1.default)();
    const renderOption = (option, { inputValue, selected }) => {
        const text = (domain === null || domain === void 0 ? void 0 : domain.getOptionText) ? domain.getOptionText(option, t) : String(option);
        console.log('RENDERING OPTION', text);
        if (!(domain === null || domain === void 0 ? void 0 : domain.getOptionIcon)) {
            return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: text }, void 0));
        }
        const icon = domain === null || domain === void 0 ? void 0 : domain.getOptionIcon(option);
        return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("span", { children: icon }, void 0), text] }, void 0));
    };
    const form = (0, react_final_form_1.useForm)();
    // https://docs.react-async.com/guide/async-components
    const { getOptionLabel, getOptions, getOptionSelected, getOptionValue, isOptionEqualToValue } = domain;
    /*
    const options = useAsync<any[]>({
      promiseFn: getOptions,
      ...{ value: filter },
      watch: filter
    });*/
    const [options, setOptions] = (0, react_1.useState)({ data: [] });
    (0, react_1.useEffect)(() => {
        form.change(name);
        getOptions({ value: filter }).then(data => setOptions({ filter, data, isResolved: true }));
    }, [filter, setOptions]);
    const onActionClick = (0, react_1.useCallback)(() => {
        if (schema.action && value) {
            console.log({ name, value });
            dispatch(Object.assign({ form: api, name, value, values }, schema.action));
            api.resetFieldState(name);
            api.change(name);
        }
    }, [api, dispatch, schema, value, values]);
    if (readonly) {
        return ((0, jsx_runtime_1.jsx)(TextField_1.TextField, { disabled: true, label: label, name: name, InputProps: {
                readOnly: true,
                'aria-readonly': true
            }, value: getOptionLabel(value), variant: "outlined" }, void 0));
    }
    const moreProps = {};
    if (schema.action) {
        Object.assign(moreProps, {
            getOptionDisabled: (option) => {
                var _a, _b;
                const target = (_b = (_a = schema === null || schema === void 0 ? void 0 : schema.action) === null || _a === void 0 ? void 0 : _a.payload) === null || _b === void 0 ? void 0 : _b.target;
                const disable = target ? values[target] : [];
                const val = getOptionValue ? getOptionValue(option) : option;
                const disabled = Array.isArray(disable) && disable.includes(val);
                console.log({ disabled, val, disable, target, values });
                return disabled;
            }
        });
        if (value) {
            Object.assign(moreProps, {
                // value,
                textFieldProps: {
                    InputProps: {
                        endAdornment: ((0, jsx_runtime_1.jsx)(InputAdornment_1.default, Object.assign({ position: "end" }, { children: (0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({ disabled: !value, onClick: onActionClick, "aria-label": "search", variant: "contained", size: "small" }, { children: "Add" }), void 0) }), void 0))
                    }
                }
            });
        }
    }
    if (domain === null || domain === void 0 ? void 0 : domain.canAutocomplete) {
        return ((0, jsx_runtime_1.jsx)(Autocomplete_1.Autocomplete, Object.assign({ classes: {
                option: classes.option,
            }, disabled: disabled || !options.isResolved, freeSolo: domain === null || domain === void 0 ? void 0 : domain.canFreeSolo, label: label, name: name, options: options.data || [], placeholder: placeholder, getOptionLabel: getOptionLabel, getOptionValue: getOptionValue, isOptionEqualToValue: isOptionEqualToValue, renderOption: renderOption }, moreProps), void 0));
    }
    return ((0, jsx_runtime_1.jsx)(Autocomplete_1.Autocomplete, Object.assign({ classes: {
            option: classes.option,
        }, disabled: disabled || !options.isResolved, freeSolo: domain === null || domain === void 0 ? void 0 : domain.canFreeSolo, label: label, name: name, options: options.data || [], placeholder: placeholder, getOptionLabel: getOptionLabel, getOptionValue: (getOptionValue), isOptionEqualToValue: isOptionEqualToValue }, moreProps), void 0));
};
exports.EnumField = EnumField;
exports.default = exports.EnumField;
