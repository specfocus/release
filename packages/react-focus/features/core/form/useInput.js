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
const react_final_form_1 = require("react-final-form");
const validate_1 = require("./validate");
const isRequired_1 = __importDefault(require("./isRequired"));
const useFormGroupContext_1 = require("./useFormGroupContext");
const useFormContext_1 = require("./useFormContext");
const controller_1 = require("../controller");
const useInput = (_a) => {
    var { defaultValue, initialValue, id, name, source, validate, onBlur: customOnBlur, onChange: customOnChange, onFocus: customOnFocus, isRequired: isRequiredOption } = _a, options = __rest(_a, ["defaultValue", "initialValue", "id", "name", "source", "validate", "onBlur", "onChange", "onFocus", "isRequired"]);
    const finalName = name || source;
    const formGroupName = (0, useFormGroupContext_1.useFormGroupContext)();
    const formContext = (0, useFormContext_1.useFormContext)();
    const record = (0, controller_1.useRecordContext)();
    (0, react_1.useEffect)(() => {
        if (!formContext || !formGroupName) {
            return;
        }
        formContext.registerField(source, formGroupName);
        return () => {
            formContext.unregisterField(source, formGroupName);
        };
    }, [formContext, formGroupName, source]);
    const sanitizedValidate = Array.isArray(validate)
        ? (0, validate_1.composeValidators)(validate)
        : validate;
    const { input, meta } = (0, react_final_form_1.useField)(finalName, Object.assign({ initialValue,
        defaultValue, validate: sanitizedValidate }, options));
    // Extract the event handlers so that we can provide ours
    // allowing users to provide theirs without breaking the form
    const { onBlur, onChange, onFocus } = input, inputProps = __rest(input, ["onBlur", "onChange", "onFocus"]);
    const handleBlur = (0, react_1.useCallback)(event => {
        onBlur(event);
        if (typeof customOnBlur === 'function') {
            customOnBlur(event);
        }
    }, [onBlur, customOnBlur]);
    const handleChange = (0, react_1.useCallback)(event => {
        onChange(event);
        if (typeof customOnChange === 'function') {
            customOnChange(event);
        }
    }, [onChange, customOnChange]);
    const handleFocus = (0, react_1.useCallback)(event => {
        onFocus(event);
        if (typeof customOnFocus === 'function') {
            customOnFocus(event);
        }
    }, [onFocus, customOnFocus]);
    const form = (0, react_final_form_1.useForm)();
    const recordId = record === null || record === void 0 ? void 0 : record.id;
    // Every time the record changes and doesn't include a value for this field,
    // reset the field value to the initialValue (or defaultValue)
    (0, react_1.useEffect)(() => {
        if (typeof input.checked !== 'undefined' || // checkbox that has a value from record
            (input.value != null && input.value !== '') // any other input that has a value from record
        ) {
            // no need to apply a default value
            return;
        }
        // Apply the default value if provided
        // We use a change here which will make the form dirty but this is expected
        // and identical to what FinalForm does (https://final-form.org/docs/final-form/types/FieldConfig#defaultvalue)
        if (defaultValue != null) {
            form.change(source, defaultValue);
        }
        // apply initial value if provided
        if (initialValue != null) {
            form.batch(() => {
                form.change(source, initialValue);
                form.resetFieldState(source);
            });
        }
    }, [
        recordId,
        input.value,
        input.checked,
        defaultValue,
        initialValue,
        source,
        form,
    ]);
    // If there is an input prop, this input has already been enhanced by final-form
    // This is required in for inputs used inside other inputs (such as the SelectInput inside a ReferenceInput)
    if (options.input) {
        return {
            id: id || source,
            input: options.input,
            meta: options.meta,
            isRequired: isRequiredOption || (0, isRequired_1.default)(validate),
        };
    }
    return {
        id: id || source,
        input: Object.assign(Object.assign({}, inputProps), { onBlur: handleBlur, onChange: handleChange, onFocus: handleFocus }),
        meta,
        isRequired: isRequiredOption || (0, isRequired_1.default)(validate),
    };
};
exports.default = useInput;
