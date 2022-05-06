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
const styles_1 = require("@mui/material/styles");
const react_1 = require("react");
const prop_types_1 = __importDefault(require("prop-types"));
const material_1 = require("@mui/material");
const Add_1 = __importDefault(require("@mui/icons-material/Add"));
const classnames_1 = __importDefault(require("classnames"));
const react_router_dom_1 = require("react-router-dom");
const core_1 = require("../../features/core");
const Button_1 = __importStar(require("./Button"));
const PREFIX = 'RaCreateButton';
const classes = {
    floating: `${PREFIX}-floating`,
};
const StyledFab = (0, styles_1.styled)(material_1.Fab)(({ theme }) => ({
    [`&.${classes.floating}`]: {
        color: theme.palette.getContrastText(theme.palette.primary.main),
        margin: 0,
        top: 'auto',
        right: 20,
        bottom: 60,
        left: 'auto',
        position: 'fixed',
        zIndex: 1000,
    },
}));
/**
 * Opens the Create view of a given resource
 *
 * Renders as a regular button on desktop, and a Floating Action Button
 * on mobile.
 *
 * @example // basic usage
 * import { CreateButton } from '../../app';
 *
 * const CommentCreateButton = () => (
 *     <CreateButton basePath="/comments" label="Create comment" />
 * );
 */
const CreateButton = (props) => {
    const { basePath = '', className, classes: classesOverride, icon = defaultIcon, label = 'ra.action.create', scrollToTop = true, variant } = props, rest = __rest(props, ["basePath", "className", "classes", "icon", "label", "scrollToTop", "variant"]);
    const translate = (0, core_1.useTranslate)();
    const isSmall = (0, material_1.useMediaQuery)((theme) => theme.breakpoints.down('md'));
    const resource = (0, core_1.useResourceContext)();
    const location = (0, react_1.useMemo)(() => (basePath ? `${basePath}/create` : `/${resource}/create`), [basePath, resource]);
    return isSmall ? ((0, jsx_runtime_1.jsx)(StyledFab, Object.assign({ component: react_router_dom_1.Link, color: "primary", className: (0, classnames_1.default)(classes.floating, className), to: location, state: { _scrollToTop: scrollToTop }, "aria-label": label && translate(label) }, (0, Button_1.sanitizeButtonRestProps)(rest), { children: icon }), void 0)) : ((0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({ component: react_router_dom_1.Link, to: location, state: { _scrollToTop: scrollToTop }, className: className, label: label, variant: variant }, rest, { children: icon }), void 0));
};
const defaultIcon = (0, jsx_runtime_1.jsx)(Add_1.default, {}, void 0);
CreateButton.propTypes = {
    basePath: prop_types_1.default.string,
    classes: prop_types_1.default.object,
    className: prop_types_1.default.string,
    icon: prop_types_1.default.element,
    label: prop_types_1.default.string,
};
exports.default = (0, react_1.memo)(CreateButton, (prevProps, nextProps) => {
    return (prevProps.basePath === nextProps.basePath &&
        prevProps.label === nextProps.label &&
        prevProps.translate === nextProps.translate &&
        prevProps.to === nextProps.to &&
        prevProps.disabled === nextProps.disabled);
});
