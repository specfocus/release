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
exports.ReferenceArrayInputView = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const react_1 = require("react");
const prop_types_1 = __importDefault(require("prop-types"));
const core_1 = require("../../features/core");
const sanitizeInputRestProps_1 = __importDefault(require("./sanitizeInputRestProps"));
const ReferenceError_1 = __importDefault(require("./ReferenceError"));
/**
 * An Input component for fields containing a list of references to another resource.
 * Useful for 'hasMany' relationship.
 *
 * @example
 * The post object has many tags, so the post resource looks like:
 * {
 *    id: 1234,
 *    tag_ids: [ "1", "23", "4" ]
 * }
 *
 * ReferenceArrayInput component fetches the current resources (using
 * `dataProvider.getMany()`) as well as possible resources (using
 * `dataProvider.getList()`) in the reference endpoint. It then
 * delegates rendering to a subcomponent, to which it passes the possible
 * choices as the `choices` attribute.
 *
 * Use it with a selector component as child, like `<SelectArrayInput>`
 * or <CheckboxGroupInput>.
 *
 * @example
 * export const PostEdit = (props) => (
 *     <Edit {...props}>
 *         <SimpleForm>
 *             <ReferenceArrayInput source="tag_ids" reference="tags">
 *                 <SelectArrayInput optionText="name" />
 *             </ReferenceArrayInput>
 *         </SimpleForm>
 *     </Edit>
 * );
 *
 * By default, restricts the possible values to 25. You can extend this limit
 * by setting the `perPage` prop.
 *
 * @example
 * <ReferenceArrayInput
 *      source="tag_ids"
 *      reference="tags"
 *      perPage={100}>
 *     <SelectArrayInput optionText="name" />
 * </ReferenceArrayInput>
 *
 * By default, orders the possible values by id desc. You can change this order
 * by setting the `sort` prop (an object with `field` and `order` properties).
 *
 * @example
 * <ReferenceArrayInput
 *      source="tag_ids"
 *      reference="tags"
 *      sort={{ field: 'name', order: 'ASC' }}>
 *     <SelectArrayInput optionText="name" />
 * </ReferenceArrayInput>
 *
 * Also, you can filter the query used to populate the possible values. Use the
 * `filter` prop for that.
 *
 * @example
 * <ReferenceArrayInput
 *      source="tag_ids"
 *      reference="tags"
 *      filter={{ is_public: true }}>
 *     <SelectArrayInput optionText="name" />
 * </ReferenceArrayInput>
 *
 * The enclosed component may filter results. ReferenceArrayInput passes a
 * `setFilter` function as prop to its child component. It uses the value to
 * create a filter for the query - by default { q: [searchText] }. You can
 * customize the mapping searchText => searchQuery by setting a custom
 * `filterToQuery` function prop:
 *
 * @example
 * <ReferenceArrayInput
 *      source="tag_ids"
 *      reference="tags"
 *      filterToQuery={searchText => ({ name: searchText })}>
 *     <SelectArrayInput optionText="name" />
 * </ReferenceArrayInput>
 */
const ReferenceArrayInput = (_a) => {
    var { children, id: idOverride, onBlur, onChange, onFocus, validate, parse, format } = _a, props = __rest(_a, ["children", "id", "onBlur", "onChange", "onFocus", "validate", "parse", "format"]);
    if (React.Children.count(children) !== 1) {
        throw new Error('<ReferenceArrayInput> only accepts a single child (like <Datagrid>)');
    }
    const { id, input, isRequired, meta } = (0, core_1.useInput)(Object.assign({ id: idOverride, onBlur,
        onChange,
        onFocus, source: props.source, validate,
        parse,
        format }, props));
    const controllerProps = (0, core_1.useReferenceArrayInputController)(Object.assign(Object.assign({}, props), { input }));
    const listContext = (0, react_1.useMemo)(() => (Object.assign(Object.assign({}, controllerProps), { 
        // ReferenceArrayInput.setSort had a different signature than the one from ListContext.
        // In order to not break backward compatibility, we added this temporary setSortForList in the
        // ReferenceArrayInputContext
        setSort: controllerProps.setSortForList })), [controllerProps]);
    const translate = (0, core_1.useTranslate)();
    return ((0, jsx_runtime_1.jsx)(core_1.ResourceContextProvider, Object.assign({ value: props.reference }, { children: (0, jsx_runtime_1.jsx)(core_1.ReferenceArrayInputContextProvider, Object.assign({ value: controllerProps }, { children: (0, jsx_runtime_1.jsx)(core_1.ListContextProvider, Object.assign({ value: listContext }, { children: (0, jsx_runtime_1.jsx)(exports.ReferenceArrayInputView, Object.assign({ id: id, input: input, isRequired: isRequired, meta: meta, translate: translate, children: children }, props, { choices: controllerProps.choices, loaded: controllerProps.loaded, loading: controllerProps.loading, setFilter: controllerProps.setFilter, setPagination: controllerProps.setPagination, setSort: controllerProps.setSort }), void 0) }), void 0) }), void 0) }), void 0));
};
ReferenceArrayInput.propTypes = {
    allowEmpty: prop_types_1.default.bool,
    basePath: prop_types_1.default.string,
    children: prop_types_1.default.element.isRequired,
    className: prop_types_1.default.string,
    filter: prop_types_1.default.object,
    filterToQuery: prop_types_1.default.func.isRequired,
    label: prop_types_1.default.string,
    perPage: prop_types_1.default.number,
    reference: prop_types_1.default.string.isRequired,
    resource: prop_types_1.default.string,
    sort: prop_types_1.default.shape({
        field: prop_types_1.default.string,
        order: prop_types_1.default.oneOf(['ASC', 'DESC']),
    }),
    source: prop_types_1.default.string,
};
ReferenceArrayInput.defaultProps = {
    filter: {},
    filterToQuery: searchText => (searchText ? { q: searchText } : {}),
    perPage: 25,
    sort: { field: 'id', order: 'DESC' },
};
const sanitizeRestProps = (_a) => {
    var { basePath, crudGetMany, crudGetMatching, filterToQuery, perPage, reference, referenceSource, resource } = _a, rest = __rest(_a, ["basePath", "crudGetMany", "crudGetMatching", "filterToQuery", "perPage", "reference", "referenceSource", "resource"]);
    return (0, sanitizeInputRestProps_1.default)(rest);
};
const ReferenceArrayInputView = (_a) => {
    var { allowEmpty, basePath, children, choices, className, error, input, loaded, loading, isRequired, label, meta, onChange, options, reference, resource, setFilter, setPagination, setSort, source, translate, warning } = _a, rest = __rest(_a, ["allowEmpty", "basePath", "children", "choices", "className", "error", "input", "loaded", "loading", "isRequired", "label", "meta", "onChange", "options", "reference", "resource", "setFilter", "setPagination", "setSort", "source", "translate", "warning"]);
    const translatedLabel = translate(...(0, core_1.getFieldLabelTranslationArgs)({
        label,
        resource,
        source,
    }));
    if (error) {
        return (0, jsx_runtime_1.jsx)(ReferenceError_1.default, { label: translatedLabel, error: error }, void 0);
    }
    return React.cloneElement(children, Object.assign(Object.assign({ allowEmpty, basePath: basePath
            ? basePath.replace(resource, reference)
            : `/${reference}`, choices,
        className,
        error,
        input,
        isRequired, label: translatedLabel, loaded,
        loading, meta: Object.assign(Object.assign({}, meta), { helperText: warning || false }), onChange,
        options, resource: reference, setFilter,
        setPagination,
        setSort,
        source, translateChoice: false, limitChoicesToValue: true }, sanitizeRestProps(rest)), children.props));
};
exports.ReferenceArrayInputView = ReferenceArrayInputView;
exports.ReferenceArrayInputView.propTypes = {
    allowEmpty: prop_types_1.default.bool,
    basePath: prop_types_1.default.string,
    children: prop_types_1.default.element,
    choices: prop_types_1.default.array,
    className: prop_types_1.default.string,
    error: prop_types_1.default.string,
    loading: prop_types_1.default.bool,
    input: prop_types_1.default.object.isRequired,
    label: prop_types_1.default.string,
    meta: prop_types_1.default.object,
    onChange: prop_types_1.default.func,
    options: prop_types_1.default.object,
    resource: prop_types_1.default.string,
    setFilter: prop_types_1.default.func,
    setPagination: prop_types_1.default.func,
    setSort: prop_types_1.default.func,
    source: prop_types_1.default.string,
    translate: prop_types_1.default.func.isRequired,
    warning: prop_types_1.default.string,
};
exports.default = ReferenceArrayInput;
