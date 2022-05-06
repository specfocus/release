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
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const react_1 = require("react");
const prop_types_1 = __importDefault(require("prop-types"));
const core_1 = require("../../../features/core");
const material_1 = require("@mui/material");
const classnames_1 = __importDefault(require("classnames"));
const union_1 = __importDefault(require("lodash/union"));
const difference_1 = __importDefault(require("lodash/difference"));
const DatagridHeader_1 = require("./DatagridHeader");
const DatagridLoading_1 = __importDefault(require("./DatagridLoading"));
const DatagridBody_1 = __importStar(require("./DatagridBody"));
const useDatagridStyles_1 = __importDefault(require("./useDatagridStyles"));
const DatagridContextProvider_1 = __importDefault(require("./DatagridContextProvider"));
/**
 * The Datagrid component renders a list of records as a table.
 * It is usually used as a child of the <List> and <ReferenceManyField> components.
 *
 * Props:
 *  - rowStyle
 *
 * @example Display all posts as a datagrid
 * const postRowStyle = (record, index) => ({
 *     backgroundColor: record.nb_views >= 500 ? '#efe' : 'white',
 * });
 * export const PostList = (props) => (
 *     <List {...props}>
 *         <Datagrid rowStyle={postRowStyle}>
 *             <TextField source="id" />
 *             <TextField source="title" />
 *             <TextField source="body" />
 *             <EditButton />
 *         </Datagrid>
 *     </List>
 * );
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
 *
 * @example Usage outside of a <List> or a <ReferenceManyField>.
 *
 * const currentSort = { field: 'published_at', order: 'DESC' };
 *
 * export const MyCustomList = (props) => {
 *     const { ids, data, total, loaded } = useGetList(
 *         'posts',
 *         { page: 1, perPage: 10 },
 *         currentSort
 *     );
 *
 *     return (
 *         <Datagrid
 *             basePath=""
 *             currentSort={currentSort}
 *             data={data}
 *             ids={ids}
 *             selectedIds={[]}
 *             loaded={loaded}
 *             total={total}
 *             setSort={() => {
 *                 console.log('set sort');
 *             }}
 *             onSelect={() => {
 *                 console.log('on select');
 *             }}
 *             onToggleItem={() => {
 *                 console.log('on toggle item');
 *             }}
 *         >
 *             <TextField source="id" />
 *             <TextField source="title" />
 *         </Datagrid>
 *     );
 * }
 */
const Datagrid = React.forwardRef((props, ref) => {
    const classes = (0, useDatagridStyles_1.default)(props);
    const { optimized = false, body = optimized ? DatagridBody_1.PureDatagridBody : DatagridBody_1.default, header = DatagridHeader_1.DatagridHeader, children, classes: classesOverride, className, empty, expand, hasBulkActions = false, hover, isRowSelectable, isRowExpandable, resource, rowClick, rowStyle, size = 'small' } = props, rest = __rest(props, ["optimized", "body", "header", "children", "classes", "className", "empty", "expand", "hasBulkActions", "hover", "isRowSelectable", "isRowExpandable", "resource", "rowClick", "rowStyle", "size"]);
    const { basePath, currentSort, data, ids, loaded, onSelect, onToggleItem, selectedIds, setSort, total, } = (0, core_1.useListContext)(props);
    const version = (0, core_1.useVersion)();
    const contextValue = (0, react_1.useMemo)(() => ({ isRowExpandable }), [
        isRowExpandable,
    ]);
    const lastSelected = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (!selectedIds || selectedIds.length === 0) {
            lastSelected.current = null;
        }
    }, [JSON.stringify(selectedIds)]); // eslint-disable-line react-hooks/exhaustive-deps
    const handleToggleItem = (0, react_1.useCallback)((id, event) => {
        const lastSelectedIndex = ids.indexOf(lastSelected.current);
        lastSelected.current = event.target.checked ? id : null;
        if (event.shiftKey && lastSelectedIndex !== -1) {
            const index = ids.indexOf(id);
            const idsBetweenSelections = ids.slice(Math.min(lastSelectedIndex, index), Math.max(lastSelectedIndex, index) + 1);
            const newSelectedIds = event.target.checked
                ? (0, union_1.default)(selectedIds, idsBetweenSelections)
                : (0, difference_1.default)(selectedIds, idsBetweenSelections);
            onSelect(isRowSelectable
                ? newSelectedIds.filter((id) => isRowSelectable(data[id]))
                : newSelectedIds);
        }
        else {
            onToggleItem(id);
        }
    }, [data, ids, isRowSelectable, onSelect, onToggleItem, selectedIds]);
    /**
     * if loaded is false, the list displays for the first time, and the dataProvider hasn't answered yet
     * if loaded is true, the data for the list has at least been returned once by the dataProvider
     * if loaded is undefined, the Datagrid parent doesn't track loading state (e.g. ReferenceArrayField)
     */
    if (loaded === false) {
        return ((0, jsx_runtime_1.jsx)(DatagridLoading_1.default, { classes: classes, className: className, expand: expand, hasBulkActions: hasBulkActions, nbChildren: React.Children.count(children), size: size }, void 0));
    }
    /**
     * Once loaded, the data for the list may be empty. Instead of
     * displaying the table header with zero data rows,
     * the datagrid displays nothing or a custom empty component.
     */
    if (loaded && (ids.length === 0 || total === 0)) {
        if (empty) {
            return empty;
        }
        return null;
    }
    /**
     * After the initial load, if the data for the list isn't empty,
     * and even if the data is refreshing (e.g. after a filter change),
     * the datagrid displays the current data.
     */
    return ((0, jsx_runtime_1.jsx)(DatagridContextProvider_1.default, Object.assign({ value: contextValue }, { children: (0, jsx_runtime_1.jsxs)(material_1.Table, Object.assign({ ref: ref, className: (0, classnames_1.default)(classes.table, className), size: size }, (0, core_1.sanitizeListRestProps)(rest), { children: [createOrCloneElement(header, {
                    children,
                    classes,
                    className,
                    currentSort,
                    data,
                    hasExpand: !!expand,
                    hasBulkActions,
                    ids,
                    isRowSelectable,
                    onSelect,
                    resource,
                    selectedIds,
                    setSort,
                }, children), createOrCloneElement(body, {
                    basePath,
                    className: classes.tbody,
                    classes,
                    expand,
                    rowClick,
                    data,
                    hasBulkActions,
                    hover,
                    ids,
                    onToggleItem: handleToggleItem,
                    resource,
                    rowStyle,
                    selectedIds,
                    isRowSelectable,
                    version,
                }, children)] }), void 0) }), void 0));
});
const createOrCloneElement = (element, props, children) => (0, react_1.isValidElement)(element)
    ? (0, react_1.cloneElement)(element, props, children)
    : (0, react_1.createElement)(element, props, children);
Datagrid.propTypes = {
    basePath: prop_types_1.default.string,
    // @ts-ignore
    body: prop_types_1.default.oneOfType([prop_types_1.default.element, prop_types_1.default.elementType]),
    children: prop_types_1.default.node.isRequired,
    classes: prop_types_1.default.object,
    className: prop_types_1.default.string,
    currentSort: prop_types_1.default.exact({
        field: prop_types_1.default.string,
        order: prop_types_1.default.string,
    }),
    data: prop_types_1.default.any,
    empty: prop_types_1.default.element,
    // @ts-ignore
    expand: prop_types_1.default.oneOfType([prop_types_1.default.element, prop_types_1.default.elementType]),
    hasBulkActions: prop_types_1.default.bool,
    // @ts-ignore
    header: prop_types_1.default.oneOfType([prop_types_1.default.element, prop_types_1.default.elementType]),
    hover: prop_types_1.default.bool,
    ids: prop_types_1.default.arrayOf(prop_types_1.default.any),
    loading: prop_types_1.default.bool,
    onSelect: prop_types_1.default.func,
    onToggleItem: prop_types_1.default.func,
    resource: prop_types_1.default.string,
    rowClick: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.func]),
    rowStyle: prop_types_1.default.func,
    selectedIds: prop_types_1.default.arrayOf(prop_types_1.default.any),
    setSort: prop_types_1.default.func,
    total: prop_types_1.default.number,
    version: prop_types_1.default.number,
    isRowSelectable: prop_types_1.default.func,
    isRowExpandable: prop_types_1.default.func,
};
Datagrid.displayName = 'Datagrid';
exports.default = Datagrid;
