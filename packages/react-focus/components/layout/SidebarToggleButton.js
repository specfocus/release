"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SidebarToggleButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const material_1 = require("@mui/material");
const Menu_1 = __importDefault(require("@mui/icons-material/Menu"));
const core_1 = require("../../features/core");
const useToggleSidebar_1 = require("./useToggleSidebar");
const PREFIX = 'RaSidebarToggleButton';
const classes = {
    menuButtonIconClosed: `${PREFIX}-menuButtonIconClosed`,
    menuButtonIconOpen: `${PREFIX}-menuButtonIconOpen`,
};
const StyledIconButton = (0, styles_1.styled)(material_1.IconButton)(({ theme }) => ({
    [`& .${classes.menuButtonIconClosed}`]: {
        transition: theme.transitions.create(['transform'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        transform: 'rotate(0deg)',
    },
    [`& .${classes.menuButtonIconOpen}`]: {
        transition: theme.transitions.create(['transform'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        transform: 'rotate(180deg)',
    },
}));
/**
 * A button that toggles the sidebar. Used by default in the <AppBar>.
 * @param props The component props
 * @param {String} props.className An optional class name to apply to the button

 */
const SidebarToggleButton = (props) => {
    const translate = (0, core_1.useTranslate)();
    const { className } = props;
    const [open, toggleSidebar] = (0, useToggleSidebar_1.useToggleSidebar)();
    return ((0, jsx_runtime_1.jsx)(material_1.Tooltip, Object.assign({ title: translate(open ? 'ra.action.close_menu' : 'ra.action.open_menu', {
            _: 'Open/Close menu',
        }), enterDelay: 500 }, { children: (0, jsx_runtime_1.jsx)(StyledIconButton, Object.assign({ color: "inherit", onClick: () => toggleSidebar(), className: className, size: "large" }, { children: (0, jsx_runtime_1.jsx)(Menu_1.default, { classes: {
                    root: open
                        ? classes.menuButtonIconOpen
                        : classes.menuButtonIconClosed,
                } }, void 0) }), void 0) }), void 0));
};
exports.SidebarToggleButton = SidebarToggleButton;
