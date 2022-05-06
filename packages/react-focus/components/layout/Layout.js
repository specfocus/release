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
const classnames_1 = __importDefault(require("classnames"));
const prop_types_1 = __importDefault(require("prop-types"));
const react_1 = require("react");
const react_router_1 = require("react-router");
const core_1 = require("../../features/core");
const default_1 = __importDefault(require("../../theme/default"));
const SkipNavigationButton_1 = __importDefault(require("../button/SkipNavigationButton"));
const AppBar_1 = __importDefault(require("./AppBar"));
const Error_1 = __importDefault(require("./Error"));
const Menu_1 = __importDefault(require("./Menu"));
const Notification_1 = __importDefault(require("./Notification"));
const Sidebar_1 = __importDefault(require("./Sidebar"));
const recoil_1 = require("recoil");
const state_1 = require("../../features/core/state");
const PREFIX = 'RaLayout';
const classes = {
    root: `${PREFIX}-root`,
    appFrame: `${PREFIX}-appFrame`,
    contentWithSidebar: `${PREFIX}-contentWithSidebar`,
    content: `${PREFIX}-content`,
};
const StyledLayout = (0, styles_1.styled)('div')(({ theme }) => ({
    [`&.${classes.root}`]: {
        display: 'flex',
        flexDirection: 'column',
        zIndex: 1,
        minHeight: '100vh',
        backgroundColor: theme.palette.background.default,
        position: 'relative',
        minWidth: 'fit-content',
        width: '100%',
        color: theme.palette.getContrastText(theme.palette.background.default),
    },
    [`& .${classes.appFrame}`]: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        [theme.breakpoints.up('xs')]: {
            marginTop: theme.spacing(6),
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: theme.spacing(7),
        },
    },
    [`& .${classes.contentWithSidebar}`]: {
        display: 'flex',
        flexGrow: 1,
    },
    [`& .${classes.content}`]: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        flexBasis: 0,
        padding: theme.spacing(3),
        paddingTop: theme.spacing(1),
        paddingLeft: 0,
        [theme.breakpoints.up('xs')]: {
            paddingLeft: 5,
        },
        [theme.breakpoints.down('md')]: {
            padding: 0,
        },
    },
}));
class LayoutWithoutTheme extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
        /**
         * Reset the error state upon navigation
         *
         * @see https://stackoverflow.com/questions/48121750/browser-navigation-broken-by-use-of-react-error-boundaries
         */
        props.history.listen(() => {
            if (this.state.hasError) {
                this.setState({ hasError: false });
            }
        });
    }
    componentDidCatch(error, errorInfo) {
        this.setState({ hasError: true, error, errorInfo });
    }
    render() {
        return (0, jsx_runtime_1.jsx)(LayoutContainer, Object.assign({}, this.props, this.state), void 0);
    }
}
LayoutWithoutTheme.propTypes = {
    appBar: core_1.ComponentPropType,
    children: prop_types_1.default.oneOfType([prop_types_1.default.func, prop_types_1.default.node]),
    classes: prop_types_1.default.object,
    className: prop_types_1.default.string,
    dashboard: core_1.ComponentPropType,
    error: core_1.ComponentPropType,
    history: prop_types_1.default.object.isRequired,
    logout: prop_types_1.default.element,
    menu: core_1.ComponentPropType,
    notification: core_1.ComponentPropType,
    open: prop_types_1.default.bool,
    sidebar: core_1.ComponentPropType,
    title: prop_types_1.default.node.isRequired,
};
LayoutWithoutTheme.defaultProps = {
    appBar: AppBar_1.default,
    error: Error_1.default,
    menu: Menu_1.default,
    notification: Notification_1.default,
    sidebar: Sidebar_1.default,
};
const LayoutContainer = props => {
    const { appBar, children, className, error: ErrorComponent, dashboard, error, errorInfo, hasError, logout, menu, notification, open, sidebar, title, 
    // sanitize react-router props
    match, location, history, staticContext } = props, rest = __rest(props, ["appBar", "children", "className", "error", "dashboard", "error", "errorInfo", "hasError", "logout", "menu", "notification", "open", "sidebar", "title", "match", "location", "history", "staticContext"]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(StyledLayout, Object.assign({ className: (0, classnames_1.default)('layout', classes.root, className) }, rest, { children: [(0, jsx_runtime_1.jsx)(SkipNavigationButton_1.default, {}, void 0), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: classes.appFrame }, { children: [(0, react_1.createElement)(appBar, { title, open, logout }), (0, jsx_runtime_1.jsxs)("main", Object.assign({ className: classes.contentWithSidebar }, { children: [(0, react_1.createElement)(sidebar, {
                                        children: (0, react_1.createElement)(menu, {
                                            logout,
                                            hasDashboard: !!dashboard,
                                        }),
                                    }), (0, jsx_runtime_1.jsx)("div", Object.assign({ id: "main-content", className: classes.content }, { children: hasError ? ((0, jsx_runtime_1.jsx)(ErrorComponent, { error: error, errorInfo: errorInfo, title: title }, void 0)) : (children) }), void 0)] }), void 0)] }), void 0)] }), void 0), (0, react_1.createElement)(notification)] }, void 0));
};
const EnhancedLayout = () => {
    const core = (0, recoil_1.useRecoilValue)(state_1.atomCoreState);
    const location = (0, react_router_1.useLocation)();
    return (0, jsx_runtime_1.jsx)(LayoutWithoutTheme, { history: history, open: core.ui.sidebarOpen }, void 0);
};
const Layout = (_a) => {
    var { theme: themeOverride } = _a, props = __rest(_a, ["theme"]);
    const themeProp = (0, react_1.useRef)(themeOverride);
    const [theme, setTheme] = (0, react_1.useState)(() => (0, styles_1.createTheme)(themeOverride));
    (0, react_1.useEffect)(() => {
        if (themeProp.current !== themeOverride) {
            themeProp.current = themeOverride;
            setTheme((0, styles_1.createTheme)(themeOverride));
        }
    }, [themeOverride, themeProp, theme, setTheme]);
    return ((0, jsx_runtime_1.jsx)(styles_1.ThemeProvider, Object.assign({ theme: theme }, { children: (0, jsx_runtime_1.jsx)(EnhancedLayout, Object.assign({}, props), void 0) }), void 0));
};
Layout.propTypes = {
    theme: prop_types_1.default.object,
};
Layout.defaultProps = {
    theme: default_1.default,
};
exports.default = Layout;
