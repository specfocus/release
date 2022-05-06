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
const styles_1 = require("@mui/material/styles");
const react_1 = require("react");
const prop_types_1 = __importDefault(require("prop-types"));
const material_1 = require("@mui/material");
const classnames_1 = __importDefault(require("classnames"));
const core_1 = require("../../features/core");
const InputHelperText_1 = __importDefault(require("./InputHelperText"));
const Labeled_1 = __importDefault(require("./Labeled"));
const layout_1 = require("../layout");
const useSupportCreateSuggestion_1 = require("./useSupportCreateSuggestion");
const PREFIX = 'RaSelectArrayInput';
const classes = {
    root: `${PREFIX}-root`,
    chips: `${PREFIX}-chips`,
    chip: `${PREFIX}-chip`,
};
const StyledFormControl = (0, styles_1.styled)(material_1.FormControl)(({ theme }) => ({
    [`&.${classes.root}`]: {},
    [`& .${classes.chips}`]: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    [`& .${classes.chip}`]: {
        margin: theme.spacing(1 / 4),
    },
}));
/**
 * An Input component for a select box allowing multiple selections, using an array of objects for the options
 *
 * Pass possible options as an array of objects in the 'choices' attribute.
 *
 * By default, the options are built from:
 *  - the 'id' property as the option value,
 *  - the 'name' property as the option text
 * @example
 * const choices = [
 *    { id: 'programming', name: 'Programming' },
 *    { id: 'lifestyle', name: 'Lifestyle' },
 *    { id: 'photography', name: 'Photography' },
 * ];
 * <SelectArrayInput source="tags" choices={choices} />
 *
 * You can also customize the properties to use for the option name and value,
 * thanks to the 'optionText' and 'optionValue' attributes.
 * @example
 * const choices = [
 *    { _id: 123, full_name: 'Leo Tolstoi', sex: 'M' },
 *    { _id: 456, full_name: 'Jane Austen', sex: 'F' },
 * ];
 * <SelectArrayInput source="authors" choices={choices} optionText="full_name" optionValue="_id" />
 *
 * `optionText` also accepts a function, so you can shape the option text at will:
 * @example
 * const choices = [
 *    { id: 123, first_name: 'Leo', last_name: 'Tolstoi' },
 *    { id: 456, first_name: 'Jane', last_name: 'Austen' },
 * ];
 * const optionRenderer = choice => `${choice.first_name} ${choice.last_name}`;
 * <SelectArrayInput source="authors" choices={choices} optionText={optionRenderer} />
 *
 * `optionText` also accepts a React Element, that will be cloned and receive
 * the related choice as the `record` prop. You can use Field components there.
 * @example
 * const choices = [
 *    { id: 123, first_name: 'Leo', last_name: 'Tolstoi' },
 *    { id: 456, first_name: 'Jane', last_name: 'Austen' },
 * ];
 * const FullNameField = ({ record }) => <span>{record.first_name} {record.last_name}</span>;
 * <SelectArrayInput source="authors" choices={choices} optionText={<FullNameField />}/>
 *
 * The choices are translated by default, so you can use translation identifiers as choices:
 * @example
 * const choices = [
 *    { id: 'programming', name: 'myroot.tags.programming' },
 *    { id: 'lifestyle', name: 'myroot.tags.lifestyle' },
 *    { id: 'photography', name: 'myroot.tags.photography' },
 * ];
 */
const SelectArrayInput = (props) => {
    const { choices = [], className, create, createLabel, createValue, disableValue, format, helperText, label, loaded, loading, margin = 'dense', onBlur, onChange, onCreate, onFocus, options, optionText, optionValue, parse, resource, source, translateChoice, validate, variant = 'filled' } = props, rest = __rest(props, ["choices", "className", "create", "createLabel", "createValue", "disableValue", "format", "helperText", "label", "loaded", "loading", "margin", "onBlur", "onChange", "onCreate", "onFocus", "options", "optionText", "optionValue", "parse", "resource", "source", "translateChoice", "validate", "variant"]);
    const inputLabel = (0, react_1.useRef)(null);
    const { getChoiceText, getChoiceValue, getDisableValue } = (0, core_1.useChoices)({
        optionText,
        optionValue,
        disableValue,
        translateChoice,
    });
    const { input, isRequired, meta: { error, submitError, touched }, } = (0, core_1.useInput)(Object.assign({ format,
        onBlur,
        onChange,
        onFocus,
        parse,
        resource,
        source,
        validate }, rest));
    const handleChange = (0, react_1.useCallback)((event, newItem) => {
        if (newItem) {
            input.onChange([...input.value, getChoiceValue(newItem)]);
            return;
        }
        input.onChange(event);
    }, [input, getChoiceValue]);
    const { getCreateItem, handleChange: handleChangeWithCreateSupport, createElement, } = (0, useSupportCreateSuggestion_1.useSupportCreateSuggestion)({
        create,
        createLabel,
        createValue,
        handleChange,
        onCreate,
        optionText,
    });
    const createItem = create || onCreate ? getCreateItem() : null;
    const finalChoices = create || onCreate ? [...choices, createItem] : choices;
    const renderMenuItemOption = (0, react_1.useCallback)(choice => getChoiceText(choice), [
        getChoiceText,
    ]);
    const renderMenuItem = (0, react_1.useCallback)(choice => {
        return choice ? ((0, jsx_runtime_1.jsx)(material_1.MenuItem, Object.assign({ value: getChoiceValue(choice), disabled: getDisableValue(choice) }, { children: !!createItem && (choice === null || choice === void 0 ? void 0 : choice.id) === createItem.id
                ? createItem.name
                : renderMenuItemOption(choice) }), getChoiceValue(choice))) : null;
    }, [getChoiceValue, getDisableValue, renderMenuItemOption, createItem]);
    if (loading) {
        return ((0, jsx_runtime_1.jsx)(Labeled_1.default, Object.assign({ label: label, source: source, resource: resource, className: className, isRequired: isRequired, margin: margin }, { children: (0, jsx_runtime_1.jsx)(layout_1.LinearProgress, {}, void 0) }), void 0));
    }
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(StyledFormControl, Object.assign({ margin: margin, className: (0, classnames_1.default)(classes.root, className), error: touched && !!(error || submitError), variant: variant }, sanitizeRestProps(rest), { children: [(0, jsx_runtime_1.jsx)(material_1.InputLabel, Object.assign({ ref: inputLabel, id: `${label}-outlined-label`, error: touched && !!(error || submitError) }, { children: (0, jsx_runtime_1.jsx)(core_1.FieldTitle, { label: label, source: source, resource: resource, isRequired: isRequired }, void 0) }), void 0), (0, jsx_runtime_1.jsx)(material_1.Select, Object.assign({ autoWidth: true, labelId: `${label}-outlined-label`, multiple: true, error: !!(touched && (error || submitError)), renderValue: (selected) => ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: classes.chips }, { children: selected
                                .map(item => choices.find(choice => getChoiceValue(choice) === item))
                                .filter(item => !!item)
                                .map(item => ((0, jsx_runtime_1.jsx)(material_1.Chip, { label: renderMenuItemOption(item), className: classes.chip }, getChoiceValue(item)))) }), void 0)), "data-testid": "selectArray" }, input, { onChange: handleChangeWithCreateSupport, value: input.value || [] }, options, { children: finalChoices.map(renderMenuItem) }), void 0), (0, jsx_runtime_1.jsx)(material_1.FormHelperText, Object.assign({ error: touched && !!(error || submitError) }, { children: (0, jsx_runtime_1.jsx)(InputHelperText_1.default, { touched: touched, error: error || submitError, helperText: helperText }, void 0) }), void 0)] }), void 0), createElement] }, void 0));
};
SelectArrayInput.propTypes = {
    choices: prop_types_1.default.arrayOf(prop_types_1.default.object),
    className: prop_types_1.default.string,
    children: prop_types_1.default.node,
    label: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.bool]),
    options: prop_types_1.default.object,
    optionText: prop_types_1.default.oneOfType([
        prop_types_1.default.string,
        prop_types_1.default.func,
        prop_types_1.default.element,
    ]).isRequired,
    optionValue: prop_types_1.default.string.isRequired,
    disableValue: prop_types_1.default.string,
    resource: prop_types_1.default.string,
    source: prop_types_1.default.string,
    translateChoice: prop_types_1.default.bool,
};
SelectArrayInput.defaultProps = {
    options: {},
    optionText: 'name',
    optionValue: 'id',
    disableValue: 'disabled',
    translateChoice: true,
};
const sanitizeRestProps = (_a) => {
    var { addLabel, allowEmpty, alwaysOn, basePath, choices, classNamInputWithOptionsPropse, componenInputWithOptionsPropst, crudGetMInputWithOptionsPropsatching, crudGetOInputWithOptionsPropsne, defaultValue, disableValue, filter, filterToQuery, formClassName, initializeForm, input, isRequired, label, limitChoicesToValue, loaded, locale, meta, onChange, options, optionValue, optionText, perPage, record, reference, resource, setFilter, setPagination, setSort, sort, source, textAlign, translate, translateChoice, validation } = _a, rest = __rest(_a, ["addLabel", "allowEmpty", "alwaysOn", "basePath", "choices", "classNamInputWithOptionsPropse", "componenInputWithOptionsPropst", "crudGetMInputWithOptionsPropsatching", "crudGetOInputWithOptionsPropsne", "defaultValue", "disableValue", "filter", "filterToQuery", "formClassName", "initializeForm", "input", "isRequired", "label", "limitChoicesToValue", "loaded", "locale", "meta", "onChange", "options", "optionValue", "optionText", "perPage", "record", "reference", "resource", "setFilter", "setPagination", "setSort", "sort", "source", "textAlign", "translate", "translateChoice", "validation"]);
    return rest;
};
exports.default = SelectArrayInput;
