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
exports.TabbedFormView = exports.TabbedFormClasses = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const react_1 = require("react");
const prop_types_1 = __importDefault(require("prop-types"));
const classnames_1 = __importDefault(require("classnames"));
const react_router_dom_1 = require("react-router-dom");
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const core_1 = require("../../features/core");
const Toolbar_1 = __importDefault(require("./Toolbar"));
const TabbedFormTabs_1 = __importStar(require("./TabbedFormTabs"));
const PREFIX = 'RaTabbedForm';
exports.TabbedFormClasses = {
    errorTabButton: `${PREFIX}-errorTabButton`,
    content: `${PREFIX}-content`,
};
const Root = (0, styles_1.styled)('form')(({ theme }) => ({
    [`&.${exports.TabbedFormClasses.errorTabButton}`]: {
        color: theme.palette.error.main,
    },
    [`&.${exports.TabbedFormClasses.content}`]: {
        paddingTop: theme.spacing(1),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
    },
}));
const TabbedFormView = (props) => {
    const { basePath, children, className, handleSubmit, handleSubmitWithRedirect, invalid, mutationMode, pristine, record, redirect: defaultRedirect, resource, saving, submitOnEnter, syncWithLocation = true, tabs, toolbar, undoable, variant, margin, validating } = props, rest = __rest(props, ["basePath", "children", "className", "handleSubmit", "handleSubmitWithRedirect", "invalid", "mutationMode", "pristine", "record", "redirect", "resource", "saving", "submitOnEnter", "syncWithLocation", "tabs", "toolbar", "undoable", "variant", "margin", "validating"]);
    // TODO: logic may be broken after migration to react-router 6
    const location = (0, react_router_dom_1.useLocation)();
    const match = (0, react_router_dom_1.useMatch)(location.pathname);
    const url = match ? match.pathname : location.pathname;
    const [tabValue, setTabValue] = (0, react_1.useState)(0);
    const handleTabChange = (event, value) => {
        if (!syncWithLocation) {
            setTabValue(value);
        }
    };
    return ((0, jsx_runtime_1.jsxs)(Root, Object.assign({ className: (0, classnames_1.default)('tabbed-form', className) }, sanitizeRestProps(rest), { children: [(0, react_1.cloneElement)(
            // @ts-ignore
            tabs, {
                classes: exports.TabbedFormClasses,
                url,
                syncWithLocation,
                onChange: handleTabChange,
                value: tabValue,
            }, children), (0, jsx_runtime_1.jsx)(material_1.Divider, {}, void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: exports.TabbedFormClasses.content }, { children: react_1.Children.map(children, (tab, index) => {
                    if (!tab) {
                        return;
                    }
                    const tabPath = (0, TabbedFormTabs_1.getTabFullPath)(tab, index, url);
                    return ((0, jsx_runtime_1.jsx)(react_router_dom_1.Route, Object.assign({ path: (0, core_1.escapePath)(tabPath) }, { children: routeProps => (0, react_1.isValidElement)(tab)
                            ? React.cloneElement(tab, {
                                intent: 'content',
                                classes: exports.TabbedFormClasses,
                                resource,
                                record,
                                basePath,
                                hidden: syncWithLocation
                                    ? !routeProps.match
                                    : tabValue !== index,
                                variant: tab.props.variant || variant,
                                margin: tab.props.margin || margin,
                                value: syncWithLocation
                                    ? tabPath
                                    : index,
                            })
                            : null }), void 0));
                }) }), void 0), toolbar &&
                React.cloneElement(toolbar, {
                    basePath,
                    className: 'toolbar',
                    handleSubmitWithRedirect,
                    handleSubmit,
                    invalid,
                    mutationMode,
                    pristine,
                    record,
                    redirect: defaultRedirect,
                    resource,
                    saving,
                    submitOnEnter,
                    validating,
                    undoable,
                })] }), void 0));
};
exports.TabbedFormView = TabbedFormView;
exports.TabbedFormView.propTypes = {
    basePath: prop_types_1.default.string,
    children: prop_types_1.default.node,
    className: prop_types_1.default.string,
    defaultValue: prop_types_1.default.oneOfType([prop_types_1.default.object, prop_types_1.default.func]),
    handleSubmit: prop_types_1.default.func,
    initialValues: prop_types_1.default.oneOfType([prop_types_1.default.object, prop_types_1.default.func]),
    invalid: prop_types_1.default.bool,
    location: prop_types_1.default.object,
    match: prop_types_1.default.object,
    mutationMode: prop_types_1.default.oneOf(['pessimistic', 'optimistic', 'undoable']),
    pristine: prop_types_1.default.bool,
    // @ts-ignore
    record: prop_types_1.default.object,
    redirect: prop_types_1.default.oneOfType([
        prop_types_1.default.string,
        prop_types_1.default.bool,
        prop_types_1.default.func,
    ]),
    resource: prop_types_1.default.string,
    save: prop_types_1.default.func,
    saving: prop_types_1.default.bool,
    submitOnEnter: prop_types_1.default.bool,
    tabs: prop_types_1.default.element.isRequired,
    toolbar: prop_types_1.default.element,
    translate: prop_types_1.default.func,
    undoable: prop_types_1.default.bool,
    validate: prop_types_1.default.func,
    value: prop_types_1.default.number,
    version: prop_types_1.default.number,
};
exports.TabbedFormView.defaultProps = {
    submitOnEnter: true,
    tabs: (0, jsx_runtime_1.jsx)(TabbedFormTabs_1.default, {}, void 0),
    toolbar: (0, jsx_runtime_1.jsx)(Toolbar_1.default, {}, void 0),
};
const sanitizeRestProps = (_a) => {
    var { active, dirty, dirtyFields, dirtyFieldsSinceLastSubmit, dirtySinceLastSubmit, error, errors, form, hasSubmitErrors, hasValidationErrors, initialValues, modified = null, modifiedSinceLastSubmit, save = null, submitError, submitErrors, submitFailed, submitSucceeded, submitting, touched = null, valid, values, visited = null, __versions = null } = _a, props = __rest(_a, ["active", "dirty", "dirtyFields", "dirtyFieldsSinceLastSubmit", "dirtySinceLastSubmit", "error", "errors", "form", "hasSubmitErrors", "hasValidationErrors", "initialValues", "modified", "modifiedSinceLastSubmit", "save", "submitError", "submitErrors", "submitFailed", "submitSucceeded", "submitting", "touched", "valid", "values", "visited", "__versions"]);
    return props;
};
