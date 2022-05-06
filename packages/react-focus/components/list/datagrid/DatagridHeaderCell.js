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
exports.DatagridHeaderCell = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const classnames_1 = __importDefault(require("classnames"));
const prop_types_1 = __importDefault(require("prop-types"));
const react_1 = require("react");
const core_1 = require("../../../features/core");
const PREFIX = 'RaDatagridHeaderCell';
const classes = {
    icon: `${PREFIX}-icon`,
};
const StyledTableCell = (0, styles_1.styled)(material_1.TableCell)(({ theme }) => ({
    [`& .MuiSvgIcon-root`]: {
        display: 'none',
    },
    [`& .Mui-active .MuiSvgIcon-root`]: {
        display: 'inline',
    },
}));
const DatagridHeaderCell = (props) => {
    const { className, field, currentSort, updateSort, isSorting } = props, rest = __rest(props, ["className", "field", "currentSort", "updateSort", "isSorting"]);
    const resource = (0, core_1.useResourceContext)(props);
    const translate = (0, core_1.useTranslate)();
    return ((0, jsx_runtime_1.jsx)(StyledTableCell, Object.assign({ className: (0, classnames_1.default)(className, field.props.headerClassName), align: field.props.textAlign, variant: "head" }, rest, { children: updateSort &&
            field.props.sortable !== false &&
            (field.props.sortBy || field.props.source) ? ((0, jsx_runtime_1.jsx)(material_1.Tooltip, Object.assign({ title: translate('ra.action.sort'), placement: field.props.textAlign === 'right'
                ? 'bottom-end'
                : 'bottom-start', enterDelay: 300 }, { children: (0, jsx_runtime_1.jsx)(material_1.TableSortLabel, Object.assign({ active: currentSort.field ===
                    (field.props.sortBy || field.props.source), direction: currentSort.order === 'ASC' ? 'asc' : 'desc', "data-sort": field.props.sortBy || field.props.source, "data-field": field.props.sortBy || field.props.source, "data-order": field.props.sortByOrder || 'ASC', onClick: updateSort, classes: classes }, { children: (0, jsx_runtime_1.jsx)(core_1.FieldTitle, { label: field.props.label, source: field.props.source, resource: resource }, void 0) }), void 0) }), void 0)) : ((0, jsx_runtime_1.jsx)(core_1.FieldTitle, { label: field.props.label, source: field.props.source, resource: resource }, void 0)) }), void 0));
};
exports.DatagridHeaderCell = DatagridHeaderCell;
exports.DatagridHeaderCell.propTypes = {
    className: prop_types_1.default.string,
    field: prop_types_1.default.element,
    currentSort: prop_types_1.default.shape({
        sort: prop_types_1.default.string,
        order: prop_types_1.default.string,
    }).isRequired,
    isSorting: prop_types_1.default.bool,
    resource: prop_types_1.default.string,
    updateSort: prop_types_1.default.func,
};
exports.default = (0, react_1.memo)(exports.DatagridHeaderCell, (props, nextProps) => props.updateSort === nextProps.updateSort &&
    props.currentSort.field === nextProps.currentSort.field &&
    props.currentSort.order === nextProps.currentSort.order &&
    props.isSorting === nextProps.isSorting &&
    props.resource === nextProps.resource);
