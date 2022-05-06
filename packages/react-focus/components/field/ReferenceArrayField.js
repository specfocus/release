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
exports.ReferenceArrayFieldView = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const styles_1 = require("@mui/material/styles");
const react_1 = require("react");
const prop_types_1 = __importDefault(require("prop-types"));
const react_redux_1 = require("react-redux");
const core_1 = require("../../features/core");
const types_1 = require("./types");
const sanitizeFieldRestProps_1 = __importDefault(require("./sanitizeFieldRestProps"));
const layout_1 = require("../layout");
const PREFIX = 'RaReferenceArrayField';
const classes = {
    progress: `${PREFIX}-progress`,
};
const Root = (0, styles_1.styled)('div')(({ theme }) => ({
    [`& .${classes.progress}`]: { marginTop: theme.spacing(2) },
}));
/**
 * A container component that fetches records from another resource specified
 * by an array of *ids* in current record.
 *
 * You must define the fields to be passed to the iterator component as children.
 *
 * @example Display all the products of the current order as datagrid
 * // order = {
 * //   id: 123,
 * //   product_ids: [456, 457, 458],
 * // }
 * <ReferenceArrayField label="Products" reference="products" source="product_ids">
 *     <Datagrid>
 *         <TextField source="id" />
 *         <TextField source="description" />
 *         <NumberField source="price" options={{ style: 'currency', currency: 'USD' }} />
 *         <EditButton />
 *     </Datagrid>
 * </ReferenceArrayField>
 *
 * @example Display all the categories of the current product as a list of chips
 * // product = {
 * //   id: 456,
 * //   category_ids: [11, 22, 33],
 * // }
 * <ReferenceArrayField label="Categories" reference="categories" source="category_ids">
 *     <SingleFieldList>
 *         <ChipField source="name" />
 *     </SingleFieldList>
 * </ReferenceArrayField>
 *
 * By default, restricts the displayed values to 1000. You can extend this limit
 * by setting the `perPage` prop.
 *
 * @example
 * <ReferenceArrayField perPage={10} reference="categories" source="category_ids">
 *    ...
 * </ReferenceArrayField>
 *
 * By default, the field displays the results in the order in which they are referenced
 * (i.e. in the order of the list of ids). You can change this order
 * by setting the `sort` prop (an object with `field` and `order` properties).
 *
 * @example
 * <ReferenceArrayField sort={{ field: 'name', order: 'ASC' }} reference="categories" source="category_ids">
 *    ...
 * </ReferenceArrayField>
 *
 * Also, you can filter the results to display only a subset of values. Use the
 * `filter` prop for that.
 *
 * @example
 * <ReferenceArrayField filter={{ is_published: true }} reference="categories" source="category_ids">
 *    ...
 * </ReferenceArrayField>
 */
const ReferenceArrayField = props => {
    const { basePath, children, filter, page = 1, perPage, reference, resource, sort, source, } = props;
    const record = (0, core_1.useRecordContext)(props);
    if (React.Children.count(children) !== 1) {
        throw new Error('<ReferenceArrayField> only accepts a single child (like <Datagrid>)');
    }
    const isReferenceDeclared = (0, react_redux_1.useSelector)(state => typeof state.admin.resources[props.reference] !== 'undefined');
    if (!isReferenceDeclared) {
        throw new Error(`You must declare a <Resource name="${props.reference}"> in order to use a <ReferenceArrayField reference="${props.reference}">`);
    }
    const controllerProps = (0, core_1.useReferenceArrayFieldController)({
        basePath,
        filter,
        page,
        perPage,
        record,
        reference,
        resource,
        sort,
        source,
    });
    return ((0, jsx_runtime_1.jsx)(core_1.ResourceContextProvider, Object.assign({ value: reference }, { children: (0, jsx_runtime_1.jsx)(core_1.ListContextProvider, Object.assign({ value: controllerProps }, { children: (0, jsx_runtime_1.jsx)(PureReferenceArrayFieldView, Object.assign({}, props, controllerProps), void 0) }), void 0) }), void 0));
};
ReferenceArrayField.propTypes = Object.assign(Object.assign({}, types_1.fieldPropTypes), { addLabel: prop_types_1.default.bool, basePath: prop_types_1.default.string, className: prop_types_1.default.string, children: prop_types_1.default.element.isRequired, label: prop_types_1.default.string, record: prop_types_1.default.any, reference: prop_types_1.default.string.isRequired, resource: prop_types_1.default.string, sortBy: prop_types_1.default.string, sortByOrder: types_1.fieldPropTypes.sortByOrder, source: prop_types_1.default.string.isRequired });
ReferenceArrayField.defaultProps = {
    addLabel: true,
};
const ReferenceArrayFieldView = props => {
    const { children, pagination, className, resource, reference } = props, rest = __rest(props, ["children", "pagination", "className", "resource", "reference"]);
    const { loaded } = (0, core_1.useListContext)(props);
    return ((0, jsx_runtime_1.jsx)(Root, { children: !loaded ? ((0, jsx_runtime_1.jsx)(layout_1.LinearProgress, { className: classes.progress }, void 0)) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, react_1.cloneElement)(react_1.Children.only(children), Object.assign(Object.assign({}, (0, sanitizeFieldRestProps_1.default)(rest)), { className,
                    resource })), pagination &&
                    props.total !== undefined &&
                    (0, react_1.cloneElement)(pagination, (0, sanitizeFieldRestProps_1.default)(rest))] }, void 0)) }, void 0));
};
exports.ReferenceArrayFieldView = ReferenceArrayFieldView;
exports.ReferenceArrayFieldView.propTypes = {
    basePath: prop_types_1.default.string,
    className: prop_types_1.default.string,
    data: prop_types_1.default.any,
    ids: prop_types_1.default.array,
    loaded: prop_types_1.default.bool,
    children: prop_types_1.default.element.isRequired,
    reference: prop_types_1.default.string.isRequired,
};
const PureReferenceArrayFieldView = (0, react_1.memo)(exports.ReferenceArrayFieldView);
exports.default = ReferenceArrayField;
