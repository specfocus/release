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
exports.DrawerHeader = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ChevronLeft_1 = __importDefault(require("@mui/icons-material/ChevronLeft"));
const ChevronRight_1 = __importDefault(require("@mui/icons-material/ChevronRight"));
const Box_1 = __importDefault(require("@mui/material/Box"));
const Divider_1 = __importDefault(require("@mui/material/Divider"));
const Drawer_1 = __importDefault(require("@mui/material/Drawer"));
const IconButton_1 = __importDefault(require("@mui/material/IconButton"));
const List_1 = __importDefault(require("@mui/material/List"));
const ListSubheader_1 = __importDefault(require("@mui/material/ListSubheader"));
const styles_1 = require("@mui/material/styles");
const styles_2 = require("@mui/styles");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const recoil_1 = require("recoil");
const AppSidebar_1 = require("../../app/AppSidebar");
const AppState_1 = require("../../app/AppState");
const TranslatedListItem_1 = __importDefault(require("../../components/TranslatedListItem"));
const TranslatedListItemLink_1 = __importDefault(require("../../components/TranslatedListItemLink"));
const TranslatedTypography_1 = __importDefault(require("../../components/TranslatedTypography"));
const drawerWidth = 240;
const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});
const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(9)} + 1px)`,
    },
});
exports.DrawerHeader = (0, styles_1.styled)('div')(({ theme }) => (Object.assign({ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: theme.spacing(0, 1) }, theme.mixins.toolbar)));
const Drawer = (0, styles_1.styled)(Drawer_1.default, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => (Object.assign(Object.assign({ width: drawerWidth, flexShrink: 0, whiteSpace: 'nowrap', boxSizing: 'border-box' }, (open && Object.assign(Object.assign({}, openedMixin(theme)), { '& .MuiDrawer-paper': openedMixin(theme) }))), (!open && Object.assign(Object.assign({}, closedMixin(theme)), { '& .MuiDrawer-paper': closedMixin(theme) })))));
const useStyles = (0, styles_2.makeStyles)((theme) => ({
    subtitle: {
        paddingLeft: theme.spacing(2),
    },
    item: {
        color: theme.palette.mode === 'dark' ? '#fff' : '#000'
    },
    toolbarIcon: Object.assign({ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '0 8px' }, theme.mixins.toolbar),
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
}));
function Sidebar() {
    const classes = useStyles();
    const [drawerState, setDrawerState] = (0, recoil_1.useRecoilState)(AppState_1.atomSidebar);
    const drawerOpen = drawerState === 'expanded';
    const sidebar = (0, AppSidebar_1.useAppSidebar)();
    const location = (0, react_router_dom_1.useLocation)();
    const theme = (0, styles_1.useTheme)();
    const handleDrawerShrink = (event) => {
        setDrawerState(drawerOpen ? 'collapsed' : 'expanded');
    };
    console.log({ drawerOpen, drawerState });
    const chevronRight = theme.direction === 'rtl' ? drawerOpen : !drawerOpen;
    return ((0, jsx_runtime_1.jsxs)(Drawer, Object.assign({ variant: "permanent", open: drawerOpen }, { children: [(0, jsx_runtime_1.jsxs)(exports.DrawerHeader, { children: [drawerOpen && ((0, jsx_runtime_1.jsx)(Box_1.default, { component: "img", sx: {
                            height: 61,
                            width: 150,
                            maxHeight: { xs: 61, md: 61 },
                            maxWidth: { xs: 150, md: 150 },
                        }, alt: "Ufinet", src: "/logo_ufinet.png" }, void 0)), (0, jsx_runtime_1.jsx)(IconButton_1.default, Object.assign({ onClick: handleDrawerShrink }, { children: chevronRight ? (0, jsx_runtime_1.jsx)(ChevronRight_1.default, {}, void 0) : (0, jsx_runtime_1.jsx)(ChevronLeft_1.default, {}, void 0) }), void 0)] }, void 0), sidebar && Array.isArray(sidebar.lists) && sidebar.lists.map((list, listIndex) => ((0, jsx_runtime_1.jsxs)(react_1.Fragment, { children: [drawerOpen && ((0, jsx_runtime_1.jsx)(Divider_1.default, {}, `divider-${listIndex}`)), (0, jsx_runtime_1.jsxs)(List_1.default, { children: [drawerOpen && list.subheader && ((0, jsx_runtime_1.jsx)(ListSubheader_1.default, Object.assign({ className: classes.subtitle, inset: true }, { children: (0, jsx_runtime_1.jsx)(TranslatedTypography_1.default, Object.assign({ variant: "overline" }, { children: list.subheader }), void 0) }), `list-${listIndex}-subheader`)), list && Array.isArray(list.items) && list.items.map((item, itemIndex) => {
                                const key = `list-${listIndex}-item-${itemIndex}`;
                                const { type } = item, props = __rest(item, ["type"]);
                                switch (type) {
                                    case 'link':
                                        const match = (0, react_router_dom_1.matchPath)(location.pathname, props.to);
                                        if (match) {
                                            Object.assign(props, { selected: true });
                                        }
                                        return ((0, jsx_runtime_1.jsx)(TranslatedListItemLink_1.default, Object.assign({ className: classes.item }, props), key));
                                    default:
                                        return ((0, jsx_runtime_1.jsx)(TranslatedListItem_1.default, Object.assign({ className: classes.item }, props), key));
                                }
                            })] }, `list-${listIndex}`)] }, `fragment-${listIndex}`)))] }), void 0));
}
exports.default = Sidebar;
