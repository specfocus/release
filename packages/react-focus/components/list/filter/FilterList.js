"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const core_1 = require("../../../features/core");
/**
 * Header and container for a list of filter list items
 *
 * Expects 2 props, and a list of <FilterListItem> as children:
 *
 * - label: The label for this filter section. Will be translated.
 * - icon: An icon react element
 *
 * @see FilterListItem
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
 */
const FilterList = (props) => {
    const { label, icon, children } = props;
    const translate = (0, core_1.useTranslate)();
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(material_1.Box, Object.assign({ mt: 2, display: "flex", alignItems: "center" }, { children: [(0, jsx_runtime_1.jsx)(material_1.Box, Object.assign({ mr: 1 }, { children: icon }), void 0), (0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ variant: "overline" }, { children: translate(label) }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)(material_1.List, Object.assign({ dense: true, disablePadding: true }, { children: children }), void 0)] }, void 0));
};
exports.default = FilterList;
