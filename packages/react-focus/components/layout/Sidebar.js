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
exports.CLOSED_DRAWER_WIDTH = exports.DRAWER_WIDTH = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const prop_types_1 = __importDefault(require("prop-types"));
const react_redux_1 = require("react-redux");
const material_1 = require("@mui/material");
const get_1 = __importDefault(require("lodash/get"));
const core_1 = require("../../features/core");
const PREFIX = 'RaSidebar';
const classes = {
    root: `${PREFIX}-root`,
    docked: `${PREFIX}-docked`,
    paper: `${PREFIX}-paper`,
    paperAnchorLeft: `${PREFIX}-paperAnchorLeft`,
    paperAnchorRight: `${PREFIX}-paperAnchorRight`,
    paperAnchorTop: `${PREFIX}-paperAnchorTop`,
    paperAnchorBottom: `${PREFIX}-paperAnchorBottom`,
    paperAnchorDockedLeft: `${PREFIX}-paperAnchorDockedLeft`,
    paperAnchorDockedTop: `${PREFIX}-paperAnchorDockedTop`,
    paperAnchorDockedRight: `${PREFIX}-paperAnchorDockedRight`,
    paperAnchorDockedBottom: `${PREFIX}-paperAnchorDockedBottom`,
    modal: `${PREFIX}-modal`,
    fixed: `${PREFIX}-fixed`,
};
const StyledDrawer = (0, styles_1.styled)(material_1.Drawer)(({ open, theme }) => ({
    [`&.${classes.root}`]: {
        height: 'calc(100vh - 3em)',
    },
    [`& .${classes.docked}`]: {},
    [`& .${classes.paper}`]: {},
    [`& .${classes.paperAnchorLeft}`]: {},
    [`& .${classes.paperAnchorRight}`]: {},
    [`& .${classes.paperAnchorTop}`]: {},
    [`& .${classes.paperAnchorBottom}`]: {},
    [`& .${classes.paperAnchorDockedLeft}`]: {},
    [`& .${classes.paperAnchorDockedTop}`]: {},
    [`& .${classes.paperAnchorDockedRight}`]: {},
    [`& .${classes.paperAnchorDockedBottom}`]: {},
    [`& .${classes.modal}`]: {},
    [`& .${classes.fixed}`]: {
        position: 'fixed',
        height: 'calc(100vh - 3em)',
        overflowX: 'hidden',
        // hide scrollbar
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
    },
    [`& .MuiPaper-root`]: {
        position: 'relative',
        width: open
            ? (0, get_1.default)(theme, 'sidebar.width', exports.DRAWER_WIDTH)
            : (0, get_1.default)(theme, 'sidebar.closedWidth', exports.CLOSED_DRAWER_WIDTH),
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: 'transparent',
        borderRight: 'none',
        [theme.breakpoints.only('xs')]: {
            marginTop: 0,
            height: '100vh',
            position: 'inherit',
            backgroundColor: theme.palette.background.default,
        },
        [theme.breakpoints.up('md')]: {
            border: 'none',
        },
        zIndex: 'inherit',
    },
}));
exports.DRAWER_WIDTH = 240;
exports.CLOSED_DRAWER_WIDTH = 55;
const Sidebar = (props) => {
    const { children, closedSize, size } = props, rest = __rest(props, ["children", "closedSize", "size"]);
    const dispatch = (0, react_redux_1.useDispatch)();
    const isXSmall = (0, material_1.useMediaQuery)((theme) => theme.breakpoints.down('sm'));
    const isSmall = (0, material_1.useMediaQuery)((theme) => theme.breakpoints.down('md'));
    const open = (0, react_redux_1.useSelector)(state => state.admin.ui.sidebarOpen);
    (0, core_1.useLocale)(); // force redraw on locale change
    const toggleSidebar = () => dispatch((0, core_1.setSidebarVisibility)(!open));
    return isXSmall ? ((0, jsx_runtime_1.jsx)(StyledDrawer, Object.assign({ variant: "temporary", open: open, onClose: toggleSidebar, classes: classes }, rest, { children: children }), void 0)) : isSmall ? ((0, jsx_runtime_1.jsx)(StyledDrawer, Object.assign({ variant: "permanent", open: open, onClose: toggleSidebar, classes: classes }, rest, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: classes.fixed }, { children: children }), void 0) }), void 0)) : ((0, jsx_runtime_1.jsx)(StyledDrawer, Object.assign({ variant: "permanent", open: open, onClose: toggleSidebar, classes: classes }, rest, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: classes.fixed }, { children: children }), void 0) }), void 0));
};
Sidebar.propTypes = {
    children: prop_types_1.default.node.isRequired,
};
exports.default = Sidebar;
