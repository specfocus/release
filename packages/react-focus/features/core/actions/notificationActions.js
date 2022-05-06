"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetNotification = exports.RESET_NOTIFICATION = exports.hideNotification = exports.HIDE_NOTIFICATION = exports.showNotification = exports.SHOW_NOTIFICATION = void 0;
exports.SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';
/**
 * Shows a snackbar/toast notification on the screen
 *
 * @see {@link https://material-ui.com/api/snackbar/|Material ui snackbar component}
 * @see {@link https://material.io/guidelines/components/snackbars-toasts.html|Material ui reference document on snackbar}
 */
const showNotification = (
// A translatable label or text to display on notification
message, 
// The type of the notification
type = 'info', 
// Specify additional parameters of notification
notificationOptions) => ({
    type: exports.SHOW_NOTIFICATION,
    payload: Object.assign(Object.assign({}, notificationOptions), { type,
        message }),
});
exports.showNotification = showNotification;
exports.HIDE_NOTIFICATION = 'HIDE_NOTIFICATION';
const hideNotification = () => ({
    type: exports.HIDE_NOTIFICATION,
});
exports.hideNotification = hideNotification;
exports.RESET_NOTIFICATION = 'RESET_NOTIFICATION';
const resetNotification = () => ({
    type: exports.RESET_NOTIFICATION,
});
exports.resetNotification = resetNotification;
