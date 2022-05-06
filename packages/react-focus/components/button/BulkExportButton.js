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
const GetApp_1 = __importDefault(require("@mui/icons-material/GetApp"));
const core_1 = require("../../features/core");
const Button_1 = __importDefault(require("./Button"));
/**
 * Export the selected rows
 *
 * To be used inside the <List bulkActionButtons> prop.
 *
 * @example // basic usage
 * import * as React from 'react';
 * import { Fragment } from 'react';
 * import { BulkDeleteButton, BulkExportButton } from '../../app';
 *
 * const PostBulkActionButtons = ({ basePath }) => (
 *     <Fragment>
 *         <BulkExportButton />
 *         <BulkDeleteButton basePath={basePath} />
 *     </Fragment>
 * );
 *
 * export const PostList = (props) => (
 *     <List {...props} bulkActionButtons={<PostBulkActionButtons />}>
 *         ...
 *     </List>
 * );
 */
const BulkExportButton = (props) => {
    const { onClick, label = 'ra.action.export', icon = defaultIcon, exporter: customExporter } = props, rest = __rest(props, ["onClick", "label", "icon", "exporter"]);
    const { exporter: exporterFromContext, resource, selectedIds, } = (0, core_1.useListContext)(props);
    const exporter = customExporter || exporterFromContext;
    const dataProvider = (0, core_1.useDataProvider)();
    const notify = (0, core_1.useNotify)();
    const handleClick = (0, react_1.useCallback)(event => {
        exporter &&
            dataProvider
                .getMany(resource, { ids: selectedIds })
                .then(({ data }) => exporter(data, (0, core_1.fetchRelatedRecords)(dataProvider), dataProvider, resource))
                .catch(error => {
                console.error(error);
                notify('ra.notification.http_error', 'warning');
            });
        if (typeof onClick === 'function') {
            onClick(event);
        }
    }, [dataProvider, exporter, notify, onClick, resource, selectedIds]);
    return ((0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({ onClick: handleClick, label: label }, sanitizeRestProps(rest), { children: icon }), void 0));
};
const defaultIcon = (0, jsx_runtime_1.jsx)(GetApp_1.default, {}, void 0);
const sanitizeRestProps = (_a) => {
    var { basePath, filterValues, selectedIds, resource } = _a, rest = __rest(_a, ["basePath", "filterValues", "selectedIds", "resource"]);
    return rest;
};
BulkExportButton.propTypes = {
    basePath: prop_types_1.default.string,
    exporter: prop_types_1.default.func,
    label: prop_types_1.default.string,
    resource: prop_types_1.default.string,
    selectedIds: prop_types_1.default.arrayOf(prop_types_1.default.any),
    icon: prop_types_1.default.element,
};
exports.default = BulkExportButton;
