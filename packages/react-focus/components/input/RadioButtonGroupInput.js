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
const react_1 = require("react");
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const prop_types_1 = __importDefault(require("prop-types"));
const material_1 = require("@mui/material");
const get_1 = __importDefault(require("lodash/get"));
const core_1 = require("../../features/core");
const sanitizeInputRestProps_1 = __importDefault(require("./sanitizeInputRestProps"));
const InputHelperText_1 = __importDefault(require("./InputHelperText"));
const RadioButtonGroupInputItem_1 = __importDefault(require("./RadioButtonGroupInputItem"));
const Labeled_1 = __importDefault(require("./Labeled"));
const layout_1 = require("../layout");
const PREFIX = 'RaRadioButtonGroupInput';
const classes = {
    label: `${PREFIX}-label`,
};
const StyledFormControl = (0, styles_1.styled)(material_1.FormControl)(({ theme }) => ({
    [`& .${classes.label}`]: {
        transform: 'translate(0, 5px) scale(0.75)',
        transformOrigin: `top ${theme.direction === 'ltr' ? 'left' : 'right'}`,
    },
}));
/**
 * An Input component for a radio button group, using an array of objects for the options
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
 * <RadioButtonGroupInput source="gender" choices={choices} />
 *
 * You can also customize the properties to use for the option name and value,
 * thanks to the 'optionText' and 'optionValue' attributes.
 * @example
 * const choices = [
 *    { _id: 123, full_name: 'Leo Tolstoi', sex: 'M' },
 *    { _id: 456, full_name: 'Jane Austen', sex: 'F' },
 * ];
 * <RadioButtonGroupInput source="author_id" choices={choices} optionText="full_name" optionValue="_id" />
 *
 * `optionText` also accepts a function, so you can shape the option text at will:
 * @example
 * const choices = [
 *    { id: 123, first_name: 'Leo', last_name: 'Tolstoi' },
 *    { id: 456, first_name: 'Jane', last_name: 'Austen' },
 * ];
 * const optionRenderer = choice => `${choice.first_name} ${choice.last_name}`;
 * <CheckboxGroupInput source="recipients" choices={choices} optionText={optionRenderer} />
 *
 * `optionText` also accepts a React Element, that will be cloned and receive
 * the related choice as the `record` prop. You can use Field components there.
 * @example
 * const choices = [
 *    { id: 123, first_name: 'Leo', last_name: 'Tolstoi' },
 *    { id: 456, first_name: 'Jane', last_name: 'Austen' },
 * ];
 * const FullNameField = ({ record }) => <span>{record.first_name} {record.last_name}</span>;
 * <RadioButtonGroupInput source="gender" choices={choices} optionText={<FullNameField />}/>
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
 * <RadioButtonGroupInput source="gender" choices={choices} translateChoice={false}/>
 *
 * The object passed as `options` props is passed to the material-ui <RadioButtonGroup> component
 */
const RadioButtonGroupInput = (props) => {
    const { choices = [], format, helperText, label, loaded, loading, margin = 'dense', onBlur, onChange, onFocus, options, optionText, optionValue, parse, resource, row, source, translateChoice, validate } = props, rest = __rest(props, ["choices", "format", "helperText", "label", "loaded", "loading", "margin", "onBlur", "onChange", "onFocus", "options", "optionText", "optionValue", "parse", "resource", "row", "source", "translateChoice", "validate"]);
    (0, core_1.warning)(source === undefined, `If you're not wrapping the RadioButtonGroupInput inside a ReferenceInput, you must provide the source prop`);
    (0, core_1.warning)(choices === undefined, `If you're not wrapping the RadioButtonGroupInput inside a ReferenceInput, you must provide the choices prop`);
    const { id, isRequired, meta, input } = (0, core_1.useInput)(Object.assign({ format,
        onBlur,
        onChange,
        onFocus,
        parse,
        resource,
        source,
        validate }, rest));
    const { error, submitError, touched } = meta;
    if (loading) {
        return ((0, jsx_runtime_1.jsx)(Labeled_1.default, Object.assign({ id: id, label: label, source: source, resource: resource, className: rest.className, isRequired: isRequired, margin: margin, meta: meta, input: input }, { children: (0, jsx_runtime_1.jsx)(layout_1.LinearProgress, {}, void 0) }), void 0));
    }
    return ((0, jsx_runtime_1.jsxs)(StyledFormControl, Object.assign({ component: "fieldset", margin: margin, error: touched && !!(error || submitError) }, sanitizeRestProps(rest), { children: [(0, jsx_runtime_1.jsx)(material_1.FormLabel, Object.assign({ component: "legend", className: classes.label }, { children: (0, jsx_runtime_1.jsx)(core_1.FieldTitle, { label: label, source: source, resource: resource, isRequired: isRequired }, void 0) }), void 0), (0, jsx_runtime_1.jsx)(material_1.RadioGroup, Object.assign({ id: id, row: row }, options, { children: choices.map(choice => ((0, react_1.createElement)(RadioButtonGroupInputItem_1.default, Object.assign({}, input, { key: (0, get_1.default)(choice, optionValue), choice: choice, optionText: optionText, optionValue: optionValue, source: source, translateChoice: translateChoice })))) }), void 0), (0, jsx_runtime_1.jsx)(material_1.FormHelperText, { children: (0, jsx_runtime_1.jsx)(InputHelperText_1.default, { touched: touched, error: error || submitError, helperText: helperText }, void 0) }, void 0)] }), void 0));
};
RadioButtonGroupInput.propTypes = {
    choices: prop_types_1.default.arrayOf(prop_types_1.default.any),
    label: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.bool]),
    options: prop_types_1.default.object,
    optionText: prop_types_1.default.oneOfType([
        prop_types_1.default.string,
        prop_types_1.default.func,
        prop_types_1.default.element,
    ]),
    optionValue: prop_types_1.default.string,
    resource: prop_types_1.default.string,
    source: prop_types_1.default.string,
    translateChoice: prop_types_1.default.bool,
};
RadioButtonGroupInput.defaultProps = {
    options: {},
    optionText: 'name',
    optionValue: 'id',
    row: true,
    translateChoice: true,
};
const sanitizeRestProps = (_a) => {
    var { addLabel, afterSubmit, allowNull, beforeSubmit, choices, className, crudGetMatching, crudGetOne, data, filter, filterToQuery, formatOnBlur, isEqual, limitChoicesToValue, multiple, name, pagination, perPage, ref, reference, refetch, render, setFilter, setPagination, setSort, sort, subscription, type, validateFields, validation, value } = _a, rest = __rest(_a, ["addLabel", "afterSubmit", "allowNull", "beforeSubmit", "choices", "className", "crudGetMatching", "crudGetOne", "data", "filter", "filterToQuery", "formatOnBlur", "isEqual", "limitChoicesToValue", "multiple", "name", "pagination", "perPage", "ref", "reference", "refetch", "render", "setFilter", "setPagination", "setSort", "sort", "subscription", "type", "validateFields", "validation", "value"]);
    return (0, sanitizeInputRestProps_1.default)(rest);
};
exports.default = RadioButtonGroupInput;
