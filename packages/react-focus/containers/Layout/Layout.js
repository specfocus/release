"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TOOLBAR_UPDATE = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Box_1 = __importDefault(require("@mui/material/Box"));
const Hidden_1 = __importDefault(require("@mui/material/Hidden"));
const styles_1 = require("@mui/styles");
const Toolbar_1 = __importDefault(require("@mui/material/Toolbar"));
const TranslatedTypography_1 = __importDefault(require("../../components/TranslatedTypography"));
const AppMenu_1 = __importDefault(require("../../app/AppMenu"));
const Sidebar_1 = __importStar(require("./Sidebar"));
const AppState_1 = require("../../app/AppState");
const recoil_1 = require("recoil");
const AppStack_1 = require("../../app/AppStack");
const styles_2 = require("@mui/material/styles");
const AppBar_1 = __importDefault(require("@mui/material/AppBar"));
exports.TOOLBAR_UPDATE = 'TOOLBAR_UPDATE';
const drawerWidth = 240;
// ListActions -> TopToolbar
const useStyles = (0, styles_1.makeStyles)((theme) => ({
    root: {
        display: 'flex',
        height: '100vh'
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    /*
    appBarTools: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'row',
      flexGrow: 1,
      flexFlow: 'row',
      flexWrap: 'nowrap',
      gap: theme.spacing(1),
      justifyContent: 'flex-end',
    },
    */
    content: {
        flexGrow: 1,
        height: `calc(100vh - ${theme.spacing(8)})`,
        overflow: 'hidden',
        marginTop: theme.spacing(8)
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    fixedHeight: {
        height: 240,
    },
    menuButton: {
        // marginRight: 36,
        marginLeft: 48,
    },
    menuButtonHidden: {
        display: 'none',
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    subtitle: {
        flexGrow: 0
    },
    title: {
        flexGrow: 0,
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    }
}));
const AppBar = (0, styles_2.styled)(AppBar_1.default, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => (Object.assign({ zIndex: theme.zIndex.drawer - 1, transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }) }, (open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
}))));
function Layout({ children }) {
    const classes = useStyles();
    // const title = useRecoilValue(appTitle);
    const [drawerState, setDrawerState] = (0, recoil_1.useRecoilState)(AppState_1.atomSidebar);
    const handleSidebarDrawerExpand = (event) => {
        setDrawerState('expanded');
    };
    const stack = (0, recoil_1.useRecoilValue)(AppStack_1.appStack);
    const buttons = [];
    let index = 0;
    let title = process.env.REACT_APP_TITLE || '';
    /*
    for (const [key, config] of Object.entries(stack || {})) {
        if (config.title) {
            title = config.title;
        }
        if (config?.tools) {
            if (index > 0) {
                buttons.push(<Divider orientation="vertical" flexItem />);
            }
            index++;
            for (const Tool of config.tools) {
                if (Tool !== null) {
                    buttons.push(<Tool />);
                } else {
                    buttons.push(<Divider orientation="vertical" flexItem />);
                }
            }
        }
    }
    */
    const drawerOpen = drawerState === 'expanded';
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: classes.root }, { children: [(0, jsx_runtime_1.jsxs)(AppBar, Object.assign({ position: "fixed", 
                // @ts-ignore
                open: drawerOpen }, { children: [(0, jsx_runtime_1.jsxs)(Toolbar_1.default, Object.assign({ className: classes.toolbar }, { children: [(0, jsx_runtime_1.jsx)(Hidden_1.default, Object.assign({ smDown: true }, { children: (0, jsx_runtime_1.jsx)(TranslatedTypography_1.default, Object.assign({ className: classes.title, color: "inherit", component: "h1", i18nKey: title, variant: "h6", sx: Object.assign({}, (!drawerOpen && { marginLeft: 9 })), noWrap: true }, { children: title }), void 0) }), void 0), (0, jsx_runtime_1.jsx)(Box_1.default, Object.assign({ alignItems: "center", display: "flex", flexDirection: "row", flexGrow: 1, flex: "row", flexWrap: "nowrap", justifyContent: "flex-end", 
                                // md={{ marginRight: 6 }} v5
                                marginRight: 6 }, { children: buttons }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)(Hidden_1.default, Object.assign({ smDown: true }, { children: (0, jsx_runtime_1.jsx)(AppMenu_1.default, {}, void 0) }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)(Sidebar_1.default, {}, void 0), (0, jsx_runtime_1.jsxs)(Box_1.default, Object.assign({ component: "main", sx: { flexGrow: 1, overflow: 'hidden' } }, { children: [(0, jsx_runtime_1.jsx)(Sidebar_1.DrawerHeader, {}, void 0), children] }), void 0)] }), void 0));
}
exports.default = Layout;
