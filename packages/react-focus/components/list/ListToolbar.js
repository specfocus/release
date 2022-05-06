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
const prop_types_1 = __importDefault(require("prop-types"));
const material_1 = require("@mui/material");
const filter_1 = require("./filter");
const FilterContext_1 = require("./FilterContext");
const PREFIX = 'RaListToolbar';
const classes = {
    toolbar: `${PREFIX}-toolbar`,
    actions: `${PREFIX}-actions`,
};
const Root = (0, styles_1.styled)(material_1.Toolbar)(({ theme }) => ({
    [`&.${classes.toolbar}`]: {
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingRight: 0,
        [theme.breakpoints.up('xs')]: {
            paddingLeft: 0,
        },
        [theme.breakpoints.down('sm')]: {
            paddingLeft: theme.spacing(2),
            backgroundColor: theme.palette.background.paper,
        },
    },
    [`& .${classes.actions}`]: {
        paddingTop: theme.spacing(3),
        minHeight: theme.spacing(5),
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(1),
            backgroundColor: theme.palette.background.paper,
        },
    },
}));
const ListToolbar = (props) => {
    const { filters, actions } = props, rest = __rest(props, ["filters", "actions"]);
    return Array.isArray(filters) ? ((0, jsx_runtime_1.jsx)(FilterContext_1.FilterContext.Provider, Object.assign({ value: filters }, { children: (0, jsx_runtime_1.jsxs)(Root, Object.assign({ className: classes.toolbar }, { children: [(0, jsx_runtime_1.jsx)(filter_1.FilterForm, {}, void 0), (0, jsx_runtime_1.jsx)("span", {}, void 0), actions &&
                    React.cloneElement(actions, Object.assign(Object.assign(Object.assign({}, rest), { className: classes.actions }), actions.props))] }), void 0) }), void 0)) : ((0, jsx_runtime_1.jsxs)(Root, Object.assign({ className: classes.toolbar }, { children: [filters &&
                React.cloneElement(filters, Object.assign(Object.assign({}, rest), { context: 'form' })), (0, jsx_runtime_1.jsx)("span", {}, void 0), actions &&
                React.cloneElement(actions, Object.assign(Object.assign(Object.assign({}, rest), { className: classes.actions, filters }), actions.props))] }), void 0));
};
ListToolbar.propTypes = {
    filters: prop_types_1.default.oneOfType([
        prop_types_1.default.element,
        prop_types_1.default.arrayOf(prop_types_1.default.element),
    ]),
    // @ts-ignore
    actions: prop_types_1.default.oneOfType([prop_types_1.default.bool, prop_types_1.default.element]),
    // @ts-ignore
    exporter: prop_types_1.default.oneOfType([prop_types_1.default.func, prop_types_1.default.bool]),
};
exports.default = React.memo(ListToolbar);
