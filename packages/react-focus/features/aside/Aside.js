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
exports.useStyles = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Button_1 = __importDefault(require("@mui/material/Button"));
const Container_1 = __importDefault(require("@mui/material/Container"));
const Toolbar_1 = __importDefault(require("@mui/material/Toolbar"));
const styles_1 = require("@mui/styles");
const titlebar_1 = require("../titlebar");
const react_1 = require("react");
const Loading_1 = __importDefault(require("./Loading"));
exports.useStyles = (0, styles_1.makeStyles)((theme) => ({
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    divider: {
        margin: theme.spacing(4, 0, 2, 0)
    },
    header: {
        display: 'block',
        justifyContent: 'stretch',
        marginBottom: 0
    },
    content: {
        marginTop: 0
    },
    container: {
        display: 'flex',
        flexGrow: 1,
        // height: `calc(100% - ${theme.spacing(6)})`,
        overflowY: 'hidden',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(2)
    },
    icon: {
        width: theme.spacing(3),
        height: theme.spacing(3)
    },
    speedDial: {
        position: 'fixed',
        '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
            bottom: theme.spacing(1),
            right: theme.spacing(1),
        },
        '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
            top: theme.spacing(.5),
            right: theme.spacing(.5),
        },
    },
    speedDialFav: {
        width: theme.spacing(5),
        height: theme.spacing(5),
        opacity: .5,
        transition: 'opacity .5s ease-out',
        /*
        '-moz-transition': 'opacity .5s ease-out',
        '-webkit-transition': 'opacity .5s ease-out',
        '-o-transition': 'opacity .5s ease-out',
        `*/
        '&[aria-expanded=true]': {
            opacity: 1
        },
    },
    title: {
        flexGrow: 0,
        textAlign: 'center'
    },
    toolbar: {}
}));
const Aside = (_a) => {
    var { 
    // actions,
    children, 
    // icon: Icon,
    maxWidth, 
    // reducer,
    title, sx } = _a, props = __rest(_a, ["children", "maxWidth", "title", "sx"]);
    const classes = (0, exports.useStyles)();
    const [openSpeedDial, setOpenSpeedDial] = (0, react_1.useState)(false);
    const handleSpeedDialClose = () => {
        setOpenSpeedDial(false);
    };
    const handleSpeedDialOpen = () => {
        setOpenSpeedDial(true);
    };
    // const [state, dispatch] = useReducer(reducer, { index: 0, canNext: true });
    (0, titlebar_1.useTitlebar)({ title, tools: [] });
    return ((0, jsx_runtime_1.jsx)(react_1.Suspense, Object.assign({ fallback: (0, jsx_runtime_1.jsx)(Loading_1.default, {}, void 0) }, { children: (0, jsx_runtime_1.jsxs)(Container_1.default, Object.assign({ maxWidth: maxWidth, sx: Object.assign({ minWidth: 3 / 4 }, sx) }, { children: [(0, jsx_runtime_1.jsxs)(Toolbar_1.default, Object.assign({ variant: "dense", disableGutters: true }, { children: [(0, jsx_runtime_1.jsx)(Button_1.default, { children: "A" }, void 0), (0, jsx_runtime_1.jsx)(Button_1.default, { children: "H" }, void 0)] }), void 0), children] }), void 0) }), void 0));
};
exports.default = Aside;
