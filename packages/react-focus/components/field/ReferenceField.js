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
exports.ReferenceFieldView = exports.NonEmptyReferenceField = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const styles_1 = require("@mui/material/styles");
const react_1 = require("react");
const prop_types_1 = __importDefault(require("prop-types"));
const classnames_1 = __importDefault(require("classnames"));
const get_1 = __importDefault(require("lodash/get"));
const material_1 = require("@mui/material");
const Error_1 = __importDefault(require("@mui/icons-material/Error"));
const react_redux_1 = require("react-redux");
const core_1 = require("../../features/core");
const LinearProgress_1 = __importDefault(require("../layout/LinearProgress"));
const Link_1 = __importDefault(require("../Link"));
const sanitizeFieldRestProps_1 = __importDefault(require("./sanitizeFieldRestProps"));
const types_1 = require("./types");
const PREFIX = 'RaReferenceField';
const classes = {
    link: `${PREFIX}-link`,
};
const Root = (0, styles_1.styled)('div')(({ theme }) => ({
    [`& .${classes.link}`]: {
        color: theme.palette.primary.main,
    },
}));
/**
 * Fetch reference record, and delegate rendering to child component.
 *
 * The reference prop should be the name of one of the <Resource> components
 * added as <Admin> child.
 *
 * @example
 * <ReferenceField label="User" source="userId" reference="users">
 *     <TextField source="name" />
 * </ReferenceField>
 *
 * @default
 * By default, includes a link to the <Edit> page of the related record
 * (`/users/:userId` in the previous example).
 *
 * Set the `link` prop to "show" to link to the <Show> page instead.
 *
 * @example
 * <ReferenceField label="User" source="userId" reference="users" link="show">
 *     <TextField source="name" />
 * </ReferenceField>
 *
 * @default
 * You can also prevent `<ReferenceField>` from adding link to children by setting
 * `link` to false.
 *
 * @example
 * <ReferenceField label="User" source="userId" reference="users" link={false}>
 *     <TextField source="name" />
 * </ReferenceField>
 *
 * @default
 * Alternatively, you can also pass a custom function to `link`. It must take reference and record
 * as arguments and return a string
 *
 * @example
 * <ReferenceField label="User" source="userId" reference="users" link={(record, reference) => "/path/to/${reference}/${record}"}>
 *     <TextField source="name" />
 * </ReferenceField>
 *
 * @default
 * In previous versions of React-Admin, the prop `linkType` was used. It is now deprecated and replaced with `link`. However
 * backward-compatibility is still kept
 */
const ReferenceField = props => {
    const { source, emptyText } = props, rest = __rest(props, ["source", "emptyText"]);
    const record = (0, core_1.useRecordContext)(props);
    const isReferenceDeclared = (0, react_redux_1.useSelector)(state => typeof state.admin.resources[props.reference] !== 'undefined');
    if (!isReferenceDeclared) {
        throw new Error(`You must declare a <Resource name="${props.reference}"> in order to use a <ReferenceField reference="${props.reference}">`);
    }
    return (0, get_1.default)(record, source) == null ? (emptyText ? ((0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ component: "span", variant: "body2" }, { children: emptyText }), void 0)) : null) : ((0, jsx_runtime_1.jsx)(exports.NonEmptyReferenceField, Object.assign({}, rest, { record: record, source: source }), void 0));
};
ReferenceField.propTypes = {
    addLabel: prop_types_1.default.bool,
    basePath: prop_types_1.default.string,
    children: prop_types_1.default.element.isRequired,
    className: prop_types_1.default.string,
    cellClassName: prop_types_1.default.string,
    headerClassName: prop_types_1.default.string,
    label: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.element]),
    record: prop_types_1.default.any,
    reference: prop_types_1.default.string.isRequired,
    resource: prop_types_1.default.string,
    sortBy: prop_types_1.default.string,
    sortByOrder: types_1.fieldPropTypes.sortByOrder,
    source: prop_types_1.default.string.isRequired,
    translateChoice: prop_types_1.default.oneOfType([prop_types_1.default.func, prop_types_1.default.bool]),
    linkType: prop_types_1.default.oneOfType([
        prop_types_1.default.string,
        prop_types_1.default.bool,
        prop_types_1.default.func,
    ]),
    link: prop_types_1.default.oneOfType([
        prop_types_1.default.string,
        prop_types_1.default.bool,
        prop_types_1.default.func,
    ]).isRequired,
};
ReferenceField.defaultProps = {
    addLabel: true,
    link: 'edit',
};
/**
 * This intermediate component is made necessary by the useReference hook,
 * which cannot be called conditionally when get(record, source) is empty.
 */
const NonEmptyReferenceField = (_a) => {
    var { children, record, source } = _a, props = __rest(_a, ["children", "record", "source"]);
    if (React.Children.count(children) !== 1) {
        throw new Error('<ReferenceField> only accepts a single child');
    }
    const { basePath, resource, reference } = props;
    const resourceLinkPath = (0, core_1.getResourceLinkPath)(Object.assign(Object.assign({}, props), { resource,
        record,
        source,
        basePath }));
    return ((0, jsx_runtime_1.jsx)(core_1.ResourceContextProvider, Object.assign({ value: reference }, { children: (0, jsx_runtime_1.jsx)(PureReferenceFieldView, Object.assign({}, props, (0, core_1.useReference)({
            reference,
            id: (0, get_1.default)(record, source),
        }), { resourceLinkPath: resourceLinkPath }, { children: children }), void 0) }), void 0));
};
exports.NonEmptyReferenceField = NonEmptyReferenceField;
// useful to prevent click bubbling in a datagrid with rowClick
const stopPropagation = e => e.stopPropagation();
const ReferenceFieldView = props => {
    const { basePath, children, className, error, loaded, loading, record, reference, referenceRecord, refetch, resource, resourceLinkPath, source, translateChoice = false } = props, rest = __rest(props, ["basePath", "children", "className", "error", "loaded", "loading", "record", "reference", "referenceRecord", "refetch", "resource", "resourceLinkPath", "source", "translateChoice"]);
    if (error) {
        return (
        /* eslint-disable jsx-a11y/role-supports-aria-props */
        (0, jsx_runtime_1.jsx)(Error_1.default, { "aria-errormessage": error.message ? error.message : error, role: "presentation", color: "error", fontSize: "small" }, void 0)
        /* eslint-enable */
        );
    }
    if (!loaded) {
        return (0, jsx_runtime_1.jsx)(LinearProgress_1.default, {}, void 0);
    }
    if (!referenceRecord) {
        return null;
    }
    if (resourceLinkPath) {
        return ((0, jsx_runtime_1.jsx)(Root, { children: (0, jsx_runtime_1.jsx)(core_1.RecordContextProvider, Object.assign({ value: referenceRecord }, { children: (0, jsx_runtime_1.jsx)(Link_1.default, Object.assign({ to: resourceLinkPath, className: className, onClick: stopPropagation }, { children: (0, react_1.cloneElement)(react_1.Children.only(children), Object.assign({ className: (0, classnames_1.default)(children.props.className, classes.link // force color override for Typography components
                        ), record: referenceRecord, refetch, resource: reference, basePath,
                        translateChoice }, (0, sanitizeFieldRestProps_1.default)(rest))) }), void 0) }), void 0) }, void 0));
    }
    return ((0, jsx_runtime_1.jsx)(core_1.RecordContextProvider, Object.assign({ value: referenceRecord }, { children: (0, react_1.cloneElement)(react_1.Children.only(children), Object.assign({ record: referenceRecord, resource: reference, basePath,
            translateChoice }, (0, sanitizeFieldRestProps_1.default)(rest))) }), void 0));
};
exports.ReferenceFieldView = ReferenceFieldView;
exports.ReferenceFieldView.propTypes = {
    basePath: prop_types_1.default.string,
    children: prop_types_1.default.element,
    className: prop_types_1.default.string,
    loading: prop_types_1.default.bool,
    record: prop_types_1.default.any,
    reference: prop_types_1.default.string,
    referenceRecord: prop_types_1.default.any,
    resource: prop_types_1.default.string,
    resourceLinkPath: prop_types_1.default.oneOfType([
        prop_types_1.default.string,
        prop_types_1.default.oneOf([false]),
    ]),
    source: prop_types_1.default.string,
    translateChoice: prop_types_1.default.oneOfType([prop_types_1.default.func, prop_types_1.default.bool]),
};
const PureReferenceFieldView = (0, react_1.memo)(exports.ReferenceFieldView);
exports.default = ReferenceField;
