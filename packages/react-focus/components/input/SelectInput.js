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
exports.SelectInput = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const react_1 = require("react");
const prop_types_1 = __importDefault(require("prop-types"));
const get_1 = __importDefault(require("lodash/get"));
const MenuItem_1 = __importDefault(require("@mui/material/MenuItem"));
const styles_1 = require("@mui/material/styles");
const core_1 = require("../../features/core");
const ResettableTextField_1 = __importStar(require("./ResettableTextField"));
const InputHelperText_1 = __importDefault(require("./InputHelperText"));
const sanitizeInputRestProps_1 = __importDefault(require("./sanitizeInputRestProps"));
const Labeled_1 = __importDefault(require("./Labeled"));
const layout_1 = require("../layout");
const useSupportCreateSuggestion_1 = require("./useSupportCreateSuggestion");
/**
 * An Input component for a select box, using an array of objects for the options
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
 * <SelectInput source="gender" choices={choices} />
 *
 * You can also customize the properties to use for the option name and value,
 * thanks to the 'optionText' and 'optionValue' attributes.
 * @example
 * const choices = [
 *    { _id: 123, full_name: 'Leo Tolstoi', sex: 'M' },
 *    { _id: 456, full_name: 'Jane Austen', sex: 'F' },
 * ];
 * <SelectInput source="author_id" choices={choices} optionText="full_name" optionValue="_id" />
 *
 * `optionText` also accepts a function, so you can shape the option text at will:
 * @example
 * const choices = [
 *    { id: 123, first_name: 'Leo', last_name: 'Tolstoi' },
 *    { id: 456, first_name: 'Jane', last_name: 'Austen' },
 * ];
 * const optionRenderer = choice => `${choice.first_name} ${choice.last_name}`;
 * <SelectInput source="author_id" choices={choices} optionText={optionRenderer} />
 *
 * `optionText` also accepts a React Element, that will be cloned and receive
 * the related choice as the `record` prop. You can use Field components there.
 * @example
 * const choices = [
 *    { id: 123, first_name: 'Leo', last_name: 'Tolstoi' },
 *    { id: 456, first_name: 'Jane', last_name: 'Austen' },
 * ];
 * const FullNameField = ({ record }) => <span>{record.first_name} {record.last_name}</span>;
 * <SelectInput source="gender" choices={choices} optionText={<FullNameField />}/>
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
 * <SelectInput source="gender" choices={choices} translateChoice={false}/>
 *
 * The object passed as `options` props is passed to the material-ui <Select> component
 *
 * You can disable some choices by providing a `disableValue` field which name is `disabled` by default
 * @example
 * const choices = [
 *    { id: 123, first_name: 'Leo', last_name: 'Tolstoi' },
 *    { id: 456, first_name: 'Jane', last_name: 'Austen' },
 *    { id: 976, first_name: 'William', last_name: 'Rinkerd', disabled: true },
 * ];
 *
 * @example
 * const choices = [
 *    { id: 123, first_name: 'Leo', last_name: 'Tolstoi' },
 *    { id: 456, first_name: 'Jane', last_name: 'Austen' },
 *    { id: 976, first_name: 'William', last_name: 'Rinkerd', not_available: true },
 * ];
 * <SelectInput source="gender" choices={choices} disableValue="not_available" />
 *
 */
const SelectInput = (props) => {
    const { allowEmpty, choices = [], classes: classesOverride, className, create, createLabel, createValue, disableValue, emptyText, emptyValue, format, helperText, label, loaded, loading, margin = 'dense', onBlur, onChange, onCreate, onFocus, options, optionText, optionValue, parse, resource, source, translateChoice, validate } = props, rest = __rest(props, ["allowEmpty", "choices", "classes", "className", "create", "createLabel", "createValue", "disableValue", "emptyText", "emptyValue", "format", "helperText", "label", "loaded", "loading", "margin", "onBlur", "onChange", "onCreate", "onFocus", "options", "optionText", "optionValue", "parse", "resource", "source", "translateChoice", "validate"]);
    const translate = (0, core_1.useTranslate)();
    (0, core_1.warning)(source === undefined, `If you're not wrapping the SelectInput inside a ReferenceInput, you must provide the source prop`);
    (0, core_1.warning)(choices === undefined, `If you're not wrapping the SelectInput inside a ReferenceInput, you must provide the choices prop`);
    const { getChoiceText, getChoiceValue } = (0, core_1.useChoices)({
        optionText,
        optionValue,
        translateChoice,
    });
    const { id, input, isRequired, meta } = (0, core_1.useInput)(Object.assign({ format,
        onBlur,
        onChange,
        onFocus,
        parse,
        resource,
        source,
        validate }, rest));
    const { touched, error, submitError } = meta;
    const renderEmptyItemOption = (0, react_1.useCallback)(() => {
        return React.isValidElement(emptyText)
            ? React.cloneElement(emptyText)
            : emptyText === ''
                ? ' ' // em space, forces the display of an empty line of normal height
                : translate(emptyText, { _: emptyText });
    }, [emptyText, translate]);
    const renderMenuItemOption = (0, react_1.useCallback)(choice => getChoiceText(choice), [
        getChoiceText,
    ]);
    const handleChange = (0, react_1.useCallback)((event, newItem) => __awaiter(void 0, void 0, void 0, function* () {
        if (newItem) {
            const value = getChoiceValue(newItem);
            input.onChange(value);
            return;
        }
        input.onChange(event);
    }), [input, getChoiceValue]);
    const { getCreateItem, handleChange: handleChangeWithCreateSupport, createElement, } = (0, useSupportCreateSuggestion_1.useSupportCreateSuggestion)({
        create,
        createLabel,
        createValue,
        handleChange,
        onCreate,
        optionText,
    });
    if (loading) {
        return ((0, jsx_runtime_1.jsx)(Labeled_1.default, Object.assign({ id: id, label: label, source: source, resource: resource, className: className, isRequired: isRequired, meta: meta, input: input, margin: margin }, { children: (0, jsx_runtime_1.jsx)(layout_1.LinearProgress, {}, void 0) }), void 0));
    }
    const renderCreateItem = () => {
        if (onCreate || create) {
            const createItem = getCreateItem();
            return ((0, jsx_runtime_1.jsx)(MenuItem_1.default, Object.assign({ value: createItem.id }, { children: createItem.name }), createItem.id));
        }
        return null;
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(StyledResettableTextField, Object.assign({ id: id }, input, { onChange: handleChangeWithCreateSupport, select: true, label: label !== '' &&
                    label !== false && ((0, jsx_runtime_1.jsx)(core_1.FieldTitle, { label: label, source: source, resource: resource, isRequired: isRequired }, void 0)), className: className, clearAlwaysVisible: true, error: !!(touched && (error || submitError)), helperText: (0, jsx_runtime_1.jsx)(InputHelperText_1.default, { touched: touched, error: error || submitError, helperText: helperText }, void 0), margin: margin }, options, sanitizeRestProps(rest), { children: [allowEmpty ? ((0, jsx_runtime_1.jsx)(MenuItem_1.default, Object.assign({ value: emptyValue, "aria-label": translate('ra.action.clear_input_value'), title: translate('ra.action.clear_input_value') }, { children: renderEmptyItemOption() }), "null")) : null, choices.map(choice => ((0, jsx_runtime_1.jsx)(MenuItem_1.default, Object.assign({ value: getChoiceValue(choice), disabled: (0, get_1.default)(choice, disableValue) }, { children: renderMenuItemOption(choice) }), getChoiceValue(choice)))), renderCreateItem()] }), void 0), createElement] }, void 0));
};
exports.SelectInput = SelectInput;
exports.SelectInput.propTypes = {
    allowEmpty: prop_types_1.default.bool,
    emptyText: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.element]),
    emptyValue: prop_types_1.default.any,
    choices: prop_types_1.default.arrayOf(prop_types_1.default.object),
    className: prop_types_1.default.string,
    label: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.bool]),
    options: prop_types_1.default.object,
    optionText: prop_types_1.default.oneOfType([
        prop_types_1.default.string,
        prop_types_1.default.func,
        prop_types_1.default.element,
    ]).isRequired,
    optionValue: prop_types_1.default.string.isRequired,
    disableValue: prop_types_1.default.string,
    resettable: prop_types_1.default.bool,
    resource: prop_types_1.default.string,
    source: prop_types_1.default.string,
    translateChoice: prop_types_1.default.bool,
};
exports.SelectInput.defaultProps = {
    emptyText: '',
    emptyValue: '',
    options: {},
    optionText: 'name',
    optionValue: 'id',
    translateChoice: true,
    disableValue: 'disabled',
};
const sanitizeRestProps = (_a) => {
    var { addLabel, afterSubmit, allowNull, beforeSubmit, choices, className, crudGetMatching, crudGetOne, data, filter, filterToQuery, formatOnBlur, isEqual, limitChoicesToValue, multiple, name, pagination, perPage, ref, reference, refetch, render, setFilter, setPagination, setSort, sort, subscription, type, validateFields, validation, value } = _a, rest = __rest(_a, ["addLabel", "afterSubmit", "allowNull", "beforeSubmit", "choices", "className", "crudGetMatching", "crudGetOne", "data", "filter", "filterToQuery", "formatOnBlur", "isEqual", "limitChoicesToValue", "multiple", "name", "pagination", "perPage", "ref", "reference", "refetch", "render", "setFilter", "setPagination", "setSort", "sort", "subscription", "type", "validateFields", "validation", "value"]);
    return (0, sanitizeInputRestProps_1.default)(rest);
};
const PREFIX = 'RaSelectInput';
const classes = {
    input: `${PREFIX}-inputEnd`,
};
const StyledResettableTextField = (0, styles_1.styled)(ResettableTextField_1.default)(({ theme }) => (Object.assign(Object.assign({}, ResettableTextField_1.ResettableTextFieldStyles), { [classes.input]: {
        minWidth: theme.spacing(20),
    } })));
