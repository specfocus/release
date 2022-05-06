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
exports.ReferenceManyFieldView = exports.ReferenceManyField = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const core_1 = require("../../features/core");
const react_redux_1 = require("react-redux");
const types_1 = require("./types");
const sanitizeFieldRestProps_1 = __importDefault(require("./sanitizeFieldRestProps"));
/**
 * Render related records to the current one.
 *
 * You must define the fields to be passed to the iterator component as children.
 *
 * @example Display all the comments of the current post as a datagrid
 * <ReferenceManyField reference="comments" target="post_id">
 *     <Datagrid>
 *         <TextField source="id" />
 *         <TextField source="body" />
 *         <DateField source="created_at" />
 *         <EditButton />
 *     </Datagrid>
 * </ReferenceManyField>
 *
 * @example Display all the books by the current author, only the title
 * <ReferenceManyField reference="books" target="author_id">
 *     <SingleFieldList>
 *         <ChipField source="title" />
 *     </SingleFieldList>
 * </ReferenceManyField>
 *
 * By default, restricts the displayed values to 25. You can extend this limit
 * by setting the `perPage` prop.
 *
 * @example
 * <ReferenceManyField perPage={10} reference="comments" target="post_id">
 *    ...
 * </ReferenceManyField>
 *
 * By default, orders the possible values by id desc. You can change this order
 * by setting the `sort` prop (an object with `field` and `order` properties).
 *
 * @example
 * <ReferenceManyField sort={{ field: 'created_at', order: 'DESC' }} reference="comments" target="post_id">
 *    ...
 * </ReferenceManyField>
 *
 * Also, you can filter the query used to populate the possible values. Use the
 * `filter` prop for that.
 *
 * @example
 * <ReferenceManyField filter={{ is_published: true }} reference="comments" target="post_id">
 *    ...
 * </ReferenceManyField>
 */
const ReferenceManyField = props => {
    const { basePath, children, filter, page = 1, perPage, reference, resource, sort, source, target, } = props;
    const record = (0, core_1.useRecordContext)(props);
    if (react_1.default.Children.count(children) !== 1) {
        throw new Error('<ReferenceManyField> only accepts a single child (like <Datagrid>)');
    }
    const isReferenceDeclared = (0, react_redux_1.useSelector)(state => typeof state.admin.resources[props.reference] !== 'undefined');
    if (!isReferenceDeclared) {
        throw new Error(`You must declare a <Resource name="${props.reference}"> in order to use a <ReferenceManyField reference="${props.reference}">`);
    }
    const controllerProps = (0, core_1.useReferenceManyFieldController)({
        basePath,
        filter,
        page,
        perPage,
        record,
        reference,
        resource,
        sort,
        source,
        target,
    });
    return ((0, jsx_runtime_1.jsx)(core_1.ResourceContextProvider, Object.assign({ value: reference }, { children: (0, jsx_runtime_1.jsx)(core_1.ListContextProvider, Object.assign({ value: controllerProps }, { children: (0, jsx_runtime_1.jsx)(exports.ReferenceManyFieldView, Object.assign({}, props, controllerProps), void 0) }), void 0) }), void 0));
};
exports.ReferenceManyField = ReferenceManyField;
exports.ReferenceManyField.propTypes = {
    addLabel: prop_types_1.default.bool,
    basePath: prop_types_1.default.string,
    children: prop_types_1.default.element.isRequired,
    className: prop_types_1.default.string,
    filter: prop_types_1.default.object,
    label: prop_types_1.default.string,
    perPage: prop_types_1.default.number,
    record: prop_types_1.default.any,
    reference: prop_types_1.default.string.isRequired,
    resource: prop_types_1.default.string,
    sortBy: prop_types_1.default.string,
    sortByOrder: types_1.fieldPropTypes.sortByOrder,
    source: prop_types_1.default.string.isRequired,
    sort: prop_types_1.default.exact({
        field: prop_types_1.default.string,
        order: prop_types_1.default.string,
    }),
    target: prop_types_1.default.string.isRequired,
};
exports.ReferenceManyField.defaultProps = {
    filter: {},
    perPage: 25,
    sort: { field: 'id', order: 'DESC' },
    source: 'id',
    addLabel: true,
};
const ReferenceManyFieldView = props => {
    const { basePath, children, pagination, reference } = props, rest = __rest(props, ["basePath", "children", "pagination", "reference"]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, react_1.cloneElement)(react_1.Children.only(children), Object.assign(Object.assign({}, (0, sanitizeFieldRestProps_1.default)(rest)), { basePath, resource: reference })), pagination &&
                props.total !== undefined &&
                (0, react_1.cloneElement)(pagination)] }, void 0));
};
exports.ReferenceManyFieldView = ReferenceManyFieldView;
exports.ReferenceManyFieldView.propTypes = {
    basePath: prop_types_1.default.string.isRequired,
    children: prop_types_1.default.element,
    className: prop_types_1.default.string,
    currentSort: prop_types_1.default.exact({
        field: prop_types_1.default.string,
        order: prop_types_1.default.string,
    }),
    data: prop_types_1.default.any,
    ids: prop_types_1.default.array,
    loaded: prop_types_1.default.bool,
    pagination: prop_types_1.default.element,
    reference: prop_types_1.default.string,
    setSort: prop_types_1.default.func,
};
exports.default = exports.ReferenceManyField;
