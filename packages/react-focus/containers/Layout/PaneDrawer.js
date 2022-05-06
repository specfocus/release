"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Drawer_1 = __importDefault(require("@mui/material/Drawer"));
const styles_1 = require("@mui/styles");
const react_1 = require("react");
const recoil_1 = require("recoil");
const AppState_1 = require("../../app/AppState");
const TranslatedTypography_1 = __importDefault(require("../../components/TranslatedTypography"));
const react_i18next_1 = require("react-i18next");
const translation_1 = require("../../utilities/translation");
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
const Empty = () => (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}, void 0);
const PaneDrawer = () => {
    console.log('PaneDrawer');
    const { actions, contentComponent, icon: Icon, maxWidth, reducer, stripComponent, title, } = (0, recoil_1.useRecoilValue)(AppState_1.atomPane);
    const Content = contentComponent || Empty;
    const Strip = stripComponent || Empty;
    const handleClose = (0, recoil_1.useResetRecoilState)(AppState_1.atomPane);
    const [openSpeedDial, setOpenSpeedDial] = (0, react_1.useState)(false);
    const handleSpeedDialClose = () => {
        setOpenSpeedDial(false);
    };
    const handleSpeedDialOpen = () => {
        setOpenSpeedDial(true);
    };
    const [state, dispatch] = (0, react_1.useReducer)((s, a) => {
        if (a.type === 'CLOSE') {
            handleClose();
        }
        return reducer ? reducer(s, a) : s;
    }, { index: 0, canNext: true });
    const classes = (0, exports.useStyles)();
    const doClose = () => {
        console.log('close by clickout');
        handleClose();
    };
    const { t: t1 } = (0, react_i18next_1.useTranslation)();
    const t = (source) => (0, translation_1.translate)(source, t1);
    return ((0, jsx_runtime_1.jsx)(Drawer_1.default, Object.assign({ anchor: "right", open: Boolean(contentComponent), onClose: doClose, sx: { overflowY: 'hidden' } }, { children: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(TranslatedTypography_1.default, Object.assign({ className: classes.title, color: "inherit", component: "h5", i18nKey: title, variant: "h5", noWrap: true }, { children: title }), void 0), (0, jsx_runtime_1.jsx)(Content, {}, void 0)] }, void 0) }), void 0));
};
exports.default = PaneDrawer;
