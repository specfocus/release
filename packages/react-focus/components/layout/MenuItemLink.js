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
const react_1 = require("react");
const styles_1 = require("@mui/material/styles");
const prop_types_1 = __importDefault(require("prop-types"));
const classnames_1 = __importDefault(require("classnames"));
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const core_1 = require("../../features/core");
const material_1 = require("@mui/material");
const PREFIX = 'RaMenuItemLink';
const classes = {
    root: `${PREFIX}-root`,
    active: `${PREFIX}-active`,
    icon: `${PREFIX}-icon`,
};
const StyledMenuItem = (0, styles_1.styled)(material_1.MenuItem)(({ theme }) => ({
    [`&.${classes.root}`]: {
        color: theme.palette.text.secondary,
    },
    [`& .${classes.active}`]: {
        color: theme.palette.text.primary,
    },
    [`& .${classes.icon}`]: { minWidth: theme.spacing(5) },
}));
const NavLinkRef = (0, react_1.forwardRef)((props, ref) => ((0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, Object.assign({ ref: ref }, props), void 0)));
/**
 * Displays a menu item with a label and an icon - or only the icon with a tooltip when the sidebar is minimized.
 * It also handles the automatic closing of the menu on tap on mobile.
 *
 * @typedef {Object} Props the props you can use
 * @prop {string|Location} to The menu item's target. It is passed to a React Router NavLink component.
 * @prop {string|ReactNode} primaryText The menu content, displayed when the menu isn't minimized. |
 * @prop {ReactNode} leftIcon The menu icon
 *
 * Additional props are passed down to the underling material-ui <MenuItem> component
 * @see https://material-ui.com/api/menu-item/#menuitem-api
 *
 * @example // You can create a custom menu component using the <DashboardMenuItem> and <MenuItemLink> components:
 *
 * // in src/Menu.js
 * import * as React from 'react';
 * import { DashboardMenuItem, MenuItemLink } from '../../app';
 * import BookIcon from '@mui/icons-material/Book';
 * import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
 * import PeopleIcon from '@mui/icons-material/People';
 * import LabelIcon from '@mui/icons-material/Label';
 *
 * export const Menu = () => (
 *     <div>
 *         <DashboardMenuItem />
 *         <MenuItemLink to="/posts" primaryText="Posts" leftIcon={<BookIcon />}/>
 *         <MenuItemLink to="/comments" primaryText="Comments" leftIcon={<ChatBubbleIcon />}/>
 *         <MenuItemLink to="/users" primaryText="Users" leftIcon={<PeopleIcon />}/>
 *         <MenuItemLink to="/custom-route" primaryText="Miscellaneous" leftIcon={<LabelIcon />}/>
 *     </div>
 * );
 *
 * // to use this custom menu component, pass it to a custom Layout:
 * // in src/Layout.js
 * import { Layout } from '../../app';
 * import { Menu } from './Menu';
 *
 * export const Layout = (props) => <Layout {...props} menu={Menu} />;
 *
 * // then, use this layout in the <Admin layout> prop:
 * // in src/App.js
 * import { Layout }  from './Layout';
 *
 * const App = () => (
 *     <Admin layout={Layout} dataProvider={simpleRestProvider('http://path.to.my.api')}>
 *         // ...
 *     </Admin>
 * );
 */
const MenuItemLink = (0, react_1.forwardRef)((props, ref) => {
    const { className, primaryText, leftIcon, onClick, sidebarIsOpen, tooltipProps } = props, rest = __rest(props, ["className", "primaryText", "leftIcon", "onClick", "sidebarIsOpen", "tooltipProps"]);
    const dispatch = (0, react_redux_1.useDispatch)();
    const isSmall = (0, material_1.useMediaQuery)((theme) => theme.breakpoints.down('md'));
    const open = (0, react_redux_1.useSelector)((state) => state.admin.ui.sidebarOpen);
    const handleMenuTap = (0, react_1.useCallback)(e => {
        if (isSmall) {
            dispatch((0, core_1.setSidebarVisibility)(false));
        }
        onClick && onClick(e);
    }, [dispatch, isSmall, onClick]);
    const renderMenuItem = () => {
        return ((0, jsx_runtime_1.jsxs)(StyledMenuItem, Object.assign({ className: (0, classnames_1.default)(classes.root, className), activeClassName: classes.active, component: NavLinkRef, 
            // @ts-ignore
            ref: ref, tabIndex: 0 }, rest, { onClick: handleMenuTap }, { children: [leftIcon && ((0, jsx_runtime_1.jsx)(material_1.ListItemIcon, Object.assign({ className: classes.icon }, { children: (0, react_1.cloneElement)(leftIcon, {
                        titleAccess: primaryText,
                    }) }), void 0)), primaryText] }), void 0));
    };
    return open ? (renderMenuItem()) : ((0, jsx_runtime_1.jsx)(material_1.Tooltip, Object.assign({ title: String(primaryText), placement: "right" }, tooltipProps, { children: renderMenuItem() }), void 0));
});
MenuItemLink.propTypes = {
    classes: prop_types_1.default.object,
    className: prop_types_1.default.string,
    leftIcon: prop_types_1.default.element,
    onClick: prop_types_1.default.func,
    primaryText: prop_types_1.default.node,
    staticContext: prop_types_1.default.any,
    to: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    sidebarIsOpen: prop_types_1.default.bool,
};
exports.default = MenuItemLink;
