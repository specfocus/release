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
exports.ShowView = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const prop_types_1 = __importDefault(require("prop-types"));
const styles_1 = require("@mui/material/styles");
const material_1 = require("@mui/material");
const classnames_1 = __importDefault(require("classnames"));
const core_1 = require("../../features/core");
const ShowActions_1 = require("./ShowActions");
const TitleForRecord_1 = __importDefault(require("../layout/TitleForRecord"));
const PREFIX = 'RaShow';
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
const ShowView = (props) => {
    const { actions, aside, children, className, component: Content, title } = props, rest = __rest(props, ["actions", "aside", "children", "className", "component", "title"]);
    const { basePath, defaultTitle, hasList, record, resource, version, } = (0, core_1.useShowContext)(props);
    const { hasEdit } = (0, core_1.useResourceDefinition)(props);
    const finalActions = typeof actions === 'undefined' && hasEdit ? ((0, jsx_runtime_1.jsx)(ShowActions_1.ShowActions, {}, void 0)) : (actions);
    if (!children) {
        return null;
    }
    return ((0, jsx_runtime_1.jsxs)(Root, Object.assign({ className: (0, classnames_1.default)('show-page', classes.root, className) }, sanitizeRestProps(rest), { children: [(0, jsx_runtime_1.jsx)(TitleForRecord_1.default, { title: title, record: record, defaultTitle: defaultTitle }, void 0), finalActions &&
                (0, react_1.cloneElement)(finalActions, Object.assign({ basePath, data: record, hasList,
                    hasEdit,
                    resource }, finalActions.props)), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: (0, classnames_1.default)(classes.main, {
                    [classes.noActions]: !finalActions,
                }) }, { children: [(0, jsx_runtime_1.jsx)(Content, Object.assign({ className: classes.card }, { children: record &&
                            (0, react_1.cloneElement)(react_1.Children.only(children), {
                                resource,
                                basePath,
                                record,
                                version,
                            }) }), void 0), aside &&
                        (0, react_1.cloneElement)(aside, {
                            resource,
                            basePath,
                            record,
                            version,
                        })] }), void 0)] }), void 0));
};
exports.ShowView = ShowView;
exports.ShowView.propTypes = {
    actions: prop_types_1.default.oneOfType([prop_types_1.default.element, prop_types_1.default.bool]),
    aside: prop_types_1.default.element,
    basePath: prop_types_1.default.string,
    children: prop_types_1.default.element,
    className: prop_types_1.default.string,
    defaultTitle: prop_types_1.default.any,
    hasEdit: prop_types_1.default.bool,
    hasList: prop_types_1.default.bool,
    loading: prop_types_1.default.bool,
    loaded: prop_types_1.default.bool,
    record: prop_types_1.default.object,
    resource: prop_types_1.default.string,
    title: prop_types_1.default.any,
    version: prop_types_1.default.node,
};
exports.ShowView.defaultProps = {
    component: material_1.Card,
};
const sanitizeRestProps = (_a) => {
    var { basePath = null, defaultTitle = null, hasCreate = null, hasEdit = null, hasList = null, hasShow = null, history = null, id = null, loaded = null, loading = null, location = null, match = null, options = null, refetch = null, permissions = null } = _a, rest = __rest(_a, ["basePath", "defaultTitle", "hasCreate", "hasEdit", "hasList", "hasShow", "history", "id", "loaded", "loading", "location", "match", "options", "refetch", "permissions"]);
    return rest;
};
