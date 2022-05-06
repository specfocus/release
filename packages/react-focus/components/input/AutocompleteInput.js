"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
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
exports.AutocompleteInput = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styles_1 = require("@mui/material/styles");
const downshift_1 = __importDefault(require("downshift"));
const get_1 = __importDefault(require("lodash/get"));
const classnames_1 = __importDefault(require("classnames"));
const material_1 = require("@mui/material");
const Clear_1 = __importDefault(require("@mui/icons-material/Clear"));
const core_1 = require("../../features/core");
const InputHelperText_1 = __importDefault(require("./InputHelperText"));
const AutocompleteSuggestionList_1 = __importDefault(require("./AutocompleteSuggestionList"));
const AutocompleteSuggestionItem_1 = __importDefault(require("./AutocompleteSuggestionItem"));
const AutocompleteInputLoader_1 = require("./AutocompleteInputLoader");
const useSupportCreateSuggestion_1 = require("./useSupportCreateSuggestion");
const PREFIX = 'MyAutocompleteInput';
const classes = {
    container: `${PREFIX}-container`,
    clearIcon: `${PREFIX}-clearIcon`,
    visibleClearIcon: `${PREFIX}-visibleClearIcon`,
    clearButton: `${PREFIX}-clearButton`,
    selectAdornment: `${PREFIX}-selectAdornment`,
    inputAdornedEnd: `${PREFIX}-inputAdornedEnd`,
    suggestionsContainer: `${PREFIX}-suggestionsContainer`,
};
const Root = (0, styles_1.styled)('div')(({ theme }) => ({
    [`&.${classes.container}`]: {
        flexGrow: 1,
        position: 'relative',
    },
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
    [`& .${classes.suggestionsContainer}`]: {
        zIndex: theme.zIndex.modal,
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
 * <AutocompleteInput source="gender" choices={choices} />
 *
 * You can also customize the properties to use for the option name and value,
 * thanks to the 'optionText' and 'optionValue' attributes.
 * @example
 * const choices = [
 *    { _id: 123, full_name: 'Leo Tolstoi', sex: 'M' },
 *    { _id: 456, full_name: 'Jane Austen', sex: 'F' },
 * ];
 * <AutocompleteInput source="author_id" choices={choices} optionText="full_name" optionValue="_id" />
 *
 * `optionText` also accepts a function, so you can shape the option text at will:
 * @example
 * const choices = [
 *    { id: 123, first_name: 'Leo', last_name: 'Tolstoi' },
 *    { id: 456, first_name: 'Jane', last_name: 'Austen' },
 * ];
 * const optionRenderer = choice => `${choice.first_name} ${choice.last_name}`;
 * <AutocompleteInput source="author_id" choices={choices} optionText={optionRenderer} />
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
 * <AutocompleteInput source="gender" choices={choices} translateChoice={false}/>
 *
 * The object passed as `options` props is passed to the material-ui <TextField> component
 *
 * @example
 * <AutocompleteInput source="author_id" options={{ color: 'secondary', InputLabelProps: { shrink: true } }} />
 */
const AutocompleteInput = (props) => {
    const { allowEmpty, className, classes: classesOverride, clearAlwaysVisible, choices = [], createLabel, createItemLabel, createValue, create, disabled, emptyText, emptyValue, format, fullWidth, helperText, id: idOverride, input: inputOverride, inputText, isRequired: isRequiredOverride, label, limitChoicesToValue, loaded, loading, margin = 'dense', matchSuggestion, meta: metaOverride, onBlur, onChange, onCreate, onFocus } = props, _a = props.options, _b = _a === void 0 ? {
        suggestionsContainerProps: undefined,
        labelProps: undefined,
        InputProps: undefined,
    } : _a, { suggestionsContainerProps, labelProps, InputProps } = _b, options = __rest(_b, ["suggestionsContainerProps", "labelProps", "InputProps"]), { optionText = 'name', optionValue = 'id', parse, refetch, resettable, resource, setFilter, shouldRenderSuggestions: shouldRenderSuggestionsOverride, source, suggestionLimit, translateChoice = true, validate, variant = 'filled' } = props, rest = __rest(props, ["allowEmpty", "className", "classes", "clearAlwaysVisible", "choices", "createLabel", "createItemLabel", "createValue", "create", "disabled", "emptyText", "emptyValue", "format", "fullWidth", "helperText", "id", "input", "inputText", "isRequired", "label", "limitChoicesToValue", "loaded", "loading", "margin", "matchSuggestion", "meta", "onBlur", "onChange", "onCreate", "onFocus", "options", "optionText", "optionValue", "parse", "refetch", "resettable", "resource", "setFilter", "shouldRenderSuggestions", "source", "suggestionLimit", "translateChoice", "validate", "variant"]);
    if ((0, react_1.isValidElement)(optionText) && !inputText) {
        throw new Error(`If the optionText prop is a React element, you must also specify the inputText prop:
        <AutocompleteInput
            inputText={(record) => record.title}
        />`);
    }
    (0, core_1.warning)((0, react_1.isValidElement)(optionText) && !matchSuggestion, `If the optionText prop is a React element, you must also specify the matchSuggestion prop:
<AutocompleteInput
    matchSuggestion={(filterValue, suggestion) => true}
/>
        `);
    (0, core_1.warning)(source === undefined, `If you're not wrapping the AutocompleteInput inside a ReferenceInput, you must provide the source prop`);
    (0, core_1.warning)(choices === undefined, `If you're not wrapping the AutocompleteInput inside a ReferenceInput, you must provide the choices prop`);
    let inputEl = (0, react_1.useRef)();
    let anchorEl = (0, react_1.useRef)();
    const translate = (0, core_1.useTranslate)();
    const { id, input, isRequired, meta: { touched, error, submitError }, } = (0, core_1.useInput)(Object.assign({ format, id: idOverride, input: inputOverride, meta: metaOverride, onBlur,
        onChange,
        onFocus,
        parse,
        resource,
        source,
        validate }, rest));
    const [filterValue, setFilterValue] = (0, react_1.useState)('');
    const getSuggestionFromValue = (0, react_1.useCallback)(value => choices.find(choice => (0, get_1.default)(choice, optionValue) === value), [choices, optionValue]);
    const selectedItem = (0, react_1.useMemo)(() => getSuggestionFromValue(input.value) || null, [input.value, getSuggestionFromValue]);
    const { getChoiceText, getChoiceValue, getSuggestions } = (0, core_1.useSuggestions)({
        allowEmpty,
        choices,
        emptyText,
        emptyValue,
        limitChoicesToValue,
        matchSuggestion,
        optionText,
        optionValue,
        selectedItem,
        suggestionLimit,
        translateChoice,
    });
    const handleChange = (0, react_1.useCallback)((item, newItem) => __awaiter(void 0, void 0, void 0, function* () {
        const value = getChoiceValue(newItem || item);
        if (value == null && filterValue) {
            setFilterValue('');
        }
        input.onChange(value);
    }), [filterValue, getChoiceValue, input]);
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
    const handleFilterChange = (0, react_1.useCallback)((eventOrValue) => {
        const event = eventOrValue;
        const value = event.target
            ? event.target.value
            : eventOrValue;
        if (setFilter) {
            setFilter(value);
        }
    }, [setFilter]);
    // We must reset the filter every time the value changes to ensure we
    // display at least some choices even if the input has a value.
    // Otherwise, it would only display the currently selected one and the user
    // would have to first clear the input before seeing any other choices
    (0, react_1.useEffect)(() => {
        handleFilterChange('');
        // If we have a value, set the filter to its text so that
        // Downshift displays it correctly
        setFilterValue(typeof input.value === 'undefined' ||
            input.value === null ||
            selectedItem === null
            ? ''
            : inputText
                ? inputText(getChoiceText(selectedItem).props.record)
                : getChoiceText(selectedItem));
    }, [
        input.value,
        handleFilterChange,
        selectedItem,
        getChoiceText,
        inputText,
    ]);
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
        handleFilterChange('');
        // If we had a value before, set the filter back to its text so that
        // Downshift displays it correctly
        setFilterValue(input.value
            ? inputText
                ? inputText(getChoiceText(selectedItem).props.record)
                : getChoiceText(selectedItem)
            : '');
        input.onBlur(event);
    }, [getChoiceText, handleFilterChange, input, inputText, selectedItem]);
    const handleFocus = (0, react_1.useCallback)(openMenu => event => {
        openMenu(event);
        input.onFocus(event);
    }, [input]);
    const shouldRenderSuggestions = val => {
        if (shouldRenderSuggestionsOverride !== undefined &&
            typeof shouldRenderSuggestionsOverride === 'function') {
            return shouldRenderSuggestionsOverride(val);
        }
        return true;
    };
    const _c = InputProps || {}, { endAdornment, inputRef } = _c, InputPropsWithoutEndAdornment = __rest(_c, ["endAdornment", "inputRef"]);
    const handleClickClearButton = (0, react_1.useCallback)(openMenu => event => {
        event.stopPropagation();
        setFilterValue('');
        input.onChange('');
        openMenu(event);
        input.onFocus(event);
    }, [input]);
    const getEndAdornment = openMenu => {
        if (!resettable) {
            if (endAdornment) {
                return endAdornment;
            }
            if (loading) {
                return (0, jsx_runtime_1.jsx)(AutocompleteInputLoader_1.AutocompleteInputLoader, {}, void 0);
            }
        }
        else if (!filterValue) {
            const label = translate('ra.action.clear_input_value');
            if (clearAlwaysVisible) {
                // show clear button, inactive
                return ((0, jsx_runtime_1.jsxs)(material_1.InputAdornment, Object.assign({ position: "end" }, { children: [(0, jsx_runtime_1.jsx)(material_1.IconButton, Object.assign({ className: classes.clearButton, "aria-label": label, title: label, disableRipple: true, disabled: true, size: "large" }, { children: (0, jsx_runtime_1.jsx)(Clear_1.default, { className: (0, classnames_1.default)(classes.clearIcon, classes.visibleClearIcon) }, void 0) }), void 0), loading && (0, jsx_runtime_1.jsx)(AutocompleteInputLoader_1.AutocompleteInputLoader, {}, void 0)] }), void 0));
            }
            else {
                if (endAdornment) {
                    return endAdornment;
                }
                else {
                    // show spacer
                    return ((0, jsx_runtime_1.jsxs)(material_1.InputAdornment, Object.assign({ position: "end" }, { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({ className: classes.clearButton }, { children: "\u00A0" }), void 0), loading && (0, jsx_runtime_1.jsx)(AutocompleteInputLoader_1.AutocompleteInputLoader, {}, void 0)] }), void 0));
                }
            }
        }
        else {
            // show clear
            const label = translate('ra.action.clear_input_value');
            return ((0, jsx_runtime_1.jsxs)(material_1.InputAdornment, Object.assign({ position: "end" }, { children: [(0, jsx_runtime_1.jsx)(material_1.IconButton, Object.assign({ className: classes.clearButton, "aria-label": label, title: label, disableRipple: true, onClick: handleClickClearButton(openMenu), onMouseDown: handleMouseDownClearButton, disabled: disabled, size: "large" }, { children: (0, jsx_runtime_1.jsx)(Clear_1.default, { className: (0, classnames_1.default)(classes.clearIcon, {
                                [classes.visibleClearIcon]: clearAlwaysVisible || filterValue,
                            }) }, void 0) }), void 0), loading && (0, jsx_runtime_1.jsx)(AutocompleteInputLoader_1.AutocompleteInputLoader, {}, void 0)] }), void 0));
        }
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(downshift_1.default, Object.assign({ inputValue: filterValue, onChange: handleChangeWithCreateSupport, selectedItem: selectedItem, itemToString: item => getChoiceValue(item) }, rest, { children: ({ getInputProps, getItemProps, getLabelProps, getMenuProps, getRootProps, isOpen, highlightedIndex, openMenu, }) => {
                    const isMenuOpen = isOpen && shouldRenderSuggestions(filterValue);
                    const _a = getInputProps(Object.assign({ onBlur: handleBlur, onFocus: handleFocus(openMenu) }, InputProps)), { id: downshiftId, // We want to ignore this to correctly link our label and the input
                    value, onBlur, onChange, onFocus, ref, size, color } = _a, inputProps = __rest(_a, ["id", "value", "onBlur", "onChange", "onFocus", "ref", "size", "color"]);
                    const suggestions = [
                        ...getSuggestions(filterValue),
                        ...(onCreate || create ? [getCreateItem()] : []),
                    ];
                    return ((0, jsx_runtime_1.jsxs)(Root, Object.assign({ className: classes.container }, getRootProps(), { children: [(0, jsx_runtime_1.jsx)(material_1.TextField, Object.assign({ id: id, name: input.name, InputProps: Object.assign({ inputRef: (0, core_1.mergeRefs)([
                                        storeInputRef,
                                        inputRef,
                                    ]), endAdornment: getEndAdornment(openMenu), onBlur, onChange: event => {
                                        setFilterValue(event.target.value);
                                        handleFilterChange(event);
                                        onChange(event);
                                    }, onFocus }, InputPropsWithoutEndAdornment), error: !!(touched && (error || submitError)), label: (0, jsx_runtime_1.jsx)(core_1.FieldTitle, Object.assign({ label: label }, labelProps, { source: source, resource: resource, isRequired: typeof isRequiredOverride !==
                                        'undefined'
                                        ? isRequiredOverride
                                        : isRequired }), void 0), InputLabelProps: getLabelProps({
                                    htmlFor: id,
                                }), helperText: (0, jsx_runtime_1.jsx)(InputHelperText_1.default, { touched: touched, error: error || submitError, helperText: helperText }, void 0), disabled: disabled, variant: variant, margin: margin, fullWidth: fullWidth, value: filterValue, className: className, size: size, color: color }, inputProps, options), void 0), (0, jsx_runtime_1.jsx)(AutocompleteSuggestionList_1.default, Object.assign({ isOpen: isMenuOpen, menuProps: getMenuProps({}, 
                                // https://github.com/downshift-js/downshift/issues/235
                                { suppressRefError: true }), inputEl: inputEl.current, suggestionsContainerProps: suggestionsContainerProps, className: classes.suggestionsContainer }, { children: suggestions.map((suggestion, index) => ((0, jsx_runtime_1.jsx)(AutocompleteSuggestionItem_1.default, Object.assign({ suggestion: suggestion, index: index, highlightedIndex: highlightedIndex, isSelected: input.value ===
                                        getChoiceValue(suggestion), filterValue: filterValue, getSuggestionText: getChoiceText, createValue: createValue }, getItemProps({
                                    item: suggestion,
                                })), getChoiceValue(suggestion)))) }), void 0)] }), void 0));
                } }), void 0), createElement] }, void 0));
};
exports.AutocompleteInput = AutocompleteInput;
const handleMouseDownClearButton = event => {
    event.preventDefault();
};
