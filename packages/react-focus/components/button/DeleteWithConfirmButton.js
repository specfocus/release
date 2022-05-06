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
exports.DeleteWithConfirmButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styles_1 = require("@mui/material/styles");
const prop_types_1 = __importDefault(require("prop-types"));
const styles_2 = require("@mui/material/styles");
const Delete_1 = __importDefault(require("@mui/icons-material/Delete"));
const classnames_1 = __importDefault(require("classnames"));
const inflection_1 = __importDefault(require("inflection"));
const core_1 = require("../../features/core");
const Confirm_1 = __importDefault(require("../layout/Confirm"));
const Button_1 = __importDefault(require("./Button"));
const PREFIX = 'RaDeleteWithConfirmButton';
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
const DeleteWithConfirmButton = (props) => {
    const { basePath, classes: classesOverride, className, confirmTitle = 'ra.message.delete_title', confirmContent = 'ra.message.delete_content', icon = defaultIcon, label = 'ra.action.delete', mutationMode, onClick, record, redirect = 'list', onSuccess, onFailure, undoable } = props, rest = __rest(props, ["basePath", "classes", "className", "confirmTitle", "confirmContent", "icon", "label", "mutationMode", "onClick", "record", "redirect", "onSuccess", "onFailure", "undoable"]);
    const translate = (0, core_1.useTranslate)();
    const resource = (0, core_1.useResourceContext)(props);
    const mode = (0, core_1.getMutationMode)(mutationMode, undoable);
    const { open, loading, handleDialogOpen, handleDialogClose, handleDelete, } = (0, core_1.useDeleteWithConfirmController)({
        record,
        redirect,
        basePath,
        mutationMode: mutationMode || mode,
        onClick,
        onSuccess,
        onFailure,
        resource,
    });
    return ((0, jsx_runtime_1.jsxs)(react_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(StyledButton, Object.assign({ onClick: handleDialogOpen, label: label, className: (0, classnames_1.default)('ra-delete-button', classes.deleteButton, className) }, rest, { children: icon }), "button"), (0, jsx_runtime_1.jsx)(Confirm_1.default, { isOpen: open, loading: loading, title: confirmTitle, content: confirmContent, translateOptions: {
                    name: translate(`resources.${resource}.forcedCaseName`, {
                        smart_count: 1,
                        _: inflection_1.default.humanize(translate(`resources.${resource}.name`, {
                            smart_count: 1,
                            _: inflection_1.default.singularize(resource),
                        }), true),
                    }),
                    id: record.id,
                }, onConfirm: handleDelete, onClose: handleDialogClose }, void 0)] }, void 0));
};
exports.DeleteWithConfirmButton = DeleteWithConfirmButton;
const defaultIcon = (0, jsx_runtime_1.jsx)(Delete_1.default, {}, void 0);
exports.DeleteWithConfirmButton.propTypes = {
    basePath: prop_types_1.default.string,
    classes: prop_types_1.default.object,
    className: prop_types_1.default.string,
    confirmTitle: prop_types_1.default.string,
    confirmContent: prop_types_1.default.string,
    label: prop_types_1.default.string,
    mutationMode: prop_types_1.default.oneOf(['pessimistic', 'optimistic', 'undoable']),
    undoable: prop_types_1.default.bool,
    record: prop_types_1.default.any,
    redirect: prop_types_1.default.oneOfType([
        prop_types_1.default.string,
        prop_types_1.default.bool,
        prop_types_1.default.func,
    ]),
    resource: prop_types_1.default.string,
    icon: prop_types_1.default.element,
};
