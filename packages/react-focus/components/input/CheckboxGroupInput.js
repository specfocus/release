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
const get_1 = __importDefault(require("lodash/get"));
const FormLabel_1 = __importDefault(require("@mui/material/FormLabel"));
const FormControl_1 = __importDefault(require("@mui/material/FormControl"));
const FormGroup_1 = __importDefault(require("@mui/material/FormGroup"));
const FormHelperText_1 = __importDefault(require("@mui/material/FormHelperText"));
const core_1 = require("../../features/core");
const sanitizeInputRestProps_1 = __importDefault(require("./sanitizeInputRestProps"));
const CheckboxGroupInputItem_1 = __importDefault(require("./CheckboxGroupInputItem"));
const InputHelperText_1 = __importDefault(require("./InputHelperText"));
const classnames_1 = __importDefault(require("classnames"));
const Labeled_1 = __importDefault(require("./Labeled"));
const layout_1 = require("../layout");
const PREFIX = 'RaCheckboxGroupInput';
const classes = {
    root: `${PREFIX}-root`,
    label: `${PREFIX}-label`,
};
const StyledFormControl = (0, styles_1.styled)(FormControl_1.default)(({ theme }) => ({
    [`&.${classes.root}`]: {},
    [`& .${classes.label}`]: {
        transform: 'translate(0, 8px) scale(0.75)',
        transformOrigin: `top ${theme.direction === 'ltr' ? 'left' : 'right'}`,
    },
}));
/**
 * An Input component for a checkbox group, using an array of objects for the options
 *
 * Pass possible options as an array of objects in the 'choices' attribute.
 *
 * The expected input must be an array of identifiers (e.g. [12, 31]) which correspond to
 * the 'optionValue' of 'choices' attribute objects.
 *
 * By default, the options are built from:
 *  - the 'id' property as the option value,
 *  - the 'name' property as the option text
 * @example
 * const choices = [
 *     { id: 12, name: 'Ray Hakt' },
 *     { id: 31, name: 'Ann Gullar' },
 *     { id: 42, name: 'Sean Phonee' },
 * ];
 * <CheckboxGroupInput source="recipients" choices={choices} />
 *
 * You can also customize the properties to use for the option name and value,
 * thanks to the 'optionText' and 'optionValue' attributes.
 * @example
 * const choices = [
 *    { _id: 123, full_name: 'Leo Tolstoi' },
 *    { _id: 456, full_name: 'Jane Austen' },
 * ];
 * <CheckboxGroupInput source="recipients" choices={choices} optionText="full_name" optionValue="_id" />
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
 * <CheckboxGroupInput source="recipients" choices={choices} optionText={<FullNameField />}/>
 *
 * The choices are translated by default, so you can use translation identifiers as choices:
 * @example
 * const choices = [
 *    { id: 'programming', name: 'myroot.category.programming' },
 *    { id: 'lifestyle', name: 'myroot.category.lifestyle' },
 *    { id: 'photography', name: 'myroot.category.photography' },
 * ];
 *
 * However, in some cases (e.g. inside a `<ReferenceArrayInput>`), you may not want
 * the choice to be translated. In that case, set the `translateChoice` prop to false.
 * @example
 * <CheckboxGroupInput source="gender" choices={choices} translateChoice={false}/>
 *
 * The object passed as `options` props is passed to the material-ui <Checkbox> components
 */
const CheckboxGroupInput = props => {
    const { choices = [], className, classes: classesOverride, format, helperText, label, loaded, loading, margin = 'dense', onBlur, onChange, onFocus, optionText, optionValue, options, parse, resource, row, source, translate, translateChoice, validate } = props, rest = __rest(props, ["choices", "className", "classes", "format", "helperText", "label", "loaded", "loading", "margin", "onBlur", "onChange", "onFocus", "optionText", "optionValue", "options", "parse", "resource", "row", "source", "translate", "translateChoice", "validate"]);
    (0, core_1.warning)(source === undefined, `If you're not wrapping the CheckboxGroupInput inside a ReferenceArrayInput, you must provide the source prop`);
    (0, core_1.warning)(choices === undefined, `If you're not wrapping the CheckboxGroupInput inside a ReferenceArrayInput, you must provide the choices prop`);
    const { id, input: { onChange: finalFormOnChange, onBlur: finalFormOnBlur, value }, isRequired, meta: { error, submitError, touched }, } = (0, core_1.useInput)(Object.assign({ format,
        onBlur,
        onChange,
        onFocus,
        parse,
        resource,
        source,
        validate }, rest));
    const handleCheck = (0, react_1.useCallback)((event, isChecked) => {
        let newValue;
        try {
            // try to convert string value to number, e.g. '123'
            newValue = JSON.parse(event.target.value);
        }
        catch (e) {
            // impossible to convert value, e.g. 'abc'
            newValue = event.target.value;
        }
        if (isChecked) {
            finalFormOnChange([...(value || []), ...[newValue]]);
        }
        else {
            finalFormOnChange(value.filter(v => v != newValue)); // eslint-disable-line eqeqeq
        }
        finalFormOnBlur(); // HACK: See https://github.com/final-form/react-final-form/issues/365#issuecomment-515045503
    }, [finalFormOnChange, finalFormOnBlur, value]);
    if (loading) {
        return ((0, jsx_runtime_1.jsx)(Labeled_1.default, Object.assign({ label: label, source: source, resource: resource, className: className, isRequired: isRequired, margin: margin }, { children: (0, jsx_runtime_1.jsx)(layout_1.LinearProgress, {}, void 0) }), void 0));
    }
    return ((0, jsx_runtime_1.jsxs)(StyledFormControl, Object.assign({ component: "fieldset", margin: margin, error: touched && !!(error || submitError), className: (0, classnames_1.default)(classes.root, className) }, sanitizeRestProps(rest), { children: [(0, jsx_runtime_1.jsx)(FormLabel_1.default, Object.assign({ component: "legend", className: classes.label }, { children: (0, jsx_runtime_1.jsx)(core_1.FieldTitle, { label: label, source: source, resource: resource, isRequired: isRequired }, void 0) }), void 0), (0, jsx_runtime_1.jsx)(FormGroup_1.default, Object.assign({ row: row }, { children: choices.map(choice => ((0, jsx_runtime_1.jsx)(CheckboxGroupInputItem_1.default, { choice: choice, id: id, onChange: handleCheck, options: options, optionText: optionText, optionValue: optionValue, translateChoice: translateChoice, value: value }, (0, get_1.default)(choice, optionValue)))) }), void 0), (0, jsx_runtime_1.jsx)(FormHelperText_1.default, { children: (0, jsx_runtime_1.jsx)(InputHelperText_1.default, { touched: touched, error: error || submitError, helperText: helperText }, void 0) }, void 0)] }), void 0));
};
const sanitizeRestProps = (_a) => {
    var { refetch, setFilter, setPagination, setSort, loaded, touched } = _a, rest = __rest(_a, ["refetch", "setFilter", "setPagination", "setSort", "loaded", "touched"]);
    return (0, sanitizeInputRestProps_1.default)(rest);
};
CheckboxGroupInput.propTypes = {
    choices: prop_types_1.default.arrayOf(prop_types_1.default.object),
    className: prop_types_1.default.string,
    label: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.bool]),
    source: prop_types_1.default.string,
    options: prop_types_1.default.object,
    optionText: prop_types_1.default.oneOfType([
        prop_types_1.default.string,
        prop_types_1.default.func,
        prop_types_1.default.element,
    ]),
    optionValue: prop_types_1.default.string,
    row: prop_types_1.default.bool,
    resource: prop_types_1.default.string,
    translateChoice: prop_types_1.default.bool,
};
CheckboxGroupInput.defaultProps = {
    options: {},
    optionText: 'name',
    optionValue: 'id',
    translateChoice: true,
    fullWidth: true,
    row: true,
};
exports.default = CheckboxGroupInput;
