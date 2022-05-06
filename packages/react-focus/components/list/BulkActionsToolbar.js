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
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const react_1 = require("react");
const prop_types_1 = __importDefault(require("prop-types"));
const classnames_1 = __importDefault(require("classnames"));
const Toolbar_1 = __importDefault(require("@mui/material/Toolbar"));
const Typography_1 = __importDefault(require("@mui/material/Typography"));
const styles_2 = require("@mui/material/styles");
const IconButton_1 = __importDefault(require("@mui/material/IconButton"));
const Close_1 = __importDefault(require("@mui/icons-material/Close"));
const core_1 = require("../../features/core");
const TopToolbar_1 = __importDefault(require("../layout/TopToolbar"));
const PREFIX = 'RaBulkActionsToolbar';
const classes = {
    toolbar: `${PREFIX}-toolbar`,
    topToolbar: `${PREFIX}-topToolbar`,
    buttons: `${PREFIX}-buttons`,
    collapsed: `${PREFIX}-collapsed`,
    title: `${PREFIX}-title`,
    icon: `${PREFIX}-icon`,
};
const Root = (0, styles_1.styled)(Toolbar_1.default)(({ theme }) => ({
    [`&.${classes.toolbar}`]: {
        zIndex: 3,
        color: theme.palette.mode === 'light'
            ? theme.palette.primary.main
            : theme.palette.text.primary,
        justifyContent: 'space-between',
        backgroundColor: theme.palette.mode === 'light'
            ? (0, styles_2.alpha)(theme.palette.primary.light, 0.85)
            : theme.palette.primary.dark,
        minHeight: theme.spacing(8),
        height: theme.spacing(8),
        transition: `${theme.transitions.create('height')}, ${theme.transitions.create('min-height')}`,
    },
    [`& .${classes.topToolbar}`]: {
        paddingTop: theme.spacing(2),
    },
    [`& .${classes.buttons}`]: {},
    [`&.${classes.toolbar}.${classes.collapsed}`]: {
        minHeight: 0,
        height: 0,
        overflowY: 'hidden',
    },
    [`& .${classes.title}`]: {
        display: 'flex',
        flex: '0 0 auto',
    },
    [`& .${classes.icon}`]: {
        marginLeft: '-0.5em',
        marginRight: '0.5em',
    },
}));
const BulkActionsToolbar = (props) => {
    const { label = 'ra.action.bulk_actions', children } = props, rest = __rest(props, ["label", "children"]);
    const { basePath, filterValues, resource, selectedIds, onUnselectItems, } = (0, core_1.useListContext)(props);
    const translate = (0, core_1.useTranslate)();
    return ((0, jsx_runtime_1.jsxs)(Root, Object.assign({ "data-test": "bulk-actions-toolbar", className: (0, classnames_1.default)(classes.toolbar, {
            [classes.collapsed]: selectedIds.length === 0,
        }) }, (0, core_1.sanitizeListRestProps)(rest), { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: classes.title }, { children: [(0, jsx_runtime_1.jsx)(IconButton_1.default, Object.assign({ className: classes.icon, "aria-label": translate('ra.action.unselect'), title: translate('ra.action.unselect'), onClick: onUnselectItems, size: "small" }, { children: (0, jsx_runtime_1.jsx)(Close_1.default, { fontSize: "small" }, void 0) }), void 0), (0, jsx_runtime_1.jsx)(Typography_1.default, Object.assign({ color: "inherit", variant: "subtitle1" }, { children: translate(label, {
                            _: label,
                            smart_count: selectedIds.length,
                        }) }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)(TopToolbar_1.default, Object.assign({ className: classes.topToolbar }, { children: react_1.Children.map(children, child => (0, react_1.isValidElement)(child)
                    ? (0, react_1.cloneElement)(child, {
                        basePath,
                        filterValues,
                        resource,
                        selectedIds,
                    })
                    : null) }), void 0)] }), void 0));
};
BulkActionsToolbar.propTypes = {
    children: prop_types_1.default.node,
    label: prop_types_1.default.string,
};
exports.default = BulkActionsToolbar;
