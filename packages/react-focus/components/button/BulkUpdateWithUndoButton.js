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
const styles_1 = require("@mui/material/styles");
const prop_types_1 = __importDefault(require("prop-types"));
const Update_1 = __importDefault(require("@mui/icons-material/Update"));
const styles_2 = require("@mui/material/styles");
const core_1 = require("../../features/core");
const Button_1 = __importDefault(require("./Button"));
const PREFIX = 'RaBulkUpdateWithUndoButton';
const classes = {
    updateButton: `${PREFIX}-updateButton`,
};
const StyledButton = (0, styles_1.styled)(Button_1.default)(({ theme }) => ({
    [`&.${classes.updateButton}`]: {
        color: theme.palette.error.main,
        '&:hover': {
            backgroundColor: (0, styles_2.alpha)(theme.palette.error.main, 0.12),
            // Reset on mouse devices
            '@media (hover: none)': {
                backgroundColor: 'transparent',
            },
        },
    },
}));
const BulkUpdateWithUndoButton = (props) => {
    const { selectedIds } = (0, core_1.useListContext)(props);
    const notify = (0, core_1.useNotify)();
    const unselectAll = (0, core_1.useUnselectAll)();
    const refresh = (0, core_1.useRefresh)();
    const resource = (0, core_1.useResourceContext)(props);
    const { basePath, classes: classesOverride, data, label = 'ra.action.update', icon = defaultIcon, onClick, onSuccess = () => {
        notify('ra.notification.updated', 'info', { smart_count: selectedIds.length }, true);
        unselectAll(resource);
        refresh();
    }, onFailure = error => {
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
    } } = props, rest = __rest(props, ["basePath", "classes", "data", "label", "icon", "onClick", "onSuccess", "onFailure"]);
    const [updateMany, { loading }] = (0, core_1.useUpdateMany)(resource, selectedIds, data, {
        action: core_1.CRUD_UPDATE_MANY,
        onSuccess,
        onFailure,
        undoable: true,
    });
    const handleClick = e => {
        updateMany();
        if (typeof onClick === 'function') {
            onClick(e);
        }
    };
    return ((0, jsx_runtime_1.jsx)(StyledButton, Object.assign({ onClick: handleClick, label: label, className: classes.updateButton, disabled: loading }, sanitizeRestProps(rest), { children: icon }), void 0));
};
const defaultIcon = (0, jsx_runtime_1.jsx)(Update_1.default, {}, void 0);
const sanitizeRestProps = (_a) => {
    var { basePath, classes, filterValues, label, selectedIds, onSuccess, onFailure } = _a, rest = __rest(_a, ["basePath", "classes", "filterValues", "label", "selectedIds", "onSuccess", "onFailure"]);
    return rest;
};
BulkUpdateWithUndoButton.propTypes = {
    basePath: prop_types_1.default.string,
    classes: prop_types_1.default.object,
    label: prop_types_1.default.string,
    resource: prop_types_1.default.string,
    selectedIds: prop_types_1.default.arrayOf(prop_types_1.default.any),
    icon: prop_types_1.default.element,
    data: prop_types_1.default.any.isRequired,
};
exports.default = BulkUpdateWithUndoButton;
