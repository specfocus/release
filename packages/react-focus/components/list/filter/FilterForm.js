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
exports.mergeInitialValuesWithDefaultValues = exports.FilterForm = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const classnames_1 = __importDefault(require("classnames"));
const final_form_arrays_1 = __importDefault(require("final-form-arrays"));
const get_1 = __importDefault(require("lodash/get"));
const set_1 = __importDefault(require("lodash/set"));
const prop_types_1 = __importDefault(require("prop-types"));
const react_1 = require("react");
const react_final_form_1 = require("react-final-form");
const core_1 = require("../../../features/core");
const FilterContext_1 = require("../FilterContext");
const FilterFormInput_1 = __importDefault(require("./FilterFormInput"));
const PREFIX = 'RaFilterForm';
const classes = {
    form: `${PREFIX}-form`,
    clearFix: `${PREFIX}-clearFix`,
};
const StyledForm = (0, styles_1.styled)('form')(({ theme }) => ({
    [`&.${classes.form}`]: {
        marginTop: -theme.spacing(2),
        paddingTop: 0,
        display: 'flex',
        alignItems: 'flex-end',
        flexWrap: 'wrap',
        minHeight: theme.spacing(10),
        pointerEvents: 'none',
    },
    [`& .${classes.clearFix}`]: { clear: 'right' },
}));
const FilterForm = (props) => {
    const { className, margin, filters, variant, initialValues } = props, rest = __rest(props, ["className", "margin", "filters", "variant", "initialValues"]);
    const resource = (0, core_1.useResourceContext)(props);
    const { displayedFilters = {}, hideFilter } = (0, core_1.useListContext)(props);
    (0, react_1.useEffect)(() => {
        filters.forEach((filter) => {
            if (filter.props.alwaysOn && filter.props.defaultValue) {
                throw new Error('Cannot use alwaysOn and defaultValue on a filter input. Please set the filterDefaultValues props on the <List> element instead.');
            }
        });
    }, [filters]);
    const getShownFilters = () => filters.filter((filterElement) => filterElement.props.alwaysOn ||
        displayedFilters[filterElement.props.source] ||
        typeof (0, get_1.default)(initialValues, filterElement.props.source) !==
            'undefined');
    const handleHide = (0, react_1.useCallback)(event => hideFilter(event.currentTarget.dataset.key), [hideFilter]);
    return ((0, jsx_runtime_1.jsxs)(StyledForm, Object.assign({ className: (0, classnames_1.default)(className, classes.form) }, sanitizeRestProps(rest), { onSubmit: handleSubmit }, { children: [getShownFilters().map((filterElement) => ((0, jsx_runtime_1.jsx)(FilterFormInput_1.default, { filterElement: filterElement, handleHide: handleHide, resource: resource, variant: filterElement.props.variant || variant, margin: filterElement.props.margin || margin }, filterElement.props.source))), (0, jsx_runtime_1.jsx)("div", { className: classes.clearFix }, void 0)] }), void 0));
};
exports.FilterForm = FilterForm;
const handleSubmit = event => {
    event.preventDefault();
    return false;
};
exports.FilterForm.propTypes = {
    resource: prop_types_1.default.string,
    filters: prop_types_1.default.arrayOf(prop_types_1.default.node).isRequired,
    displayedFilters: prop_types_1.default.object,
    hideFilter: prop_types_1.default.func,
    initialValues: prop_types_1.default.object,
    className: prop_types_1.default.string,
};
const sanitizeRestProps = (_a) => {
    var { active, dirty, dirtyFields, dirtyFieldsSinceLastSubmit, dirtySinceLastSubmit, displayedFilters, error, errors, filterValues, form, handleSubmit, hasSubmitErrors, hasValidationErrors, hideFilter, invalid, modified, modifiedSinceLastSubmit, pristine, resource, setFilters, submitError, submitErrors, submitFailed, submitSucceeded, submitting, touched, valid, validating, values, visited } = _a, props = __rest(_a, ["active", "dirty", "dirtyFields", "dirtyFieldsSinceLastSubmit", "dirtySinceLastSubmit", "displayedFilters", "error", "errors", "filterValues", "form", "handleSubmit", "hasSubmitErrors", "hasValidationErrors", "hideFilter", "invalid", "modified", "modifiedSinceLastSubmit", "pristine", "resource", "setFilters", "submitError", "submitErrors", "submitFailed", "submitSucceeded", "submitting", "touched", "valid", "validating", "values", "visited"]);
    return props;
};
const mergeInitialValuesWithDefaultValues = (initialValues, filters) => (Object.assign(Object.assign({}, filters
    .filter((filterElement) => filterElement.props.alwaysOn && filterElement.props.defaultValue)
    .reduce((acc, filterElement) => (0, set_1.default)(Object.assign({}, acc), filterElement.props.source, filterElement.props.defaultValue), {})), initialValues));
exports.mergeInitialValuesWithDefaultValues = mergeInitialValuesWithDefaultValues;
const EnhancedFilterForm = props => {
    const { classes: classesOverride, filters: filtersProps, initialValues } = props, rest = __rest(props, ["classes", "filters", "initialValues"]);
    const { setFilters, displayedFilters, filterValues } = (0, core_1.useListContext)(props);
    const filters = (0, react_1.useContext)(FilterContext_1.FilterContext) || filtersProps;
    const mergedInitialValuesWithDefaultValues = (0, exports.mergeInitialValuesWithDefaultValues)(initialValues || filterValues, filters);
    return ((0, jsx_runtime_1.jsx)(react_final_form_1.Form, { onSubmit: handleFinalFormSubmit, initialValues: mergedInitialValuesWithDefaultValues, mutators: Object.assign({}, final_form_arrays_1.default), render: formProps => ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(react_final_form_1.FormSpy, { subscription: FormSpySubscription, onChange: ({ pristine, values, invalid }) => {
                        if (pristine || invalid) {
                            return;
                        }
                        setFilters(values, displayedFilters);
                    } }, void 0), (0, jsx_runtime_1.jsx)(exports.FilterForm, Object.assign({}, formProps, rest, { filters: filters }), void 0)] }, void 0)) }, void 0));
};
const handleFinalFormSubmit = () => { };
// Options to instruct the FormSpy that it should only listen to the values and pristine changes
const FormSpySubscription = { values: true, pristine: true, invalid: true };
exports.default = EnhancedFilterForm;
