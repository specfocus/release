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
const prop_types_1 = __importDefault(require("prop-types"));
const TableCell_1 = __importDefault(require("@mui/material/TableCell"));
const classnames_1 = __importDefault(require("classnames"));
const DatagridCell = React.forwardRef((_a, ref) => {
    var { className, field, record, basePath, resource } = _a, rest = __rest(_a, ["className", "field", "record", "basePath", "resource"]);
    return ((0, jsx_runtime_1.jsx)(TableCell_1.default, Object.assign({ className: (0, classnames_1.default)(className, field.props.cellClassName), align: field.props.textAlign, ref: ref }, rest, { children: React.cloneElement(field, {
            record,
            basePath: field.props.basePath || basePath,
            resource,
        }) }), void 0));
});
DatagridCell.propTypes = {
    className: prop_types_1.default.string,
    field: prop_types_1.default.element,
    // @ts-ignore
    record: prop_types_1.default.object,
    basePath: prop_types_1.default.string,
    resource: prop_types_1.default.string,
};
// What? TypeScript loses the displayName if we don't set it explicitly
DatagridCell.displayName = 'DatagridCell';
exports.default = DatagridCell;
