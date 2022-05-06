"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Avatar_1 = __importDefault(require("@mui/material/Avatar"));
const Container_1 = __importDefault(require("@mui/material/Container"));
const Grid_1 = __importDefault(require("@mui/material/Grid"));
const styles_1 = require("@mui/styles");
const Typography_1 = __importDefault(require("@mui/material/Typography"));
const LockOpenOutlined_1 = __importDefault(require("@mui/icons-material/LockOpenOutlined"));
const Paper_1 = __importDefault(require("../../components/Paper"));
const TranslatedLink_1 = __importDefault(require("../../components/TranslatedLink"));
const Layout_1 = require("../../containers/Layout");
const titlebar_1 = require("features/titlebar");
const useStyles = (0, styles_1.makeStyles)((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
function SignOut() {
    const classes = useStyles();
    (0, titlebar_1.useTitlebar)({
        title: 'Sign Out',
        tools: []
    });
    return ((0, jsx_runtime_1.jsx)(Layout_1.Frame, Object.assign({ name: "sign-out", maxWidth: "lg" }, { children: (0, jsx_runtime_1.jsx)(Container_1.default, Object.assign({ component: "main", maxWidth: "xs" }, { children: (0, jsx_runtime_1.jsxs)(Paper_1.default, { children: [(0, jsx_runtime_1.jsxs)("header", Object.assign({ className: classes.paper }, { children: [(0, jsx_runtime_1.jsx)(Avatar_1.default, Object.assign({ className: classes.avatar }, { children: (0, jsx_runtime_1.jsx)(LockOpenOutlined_1.default, {}, void 0) }), void 0), (0, jsx_runtime_1.jsx)(Typography_1.default, Object.assign({ component: "h1", variant: "h5" }, { children: "You signed out" }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)(Grid_1.default, Object.assign({ container: true, justifyContent: "flex-end" }, { children: (0, jsx_runtime_1.jsx)(Grid_1.default, Object.assign({ item: true }, { children: (0, jsx_runtime_1.jsx)(TranslatedLink_1.default, Object.assign({ i18nKey: "sign-in", to: "/sign-in", variant: "body2" }, { children: `Sign in back in` }), void 0) }), void 0) }), void 0)] }, void 0) }), void 0) }), void 0));
}
exports.default = SignOut;
