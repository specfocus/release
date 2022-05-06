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
exports.getArrayInputError = exports.ArrayInput = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const prop_types_1 = __importDefault(require("prop-types"));
const react_1 = require("react");
const react_final_form_arrays_1 = require("react-final-form-arrays");
const core_1 = require("../../../features/core");
const layout_1 = require("../../layout");
const InputHelperText_1 = __importDefault(require("../InputHelperText"));
const Labeled_1 = __importDefault(require("../Labeled"));
const sanitizeInputRestProps_1 = __importDefault(require("../sanitizeInputRestProps"));
const ArrayInputContext_1 = require("./ArrayInputContext");
/**
 * To edit arrays of data embedded inside a record, <ArrayInput> creates a list of sub-forms.
 *
 *  @example
 *
 *      import { ArrayInput, SimpleFormIterator, DateInput, TextInput } from '../../app';
 *
 *      <ArrayInput source="backlinks">
 *          <SimpleFormIterator>
 *              <DateInput source="date" />
 *              <TextInput source="url" />
 *          </SimpleFormIterator>
 *      </ArrayInput>
 *
 * <ArrayInput> allows the edition of embedded arrays, like the backlinks field
 * in the following post record:
 *
 * {
 *   id: 123
 *   backlinks: [
 *         {
 *             date: '2012-08-10T00:00:00.000Z',
 *             url: 'http://example.com/foo/bar.html',
 *         },
 *         {
 *             date: '2012-08-14T00:00:00.000Z',
 *             url: 'https://blog.johndoe.com/2012/08/12/foobar.html',
 *         }
 *    ]
 * }
 *
 * <ArrayInput> expects a single child, which must be a *form iterator* component.
 * A form iterator is a component accepting a fields object as passed by
 * react-final-form-arrays's useFieldArray() hook, and defining a layout for
 * an array of fields. For instance, the <SimpleFormIterator> component
 * displays an array of fields in an unordered list (<ul>), one sub-form by
 * list item (<li>). It also provides controls for adding and removing
 * a sub-record (a backlink in this example).
 *
 * @see https://github.com/final-form/react-final-form-arrays
 */
const ArrayInput = (_a) => {
    var { className, defaultValue, label, loaded, loading, children, helperText, record, resource, source, validate, variant, disabled, margin = 'dense' } = _a, rest = __rest(_a, ["className", "defaultValue", "label", "loaded", "loading", "children", "helperText", "record", "resource", "source", "validate", "variant", "disabled", "margin"]);
    const sanitizedValidate = Array.isArray(validate)
        ? (0, core_1.composeSyncValidators)(validate)
        : validate;
    const fieldProps = (0, react_final_form_arrays_1.useFieldArray)(source, Object.assign({ initialValue: defaultValue, validate: sanitizedValidate }, rest));
    if (loading) {
        return ((0, jsx_runtime_1.jsx)(Labeled_1.default, Object.assign({ label: label, source: source, resource: resource, className: className, margin: margin }, { children: (0, jsx_runtime_1.jsx)(layout_1.LinearProgress, {}, void 0) }), void 0));
    }
    const { error, submitError, touched, dirty } = fieldProps.meta;
    const arrayInputError = (0, exports.getArrayInputError)(error || submitError);
    return ((0, jsx_runtime_1.jsxs)(material_1.FormControl, Object.assign({ fullWidth: true, margin: "normal", className: className, error: (touched || dirty) && !!arrayInputError }, (0, sanitizeInputRestProps_1.default)(rest), { children: [(0, jsx_runtime_1.jsx)(material_1.InputLabel, Object.assign({ htmlFor: source, shrink: true, error: (touched || dirty) && !!arrayInputError }, { children: (0, jsx_runtime_1.jsx)(core_1.FieldTitle, { label: label, source: source, resource: resource, isRequired: (0, core_1.isRequired)(validate) }, void 0) }), void 0), (0, jsx_runtime_1.jsx)(ArrayInputContext_1.ArrayInputContext.Provider, Object.assign({ value: fieldProps }, { children: (0, react_1.cloneElement)(react_1.Children.only(children), Object.assign(Object.assign({}, fieldProps), { record,
                    resource,
                    source,
                    variant,
                    margin,
                    disabled })) }), void 0), !!((touched || dirty) && arrayInputError) || helperText ? ((0, jsx_runtime_1.jsx)(material_1.FormHelperText, Object.assign({ error: (touched || dirty) && !!arrayInputError }, { children: (0, jsx_runtime_1.jsx)(InputHelperText_1.default, { touched: touched || dirty, error: arrayInputError, helperText: helperText }, void 0) }), void 0)) : null] }), void 0));
};
exports.ArrayInput = ArrayInput;
exports.ArrayInput.propTypes = {
    // @ts-ignore
    children: prop_types_1.default.node,
    className: prop_types_1.default.string,
    defaultValue: prop_types_1.default.any,
    isRequired: prop_types_1.default.bool,
    label: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.bool]),
    helperText: prop_types_1.default.string,
    resource: prop_types_1.default.string,
    source: prop_types_1.default.string,
    record: prop_types_1.default.object,
    options: prop_types_1.default.object,
    validate: prop_types_1.default.oneOfType([
        prop_types_1.default.func,
        prop_types_1.default.arrayOf(prop_types_1.default.func),
    ]),
};
exports.ArrayInput.defaultProps = {
    options: {},
    fullWidth: true,
};
const getArrayInputError = error => {
    if (Array.isArray(error)) {
        return undefined;
    }
    return error;
};
exports.getArrayInputError = getArrayInputError;
