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
const react_1 = require("react");
const prop_types_1 = __importDefault(require("prop-types"));
const material_1 = require("@mui/material");
const core_1 = require("../../features/core");
const SidebarToggleButton_1 = require("./SidebarToggleButton");
const LoadingIndicator_1 = __importDefault(require("./LoadingIndicator"));
const UserMenu_1 = __importDefault(require("./UserMenu"));
const HideOnScroll_1 = __importDefault(require("./HideOnScroll"));
const PREFIX = 'RaAppBar';
const classes = {
    toolbar: `${PREFIX}-toolbar`,
    menuButton: `${PREFIX}-menuButton`,
    menuButtonIconClosed: `${PREFIX}-menuButtonIconClosed`,
    menuButtonIconOpen: `${PREFIX}-menuButtonIconOpen`,
    title: `${PREFIX}-title`,
};
const StyledAppBar = (0, styles_1.styled)(material_1.AppBar)(({ theme }) => ({
    [`& .${classes.toolbar}`]: {
        paddingRight: 24,
    },
    [`& .${classes.menuButton}`]: {
        marginLeft: '0.2em',
        marginRight: '0.2em',
    },
    [`& .${classes.title}`]: {
        flex: 1,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },
}));
/**
 * The AppBar component renders a custom MuiAppBar.
 *
 * @param {Object} props
 * @param {ReactNode} props.children React node/s to be render as children of the AppBar
 * @param {Object} props.classes CSS class names
 * @param {string} props.className CSS class applied to the MuiAppBar component
 * @param {string} props.color The color of the AppBar
 * @param {Component} props.logout The logout button component that will be pass to the UserMenu component
 * @param {boolean} props.open State of the <Admin/> Sidebar
 * @param {Element | boolean} props.userMenu A custom user menu component for the AppBar. <UserMenu/> component by default. Pass false to disable.
 *
 * @example
 *
 * const MyAppBar = props => {

 *   return (
 *       <AppBar {...props}>
 *           <Typography
 *               variant="h6"
 *               color="inherit"
 *               className={classes.title}
 *               id="../../app-title"
 *           />
 *       </AppBar>
 *   );
 *};
 *
 * @example Without a user menu
 *
 * const MyAppBar = props => {

 *   return (
 *       <AppBar {...props} userMenu={false} />
 *   );
 *};
 */
const AppBar = (props) => {
    const { children, className, color = 'secondary', logout, open, title, userMenu, container: Container } = props, rest = __rest(props, ["children", "className", "color", "logout", "open", "title", "userMenu", "container"]);
    const isXSmall = (0, material_1.useMediaQuery)((theme) => theme.breakpoints.down('sm'));
    return ((0, jsx_runtime_1.jsx)(Container, { children: (0, jsx_runtime_1.jsx)(StyledAppBar, Object.assign({ className: className, color: color }, rest, { children: (0, jsx_runtime_1.jsxs)(material_1.Toolbar, Object.assign({ disableGutters: true, variant: isXSmall ? 'regular' : 'dense', className: classes.toolbar }, { children: [(0, jsx_runtime_1.jsx)(SidebarToggleButton_1.SidebarToggleButton, { className: classes.menuButton }, void 0), react_1.Children.count(children) === 0 ? ((0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "h6", color: "inherit", className: classes.title, id: "../../app-title" }, void 0)) : (children), (0, jsx_runtime_1.jsx)(LoadingIndicator_1.default, {}, void 0), typeof userMenu === 'boolean' ? (userMenu === true ? ((0, jsx_runtime_1.jsx)(UserMenu_1.default, { logout: logout }, void 0)) : null) : ((0, react_1.cloneElement)(userMenu, { logout }))] }), void 0) }), void 0) }, void 0));
};
AppBar.propTypes = {
    children: prop_types_1.default.node,
    className: prop_types_1.default.string,
    color: prop_types_1.default.oneOf([
        'default',
        'inherit',
        'primary',
        'secondary',
        'transparent',
    ]),
    container: core_1.ComponentPropType,
    logout: prop_types_1.default.element,
    // @deprecated
    open: prop_types_1.default.bool,
    userMenu: prop_types_1.default.oneOfType([prop_types_1.default.element, prop_types_1.default.bool]),
};
AppBar.defaultProps = {
    userMenu: (0, jsx_runtime_1.jsx)(UserMenu_1.default, {}, void 0),
    container: HideOnScroll_1.default,
};
exports.default = (0, react_1.memo)(AppBar);
