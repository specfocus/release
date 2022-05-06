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
exports.EditView = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const react_1 = require("react");
const styles_1 = require("@mui/material/styles");
const prop_types_1 = __importDefault(require("prop-types"));
const material_1 = require("@mui/material");
const classnames_1 = __importDefault(require("classnames"));
const core_1 = require("../../features/core");
const EditActions_1 = require("./EditActions");
const TitleForRecord_1 = __importDefault(require("../layout/TitleForRecord"));
const PREFIX = 'RaEdit';
const classes = {
    root: `${PREFIX}-root`,
    main: `${PREFIX}-main`,
    noActions: `${PREFIX}-noActions`,
    card: `${PREFIX}-card`,
};
const Root = (0, styles_1.styled)('div')({
    [`&.${classes.root}`]: {},
    [`& .${classes.main}`]: {
        display: 'flex',
    },
    [`& .${classes.noActions}`]: {
        marginTop: '1em',
    },
    [`& .${classes.card}`]: {
        flex: '1 1 auto',
    },
});
const EditView = (props) => {
    const { actions, aside, children, className, component: Content, title, undoable, mutationMode } = props, rest = __rest(props, ["actions", "aside", "children", "className", "component", "title", "undoable", "mutationMode"]);
    const { basePath, defaultTitle, hasList, hasShow, record, redirect, resource, save, saving, version, } = (0, core_1.useEditContext)(props);
    const finalActions = typeof actions === 'undefined' && hasShow ? ((0, jsx_runtime_1.jsx)(EditActions_1.EditActions, {}, void 0)) : (actions);
    if (!children) {
        return null;
    }
    return ((0, jsx_runtime_1.jsxs)(Root, Object.assign({ className: (0, classnames_1.default)('edit-page', classes.root, className) }, sanitizeRestProps(rest), { children: [(0, jsx_runtime_1.jsx)(TitleForRecord_1.default, { title: title, record: record, defaultTitle: defaultTitle }, void 0), finalActions &&
                (0, react_1.cloneElement)(finalActions, Object.assign({ basePath, data: record, hasShow,
                    hasList,
                    resource }, finalActions.props)), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: (0, classnames_1.default)(classes.main, {
                    [classes.noActions]: !finalActions,
                }) }, { children: [(0, jsx_runtime_1.jsx)(Content, Object.assign({ className: classes.card }, { children: record ? ((0, react_1.cloneElement)(react_1.Children.only(children), {
                            basePath,
                            record,
                            redirect: typeof children.props.redirect === 'undefined'
                                ? redirect
                                : children.props.redirect,
                            resource,
                            save: typeof children.props.save === 'undefined'
                                ? save
                                : children.props.save,
                            saving,
                            undoable,
                            mutationMode,
                            version,
                        })) : ((0, jsx_runtime_1.jsx)(material_1.CardContent, { children: "\u00A0" }, void 0)) }), void 0), aside &&
                        React.cloneElement(aside, {
                            basePath,
                            record,
                            resource,
                            version,
                            save: typeof children.props.save === 'undefined'
                                ? save
                                : children.props.save,
                            saving,
                        })] }), void 0)] }), void 0));
};
exports.EditView = EditView;
exports.EditView.propTypes = {
    actions: prop_types_1.default.oneOfType([prop_types_1.default.element, prop_types_1.default.bool]),
    aside: prop_types_1.default.element,
    basePath: prop_types_1.default.string,
    children: prop_types_1.default.element,
    className: prop_types_1.default.string,
    component: core_1.ComponentPropType,
    defaultTitle: prop_types_1.default.any,
    hasList: prop_types_1.default.bool,
    hasShow: prop_types_1.default.bool,
    mutationMode: prop_types_1.default.oneOf(['pessimistic', 'optimistic', 'undoable']),
    record: prop_types_1.default.object,
    redirect: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.bool]),
    resource: prop_types_1.default.string,
    save: prop_types_1.default.func,
    title: prop_types_1.default.node,
    version: prop_types_1.default.number,
    onSuccess: prop_types_1.default.func,
    onFailure: prop_types_1.default.func,
    setOnSuccess: prop_types_1.default.func,
    setOnFailure: prop_types_1.default.func,
    setTransform: prop_types_1.default.func,
    undoable: prop_types_1.default.bool,
};
exports.EditView.defaultProps = {
    component: material_1.Card,
};
const sanitizeRestProps = (_a) => {
    var { basePath = null, defaultTitle = null, hasCreate = null, hasEdit = null, hasList = null, hasShow = null, history = null, id = null, loaded = null, loading = null, location = null, match = null, onFailure = null, onFailureRef = null, onSuccess = null, onSuccessRef = null, options = null, permissions = null, refetch = null, save = null, saving = null, setOnFailure = null, setOnSuccess = null, setTransform = null, successMessage = null, transform = null, transformRef = null } = _a, rest = __rest(_a, ["basePath", "defaultTitle", "hasCreate", "hasEdit", "hasList", "hasShow", "history", "id", "loaded", "loading", "location", "match", "onFailure", "onFailureRef", "onSuccess", "onSuccessRef", "options", "permissions", "refetch", "save", "saving", "setOnFailure", "setOnSuccess", "setTransform", "successMessage", "transform", "transformRef"]);
    return rest;
};
