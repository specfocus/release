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
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const classnames_1 = __importDefault(require("classnames"));
const core_1 = require("../../features/core");
const prop_types_1 = __importDefault(require("prop-types"));
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const recoil_1 = require("recoil");
const PREFIX = 'RaNotification';
const classes = {
    success: `${PREFIX}-success`,
    error: `${PREFIX}-error`,
    warning: `${PREFIX}-warning`,
    undo: `${PREFIX}-undo`,
};
const StyledButton = (0, styles_1.styled)(material_1.Button)(({ theme, type }) => ({
    [`& .${classes.success}`]: {
        backgroundColor: theme.palette.success.main,
        color: theme.palette.success.contrastText,
    },
    [`& .${classes.error}`]: {
        backgroundColor: theme.palette.error.dark,
        color: theme.palette.error.contrastText,
    },
    [`& .${classes.warning}`]: {
        backgroundColor: theme.palette.error.light,
        color: theme.palette.error.contrastText,
    },
    [`& .${classes.undo}`]: {
        color: type === 'success'
            ? theme.palette.success.contrastText
            : theme.palette.primary.light,
    },
}));
const Notification = (props) => {
    const { classes: classesOverride, type, className, autoHideDuration } = props, rest = __rest(props, ["classes", "type", "className", "autoHideDuration"]);
    const [open, setOpen] = (0, react_1.useState)(false);
    const notification = (0, recoil_1.useRecoilValue)(core_1.firstNotification);
    const dispatch = (0, react_redux_1.useDispatch)();
    const translate = (0, core_1.useTranslate)();
    (0, react_1.useEffect)(() => {
        setOpen(!!notification);
    }, [notification]);
    const handleRequestClose = (0, react_1.useCallback)(() => {
        setOpen(false);
    }, [setOpen]);
    const handleExited = (0, react_1.useCallback)(() => {
        if (notification && notification.undoable) {
            dispatch((0, core_1.complete)());
            core_1.undoableEventEmitter.emit('end', { isUndo: false });
        }
        dispatch((0, core_1.hideNotification)());
    }, [dispatch, notification]);
    const handleUndo = (0, react_1.useCallback)(() => {
        dispatch((0, core_1.undo)());
        core_1.undoableEventEmitter.emit('end', { isUndo: true });
    }, [dispatch]);
    return ((0, jsx_runtime_1.jsx)(material_1.Snackbar, Object.assign({ open: open, message: notification &&
            notification.message &&
            translate(notification.message, notification.messageArgs), autoHideDuration: (notification && notification.autoHideDuration) ||
            autoHideDuration, disableWindowBlurListener: notification && notification.undoable, TransitionProps: { onExited: handleExited }, onClose: handleRequestClose, ContentProps: {
            className: (0, classnames_1.default)(classes[(notification && notification.type) || type], className),
        }, action: notification && notification.undoable ? ((0, jsx_runtime_1.jsx)(StyledButton, Object.assign({ color: "primary", className: classes.undo, size: "small", onClick: handleUndo }, { children: (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: translate('ra.action.undo') }, void 0) }), void 0)) : null }, rest), void 0));
};
Notification.propTypes = {
    type: prop_types_1.default.string,
};
Notification.defaultProps = {
    type: 'info',
    autoHideDuration: 4000,
};
exports.default = Notification;
