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
exports.ReferenceInputView = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const prop_types_1 = __importDefault(require("prop-types"));
const core_1 = require("../../features/core");
const sanitizeInputRestProps_1 = __importDefault(require("./sanitizeInputRestProps"));
const ReferenceError_1 = __importDefault(require("./ReferenceError"));
/**
 * An Input component for choosing a reference record. Useful for foreign keys.
 *
 * This component fetches the possible values in the reference resource
 * (using `dataProvider.getList()`), then delegates rendering
 * to a subcomponent, to which it passes the possible choices
 * as the `choices` attribute.
 *
 * Use it with a selector component as child, like `<AutocompleteInput>`,
 * `<SelectInput>`, or `<RadioButtonGroupInput>`.
 *
 * @example
 * export const CommentEdit = (props) => (
 *     <Edit {...props}>
 *         <SimpleForm>
 *             <ReferenceInput label="Post" source="post_id" reference="posts">
 *                 <AutocompleteInput optionText="title" />
 *             </ReferenceInput>
 *         </SimpleForm>
 *     </Edit>
 * );
 *
 * @example
 * export const CommentEdit = (props) => (
 *     <Edit {...props}>
 *         <SimpleForm>
 *             <ReferenceInput label="Post" source="post_id" reference="posts">
 *                 <SelectInput optionText="title" />
 *             </ReferenceInput>
 *         </SimpleForm>
 *     </Edit>
 * );
 *
 * By default, restricts the possible values to 25. You can extend this limit
 * by setting the `perPage` prop.
 *
 * @example
 * <ReferenceInput
 *      source="post_id"
 *      reference="posts"
 *      perPage={100}>
 *     <SelectInput optionText="title" />
 * </ReferenceInput>
 *
 * By default, orders the possible values by id desc. You can change this order
 * by setting the `sort` prop (an object with `field` and `order` properties).
 *
 * @example
 * <ReferenceInput
 *      source="post_id"
 *      reference="posts"
 *      sort={{ field: 'title', order: 'ASC' }}>
 *     <SelectInput optionText="title" />
 * </ReferenceInput>
 *
 * Also, you can filter the query used to populate the possible values. Use the
 * `filter` prop for that.
 *
 * @example
 * <ReferenceInput
 *      source="post_id"
 *      reference="posts"
 *      filter={{ is_published: true }}>
 *     <SelectInput optionText="title" />
 * </ReferenceInput>
 *
 * The enclosed component may filter results. ReferenceInput passes a `setFilter`
 * function as prop to its child component. It uses the value to create a filter
 * for the query - by default { q: [searchText] }. You can customize the mapping
 * searchText => searchQuery by setting a custom `filterToQuery` function prop:
 *
 * @example
 * <ReferenceInput
 *      source="post_id"
 *      reference="posts"
 *      filterToQuery={searchText => ({ title: searchText })}>
 *     <AutocompleteInput optionText="title" />
 * </ReferenceInput>
 */
const ReferenceInput = (props) => {
    const { format, onBlur, onChange, onFocus, parse, validate } = props, rest = __rest(props, ["format", "onBlur", "onChange", "onFocus", "parse", "validate"]);
    const inputProps = (0, core_1.useInput)(Object.assign({ format,
        onBlur,
        onChange,
        onFocus,
        parse,
        validate }, rest));
    return ((0, jsx_runtime_1.jsx)(exports.ReferenceInputView, Object.assign({}, inputProps, rest, (0, core_1.useReferenceInputController)(Object.assign(Object.assign({}, rest), inputProps))), void 0));
};
ReferenceInput.propTypes = {
    allowEmpty: prop_types_1.default.bool,
    basePath: prop_types_1.default.string,
    children: prop_types_1.default.element.isRequired,
    className: prop_types_1.default.string,
    classes: prop_types_1.default.object,
    filter: prop_types_1.default.object,
    filterToQuery: prop_types_1.default.func.isRequired,
    label: prop_types_1.default.string,
    onChange: prop_types_1.default.func,
    perPage: prop_types_1.default.number,
    record: prop_types_1.default.object,
    reference: prop_types_1.default.string.isRequired,
    resource: prop_types_1.default.string,
    sort: prop_types_1.default.shape({
        field: prop_types_1.default.string,
        order: prop_types_1.default.oneOf(['ASC', 'DESC']),
    }),
    source: prop_types_1.default.string,
};
ReferenceInput.defaultProps = {
    filter: {},
    filterToQuery: searchText => (searchText ? { q: searchText } : {}),
    perPage: 25,
    sort: { field: 'id', order: 'DESC' },
};
const sanitizeRestProps = (_a) => {
    var { dataStatus = null, filter = null, filterToQuery = null, onChange = null, perPage = null, reference = null, referenceRecord = null, referenceSource = null, sort = null, validation = null } = _a, rest = __rest(_a, ["dataStatus", "filter", "filterToQuery", "onChange", "perPage", "reference", "referenceRecord", "referenceSource", "sort", "validation"]);
    return (0, sanitizeInputRestProps_1.default)(rest);
};
const ReferenceInputView = (props) => {
    const { allowEmpty, basePath, children, choices, classes, className, error, helperText, id, input, isRequired, label, meta, possibleValues, resource, reference, setFilter, setPagination, setSort, source, warning } = props, rest = __rest(props, ["allowEmpty", "basePath", "children", "choices", "classes", "className", "error", "helperText", "id", "input", "isRequired", "label", "meta", "possibleValues", "resource", "reference", "setFilter", "setPagination", "setSort", "source", "warning"]);
    if (react_1.Children.count(children) !== 1) {
        throw new Error('<ReferenceInput> only accepts a single child');
    }
    // This is not a final-form error but an unrecoverable error from the
    // useReferenceInputController hook
    if (error) {
        return (0, jsx_runtime_1.jsx)(ReferenceError_1.default, { label: label, error: error }, void 0);
    }
    // When the useReferenceInputController returns a warning, it means it
    // had an issue trying to load the referenced record
    // We display it by overriding the final-form meta
    const finalMeta = warning
        ? Object.assign(Object.assign({}, meta), { error: warning }) : meta;
    // helperText should never be set on ReferenceInput, only in child component
    // But in a Filter component, the child helperText have to be forced to false
    (0, core_1.warning)(helperText !== undefined && helperText !== false, "<ReferenceInput> doesn't accept a helperText prop. Set the helperText prop on the child component instead");
    const disabledHelperText = helperText === false ? { helperText } : {};
    return ((0, jsx_runtime_1.jsx)(core_1.ResourceContextProvider, Object.assign({ value: reference }, { children: (0, jsx_runtime_1.jsx)(core_1.ListContextProvider, Object.assign({ value: possibleValues }, { children: (0, react_1.cloneElement)(children, Object.assign(Object.assign({ allowEmpty,
                classes,
                className,
                input,
                isRequired,
                label,
                resource, meta: finalMeta, source,
                choices,
                basePath,
                setFilter,
                setPagination,
                setSort, translateChoice: false }, disabledHelperText), sanitizeRestProps(rest))) }), void 0) }), void 0));
};
exports.ReferenceInputView = ReferenceInputView;
exports.default = ReferenceInput;
