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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const react_1 = require("react");
const material_1 = require("@mui/material");
const Sort_1 = __importDefault(require("@mui/icons-material/Sort"));
const ArrowDropDown_1 = __importDefault(require("@mui/icons-material/ArrowDropDown"));
const react_redux_1 = require("react-redux");
const core_1 = require("../../features/core");
/**
 * A button allowing to change the sort field and order.
 *
 * To be used inside a ListContext (e.g. inside a <List> or <ReferenceManyField>)
 *
 * Expects one 'fields' prop, containing an array of field strings that shall
 * be used and displayed for sorting.
 *
 * When users clicks on the <SortButton>, they see a dropdown list with the
 * proposed sorting fields. Once they click on one of these fields, the related
 * list refreshes, re-sorted.
 *
 * @example
 *
 * import * as React from 'react';
 * import { TopToolbar, SortButton, CreateButton, ExportButton } from '../../app';
 *
 * const ListActions = props => (
 *     <TopToolbar>
 *         <SortButton fields={['reference', 'sales', 'stock']} />
 *         <CreateButton basePath={props.basePath} />
 *         <ExportButton />
 *     </TopToolbar>
 * );
 */
const SortButton = (props) => {
    const { fields, label = 'ra.sort.sort_by', icon = defaultIcon } = props;
    const { resource, currentSort, setSort } = (0, core_1.useListSortContext)();
    const translate = (0, core_1.useTranslate)();
    const isXSmall = (0, material_1.useMediaQuery)((theme) => theme.breakpoints.down('sm'));
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleChangeSort = (event) => {
        const field = event.currentTarget.dataset.sort;
        setSort(field, field === currentSort.field
            ? inverseOrder(currentSort.order)
            : 'ASC');
        setAnchorEl(null);
    };
    const buttonLabel = translate(label, {
        field: translate(...(0, core_1.getFieldLabelTranslationArgs)({
            resource,
            source: currentSort.field,
        })),
        order: translate(`ra.sort.${currentSort.order}`),
        _: label,
    });
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [isXSmall ? ((0, jsx_runtime_1.jsx)(material_1.Tooltip, Object.assign({ title: buttonLabel }, { children: (0, jsx_runtime_1.jsx)(material_1.IconButton, Object.assign({ "aria-label": buttonLabel, color: "primary", onClick: handleClick, size: "large" }, { children: icon }), void 0) }), void 0)) : ((0, jsx_runtime_1.jsx)(material_1.Button, Object.assign({ "aria-controls": "simple-menu", "aria-haspopup": "true", color: "primary", onClick: handleClick, startIcon: icon, endIcon: (0, jsx_runtime_1.jsx)(ArrowDropDown_1.default, {}, void 0), size: "small" }, { children: buttonLabel }), void 0)), (0, jsx_runtime_1.jsx)(material_1.Menu, Object.assign({ id: "simple-menu", anchorEl: anchorEl, keepMounted: true, open: Boolean(anchorEl), onClose: handleClose }, { children: fields.map(field => ((0, jsx_runtime_1.jsxs)(material_1.MenuItem, Object.assign({ onClick: handleChangeSort, "data-sort": field }, { children: [translate(...(0, core_1.getFieldLabelTranslationArgs)({
                            resource,
                            source: field,
                        })), ' ', translate(`ra.sort.${currentSort.field === field
                            ? inverseOrder(currentSort.order)
                            : 'ASC'}`)] }), field))) }), void 0)] }, void 0));
};
const defaultIcon = (0, jsx_runtime_1.jsx)(Sort_1.default, {}, void 0);
const inverseOrder = (sort) => (sort === 'ASC' ? 'DESC' : 'ASC');
const arePropsEqual = (prevProps, nextProps) => (0, react_redux_1.shallowEqual)(prevProps.fields, nextProps.fields);
exports.default = (0, react_1.memo)(SortButton, arePropsEqual);
