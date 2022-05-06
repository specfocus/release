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
exports.PureDatagridBody = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const react_1 = require("react");
const prop_types_1 = __importDefault(require("prop-types"));
const material_1 = require("@mui/material");
const classnames_1 = __importDefault(require("classnames"));
const react_redux_1 = require("react-redux");
const useDatagridStyles_1 = require("./useDatagridStyles");
const DatagridRow_1 = __importStar(require("./DatagridRow"));
const DatagridBody = React.forwardRef((_a, ref) => {
    var { basePath, children, className, data, expand, hasBulkActions, hover, ids, onToggleItem, resource, row, rowClick, rowStyle, selectedIds, isRowSelectable } = _a, rest = __rest(_a, ["basePath", "children", "className", "data", "expand", "hasBulkActions", "hover", "ids", "onToggleItem", "resource", "row", "rowClick", "rowStyle", "selectedIds", "isRowSelectable"]);
    return ((0, jsx_runtime_1.jsx)(material_1.TableBody, Object.assign({ ref: ref, className: (0, classnames_1.default)('datagrid-body', className, useDatagridStyles_1.DatagridClasses.tbody) }, rest, { children: ids.map((id, rowIndex) => (0, react_1.cloneElement)(row, {
            basePath,
            className: (0, classnames_1.default)(useDatagridStyles_1.DatagridClasses.row, {
                [useDatagridStyles_1.DatagridClasses.rowEven]: rowIndex % 2 === 0,
                [useDatagridStyles_1.DatagridClasses.rowOdd]: rowIndex % 2 !== 0,
                [useDatagridStyles_1.DatagridClasses.clickableRow]: rowClick,
            }),
            expand,
            hasBulkActions: hasBulkActions && !!selectedIds,
            hover,
            id,
            key: id,
            onToggleItem,
            record: data[id],
            resource,
            rowClick,
            selectable: !isRowSelectable || isRowSelectable(data[id]),
            selected: selectedIds === null || selectedIds === void 0 ? void 0 : selectedIds.includes(id),
            style: rowStyle ? rowStyle(data[id], rowIndex) : null,
        }, children)) }), void 0));
});
DatagridBody.propTypes = {
    basePath: prop_types_1.default.string,
    className: prop_types_1.default.string,
    children: prop_types_1.default.node,
    // @ts-ignore
    data: prop_types_1.default.object.isRequired,
    // @ts-ignore
    expand: prop_types_1.default.oneOfType([prop_types_1.default.element, prop_types_1.default.elementType]),
    hasBulkActions: prop_types_1.default.bool.isRequired,
    hover: prop_types_1.default.bool,
    ids: prop_types_1.default.arrayOf(prop_types_1.default.any).isRequired,
    onToggleItem: prop_types_1.default.func,
    resource: prop_types_1.default.string,
    row: prop_types_1.default.element,
    rowClick: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.func]),
    rowStyle: prop_types_1.default.func,
    selectedIds: prop_types_1.default.arrayOf(prop_types_1.default.any),
    styles: prop_types_1.default.object,
    isRowSelectable: prop_types_1.default.func,
};
DatagridBody.defaultProps = {
    data: {},
    hasBulkActions: false,
    ids: [],
    row: (0, jsx_runtime_1.jsx)(DatagridRow_1.default, {}, void 0),
};
// trick material-ui Table into thinking this is one of the child type it supports
// @ts-ignore
DatagridBody.muiName = 'TableBody';
const areEqual = (prevProps, nextProps) => {
    const { children: _1, expand: _2, row: _3 } = prevProps, prevPropsWithoutChildren = __rest(prevProps, ["children", "expand", "row"]);
    const { children: _4, expand: _5, row: _6 } = nextProps, nextPropsWithoutChildren = __rest(nextProps, ["children", "expand", "row"]);
    return (0, react_redux_1.shallowEqual)(prevPropsWithoutChildren, nextPropsWithoutChildren);
};
exports.PureDatagridBody = (0, react_1.memo)(DatagridBody, areEqual);
// trick material-ui Table into thinking this is one of the child type it supports
// @ts-ignore
exports.PureDatagridBody.muiName = 'TableBody';
// @ts-ignore
exports.PureDatagridBody.defaultProps = {
    row: (0, jsx_runtime_1.jsx)(DatagridRow_1.PureDatagridRow, {}, void 0),
};
exports.default = DatagridBody;
