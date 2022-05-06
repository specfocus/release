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
const Lock_1 = __importDefault(require("@mui/icons-material/Lock"));
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const classnames_1 = __importDefault(require("classnames"));
const core_1 = require("../../features/core");
const prop_types_1 = __importDefault(require("prop-types"));
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const default_1 = __importDefault(require("../../theme/default"));
const Notification_1 = __importDefault(require("../layout/Notification"));
const LoginForm_1 = __importDefault(require("./LoginForm"));
const PREFIX = 'RaLogin';
const classes = {
    main: `${PREFIX}-main`,
    card: `${PREFIX}-card`,
    avatar: `${PREFIX}-avatar`,
    icon: `${PREFIX}-icon`,
};
const Root = (0, styles_1.styled)('div')(({ theme }) => ({
    [`&.${classes.main}`]: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        height: '1px',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundImage: 'radial-gradient(circle at 50% 14em, #313264 0%, #00023b 60%, #00023b 100%)',
    },
    [`& .${classes.card}`]: {
        minWidth: 300,
        marginTop: '6em',
    },
    [`& .${classes.avatar}`]: {
        margin: '1em',
        display: 'flex',
        justifyContent: 'center',
    },
    [`& .${classes.icon}`]: {
        backgroundColor: theme.palette.secondary[500],
    },
}));
/**
 * A standalone login page, to serve as authentication gate to the admin
 *
 * Expects the user to enter a login and a password, which will be checked
 * by the `authProvider.login()` method. Redirects to the root page (/)
 * upon success, otherwise displays an authentication error message.
 *
 * Copy and adapt this component to implement your own login logic
 * (e.g. to authenticate via email or facebook or anything else).
 *
 * @example
 *     import MyLoginPage from './MyLoginPage';
 *     const App = () => (
 *         <Admin loginPage={MyLoginPage} authProvider={authProvider}>
 *             ...
 *        </Admin>
 *     );
 */
const Login = props => {
    const { theme } = props, rest = __rest(props, ["theme"]);
    const muiTheme = (0, react_1.useMemo)(() => (0, styles_1.createTheme)(theme), [theme]);
    return ((0, jsx_runtime_1.jsx)(styles_1.ThemeProvider, Object.assign({ theme: muiTheme }, { children: (0, jsx_runtime_1.jsx)(LoginContainer, Object.assign({}, rest), void 0) }), void 0));
};
const LoginContainer = props => {
    const { title, classes: classesOverride, className, children, notification, staticContext, backgroundImage } = props, rest = __rest(props, ["title", "classes", "className", "children", "notification", "staticContext", "backgroundImage"]);
    const containerRef = (0, react_1.useRef)();
    let backgroundImageLoaded = false;
    const checkAuth = (0, core_1.useCheckAuth)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    (0, react_1.useEffect)(() => {
        checkAuth({}, false)
            .then(() => {
            // already authenticated, redirect to the home page
            navigate('/');
        })
            .catch(() => {
            // not authenticated, stay on the login page
        });
    }, [checkAuth, navigate]);
    const updateBackgroundImage = () => {
        if (!backgroundImageLoaded && containerRef.current) {
            containerRef.current.style.backgroundImage = `url(${backgroundImage})`;
            backgroundImageLoaded = true;
        }
    };
    // Load background image asynchronously to speed up time to interactive
    const lazyLoadBackgroundImage = () => {
        if (backgroundImage) {
            const img = new Image();
            img.onload = updateBackgroundImage;
            img.src = backgroundImage;
        }
    };
    (0, react_1.useEffect)(() => {
        if (!backgroundImageLoaded) {
            lazyLoadBackgroundImage();
        }
    });
    return ((0, jsx_runtime_1.jsxs)(Root, Object.assign({ className: (0, classnames_1.default)(classes.main, className) }, rest, { ref: containerRef }, { children: [(0, jsx_runtime_1.jsxs)(material_1.Card, Object.assign({ className: classes.card }, { children: [(0, jsx_runtime_1.jsx)("div", Object.assign({ className: classes.avatar }, { children: (0, jsx_runtime_1.jsx)(material_1.Avatar, Object.assign({ className: classes.icon }, { children: (0, jsx_runtime_1.jsx)(Lock_1.default, {}, void 0) }), void 0) }), void 0), children] }), void 0), notification ? (0, react_1.createElement)(notification) : null] }), void 0));
};
Login.propTypes = {
    backgroundImage: prop_types_1.default.string,
    children: prop_types_1.default.node,
    classes: prop_types_1.default.object,
    className: prop_types_1.default.string,
    theme: prop_types_1.default.object,
    staticContext: prop_types_1.default.object,
};
Login.defaultProps = {
    theme: default_1.default,
    children: (0, jsx_runtime_1.jsx)(LoginForm_1.default, {}, void 0),
    notification: Notification_1.default,
};
exports.default = Login;
