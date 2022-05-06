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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
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
exports.PureDatagridRow = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const classnames_1 = __importDefault(require("classnames"));
const material_1 = require("@mui/material");
const core_1 = require("../../../features/core");
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const classnames_2 = __importDefault(require("classnames"));
const DatagridCell_1 = __importDefault(require("./DatagridCell"));
const ExpandRowButton_1 = __importDefault(require("./ExpandRowButton"));
const useDatagridStyles_1 = require("./useDatagridStyles");
const useDatagridContext_1 = require("./useDatagridContext");
const computeNbColumns = (expand, children, hasBulkActions) => expand
    ? 1 + // show expand button
        (hasBulkActions ? 1 : 0) + // checkbox column
        react_1.default.Children.toArray(children).filter(child => !!child).length // non-null children
    : 0; // we don't need to compute columns if there is no expand panel;
const DatagridRow = react_1.default.forwardRef((props, ref) => {
    const { basePath, children, className, expand, hasBulkActions, hover, id, onToggleItem, record, rowClick, selected, style, selectable } = props, rest = __rest(props, ["basePath", "children", "className", "expand", "hasBulkActions", "hover", "id", "onToggleItem", "record", "rowClick", "selected", "style", "selectable"]);
    const context = (0, useDatagridContext_1.useDatagridContext)();
    const translate = (0, core_1.useTranslate)();
    const expandable = (!context ||
        !context.isRowExpandable ||
        context.isRowExpandable(record)) &&
        expand;
    const resource = (0, core_1.useResourceContext)(props);
    const [expanded, toggleExpanded] = (0, core_1.useExpanded)(resource, id);
    const [nbColumns, setNbColumns] = (0, react_1.useState)(() => computeNbColumns(expandable, children, hasBulkActions));
    (0, react_1.useEffect)(() => {
        // Fields can be hidden dynamically based on permissions;
        // The expand panel must span over the remaining columns
        // So we must recompute the number of columns to span on
        const newNbColumns = computeNbColumns(expandable, children, hasBulkActions);
        if (newNbColumns !== nbColumns) {
            setNbColumns(newNbColumns);
        }
    }, [expandable, nbColumns, children, hasBulkActions]);
    const navigate = (0, react_router_dom_1.useNavigate)();
    const handleToggleExpand = (0, react_1.useCallback)(event => {
        toggleExpanded();
        event.stopPropagation();
    }, [toggleExpanded]);
    const handleToggleSelection = (0, react_1.useCallback)(event => {
        if (!selectable)
            return;
        onToggleItem(id, event);
        event.stopPropagation();
    }, [id, onToggleItem, selectable]);
    const handleClick = (0, react_1.useCallback)((event) => __awaiter(void 0, void 0, void 0, function* () {
        if (!rowClick)
            return;
        event.persist();
        const effect = typeof rowClick === 'function'
            ? yield rowClick(id, basePath || `/${resource}`, record)
            : rowClick;
        switch (effect) {
            case 'edit':
                navigate((0, core_1.linkToRecord)(basePath || `/${resource}`, id));
                return;
            case 'show':
                navigate((0, core_1.linkToRecord)(basePath || `/${resource}`, id, 'show'));
                return;
            case 'expand':
                handleToggleExpand(event);
                return;
            case 'toggleSelection':
                handleToggleSelection(event);
                return;
            default:
                if (effect)
                    navigate(effect);
                return;
        }
    }), [
        basePath,
        history,
        handleToggleExpand,
        handleToggleSelection,
        id,
        record,
        resource,
        rowClick,
    ]);
    return ((0, jsx_runtime_1.jsxs)(core_1.RecordContextProvider, Object.assign({ value: record }, { children: [(0, jsx_runtime_1.jsxs)(material_1.TableRow, Object.assign({ ref: ref, className: className, style: style, hover: hover, onClick: handleClick }, rest, { children: [expand && ((0, jsx_runtime_1.jsx)(material_1.TableCell, Object.assign({ padding: "none", className: useDatagridStyles_1.DatagridClasses.expandIconCell }, { children: expandable && ((0, jsx_runtime_1.jsx)(ExpandRowButton_1.default, { className: (0, classnames_2.default)(useDatagridStyles_1.DatagridClasses.expandIcon, {
                                [useDatagridStyles_1.DatagridClasses.expanded]: expanded,
                            }), expanded: expanded, onClick: handleToggleExpand, expandContentId: `${id}-expand` }, void 0)) }), void 0)), hasBulkActions && ((0, jsx_runtime_1.jsx)(material_1.TableCell, Object.assign({ padding: "checkbox" }, { children: selectable && ((0, jsx_runtime_1.jsx)(material_1.Checkbox, { "aria-label": translate('ra.action.select_row', {
                                _: 'Select this row',
                            }), color: "primary", className: `select-item ${useDatagridStyles_1.DatagridClasses.checkbox}`, checked: selected, onClick: handleToggleSelection }, void 0)) }), void 0)), react_1.default.Children.map(children, (field, index) => (0, react_1.isValidElement)(field) ? ((0, jsx_runtime_1.jsx)(DatagridCell_1.default, Object.assign({ className: (0, classnames_1.default)(`column-${field.props.source}`, useDatagridStyles_1.DatagridClasses.rowCell), record: record }, { field, basePath, resource }), `${id}-${field.props.source || index}`)) : null)] }), id), expandable && expanded && ((0, jsx_runtime_1.jsx)(material_1.TableRow, Object.assign({ id: `${id}-expand` }, { children: (0, jsx_runtime_1.jsx)(material_1.TableCell, Object.assign({ colSpan: nbColumns }, { children: (0, react_1.isValidElement)(expand)
                        ? (0, react_1.cloneElement)(expand, {
                            // @ts-ignore
                            record,
                            basePath,
                            resource,
                            id: String(id),
                        })
                        : (0, react_1.createElement)(expand, {
                            record,
                            basePath,
                            resource,
                            id: String(id),
                        }) }), void 0) }), `${id}-expand`))] }), void 0));
});
DatagridRow.propTypes = {
    basePath: prop_types_1.default.string,
    children: prop_types_1.default.node,
    className: prop_types_1.default.string,
    // @ts-ignore
    expand: prop_types_1.default.oneOfType([prop_types_1.default.element, prop_types_1.default.elementType]),
    hasBulkActions: prop_types_1.default.bool.isRequired,
    hover: prop_types_1.default.bool,
    id: prop_types_1.default.any,
    onToggleItem: prop_types_1.default.func,
    // @ts-ignore
    record: prop_types_1.default.object,
    resource: prop_types_1.default.string,
    // @ts-ignore
    rowClick: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.func]),
    selected: prop_types_1.default.bool,
    style: prop_types_1.default.object,
    selectable: prop_types_1.default.bool,
};
DatagridRow.defaultProps = {
    hasBulkActions: false,
    hover: true,
    selected: false,
    selectable: true,
};
const areEqual = (prevProps, nextProps) => {
    const { children: _1, expand: _2 } = prevProps, prevPropsWithoutChildren = __rest(prevProps, ["children", "expand"]);
    const { children: _3, expand: _4 } = nextProps, nextPropsWithoutChildren = __rest(nextProps, ["children", "expand"]);
    return (0, react_redux_1.shallowEqual)(prevPropsWithoutChildren, nextPropsWithoutChildren);
};
exports.PureDatagridRow = (0, react_1.memo)(DatagridRow, areEqual);
exports.PureDatagridRow.displayName = 'PureDatagridRow';
exports.default = DatagridRow;
