"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const ExpandMore_1 = __importDefault(require("@mui/icons-material/ExpandMore"));
const material_1 = require("@mui/material");
const classnames_1 = __importDefault(require("classnames"));
const prop_types_1 = __importDefault(require("prop-types"));
const react_1 = require("react");
const core_1 = require("../../../features/core");
const Placeholder_1 = __importDefault(require("../Placeholder"));
const useDatagridStyles_1 = require("./useDatagridStyles");
const times = (nbChildren, fn) => Array.from({ length: nbChildren }, (_, key) => fn(key));
const DatagridLoading = ({ className, expand, hasBulkActions, nbChildren, nbFakeLines = 5, size, }) => {
    const oneSecondHasPassed = (0, core_1.useTimeout)(1000);
    return oneSecondHasPassed ? ((0, jsx_runtime_1.jsxs)(useDatagridStyles_1.StyledTable, Object.assign({ className: (0, classnames_1.default)(useDatagridStyles_1.DatagridClasses.table, className), size: size }, { children: [(0, jsx_runtime_1.jsx)(material_1.TableHead, { children: (0, jsx_runtime_1.jsxs)(material_1.TableRow, Object.assign({ className: useDatagridStyles_1.DatagridClasses.row }, { children: [expand && ((0, jsx_runtime_1.jsx)(material_1.TableCell, { padding: "none", className: useDatagridStyles_1.DatagridClasses.expandHeader }, void 0)), hasBulkActions && ((0, jsx_runtime_1.jsx)(material_1.TableCell, Object.assign({ padding: "checkbox", className: useDatagridStyles_1.DatagridClasses.expandIconCell }, { children: (0, jsx_runtime_1.jsx)(material_1.Checkbox, { className: "select-all", color: "primary", checked: false }, void 0) }), void 0)), times(nbChildren, key => ((0, jsx_runtime_1.jsx)(material_1.TableCell, Object.assign({ variant: "head", className: useDatagridStyles_1.DatagridClasses.headerCell }, { children: (0, jsx_runtime_1.jsx)(Placeholder_1.default, {}, void 0) }), key)))] }), void 0) }, void 0), (0, jsx_runtime_1.jsx)(material_1.TableBody, { children: times(nbFakeLines, key1 => ((0, jsx_runtime_1.jsxs)(material_1.TableRow, Object.assign({ style: { opacity: 1 / (key1 + 1) } }, { children: [expand && ((0, jsx_runtime_1.jsx)(material_1.TableCell, Object.assign({ padding: "none", className: useDatagridStyles_1.DatagridClasses.expandIconCell }, { children: (0, jsx_runtime_1.jsx)(material_1.IconButton, Object.assign({ className: useDatagridStyles_1.DatagridClasses.expandIcon, component: "div", "aria-hidden": "true", size: "large" }, { children: (0, jsx_runtime_1.jsx)(ExpandMore_1.default, {}, void 0) }), void 0) }), void 0)), hasBulkActions && ((0, jsx_runtime_1.jsx)(material_1.TableCell, Object.assign({ padding: "checkbox", className: useDatagridStyles_1.DatagridClasses.expandIconCell }, { children: (0, jsx_runtime_1.jsx)(material_1.Checkbox, { className: "select-all", color: "primary", checked: false }, void 0) }), void 0)), times(nbChildren, key2 => ((0, jsx_runtime_1.jsx)(material_1.TableCell, Object.assign({ className: useDatagridStyles_1.DatagridClasses.rowCell }, { children: (0, jsx_runtime_1.jsx)(Placeholder_1.default, {}, void 0) }), key2)))] }), key1))) }, void 0)] }), void 0)) : null;
};
DatagridLoading.propTypes = {
    className: prop_types_1.default.string,
    expand: prop_types_1.default.oneOfType([prop_types_1.default.element, prop_types_1.default.elementType]),
    hasBulkActions: prop_types_1.default.bool,
    nbChildren: prop_types_1.default.number,
    nbFakeLines: prop_types_1.default.number,
    size: prop_types_1.default.oneOf(['small', 'medium']),
};
exports.default = (0, react_1.memo)(DatagridLoading);
