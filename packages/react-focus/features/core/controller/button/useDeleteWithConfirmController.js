"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const dataProvider_1 = require("../../dataProvider");
const actions_1 = require("../../actions");
const sideEffect_1 = require("../../sideEffect");
const __1 = require("../..");
/**
 * Prepare a set of callbacks for a delete button guarded by confirmation dialog
 *
 * @example
 *
 * const DeleteButton = ({
 *     resource,
 *     record,
 *     basePath,
 *     redirect,
 *     onClick,
 *     ...rest
 * }) => {
 *     const {
 *         open,
 *         loading,
 *         handleDialogOpen,
 *         handleDialogClose,
 *         handleDelete,
 *     } = useDeleteWithConfirmController({
 *         resource,
 *         record,
 *         redirect,
 *         basePath,
 *         onClick,
 *     });
 *
 *     return (
 *         <Fragment>
 *             <Button
 *                 onClick={handleDialogOpen}
 *                 label="ra.action.delete"
 *                 {...rest}
 *             >
 *                 {icon}
 *             </Button>
 *             <Confirm
 *                 isOpen={open}
 *                 loading={loading}
 *                 title="ra.message.delete_title"
 *                 content="ra.message.delete_content"
 *                 translateOptions={{
 *                     name: resource,
 *                     id: record.id,
 *                 }}
 *                 onConfirm={handleDelete}
 *                 onClose={handleDialogClose}
 *             />
 *         </Fragment>
 *     );
 * };
 */
const useDeleteWithConfirmController = (props) => {
    const { record, redirect: redirectTo, basePath, mutationMode, onClick, onSuccess, onFailure, } = props;
    const resource = (0, __1.useResourceContext)(props);
    const [open, setOpen] = (0, react_1.useState)(false);
    const notify = (0, sideEffect_1.useNotify)();
    const redirect = (0, sideEffect_1.useRedirect)();
    const refresh = (0, sideEffect_1.useRefresh)();
    const [deleteOne, { loading }] = (0, dataProvider_1.useDelete)(resource, null, null, {
        action: actions_1.CRUD_DELETE,
        onSuccess: response => {
            setOpen(false);
            if (onSuccess === undefined) {
                notify('ra.notification.deleted', 'info', { smart_count: 1 }, mutationMode === 'undoable');
                redirect(redirectTo, basePath || `/${resource}`);
                refresh();
            }
            else {
                onSuccess(response);
            }
        },
        onFailure: error => {
            setOpen(false);
            if (onFailure === undefined) {
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
            }
            else {
                onFailure(error);
            }
        },
        mutationMode,
    });
    const handleDialogOpen = e => {
        setOpen(true);
        e.stopPropagation();
    };
    const handleDialogClose = e => {
        setOpen(false);
        e.stopPropagation();
    };
    const handleDelete = (0, react_1.useCallback)(event => {
        event.stopPropagation();
        deleteOne({
            payload: { id: record.id, previousData: record },
        });
        if (typeof onClick === 'function') {
            onClick(event);
        }
    }, [deleteOne, onClick, record]);
    return { open, loading, handleDialogOpen, handleDialogClose, handleDelete };
};
exports.default = useDeleteWithConfirmController;
