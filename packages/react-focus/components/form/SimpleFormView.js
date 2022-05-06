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
exports.SimpleFormView = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const react_1 = require("react");
const classnames_1 = __importDefault(require("classnames"));
const FormInput_1 = __importDefault(require("./FormInput"));
const prop_types_1 = __importDefault(require("prop-types"));
const Toolbar_1 = __importDefault(require("./Toolbar"));
const CardContentInner_1 = __importDefault(require("../layout/CardContentInner"));
const SimpleFormView = (_a) => {
    var { basePath, children, className, component: Component, handleSubmit, handleSubmitWithRedirect, invalid, margin, mutationMode, pristine, record, redirect, resource, saving, submitOnEnter, toolbar, undoable, variant, validating } = _a, rest = __rest(_a, ["basePath", "children", "className", "component", "handleSubmit", "handleSubmitWithRedirect", "invalid", "margin", "mutationMode", "pristine", "record", "redirect", "resource", "saving", "submitOnEnter", "toolbar", "undoable", "variant", "validating"]);
    return ((0, jsx_runtime_1.jsxs)("form", Object.assign({ className: (0, classnames_1.default)('simple-form', className) }, sanitizeRestProps(rest), { children: [(0, jsx_runtime_1.jsx)(Component, { children: react_1.Children.map(children, (input) => input && ((0, jsx_runtime_1.jsx)(FormInput_1.default, { basePath: basePath, input: input, record: record, resource: resource, variant: input.props.variant || variant, margin: input.props.margin || margin }, void 0))) }, void 0), toolbar &&
                React.cloneElement(toolbar, {
                    basePath,
                    handleSubmitWithRedirect,
                    handleSubmit,
                    invalid,
                    mutationMode,
                    pristine,
                    record,
                    redirect,
                    resource,
                    saving,
                    submitOnEnter,
                    validating,
                    undoable,
                })] }), void 0));
};
exports.SimpleFormView = SimpleFormView;
exports.SimpleFormView.propTypes = {
    basePath: prop_types_1.default.string,
    children: prop_types_1.default.node,
    className: prop_types_1.default.string,
    handleSubmit: prop_types_1.default.func,
    invalid: prop_types_1.default.bool,
    mutationMode: prop_types_1.default.oneOf(['pessimistic', 'optimistic', 'undoable']),
    pristine: prop_types_1.default.bool,
    // @ts-ignore
    record: prop_types_1.default.object,
    resource: prop_types_1.default.string,
    redirect: prop_types_1.default.oneOfType([
        prop_types_1.default.string,
        prop_types_1.default.bool,
        prop_types_1.default.func,
    ]),
    save: prop_types_1.default.func,
    saving: prop_types_1.default.bool,
    submitOnEnter: prop_types_1.default.bool,
    toolbar: prop_types_1.default.element,
    undoable: prop_types_1.default.bool,
    validate: prop_types_1.default.func,
};
exports.SimpleFormView.defaultProps = {
    submitOnEnter: true,
    toolbar: (0, jsx_runtime_1.jsx)(Toolbar_1.default, {}, void 0),
    component: CardContentInner_1.default,
};
const sanitizeRestProps = (_a) => {
    var { active, dirty, dirtyFields, dirtyFieldsSinceLastSubmit, dirtySinceLastSubmit, error, errors, form, hasSubmitErrors, hasValidationErrors, initialValues, modified = null, modifiedSinceLastSubmit, save = null, submitError, submitErrors, submitFailed, submitSucceeded, submitting, touched = null, valid, values, visited = null, __versions = null } = _a, props = __rest(_a, ["active", "dirty", "dirtyFields", "dirtyFieldsSinceLastSubmit", "dirtySinceLastSubmit", "error", "errors", "form", "hasSubmitErrors", "hasValidationErrors", "initialValues", "modified", "modifiedSinceLastSubmit", "save", "submitError", "submitErrors", "submitFailed", "submitSucceeded", "submitting", "touched", "valid", "values", "visited", "__versions"]);
    return props;
};
