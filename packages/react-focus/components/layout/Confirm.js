"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const react_1 = require("react");
const prop_types_1 = __importDefault(require("prop-types"));
const Dialog_1 = __importDefault(require("@mui/material/Dialog"));
const DialogActions_1 = __importDefault(require("@mui/material/DialogActions"));
const DialogContent_1 = __importDefault(require("@mui/material/DialogContent"));
const DialogContentText_1 = __importDefault(require("@mui/material/DialogContentText"));
const DialogTitle_1 = __importDefault(require("@mui/material/DialogTitle"));
const Button_1 = __importDefault(require("@mui/material/Button"));
const styles_2 = require("@mui/material/styles");
const CheckCircle_1 = __importDefault(require("@mui/icons-material/CheckCircle"));
const ErrorOutline_1 = __importDefault(require("@mui/icons-material/ErrorOutline"));
const classnames_1 = __importDefault(require("classnames"));
const core_1 = require("../../features/core");
const PREFIX = 'RaConfirm';
const classes = {
    confirmPrimary: `${PREFIX}-confirmPrimary`,
    confirmWarning: `${PREFIX}-confirmWarning`,
    iconPaddingStyle: `${PREFIX}-iconPaddingStyle`,
};
const StyledDialog = (0, styles_1.styled)(Dialog_1.default)(({ theme }) => ({
    [`& .${classes.confirmPrimary}`]: {
        color: theme.palette.primary.main,
    },
    [`& .${classes.confirmWarning}`]: {
        color: theme.palette.error.main,
        '&:hover': {
            backgroundColor: (0, styles_2.alpha)(theme.palette.error.main, 0.12),
            // Reset on mouse devices
            '@media (hover: none)': {
                backgroundColor: 'transparent',
            },
        },
    },
    [`& .${classes.iconPaddingStyle}`]: {
        paddingRight: '0.5em',
    },
}));
/**
 * Confirmation dialog
 *
 * @example
 * <Confirm
 *     isOpen={true}
 *     title="Delete Item"
 *     content="Are you sure you want to delete this item?"
 *     confirm="Yes"
 *     confirmColor="primary"
 *     ConfirmIcon=ActionCheck
 *     CancelIcon=AlertError
 *     cancel="Cancel"
 *     onConfirm={() => { // do something }}
 *     onClose={() => { // do something }}
 * />
 */
const Confirm = (props) => {
    const { isOpen, loading, title, content, confirm, cancel, confirmColor, ConfirmIcon, CancelIcon, onClose, onConfirm, translateOptions = {}, } = props;
    const translate = (0, core_1.useTranslate)();
    const handleConfirm = (0, react_1.useCallback)(e => {
        e.stopPropagation();
        onConfirm(e);
    }, [onConfirm]);
    const handleClick = (0, react_1.useCallback)(e => {
        e.stopPropagation();
    }, []);
    return ((0, jsx_runtime_1.jsxs)(StyledDialog, Object.assign({ open: isOpen, onClose: onClose, onClick: handleClick, "aria-labelledby": "alert-dialog-title" }, { children: [(0, jsx_runtime_1.jsx)(DialogTitle_1.default, Object.assign({ id: "alert-dialog-title" }, { children: translate(title, Object.assign({ _: title }, translateOptions)) }), void 0), (0, jsx_runtime_1.jsx)(DialogContent_1.default, { children: typeof content === 'string' ? ((0, jsx_runtime_1.jsx)(DialogContentText_1.default, { children: translate(content, Object.assign({ _: content }, translateOptions)) }, void 0)) : (content) }, void 0), (0, jsx_runtime_1.jsxs)(DialogActions_1.default, { children: [(0, jsx_runtime_1.jsxs)(Button_1.default, Object.assign({ disabled: loading, onClick: onClose }, { children: [(0, jsx_runtime_1.jsx)(CancelIcon, { className: classes.iconPaddingStyle }, void 0), translate(cancel, { _: cancel })] }), void 0), (0, jsx_runtime_1.jsxs)(Button_1.default, Object.assign({ disabled: loading, onClick: handleConfirm, className: (0, classnames_1.default)('ra-confirm', {
                            [classes.confirmWarning]: confirmColor === 'warning',
                            [classes.confirmPrimary]: confirmColor === 'primary',
                        }), autoFocus: true }, { children: [(0, jsx_runtime_1.jsx)(ConfirmIcon, { className: classes.iconPaddingStyle }, void 0), translate(confirm, { _: confirm })] }), void 0)] }, void 0)] }), void 0));
};
Confirm.propTypes = {
    cancel: prop_types_1.default.string,
    confirm: prop_types_1.default.string,
    confirmColor: prop_types_1.default.string,
    ConfirmIcon: prop_types_1.default.elementType,
    CancelIcon: prop_types_1.default.elementType,
    content: prop_types_1.default.node.isRequired,
    isOpen: prop_types_1.default.bool,
    loading: prop_types_1.default.bool,
    onClose: prop_types_1.default.func.isRequired,
    onConfirm: prop_types_1.default.func.isRequired,
    title: prop_types_1.default.string.isRequired,
};
Confirm.defaultProps = {
    cancel: 'ra.action.cancel',
    confirm: 'ra.action.confirm',
    confirmColor: 'primary',
    ConfirmIcon: CheckCircle_1.default,
    CancelIcon: ErrorOutline_1.default,
    isOpen: false,
};
exports.default = Confirm;
