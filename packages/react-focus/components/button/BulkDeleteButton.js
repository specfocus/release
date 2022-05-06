"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const prop_types_1 = __importDefault(require("prop-types"));
const BulkDeleteWithConfirmButton_1 = __importDefault(require("./BulkDeleteWithConfirmButton"));
const BulkDeleteWithUndoButton_1 = __importDefault(require("./BulkDeleteWithUndoButton"));
/**
 * Deletes the selected rows.
 *
 * To be used inside the <List bulkActionButtons> prop (where it's enabled by default).
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
const BulkDeleteButton = (props) => props.undoable ? ((0, jsx_runtime_1.jsx)(BulkDeleteWithUndoButton_1.default, Object.assign({}, props), void 0)) : ((0, jsx_runtime_1.jsx)(BulkDeleteWithConfirmButton_1.default, Object.assign({}, props), void 0));
BulkDeleteButton.propTypes = {
    basePath: prop_types_1.default.string,
    label: prop_types_1.default.string,
    resource: prop_types_1.default.string,
    selectedIds: prop_types_1.default.arrayOf(prop_types_1.default.any),
    undoable: prop_types_1.default.bool,
    icon: prop_types_1.default.element,
};
BulkDeleteButton.defaultProps = {
    undoable: true,
};
exports.default = BulkDeleteButton;
