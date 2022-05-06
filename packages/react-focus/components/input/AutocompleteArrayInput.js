"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const react_1 = __importStar(require("react"));
const styles_1 = require("@mui/material/styles");
const downshift_1 = __importDefault(require("downshift"));
const classnames_1 = __importDefault(require("classnames"));
const get_1 = __importDefault(require("lodash/get"));
const material_1 = require("@mui/material");
const core_1 = require("../../features/core");
const debounce_1 = __importDefault(require("lodash/debounce"));
const InputHelperText_1 = __importDefault(require("./InputHelperText"));
const AutocompleteSuggestionList_1 = __importDefault(require("./AutocompleteSuggestionList"));
const AutocompleteSuggestionItem_1 = __importDefault(require("./AutocompleteSuggestionItem"));
const AutocompleteInputLoader_1 = require("./AutocompleteInputLoader");
const useSupportCreateSuggestion_1 = require("./useSupportCreateSuggestion");
const PREFIX = 'RaAutocompleteArrayInput';
const classes = {
    container: `${PREFIX}-container`,
    suggestionsContainer: `${PREFIX}-suggestionsContainer`,
    chip: `${PREFIX}-chip`,
    chipContainerFilled: `${PREFIX}-chipContainerFilled`,
    chipContainerOutlined: `${PREFIX}-chipContainerOutlined`,
    inputRoot: `${PREFIX}-inputRoot`,
    inputRootFilled: `${PREFIX}-inputRootFilled`,
    inputInput: `${PREFIX}-inputInput`,
};
const Root = (0, styles_1.styled)('div')(({ theme }) => ({
    [`&.${classes.container}`]: {
        flexGrow: 1,
        position: 'relative',
    },
    [`& .${classes.suggestionsContainer}`]: {
        zIndex: theme.zIndex.modal,
    },
    [`& .${classes.chip}`]: {
        margin: theme.spacing(0.5, 0.5, 0.5, 0),
    },
    [`& .${classes.chipContainerFilled}`]: {
        margin: '27px 12px 10px 0',
    },
    [`& .${classes.chipContainerOutlined}`]: {
        margin: '12px 12px 10px 0',
    },
    [`& .${classes.inputRoot}`]: {
        flexWrap: 'wrap',
    },
    [`& .${classes.inputRootFilled}`]: {
        flexWrap: 'wrap',
        '& $chip': {
            backgroundColor: theme.palette.mode === 'light'
                ? 'rgba(0, 0, 0, 0.09)'
                : 'rgba(255, 255, 255, 0.09)',
        },
    },
    [`& .${classes.inputInput}`]: {
        width: 'auto',
        flexGrow: 1,
    },
}));
/**
 * An Input component for an autocomplete field, using an array of objects for the options
 *
 * Pass possible options as an array of objects in the 'choices' attribute.
 *
 * By default, the options are built from:
 *  - the 'id' property as the option value,
 *  - the 'name' property as the option text
 * @example
 * const choices = [
 *    { id: 'M', name: 'Male' },
 *    { id: 'F', name: 'Female' },
 * ];
 * <AutocompleteArrayInput source="gender" choices={choices} />
 *
 * You can also customize the properties to use for the option name and value,
 * thanks to the 'optionText' and 'optionValue' attributes.
 * @example
 * const choices = [
 *    { _id: 123, full_name: 'Leo Tolstoi', sex: 'M' },
 *    { _id: 456, full_name: 'Jane Austen', sex: 'F' },
 * ];
 * <AutocompleteArrayInput source="author_id" choices={choices} optionText="full_name" optionValue="_id" />
 *
 * `optionText` also accepts a function, so you can shape the option text at will:
 * @example
 * const choices = [
 *    { id: 123, first_name: 'Leo', last_name: 'Tolstoi' },
 *    { id: 456, first_name: 'Jane', last_name: 'Austen' },
 * ];
 * const optionRenderer = choice => `${choice.first_name} ${choice.last_name}`;
 * <AutocompleteArrayInput source="author_id" choices={choices} optionText={optionRenderer} />
 *
 * `optionText` also accepts a React Element, that will be cloned and receive
 * the related choice as the `record` prop. You can use Field components there.
 * Note that you must also specify the `matchSuggestion` prop
 * @example
 * const choices = [
 *    { id: 123, first_name: 'Leo', last_name: 'Tolstoi' },
 *    { id: 456, first_name: 'Jane', last_name: 'Austen' },
 * ];
 * const matchSuggestion = (filterValue, choice) => choice.first_name.match(filterValue) || choice.last_name.match(filterValue);
 * const FullNameField = ({ record }) => <span>{record.first_name} {record.last_name}</span>;
 * <SelectInput source="gender" choices={choices} optionText={<FullNameField />} matchSuggestion={matchSuggestion} />
 *
 * The choices are translated by default, so you can use translation identifiers as choices:
 * @example
 * const choices = [
 *    { id: 'M', name: 'myroot.gender.male' },
 *    { id: 'F', name: 'myroot.gender.female' },
 * ];
 *
 * However, in some cases (e.g. inside a `<ReferenceInput>`), you may not want
 * the choice to be translated. In that case, set the `translateChoice` prop to false.
 * @example
 * <AutocompleteArrayInput source="gender" choices={choices} translateChoice={false}/>
 *
 * The object passed as `options` props is passed to the material-ui <TextField> component
 *
 * @example
 * <AutocompleteArrayInput source="author_id" options={{ color: 'secondary' }} />
 */
const AutocompleteArrayInput = (props) => {
    const { allowDuplicates, allowEmpty, choices = [], create, createLabel, createItemLabel, createValue, debounce: debounceDelay = 250, disabled, emptyText, emptyValue, format, fullWidth, helperText, id: idOverride, input: inputOverride, isRequired: isRequiredOverride, label, loaded, loading, limitChoicesToValue, margin = 'dense', matchSuggestion, meta: metaOverride, onBlur, onChange, onCreate, onFocus } = props, _a = props.options, _b = _a === void 0 ? {} : _a, { suggestionsContainerProps, labelProps, InputProps } = _b, options = __rest(_b, ["suggestionsContainerProps", "labelProps", "InputProps"]), { optionText = 'name', optionValue = 'id', parse, resource, setFilter, shouldRenderSuggestions: shouldRenderSuggestionsOverride, source, suggestionLimit, translateChoice = true, validate, variant = 'filled' } = props, rest = __rest(props, ["allowDuplicates", "allowEmpty", "choices", "create", "createLabel", "createItemLabel", "createValue", "debounce", "disabled", "emptyText", "emptyValue", "format", "fullWidth", "helperText", "id", "input", "isRequired", "label", "loaded", "loading", "limitChoicesToValue", "margin", "matchSuggestion", "meta", "onBlur", "onChange", "onCreate", "onFocus", "options", "optionText", "optionValue", "parse", "resource", "setFilter", "shouldRenderSuggestions", "source", "suggestionLimit", "translateChoice", "validate", "variant"]);
    (0, core_1.warning)((0, react_1.isValidElement)(optionText) && !matchSuggestion, `If the optionText prop is a React element, you must also specify the matchSuggestion prop:
<AutocompleteArrayInput
    matchSuggestion={(filterValue, suggestion) => true}
/>
        `);
    (0, core_1.warning)(source === undefined, `If you're not wrapping the AutocompleteArrayInput inside a ReferenceArrayInput, you must provide the source prop`);
    (0, core_1.warning)(choices === undefined, `If you're not wrapping the AutocompleteArrayInput inside a ReferenceArrayInput, you must provide the choices prop`);
    let inputEl = (0, react_1.useRef)();
    let anchorEl = (0, react_1.useRef)();
    const { id, input, isRequired, meta: { touched, error, submitError }, } = (0, core_1.useInput)(Object.assign({ format, id: idOverride, input: inputOverride, meta: metaOverride, onBlur,
        onChange,
        onFocus,
        parse,
        resource,
        source,
        validate }, rest));
    const values = input.value || emptyArray;
    const [filterValue, setFilterValue] = react_1.default.useState('');
    const getSuggestionFromValue = (0, react_1.useCallback)(value => choices.find(choice => (0, get_1.default)(choice, optionValue) === value), [choices, optionValue]);
    const selectedItems = (0, react_1.useMemo)(() => values.map(getSuggestionFromValue), [
        getSuggestionFromValue,
        values,
    ]);
    const { getChoiceText, getChoiceValue, getSuggestions } = (0, core_1.useSuggestions)({
        allowDuplicates,
        allowEmpty,
        choices,
        emptyText,
        emptyValue,
        limitChoicesToValue,
        matchSuggestion,
        optionText,
        optionValue,
        selectedItem: selectedItems,
        suggestionLimit,
        translateChoice,
    });
    // eslint-disable-next-line
    const debouncedSetFilter = (0, react_1.useCallback)((0, debounce_1.default)(setFilter || DefaultSetFilter, debounceDelay), [setFilter, debounceDelay]);
    const handleFilterChange = (0, react_1.useCallback)((eventOrValue) => {
        const event = eventOrValue;
        const value = event.target
            ? event.target.value
            : eventOrValue;
        setFilterValue(value);
        if (setFilter) {
            debouncedSetFilter(value);
        }
    }, [debouncedSetFilter, setFilter, setFilterValue]);
    // We must reset the filter every time the value changes to ensure we
    // display at least some choices even if the input has a value.
    // Otherwise, it would only display the currently selected one and the user
    // would have to first clear the input before seeing any other choices
    (0, react_1.useEffect)(() => {
        handleFilterChange('');
    }, [values.join(','), handleFilterChange]); // eslint-disable-line react-hooks/exhaustive-deps
    const handleKeyDown = (0, react_1.useCallback)((event) => {
        // Remove latest item from array when user hits backspace with no text
        if (selectedItems.length &&
            !filterValue.length &&
            event.key === 'Backspace') {
            const newSelectedItems = selectedItems.slice(0, selectedItems.length - 1);
            input.onChange(newSelectedItems.map(getChoiceValue));
        }
    }, [filterValue.length, getChoiceValue, input, selectedItems]);
    const handleChange = (0, react_1.useCallback)((item, newItem) => {
        const finalItem = newItem || item;
        const newSelectedItems = !allowDuplicates && selectedItems.includes(finalItem)
            ? [...selectedItems]
            : [...selectedItems, finalItem];
        setFilterValue('');
        input.onChange(newSelectedItems.map(getChoiceValue));
    }, [allowDuplicates, getChoiceValue, input, selectedItems, setFilterValue]);
    const { getCreateItem, handleChange: handleChangeWithCreateSupport, createElement, } = (0, useSupportCreateSuggestion_1.useSupportCreateSuggestion)({
        create,
        createLabel,
        createItemLabel,
        createValue,
        handleChange,
        filter: filterValue,
        onCreate,
        optionText,
    });
    const handleDelete = (0, react_1.useCallback)(item => () => {
        const newSelectedItems = [...selectedItems];
        newSelectedItems.splice(newSelectedItems.indexOf(item), 1);
        input.onChange(newSelectedItems.map(getChoiceValue));
    }, [input, selectedItems, getChoiceValue]);
    // This function ensures that the suggestion list stay aligned to the
    // input element even if it moves (because user scrolled for example)
    const updateAnchorEl = () => {
        if (!inputEl.current) {
            return;
        }
        const inputPosition = inputEl.current.getBoundingClientRect();
        // It works by implementing a mock element providing the only method used
        // by the PopOver component, getBoundingClientRect, which will return a
        // position based on the input position
        if (!anchorEl.current) {
            anchorEl.current = { getBoundingClientRect: () => inputPosition };
        }
        else {
            const anchorPosition = anchorEl.current.getBoundingClientRect();
            if (anchorPosition.x !== inputPosition.x ||
                anchorPosition.y !== inputPosition.y) {
                anchorEl.current = {
                    getBoundingClientRect: () => inputPosition,
                };
            }
        }
    };
    const storeInputRef = input => {
        inputEl.current = input;
        updateAnchorEl();
    };
    const handleBlur = (0, react_1.useCallback)(event => {
        setFilterValue('');
        handleFilterChange('');
        input.onBlur(event);
    }, [handleFilterChange, input, setFilterValue]);
    const handleFocus = (0, react_1.useCallback)(openMenu => event => {
        openMenu(event);
        input.onFocus(event);
    }, [input]);
    const handleClick = (0, react_1.useCallback)(openMenu => event => {
        if (event.target === inputEl.current) {
            openMenu(event);
        }
    }, []);
    const shouldRenderSuggestions = val => {
        if (shouldRenderSuggestionsOverride !== undefined &&
            typeof shouldRenderSuggestionsOverride === 'function') {
            return shouldRenderSuggestionsOverride(val);
        }
        return true;
    };
    const _c = InputProps || {}, { inputRef } = _c, InputPropsWithoutInputRef = __rest(_c, ["inputRef"]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(downshift_1.default, Object.assign({ inputValue: filterValue, onChange: handleChangeWithCreateSupport, selectedItem: selectedItems, itemToString: item => getChoiceValue(item) }, rest, { children: ({ getInputProps, getItemProps, getLabelProps, getMenuProps, getRootProps, isOpen, inputValue: suggestionFilter, highlightedIndex, openMenu, }) => {
                    const isMenuOpen = isOpen && shouldRenderSuggestions(suggestionFilter);
                    const _a = getInputProps({
                        onBlur: handleBlur,
                        onFocus: handleFocus(openMenu),
                        onClick: handleClick(openMenu),
                        onKeyDown: handleKeyDown,
                    }), { id: idFromDownshift, onBlur, onChange, onFocus, ref, color, size } = _a, inputProps = __rest(_a, ["id", "onBlur", "onChange", "onFocus", "ref", "color", "size"]);
                    const suggestions = [
                        ...getSuggestions(suggestionFilter),
                        ...(onCreate || create ? [getCreateItem()] : []),
                    ];
                    return ((0, jsx_runtime_1.jsxs)(Root, Object.assign({ className: classes.container }, getRootProps(), { children: [(0, jsx_runtime_1.jsx)(material_1.TextField, Object.assign({ id: id, fullWidth: fullWidth, InputProps: Object.assign({ inputRef: (0, core_1.mergeRefs)([
                                        storeInputRef,
                                        inputRef,
                                    ]), classes: {
                                        root: (0, classnames_1.default)(classes.inputRoot, {
                                            [classes.inputRootFilled]: variant === 'filled',
                                        }),
                                        input: classes.inputInput,
                                    }, startAdornment: ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: (0, classnames_1.default)({
                                            [classes.chipContainerFilled]: variant === 'filled',
                                            [classes.chipContainerOutlined]: variant === 'outlined',
                                        }) }, { children: selectedItems.map((item, index) => ((0, jsx_runtime_1.jsx)(material_1.Chip, { tabIndex: -1, label: getChoiceText(item), className: classes.chip, onDelete: handleDelete(item) }, index))) }), void 0)), endAdornment: loading && ((0, jsx_runtime_1.jsx)(AutocompleteInputLoader_1.AutocompleteInputLoader, {}, void 0)), onBlur, onChange: event => {
                                        handleFilterChange(event);
                                        onChange(event);
                                    }, onFocus }, InputPropsWithoutInputRef), error: !!(touched && (error || submitError)), label: (0, jsx_runtime_1.jsx)(core_1.FieldTitle, Object.assign({ label: label }, labelProps, { source: source, resource: resource, isRequired: typeof isRequiredOverride !==
                                        'undefined'
                                        ? isRequiredOverride
                                        : isRequired }), void 0), InputLabelProps: getLabelProps({
                                    htmlFor: id,
                                }), helperText: (0, jsx_runtime_1.jsx)(InputHelperText_1.default, { touched: touched, error: error || submitError, helperText: helperText }, void 0), variant: variant, margin: margin, color: color, size: size, disabled: disabled }, inputProps, options), void 0), (0, jsx_runtime_1.jsx)(AutocompleteSuggestionList_1.default, Object.assign({ isOpen: isMenuOpen, menuProps: getMenuProps({}, 
                                // https://github.com/downshift-js/downshift/issues/235
                                { suppressRefError: true }), inputEl: inputEl.current, suggestionsContainerProps: suggestionsContainerProps, className: classes.suggestionsContainer }, { children: suggestions.map((suggestion, index) => ((0, jsx_runtime_1.jsx)(AutocompleteSuggestionItem_1.default, Object.assign({ createValue: createValue, suggestion: suggestion, index: index, highlightedIndex: highlightedIndex, isSelected: selectedItems
                                        .map(getChoiceValue)
                                        .includes(getChoiceValue(suggestion)), filterValue: filterValue, getSuggestionText: getChoiceText }, getItemProps({
                                    item: suggestion,
                                })), getChoiceValue(suggestion)))) }), void 0)] }), void 0));
                } }), void 0), createElement] }, void 0));
};
const emptyArray = [];
const DefaultSetFilter = () => { };
exports.default = AutocompleteArrayInput;
