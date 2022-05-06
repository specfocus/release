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
exports.DeleteWithUndoButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const prop_types_1 = __importDefault(require("prop-types"));
const styles_2 = require("@mui/material/styles");
const Delete_1 = __importDefault(require("@mui/icons-material/Delete"));
const classnames_1 = __importDefault(require("classnames"));
const core_1 = require("../../features/core");
const Button_1 = __importDefault(require("./Button"));
const PREFIX = 'RaDeleteWithUndoButton';
const classes = {
    deleteButton: `${PREFIX}-deleteButton`,
};
const StyledButton = (0, styles_1.styled)(Button_1.default)(({ theme }) => ({
    [`&.${classes.deleteButton}`]: {
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
const DeleteWithUndoButton = (props) => {
    const { label = 'ra.action.delete', classes: classesOverride, className, icon = defaultIcon, onClick, record, basePath, redirect = 'list', onSuccess, onFailure } = props, rest = __rest(props, ["label", "classes", "className", "icon", "onClick", "record", "basePath", "redirect", "onSuccess", "onFailure"]);
    const resource = (0, core_1.useResourceContext)(props);
    const { loading, handleDelete } = (0, core_1.useDeleteWithUndoController)({
        record,
        resource,
        basePath,
        redirect,
        onClick,
        onSuccess,
        onFailure,
    });
    return ((0, jsx_runtime_1.jsx)(StyledButton, Object.assign({ onClick: handleDelete, disabled: loading, label: label, className: (0, classnames_1.default)('ra-delete-button', classes.deleteButton, className) }, rest, { children: icon }), "button"));
};
exports.DeleteWithUndoButton = DeleteWithUndoButton;
const defaultIcon = (0, jsx_runtime_1.jsx)(Delete_1.default, {}, void 0);
exports.DeleteWithUndoButton.propTypes = {
    basePath: prop_types_1.default.string,
    classes: prop_types_1.default.object,
    className: prop_types_1.default.string,
    label: prop_types_1.default.string,
    record: prop_types_1.default.any,
    redirect: prop_types_1.default.oneOfType([
        prop_types_1.default.string,
        prop_types_1.default.bool,
        prop_types_1.default.func,
    ]),
    resource: prop_types_1.default.string,
    icon: prop_types_1.default.element,
};
