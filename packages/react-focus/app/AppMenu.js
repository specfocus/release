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
const jsx_runtime_1 = require("react/jsx-runtime");
const PowerSettingsNew_1 = __importDefault(require("@mui/icons-material/PowerSettingsNew"));
const SpeedDial_1 = __importDefault(require("@mui/material/SpeedDial"));
const SpeedDialAction_1 = __importDefault(require("@mui/material/SpeedDialAction"));
const Avatar_1 = __importDefault(require("@mui/material/Avatar"));
const styles_1 = require("@mui/styles");
const react_1 = __importStar(require("react"));
const AppStack_1 = require("./AppStack");
const SIGN_OUT = 'sign-out';
const examples = [
    ["Lucas Oromi", "/avatar-male.png"],
    ["Komra Salo", "/avatar-female.png"],
    ["Remy Sharp", "https://mui.com/static/images/avatar/1.jpg"],
    ["Travis Howard", "https://mui.com/static/images/avatar/2.jpg"],
    ["Cindy Baker", "https://mui.com/static/images/avatar/3.jpg"]
];
const actions = [
    /*
    { icon: <UserPreferencesIcon />, name: 'Preferences', type: USER_PREFERENCES },
    { icon: <UserAccountIcon />, name: 'View Account', type: USER_ACCOUNT },
    { icon: <UserProfileIcon />, name: 'Profile', type: USER_PROFILE },
    { icon: <SwitchAccountIcon />, name: 'Switch Tenant', type: SWITCH_ACCOUNT },
    */
    { icon: (0, jsx_runtime_1.jsx)(PowerSettingsNew_1.default, {}, void 0), name: 'Sign Out', type: SIGN_OUT },
];
const useStyles = (0, styles_1.makeStyles)((theme) => ({
    avatar: {
        width: theme.spacing(7),
        height: theme.spacing(7)
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
}));
const UserMenu = () => {
    const classes = useStyles();
    const [open, setOpen] = react_1.default.useState(false);
    const { trigger } = (0, AppStack_1.useAppStack)();
    const props = (0, react_1.useMemo)(() => {
        const [alt, src] = examples[Math.round(4 * Math.random())];
        return { alt, src };
    }, []);
    const handleAction = (action) => {
        if (action.type) {
            trigger(action.type);
        }
        setOpen(false);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };
    return ((0, jsx_runtime_1.jsx)(SpeedDial_1.default, Object.assign({ ariaLabel: "User menu", className: classes.speedDial, hidden: false, icon: (0, jsx_runtime_1.jsx)(Avatar_1.default, Object.assign({ className: classes.avatar }, props), void 0), onClose: handleClose, onOpen: handleOpen, open: open, direction: 'down' }, { children: actions.map((action) => ((0, jsx_runtime_1.jsx)(SpeedDialAction_1.default, { icon: action.icon, tooltipTitle: action.name, onClick: () => handleAction(action) }, action.name))) }), void 0));
};
exports.default = UserMenu;
