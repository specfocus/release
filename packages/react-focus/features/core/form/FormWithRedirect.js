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
const react_1 = require("react");
const react_final_form_1 = require("react-final-form");
const final_form_arrays_1 = __importDefault(require("final-form-arrays"));
const useInitializeFormWithRecord_1 = __importDefault(require("./useInitializeFormWithRecord"));
const useWarnWhenUnsavedChanges_1 = __importDefault(require("./useWarnWhenUnsavedChanges"));
const useResetSubmitErrors_1 = __importDefault(require("./useResetSubmitErrors"));
const sanitizeEmptyValues_1 = __importDefault(require("./sanitizeEmptyValues"));
const getFormInitialValues_1 = __importDefault(require("./getFormInitialValues"));
const react_redux_1 = require("react-redux");
const uiActions_1 = require("../actions/uiActions");
const FormContextProvider_1 = require("./FormContextProvider");
const submitErrorsMutators_1 = __importDefault(require("./submitErrorsMutators"));
/**
 * Wrapper around react-final-form's Form to handle redirection on submit,
 * legacy defaultValue prop, and array inputs.
 *
 * Requires a render function, just like react-final-form
 *
 * @example
 *
 * const SimpleForm = props => (
 *    <FormWithRedirect
 *        {...props}
 *        render={formProps => <SimpleFormView {...formProps} />}
 *    />
 * );
 *
 * @typedef {Object} Props the props you can use (other props are injected by Create or Edit)
 * @prop {Object} initialValues
 * @prop {Function} validate
 * @prop {Function} save
 * @prop {boolean} submitOnEnter
 * @prop {string} redirect
 * @prop {boolean} sanitizeEmptyValues
 *
 * @param {Props} props
 */
const FormWithRedirect = (_a) => {
    var { debug, decorators, defaultValue, destroyOnUnregister, form, initialValues, initialValuesEqual, keepDirtyOnReinitialize = true, mutators = defaultMutators, record, render, save, saving, subscription = defaultSubscription, validate, validateOnBlur, version, warnWhenUnsavedChanges, sanitizeEmptyValues: shouldSanitizeEmptyValues = true } = _a, props = __rest(_a, ["debug", "decorators", "defaultValue", "destroyOnUnregister", "form", "initialValues", "initialValuesEqual", "keepDirtyOnReinitialize", "mutators", "record", "render", "save", "saving", "subscription", "validate", "validateOnBlur", "version", "warnWhenUnsavedChanges", "sanitizeEmptyValues"]);
    const redirect = (0, react_1.useRef)(props.redirect);
    const onSave = (0, react_1.useRef)(save);
    const formGroups = (0, react_1.useRef)({});
    const finalMutators = (0, react_1.useMemo)(() => mutators === defaultMutators
        ? mutators
        : Object.assign(Object.assign({}, defaultMutators), mutators), [mutators]);
    // We don't use state here for two reasons:
    // 1. There no way to execute code only after the state has been updated
    // 2. We don't want the form to rerender when redirect is changed
    const setRedirect = newRedirect => {
        redirect.current = newRedirect;
    };
    /**
     * A form can have several Save buttons. In case the user clicks on
     * a Save button with a custom onSave handler, then on a second Save button
     * without custom onSave handler, the user expects the default save
     * handler (the one of the Form) to be called.
     * That's why the SaveButton onClick calls setOnSave() with no parameters
     * if it has no custom onSave, and why this function forces a default to
     * save.
     */
    const setOnSave = (0, react_1.useCallback)(newOnSave => {
        typeof newOnSave === 'function'
            ? (onSave.current = newOnSave)
            : (onSave.current = save);
    }, [save]);
    const formContextValue = (0, react_1.useMemo)(() => ({
        setOnSave,
        getGroupFields: name => formGroups.current[name] || [],
        registerGroup: name => {
            formGroups.current[name] = formGroups.current[name] || [];
        },
        unregisterGroup: name => {
            delete formGroups[name];
        },
        registerField: (source, group) => {
            if (group) {
                const fields = new Set(formGroups.current[group] || []);
                fields.add(source);
                formGroups.current[group] = Array.from(fields);
            }
        },
        unregisterField: (source, group) => {
            if (group) {
                if (!formGroups.current[group]) {
                    console.warn(`Invalid form group ${group}`);
                }
                else {
                    const fields = new Set(formGroups.current[group]);
                    fields.delete(source);
                    formGroups.current[group] = Array.from(fields);
                }
            }
        },
    }), [setOnSave]);
    const finalInitialValues = (0, react_1.useMemo)(() => (0, getFormInitialValues_1.default)(initialValues, defaultValue, record), [JSON.stringify({ initialValues, defaultValue, record })]); // eslint-disable-line
    const submit = values => {
        const finalRedirect = typeof redirect.current === undefined
            ? props.redirect
            : redirect.current;
        if (shouldSanitizeEmptyValues) {
            const sanitizedValues = (0, sanitizeEmptyValues_1.default)(finalInitialValues, values);
            return onSave.current(sanitizedValues, finalRedirect);
        }
        else {
            return onSave.current(values, finalRedirect);
        }
    };
    return ((0, jsx_runtime_1.jsx)(FormContextProvider_1.FormContextProvider, Object.assign({ value: formContextValue }, { children: (0, jsx_runtime_1.jsx)(react_final_form_1.Form, { debug: debug, decorators: decorators, destroyOnUnregister: destroyOnUnregister, form: form, initialValues: finalInitialValues, initialValuesEqual: initialValuesEqual, keepDirtyOnReinitialize: keepDirtyOnReinitialize, mutators: finalMutators, onSubmit: submit, subscription: subscription, validate: validate, validateOnBlur: validateOnBlur, render: formProps => (
            // @ts-ignore Ignored because of a weird error about the active prop
            (0, jsx_runtime_1.jsx)(FormView, Object.assign({}, props, formProps, { record: record, setRedirect: setRedirect, saving: formProps.form.getState().submitting || saving, render: render, save: save, warnWhenUnsavedChanges: warnWhenUnsavedChanges }), void 0)) }, version) }), void 0));
};
const defaultMutators = Object.assign(Object.assign({}, final_form_arrays_1.default), submitErrorsMutators_1.default);
const defaultSubscription = {
    submitting: true,
    pristine: true,
    valid: true,
    invalid: true,
    validating: true,
};
const FormView = (_a) => {
    var { render, warnWhenUnsavedChanges, setRedirect } = _a, props = __rest(_a, ["render", "warnWhenUnsavedChanges", "setRedirect"]);
    // if record changes (after a getOne success or a refresh), the form must be updated
    (0, useInitializeFormWithRecord_1.default)(props.record);
    (0, useWarnWhenUnsavedChanges_1.default)(warnWhenUnsavedChanges);
    (0, useResetSubmitErrors_1.default)();
    const dispatch = (0, react_redux_1.useDispatch)();
    (0, react_1.useEffect)(() => {
        dispatch((0, uiActions_1.setAutomaticRefresh)(props.form.getState().pristine));
    }, [dispatch, props.form.getState().pristine]);
    const { redirect, handleSubmit } = props;
    /**
     * We want to let developers define the redirection target from inside the form,
     * e.g. in a <SaveButton redirect="list" />.
     * This callback does two things: handle submit, and change the redirection target.
     * The actual redirection is done in save(), passed by the main controller.
     *
     * If the redirection target doesn't depend on the button clicked, it's a
     * better option to define it directly on the Form component. In that case,
     * using handleSubmit() instead of handleSubmitWithRedirect is fine.
     *
     * @example
     *
     * <Button onClick={() => handleSubmitWithRedirect('edit')}>
     *     Save and edit
     * </Button>
     */
    const handleSubmitWithRedirect = (0, react_1.useCallback)((redirectTo = redirect) => {
        setRedirect(redirectTo);
        handleSubmit();
    }, [setRedirect, redirect, handleSubmit]);
    return render(Object.assign(Object.assign({}, props), { handleSubmitWithRedirect }));
};
exports.default = FormWithRedirect;
