"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const notificationActions_1 = require("../actions/notificationActions");
/**
 * Hook for Notification Side Effect
 *
 * @example
 *
 * const notify = useNotify();
 * // simple message (info level)
 * notify('Level complete');
 * // specify level
 * notify('A problem occurred', 'warning')
 * // pass arguments to the translation function
 * notify('Deleted %{count} elements', 'info', { smart_count: 23 })
 * // show the action as undoable in the notification
 * notify('Post renamed', 'info', {}, true)
 */
const useNotify = () => {
    const dispatch = (0, react_redux_1.useDispatch)();
    return (0, react_1.useCallback)((message, type = 'info', messageArgs = {}, undoable = false, autoHideDuration) => {
        dispatch((0, notificationActions_1.showNotification)(message, type, {
            messageArgs,
            undoable,
            autoHideDuration,
        }));
    }, [dispatch]);
};
exports.default = useNotify;
