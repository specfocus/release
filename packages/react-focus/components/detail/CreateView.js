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
exports.CreateView = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const prop_types_1 = __importDefault(require("prop-types"));
const material_1 = require("@mui/material");
const styles_1 = require("@mui/material/styles");
const core_1 = require("../../features/core");
const classnames_1 = __importDefault(require("classnames"));
const layout_1 = require("../layout");
const PREFIX = 'RaCreate';
const classes = {
    root: `${PREFIX}-root`,
    main: `${PREFIX}-main`,
    noActions: `${PREFIX}-noActions`,
    card: `${PREFIX}-card`,
};
const Root = (0, styles_1.styled)('div')(({ theme }) => ({
    [`&.${classes.root}`]: {},
    [`& .${classes.main}`]: {
        display: 'flex',
    },
    [`& .${classes.noActions}`]: {
        [theme.breakpoints.up('sm')]: {
            marginTop: '1em',
        },
    },
    [`& .${classes.card}`]: {
        flex: '1 1 auto',
    },
}));
const CreateView = (props) => {
    const { actions, aside, children, className, component: Content, title } = props, rest = __rest(props, ["actions", "aside", "children", "className", "component", "title"]);
    const { basePath, defaultTitle, hasList, record, redirect, resource, save, saving, version, } = (0, core_1.useCreateContext)(props);
    return ((0, jsx_runtime_1.jsxs)(Root, Object.assign({ className: (0, classnames_1.default)('create-page', classes.root, className) }, sanitizeRestProps(rest), { children: [(0, jsx_runtime_1.jsx)(layout_1.TitleForRecord, { title: title, record: record, defaultTitle: defaultTitle }, void 0), actions &&
                (0, react_1.cloneElement)(actions, Object.assign({ basePath,
                    resource,
                    hasList }, actions.props)), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: (0, classnames_1.default)(classes.main, {
                    [classes.noActions]: !actions,
                }) }, { children: [(0, jsx_runtime_1.jsx)(Content, Object.assign({ className: classes.card }, { children: (0, react_1.cloneElement)(react_1.Children.only(children), {
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
                            version,
                        }) }), void 0), aside &&
                        (0, react_1.cloneElement)(aside, {
                            basePath,
                            record,
                            resource,
                            save: typeof children.props.save === 'undefined'
                                ? save
                                : children.props.save,
                            saving,
                            version,
                        })] }), void 0)] }), void 0));
};
exports.CreateView = CreateView;
exports.CreateView.propTypes = {
    actions: prop_types_1.default.element,
    aside: prop_types_1.default.element,
    basePath: prop_types_1.default.string,
    children: prop_types_1.default.element,
    className: prop_types_1.default.string,
    defaultTitle: prop_types_1.default.any,
    hasList: prop_types_1.default.bool,
    hasShow: prop_types_1.default.bool,
    record: prop_types_1.default.object,
    redirect: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.bool]),
    resource: prop_types_1.default.string,
    save: prop_types_1.default.func,
    title: prop_types_1.default.node,
    onSuccess: prop_types_1.default.func,
    onFailure: prop_types_1.default.func,
    setOnSuccess: prop_types_1.default.func,
    setOnFailure: prop_types_1.default.func,
    setTransform: prop_types_1.default.func,
};
exports.CreateView.defaultProps = {
    component: material_1.Card,
};
const sanitizeRestProps = (_a) => {
    var { basePath = null, defaultTitle = null, hasCreate = null, hasEdit = null, hasList = null, hasShow = null, history = null, loaded = null, loading = null, location = null, match = null, onFailure = null, onFailureRef = null, onSuccess = null, onSuccessRef = null, options = null, permissions = null, save = null, saving = null, setOnFailure = null, setOnSuccess = null, setTransform = null, transform = null, transformRef = null } = _a, rest = __rest(_a, ["basePath", "defaultTitle", "hasCreate", "hasEdit", "hasList", "hasShow", "history", "loaded", "loading", "location", "match", "onFailure", "onFailureRef", "onSuccess", "onSuccessRef", "options", "permissions", "save", "saving", "setOnFailure", "setOnSuccess", "setTransform", "transform", "transformRef"]);
    return rest;
};
