"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatagridHeader = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const classnames_1 = __importDefault(require("classnames"));
const prop_types_1 = __importDefault(require("prop-types"));
const react_1 = require("react");
const core_1 = require("../../../features/core");
const DatagridHeaderCell_1 = __importDefault(require("./DatagridHeaderCell"));
const useDatagridStyles_1 = require("./useDatagridStyles");
/**
 * The default Datagrid Header component.
 *
 * Renders select all checkbox as well as column header buttons used for sorting.
 */
const DatagridHeader = (props) => {
    const { children, className, hasExpand = false, hasBulkActions = false, isRowSelectable, } = props;
    const resource = (0, core_1.useResourceContext)(props);
    const translate = (0, core_1.useTranslate)();
    const { currentSort, data, ids, onSelect, selectedIds, setSort, } = (0, core_1.useListContext)(props);
    const updateSortCallback = (0, react_1.useCallback)(event => {
        event.stopPropagation();
        const newField = event.currentTarget.dataset.field;
        const newOrder = currentSort.field === newField
            ? currentSort.order === 'ASC'
                ? 'DESC'
                : 'ASC'
            : event.currentTarget.dataset.order;
        setSort(newField, newOrder);
    }, [currentSort.field, currentSort.order, setSort]);
    const updateSort = setSort ? updateSortCallback : null;
    const handleSelectAll = (0, react_1.useCallback)(event => {
        if (event.target.checked) {
            const all = ids.concat(selectedIds.filter(id => !ids.includes(id)));
            onSelect(isRowSelectable
                ? all.filter(id => isRowSelectable(data[id]))
                : all);
        }
        else {
            onSelect([]);
        }
    }, [data, ids, onSelect, isRowSelectable, selectedIds]);
    const selectableIds = isRowSelectable
        ? ids.filter(id => isRowSelectable(data[id]))
        : ids;
    return ((0, jsx_runtime_1.jsx)(material_1.TableHead, Object.assign({ className: (0, classnames_1.default)(className, useDatagridStyles_1.DatagridClasses.thead) }, { children: (0, jsx_runtime_1.jsxs)(material_1.TableRow, Object.assign({ className: (0, classnames_1.default)(useDatagridStyles_1.DatagridClasses.row, useDatagridStyles_1.DatagridClasses.headerRow) }, { children: [hasExpand && ((0, jsx_runtime_1.jsx)(material_1.TableCell, { padding: "none", className: (0, classnames_1.default)(useDatagridStyles_1.DatagridClasses.headerCell, useDatagridStyles_1.DatagridClasses.expandHeader) }, void 0)), hasBulkActions && selectedIds && ((0, jsx_runtime_1.jsx)(material_1.TableCell, Object.assign({ padding: "checkbox", className: useDatagridStyles_1.DatagridClasses.headerCell }, { children: (0, jsx_runtime_1.jsx)(material_1.Checkbox, { "aria-label": translate('ra.action.select_all', {
                            _: 'Select all',
                        }), className: "select-all", color: "primary", checked: selectedIds.length > 0 &&
                            selectableIds.length > 0 &&
                            selectableIds.every(id => selectedIds.includes(id)), onChange: handleSelectAll }, void 0) }), void 0)), react_1.Children.map(children, (field, index) => (0, react_1.isValidElement)(field) ? ((0, jsx_runtime_1.jsx)(DatagridHeaderCell_1.default, { className: useDatagridStyles_1.DatagridClasses.headerCell, currentSort: currentSort, field: field, isSorting: currentSort.field ===
                        (field.props.sortBy ||
                            field.props.source), resource: resource, updateSort: updateSort }, field.props.source || index)) : null)] }), void 0) }), void 0));
};
exports.DatagridHeader = DatagridHeader;
exports.DatagridHeader.propTypes = {
    children: prop_types_1.default.node,
    className: prop_types_1.default.string,
    currentSort: prop_types_1.default.exact({
        field: prop_types_1.default.string,
        order: prop_types_1.default.string,
    }),
    data: prop_types_1.default.any,
    hasExpand: prop_types_1.default.bool,
    hasBulkActions: prop_types_1.default.bool,
    ids: prop_types_1.default.arrayOf(prop_types_1.default.any),
    isRowSelectable: prop_types_1.default.func,
    isRowExpandable: prop_types_1.default.func,
    onSelect: prop_types_1.default.func,
    onToggleItem: prop_types_1.default.func,
    resource: prop_types_1.default.string,
    selectedIds: prop_types_1.default.arrayOf(prop_types_1.default.any),
    setSort: prop_types_1.default.func,
};
exports.DatagridHeader.displayName = 'DatagridHeader';
