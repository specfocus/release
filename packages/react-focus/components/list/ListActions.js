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
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const prop_types_1 = __importDefault(require("prop-types"));
const core_1 = require("../../features/core");
const TopToolbar_1 = __importDefault(require("../layout/TopToolbar"));
const button_1 = require("../button");
const FilterContext_1 = require("./FilterContext");
const FilterButton_1 = __importDefault(require("./filter/FilterButton"));
/**
 * Action Toolbar for the List view
 *
 * Internal component. If you want to add or remove actions for a List view,
 * write your own ListActions Component. Then, in the <List> component,
 * use it in the `actions` prop to pass a custom component.
 *
 * @example
 *     import { cloneElement } from 'react';
 *     import Button from '@mui/material/Button';
 *     import { TopToolbar, List, CreateButton, ExportButton } from '../../app';
 *
 *     const PostListActions = ({ basePath, filters }) => (
 *         <TopToolbar>
 *             { cloneElement(filters, { context: 'button' }) }
 *             <CreateButton/>
 *             <ExportButton/>
 *             // Add your custom actions here //
 *             <Button onClick={customAction}>Custom Action</Button>
 *         </TopToolbar>
 *     );
 *
 *     export const PostList = (props) => (
 *         <List actions={<PostListActions />} {...props}>
 *             ...
 *         </List>
 *     );
 */
const ListActions = (props) => {
    const { className, exporter, filters: filtersProp } = props, rest = __rest(props, ["className", "exporter", "filters"]);
    const { currentSort, displayedFilters, filterValues, basePath, selectedIds, showFilter, total, } = (0, core_1.useListContext)(props);
    const resource = (0, core_1.useResourceContext)(rest);
    const { hasCreate } = (0, core_1.useResourceDefinition)(rest);
    const filters = (0, react_1.useContext)(FilterContext_1.FilterContext) || filtersProp;
    return (0, react_1.useMemo)(() => ((0, jsx_runtime_1.jsxs)(TopToolbar_1.default, Object.assign({ className: className }, (0, core_1.sanitizeListRestProps)(rest), { children: [filtersProp
                ? (0, react_1.cloneElement)(filtersProp, {
                    resource,
                    showFilter,
                    displayedFilters,
                    filterValues,
                    context: 'button',
                })
                : filters && (0, jsx_runtime_1.jsx)(FilterButton_1.default, {}, void 0), hasCreate && (0, jsx_runtime_1.jsx)(button_1.CreateButton, { basePath: basePath }, void 0), exporter !== false && ((0, jsx_runtime_1.jsx)(button_1.ExportButton, { disabled: total === 0, resource: resource, sort: currentSort, filterValues: filterValues }, void 0))] }), void 0)), [resource, displayedFilters, filterValues, selectedIds, filters, total] // eslint-disable-line react-hooks/exhaustive-deps
    );
};
ListActions.propTypes = {
    basePath: prop_types_1.default.string,
    className: prop_types_1.default.string,
    currentSort: prop_types_1.default.any,
    displayedFilters: prop_types_1.default.object,
    exporter: prop_types_1.default.oneOfType([prop_types_1.default.func, prop_types_1.default.bool]),
    filters: prop_types_1.default.element,
    filterValues: prop_types_1.default.object,
    hasCreate: prop_types_1.default.bool,
    resource: prop_types_1.default.string,
    onUnselectItems: prop_types_1.default.func.isRequired,
    selectedIds: prop_types_1.default.arrayOf(prop_types_1.default.any),
    showFilter: prop_types_1.default.func,
    total: prop_types_1.default.number,
};
ListActions.defaultProps = {
    selectedIds: [],
    onUnselectItems: () => null,
};
exports.default = ListActions;
