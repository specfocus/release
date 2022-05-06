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
const prop_types_1 = __importDefault(require("prop-types"));
const BulkUpdateWithConfirmButton_1 = __importDefault(require("./BulkUpdateWithConfirmButton"));
const BulkUpdateWithUndoButton_1 = __importDefault(require("./BulkUpdateWithUndoButton"));
/**
 * Updates the selected rows.
 *
 * To be used inside the <List bulkActionButtons> prop (where it's enabled by default).
 *
 * @example // basic usage
 * import * as React from 'react';
 * import { Fragment } from 'react';
 * import { BulkUpdateButton, BulkExportButton } from '../../app';
 *
 * const PostBulkActionButtons = ({ basePath }) => (
 *     <Fragment>
 *         <BulkExportButton />
 *         <BulkUpdateButton label="Reset Views" data={{ views: 0 }} basePath={basePath} />
 *     </Fragment>
 * );
 *
 * export const PostList = (props) => (
 *     <List {...props} bulkActionButtons={<PostBulkActionButtons />}>
 *         ...
 *     </List>
 * );
 */
const BulkUpdateButton = (props) => {
    const { mutationMode } = props, rest = __rest(props, ["mutationMode"]);
    return mutationMode === 'undoable' ? ((0, jsx_runtime_1.jsx)(BulkUpdateWithUndoButton_1.default, Object.assign({}, rest), void 0)) : ((0, jsx_runtime_1.jsx)(BulkUpdateWithConfirmButton_1.default, Object.assign({ mutationMode: mutationMode }, rest), void 0));
};
BulkUpdateButton.propTypes = {
    basePath: prop_types_1.default.string,
    label: prop_types_1.default.string,
    resource: prop_types_1.default.string,
    selectedIds: prop_types_1.default.arrayOf(prop_types_1.default.any),
    mutationMode: prop_types_1.default.oneOf(['pessimistic', 'optimistic', 'undoable']),
    icon: prop_types_1.default.element,
};
BulkUpdateButton.defaultProps = {
    mutationMode: 'undoable',
    data: [],
};
exports.default = BulkUpdateButton;
