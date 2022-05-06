"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const react_1 = require("react");
const prop_types_1 = __importDefault(require("prop-types"));
const core_1 = require("../../features/core");
const material_1 = require("@mui/material");
const AccountCircle_1 = __importDefault(require("@mui/icons-material/AccountCircle"));
const PREFIX = 'RaUserMenu';
const classes = {
    user: `${PREFIX}-user`,
    userButton: `${PREFIX}-userButton`,
    avatar: `${PREFIX}-avatar`,
};
const Root = (0, styles_1.styled)('div')(({ theme }) => ({
    [`&.${classes.user}`]: {},
    [`& .${classes.userButton}`]: {
        textTransform: 'none',
    },
    [`& .${classes.avatar}`]: {
        width: theme.spacing(4),
        height: theme.spacing(4),
    },
}));
const defaultIcon = (0, jsx_runtime_1.jsx)(AccountCircle_1.default, {}, void 0);
const AnchorOrigin = {
    vertical: 'bottom',
    horizontal: 'right',
};
const TransformOrigin = {
    vertical: 'top',
    horizontal: 'right',
};
const UserMenu = (props) => {
    const [anchorEl, setAnchorEl] = (0, react_1.useState)(null);
    const translate = (0, core_1.useTranslate)();
    const { loaded, identity } = (0, core_1.useGetIdentity)();
    const { children, label = 'ra.auth.user_menu', icon = defaultIcon, logout, } = props;
    if (!logout && !children)
        return null;
    const open = Boolean(anchorEl);
    const handleMenu = event => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);
    return ((0, jsx_runtime_1.jsxs)(Root, Object.assign({ className: classes.user }, { children: [loaded && (identity === null || identity === void 0 ? void 0 : identity.fullName) ? ((0, jsx_runtime_1.jsx)(material_1.Button, Object.assign({ "aria-label": label && translate(label, { _: label }), className: classes.userButton, color: "inherit", startIcon: identity.avatar ? ((0, jsx_runtime_1.jsx)(material_1.Avatar, { className: classes.avatar, src: identity.avatar, alt: identity.fullName }, void 0)) : (icon), onClick: handleMenu }, { children: identity.fullName }), void 0)) : ((0, jsx_runtime_1.jsx)(material_1.Tooltip, Object.assign({ title: label && translate(label, { _: label }) }, { children: (0, jsx_runtime_1.jsx)(material_1.IconButton, Object.assign({ "aria-label": label && translate(label, { _: label }), "aria-owns": open ? 'menu-appbar' : null, "aria-haspopup": true, color: "inherit", onClick: handleMenu, size: "large" }, { children: icon }), void 0) }), void 0)), (0, jsx_runtime_1.jsxs)(material_1.Menu, Object.assign({ id: "menu-appbar", disableScrollLock: true, anchorEl: anchorEl, anchorOrigin: AnchorOrigin, transformOrigin: TransformOrigin, open: open, onClose: handleClose }, { children: [react_1.Children.map(children, menuItem => (0, react_1.isValidElement)(menuItem)
                        ? (0, react_1.cloneElement)(menuItem, {
                            onClick: handleClose,
                        })
                        : null), logout] }), void 0)] }), void 0));
};
UserMenu.propTypes = {
    children: prop_types_1.default.node,
    classes: prop_types_1.default.object,
    label: prop_types_1.default.string,
    logout: prop_types_1.default.element,
    icon: prop_types_1.default.node,
};
exports.default = UserMenu;
