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
exports.CLOSED_MENU_WIDTH = exports.MENU_WIDTH = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const prop_types_1 = __importDefault(require("prop-types"));
const react_redux_1 = require("react-redux");
const get_1 = __importDefault(require("lodash/get"));
const ViewList_1 = __importDefault(require("@mui/icons-material/ViewList"));
const classnames_1 = __importDefault(require("classnames"));
const core_1 = require("../../features/core");
const DashboardMenuItem_1 = __importDefault(require("./DashboardMenuItem"));
const MenuItemLink_1 = __importDefault(require("./MenuItemLink"));
const PREFIX = 'RaMenu';
const classes = {
    main: `${PREFIX}-main`,
    open: `${PREFIX}-open`,
    closed: `${PREFIX}-closed`,
};
const Root = (0, styles_1.styled)('div')(({ theme }) => ({
    [`&.${classes.main}`]: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginTop: '0.5em',
        marginBottom: '1em',
        [theme.breakpoints.only('xs')]: {
            marginTop: 0,
        },
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    [`&.${classes.open}`]: {
        width: (0, get_1.default)(theme, 'menu.width', exports.MENU_WIDTH),
    },
    [`&.${classes.closed}`]: {
        width: (0, get_1.default)(theme, 'menu.closedWidth', exports.CLOSED_MENU_WIDTH),
    },
}));
exports.MENU_WIDTH = 240;
exports.CLOSED_MENU_WIDTH = 55;
const Menu = (props) => {
    const resources = (0, react_redux_1.useSelector)(core_1.getResources, react_redux_1.shallowEqual);
    const getResourceLabel = (0, core_1.useGetResourceLabel)();
    const { hasDashboard, dense, children = ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [hasDashboard && (0, jsx_runtime_1.jsx)(DashboardMenuItem_1.default, { dense: dense }, void 0), resources
                .filter(r => r.hasList)
                .map(resource => ((0, jsx_runtime_1.jsx)(MenuItemLink_1.default, { to: `/${resource.name}`, state: { _scrollToTop: true }, primaryText: getResourceLabel(resource.name, 2), leftIcon: resource.icon ? ((0, jsx_runtime_1.jsx)(resource.icon, {}, void 0)) : ((0, jsx_runtime_1.jsx)(ViewList_1.default, {}, void 0)), dense: dense }, resource.name)))] }, void 0)), className, onMenuClick, logout } = props, rest = __rest(props, ["hasDashboard", "dense", "children", "className", "onMenuClick", "logout"]);
    const open = (0, react_redux_1.useSelector)((state) => state.admin.ui.sidebarOpen);
    return ((0, jsx_runtime_1.jsx)(Root, Object.assign({ className: (0, classnames_1.default)(classes.main, {
            [classes.open]: open,
            [classes.closed]: !open,
        }, className) }, rest, { children: children }), void 0));
};
Menu.propTypes = {
    className: prop_types_1.default.string,
    dense: prop_types_1.default.bool,
    hasDashboard: prop_types_1.default.bool,
    logout: prop_types_1.default.element,
    onMenuClick: prop_types_1.default.func,
};
Menu.defaultProps = {
    onMenuClick: () => null,
};
exports.default = Menu;
