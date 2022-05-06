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
const React = __importStar(require("react"));
const styles_1 = require("@mui/material/styles");
const react_1 = require("react");
const prop_types_1 = __importDefault(require("prop-types"));
const material_1 = require("@mui/material");
const PowerSettingsNew_1 = __importDefault(require("@mui/icons-material/PowerSettingsNew"));
const classnames_1 = __importDefault(require("classnames"));
const core_1 = require("../../features/core");
const PREFIX = 'RaLogout';
const classes = {
    menuItem: `${PREFIX}-menuItem`,
    icon: `${PREFIX}-icon`,
};
const StyledMenuItem = (0, styles_1.styled)(material_1.MenuItem)(({ theme }) => ({
    [`&.${classes.menuItem}`]: {
        color: theme.palette.text.secondary,
    },
    [`& .${classes.icon}`]: { minWidth: theme.spacing(5) },
}));
/**
 * Logout button component, to be passed to the Admin component
 *
 * Used for the Logout Menu item in the sidebar
 */
const LogoutWithRef = React.forwardRef(function Logout(props, ref) {
    const { className, classes: classesOverride, redirectTo, icon } = props, rest = __rest(props, ["className", "classes", "redirectTo", "icon"]);
    const isXSmall = (0, material_1.useMediaQuery)((theme) => theme.breakpoints.down('sm'));
    const translate = (0, core_1.useTranslate)();
    const logout = (0, core_1.useLogout)();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleClick = (0, react_1.useCallback)(() => logout(null, redirectTo, false), [
        redirectTo,
        logout,
    ]);
    return ((0, jsx_runtime_1.jsxs)(StyledMenuItem, Object.assign({ className: (0, classnames_1.default)('logout', classes.menuItem, className), onClick: handleClick, ref: ref, 
        // @ts-ignore
        component: isXSmall ? 'span' : 'li' }, rest, { children: [(0, jsx_runtime_1.jsx)(material_1.ListItemIcon, Object.assign({ className: classes.icon }, { children: icon ? icon : (0, jsx_runtime_1.jsx)(PowerSettingsNew_1.default, {}, void 0) }), void 0), translate('ra.auth.logout')] }), void 0));
});
LogoutWithRef.propTypes = {
    className: prop_types_1.default.string,
    redirectTo: prop_types_1.default.string,
    icon: prop_types_1.default.element,
};
exports.default = LogoutWithRef;
