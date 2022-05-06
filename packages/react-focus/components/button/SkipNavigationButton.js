"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const Button_1 = __importDefault(require("./Button"));
const core_1 = require("../../features/core");
const classnames_1 = __importDefault(require("classnames"));
const PREFIX = 'RaSkipToContentButton';
const classes = {
    skipToContentButton: `${PREFIX}-skipToContentButton`,
};
const StyledButton = (0, styles_1.styled)(Button_1.default)(({ theme }) => ({
    [`&.${classes.skipToContentButton}`]: {
        position: 'fixed',
        padding: theme.spacing(1),
        backgroundColor: theme.palette.background.default,
        color: theme.palette.getContrastText(theme.palette.background.default),
        transition: theme.transitions.create(['top', 'opacity'], {
            easing: theme.transitions.easing.easeIn,
            duration: theme.transitions.duration.leavingScreen,
        }),
        left: theme.spacing(2),
        top: theme.spacing(-10),
        zIndex: 5000,
        '&:hover': {
            opacity: 0.8,
            backgroundColor: theme.palette.background.default,
        },
        '&:focus': {
            top: theme.spacing(2),
            transition: theme.transitions.create(['top', 'opacity'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
    },
}));
const skipToContent = () => {
    if (typeof document === 'undefined')
        return;
    const element = document.getElementById('main-content');
    if (!element) {
        if (process.env.NODE_ENV !== 'production') {
            console.warn('No element with id "main-content" was found. Ensure the element that contains your main content has an id of "main-content".');
        }
        return;
    }
    element.setAttribute('tabIndex', '-1');
    element.focus();
    element.blur();
    element.removeAttribute('tabIndex');
};
const SkipNavigationButton = () => {
    const translate = (0, core_1.useTranslate)();
    return ((0, jsx_runtime_1.jsx)(StyledButton, { onClick: skipToContent, className: (0, classnames_1.default)(classes.skipToContentButton, 'skip-nav-button'), label: translate('ra.navigation.skip_nav'), variant: "contained" }, void 0));
};
exports.default = SkipNavigationButton;
