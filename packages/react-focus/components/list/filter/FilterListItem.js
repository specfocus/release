"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const CancelOutlined_1 = __importDefault(require("@mui/icons-material/CancelOutlined"));
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const matches_1 = __importDefault(require("lodash/matches"));
const pickBy_1 = __importDefault(require("lodash/pickBy"));
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const core_1 = require("../../../features/core");
const PREFIX = 'FilterListItem';
const classes = {
    listItem: `${PREFIX}-listItem`,
    listItemText: `${PREFIX}-listItemText`,
};
const StyledListItem = (0, styles_1.styled)(material_1.ListItem)(({ theme }) => ({
    [`&.${classes.listItem}`]: {
        paddingLeft: '2em',
    },
    [`& .${classes.listItemText}`]: {
        margin: 0,
    },
}));
/**
 * Button to enable/disable a list filter.
 *
 * Expects 2 props:
 *
 * - label: The text (or React element) to be displayed for this item.
 *   If it's a string, the component will translate it.
 * - value: An object to be merged into the filter value when enabling the filter
 *   (e.g. { is_published: true, published_at_gte: '2020-07-08' })
 *
 * @example
 *
 * import * as React from 'react';
 * import { Card, CardContent } from '@mui/material';
 * import MailIcon from '@mui/icons-material/MailOutline';
 * import { FilterList, FilterListItem } from '../../app';
 *
 * const FilterSidebar = () => (
 *     <Card>
 *         <CardContent>
 *             <FilterList
 *                 label="Subscribed to newsletter"
 *                 icon={<MailIcon />}
 *             >
 *                 <FilterListItem
 *                     label="Yes"
 *                     value={{ has_newsletter: true }}
 *                  />
 *                 <FilterListItem
 *                     label="No"
 *                     value={{ has_newsletter: false }}
 *                  />
 *             </FilterList>
 *         </CardContent>
 *     </Card>
 * );
 *
 * @example // The value prop can contain multiple keys
 *
 * import * as React from 'react';
 * import {
 *     endOfYesterday,
 *     startOfWeek,
 *     subWeeks,
 *     startOfMonth,
 *     subMonths,
 * } from 'date-fns';
 * import { Card, CardContent } from '@mui/material';
 * import AccessTimeIcon from '@mui/icons-material/AccessTime';
 * import { FilterList, FilterListItem } from '../../app';
 *
 * const FilterSidebar = () => (
 *     <Card>
 *         <CardContent>
 *             <FilterList
 *                 label="Last visited"
 *                 icon={<AccessTimeIcon />}
 *             >
 *                 <FilterListItem
 *                     label="Today"
 *                     value={{
 *                         last_seen_gte: endOfYesterday().toISOString(),
 *                         last_seen_lte: undefined,
 *                     }}
 *                 />
 *                 <FilterListItem
 *                     label="This week"
 *                     value={{
 *                         last_seen_gte: startOfWeek(
 *                             new Date()
 *                         ).toISOString(),
 *                         last_seen_lte: undefined,
 *                     }}
 *                 />
 *                 <FilterListItem
 *                     label="Last week"
 *                     value={{
 *                         last_seen_gte: subWeeks(
 *                             startOfWeek(new Date()),
 *                             1
 *                         ).toISOString(),
 *                         last_seen_lte: startOfWeek(
 *                             new Date()
 *                         ).toISOString(),
 *                     }}
 *                 />
 *                 <FilterListItem
 *                     label="This month"
 *                     value={{
 *                         last_seen_gte: startOfMonth(
 *                             new Date()
 *                         ).toISOString(),
 *                         last_seen_lte: undefined,
 *                     }}
 *                 />
 *                 <FilterListItem
 *                     label="Last month"
 *                     value={{
 *                         last_seen_gte: subMonths(
 *                             startOfMonth(new Date()),
 *                             1
 *                         ).toISOString(),
 *                         last_seen_lte: startOfMonth(
 *                             new Date()
 *                         ).toISOString(),
 *                     }}
 *                 />
 *                 <FilterListItem
 *                     label="Earlier"
 *                     value={{
 *                         last_seen_gte: undefined,
 *                         last_seen_lte: subMonths(
 *                             startOfMonth(new Date()),
 *                             1
 *                         ).toISOString(),
 *                     }}
 *                 />
 *             </FilterList>
 *         </CardContent>
 *     </Card>
 * );
 */
const FilterListItem = (props) => {
    const { label, value } = props;
    const { filterValues, setFilters } = (0, core_1.useListFilterContext)();
    const translate = (0, core_1.useTranslate)();
    const isSelected = (0, matches_1.default)((0, pickBy_1.default)(value, val => typeof val !== 'undefined'))(filterValues);
    const addFilter = () => {
        setFilters(Object.assign(Object.assign({}, filterValues), value), null, false);
    };
    const removeFilter = () => {
        const keysToRemove = Object.keys(value);
        const filters = Object.keys(filterValues).reduce((acc, key) => keysToRemove.includes(key)
            ? acc
            : Object.assign(Object.assign({}, acc), { [key]: filterValues[key] }), {});
        setFilters(filters, null, false);
    };
    const toggleFilter = () => (isSelected ? removeFilter() : addFilter());
    return ((0, jsx_runtime_1.jsx)(StyledListItem, Object.assign({ onClick: toggleFilter, selected: isSelected, className: classes.listItem }, { children: (0, jsx_runtime_1.jsxs)(material_1.ListItemButton, { children: [(0, jsx_runtime_1.jsx)(material_1.ListItemText, { primary: (0, react_1.isValidElement)(label)
                        ? label
                        : translate(label, { _: label }), className: classes.listItemText, "data-selected": isSelected ? 'true' : 'false' }, void 0), isSelected && ((0, jsx_runtime_1.jsx)(material_1.ListItemSecondaryAction, { children: (0, jsx_runtime_1.jsx)(material_1.IconButton, Object.assign({ size: "small", onClick: toggleFilter }, { children: (0, jsx_runtime_1.jsx)(CancelOutlined_1.default, {}, void 0) }), void 0) }, void 0))] }, void 0) }), void 0));
};
const arePropsEqual = (prevProps, nextProps) => prevProps.label === nextProps.label &&
    (0, react_redux_1.shallowEqual)(prevProps.value, nextProps.value);
exports.default = (0, react_1.memo)(FilterListItem, arePropsEqual);
