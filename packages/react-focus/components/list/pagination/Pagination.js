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
const material_1 = require("@mui/material");
const prop_types_1 = __importDefault(require("prop-types"));
const React = __importStar(require("react"));
const react_1 = require("react");
const core_1 = require("../../../features/core");
const PaginationActions_1 = __importDefault(require("./PaginationActions"));
const PaginationLimit_1 = __importDefault(require("./PaginationLimit"));
const emptyArray = [];
const Pagination = (props) => {
    const { rowsPerPageOptions, actions, limit } = props, rest = __rest(props, ["rowsPerPageOptions", "actions", "limit"]);
    const { loading, page, perPage, total, setPage, setPerPage, } = (0, core_1.useListPaginationContext)(props);
    const translate = (0, core_1.useTranslate)();
    const isSmall = (0, material_1.useMediaQuery)((theme) => theme.breakpoints.down('md'));
    const totalPages = (0, react_1.useMemo)(() => {
        return Math.ceil(total / perPage) || 1;
    }, [perPage, total]);
    /**
     * Warning: material-ui's page is 0-based
     */
    const handlePageChange = (0, react_1.useCallback)((event, page) => {
        event && event.stopPropagation();
        if (page < 0 || page > totalPages - 1) {
            throw new Error(translate('ra.navigation.page_out_of_boundaries', {
                page: page + 1,
            }));
        }
        setPage(page + 1);
    }, [totalPages, setPage, translate]);
    const handlePerPageChange = (0, react_1.useCallback)(event => {
        setPerPage(event.target.value);
    }, [setPerPage]);
    const labelDisplayedRows = (0, react_1.useCallback)(({ from, to, count }) => translate('ra.navigation.page_range_info', {
        offsetBegin: from,
        offsetEnd: to,
        total: count,
    }), [translate]);
    // Avoid rendering TablePagination if "page" value is invalid
    if (total === null || total === 0 || page < 1 || page > totalPages) {
        return loading ? (0, jsx_runtime_1.jsx)(material_1.Toolbar, { variant: "dense" }, void 0) : limit;
    }
    if (isSmall) {
        return ((0, jsx_runtime_1.jsx)(material_1.TablePagination, Object.assign({ count: total, rowsPerPage: perPage, page: page - 1, onPageChange: handlePageChange, rowsPerPageOptions: emptyArray, component: "span", labelDisplayedRows: labelDisplayedRows }, (0, core_1.sanitizeListRestProps)(rest)), void 0));
    }
    return ((0, jsx_runtime_1.jsx)(material_1.TablePagination, Object.assign({ count: total, rowsPerPage: perPage, page: page - 1, onPageChange: handlePageChange, onRowsPerPageChange: handlePerPageChange, ActionsComponent: actions, component: "span", labelRowsPerPage: translate('ra.navigation.page_rows_per_page'), labelDisplayedRows: labelDisplayedRows, rowsPerPageOptions: rowsPerPageOptions }, (0, core_1.sanitizeListRestProps)(rest)), void 0));
};
Pagination.propTypes = {
    actions: core_1.ComponentPropType,
    limit: prop_types_1.default.element,
    rowsPerPageOptions: prop_types_1.default.arrayOf(prop_types_1.default.number),
};
Pagination.defaultProps = {
    actions: PaginationActions_1.default,
    limit: (0, jsx_runtime_1.jsx)(PaginationLimit_1.default, {}, void 0),
    rowsPerPageOptions: [5, 10, 25],
};
exports.default = React.memo(Pagination);
