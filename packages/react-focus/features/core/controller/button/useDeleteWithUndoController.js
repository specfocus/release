"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const dataProvider_1 = require("../../dataProvider");
const actions_1 = require("../../actions");
const sideEffect_1 = require("../../sideEffect");
const __1 = require("../..");
/**
 * Prepare callback for a Delete button with undo support
 *
 * @example
 *
 * import React from 'react';
 * import ActionDelete from '@mui/icons-material/Delete';
 * import { Button, useDeleteWithUndoController } from '../app';
 *
 * const DeleteButton = ({
 *     resource,
 *     record,
 *     basePath,
 *     redirect,
 *     onClick,
 *     ...rest
 * }) => {
 *     const { loading, handleDelete } = useDeleteWithUndoController({
 *         resource,
 *         record,
 *         basePath,
 *         redirect,
 *         onClick,
 *     });
 *
 *     return (
 *         <Button
 *             onClick={handleDelete}
 *             disabled={loading}
 *             label="ra.action.delete"
 *             {...rest}
 *         >
 *             <ActionDelete />
 *         </Button>
 *     );
 * };
 */
const useDeleteWithUndoController = (props) => {
    const { record, basePath, redirect: redirectTo = 'list', onClick, onSuccess, onFailure, } = props;
    const resource = (0, __1.useResourceContext)(props);
    const notify = (0, sideEffect_1.useNotify)();
    const redirect = (0, sideEffect_1.useRedirect)();
    const refresh = (0, sideEffect_1.useRefresh)();
    const [deleteOne, { loading }] = (0, dataProvider_1.useDelete)(resource, null, null, {
        action: actions_1.CRUD_DELETE,
        onSuccess: onSuccess !== undefined
            ? onSuccess
            : () => {
                notify('ra.notification.deleted', 'info', { smart_count: 1 }, true);
                redirect(redirectTo, basePath || `/${resource}`);
                refresh();
            },
        onFailure: onFailure !== undefined
            ? onFailure
            : error => {
                notify(typeof error === 'string'
                    ? error
                    : error.message || 'ra.notification.http_error', 'warning', {
                    _: typeof error === 'string'
                        ? error
                        : error && error.message
                            ? error.message
                            : undefined,
                });
                refresh();
            },
        mutationMode: 'undoable',
    });
    const handleDelete = (0, react_1.useCallback)(event => {
        event.stopPropagation();
        deleteOne({
            payload: { id: record.id, previousData: record },
        });
        if (typeof onClick === 'function') {
            onClick(event);
        }
    }, [deleteOne, onClick, record]);
    return { loading, handleDelete };
};
exports.default = useDeleteWithUndoController;
