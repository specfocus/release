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
exports.ListView = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const react_1 = require("react");
const prop_types_1 = __importDefault(require("prop-types"));
const Card_1 = __importDefault(require("@mui/material/Card"));
const classnames_1 = __importDefault(require("classnames"));
const core_1 = require("../../features/core");
const Title_1 = __importStar(require("../layout/Title"));
const ListToolbar_1 = __importDefault(require("./ListToolbar"));
const Pagination_1 = __importDefault(require("./pagination/Pagination"));
const BulkDeleteButton_1 = __importDefault(require("../button/BulkDeleteButton"));
const BulkActionsToolbar_1 = __importDefault(require("./BulkActionsToolbar"));
const ListActions_1 = __importDefault(require("./ListActions"));
const Empty_1 = require("./Empty");
const PREFIX = 'RaList';
const classes = {
    root: `${PREFIX}-root`,
    main: `${PREFIX}-main`,
    content: `${PREFIX}-content`,
    bulkActionsDisplayed: `${PREFIX}-bulkActionsDisplayed`,
    actions: `${PREFIX}-actions`,
    noResults: `${PREFIX}-noResults`,
};
const Root = (0, styles_1.styled)('div')(({ theme }) => ({
    [`&.${classes.root}`]: {},
    [`& .${classes.main}`]: {
        display: 'flex',
    },
    [`& .${classes.content}`]: {
        marginTop: 0,
        transition: theme.transitions.create('margin-top'),
        position: 'relative',
        flex: '1 1 auto',
        [theme.breakpoints.down('sm')]: {
            boxShadow: 'none',
        },
        overflow: 'inherit',
    },
    [`& .${classes.bulkActionsDisplayed}`]: {
        marginTop: -theme.spacing(8),
        transition: theme.transitions.create('margin-top'),
    },
    [`& .${classes.actions}`]: {
        zIndex: 2,
        display: 'flex',
        justifyContent: 'flex-end',
        flexWrap: 'wrap',
    },
    [`& .${classes.noResults}`]: { padding: 20 },
}));
const ListView = (props) => {
    const { actions, aside, filters, bulkActionButtons, pagination, children, className, component: Content, exporter = core_1.defaultExporter, title, empty } = props, rest = __rest(props, ["actions", "aside", "filters", "bulkActionButtons", "pagination", "children", "className", "component", "exporter", "title", "empty"]);
    const controllerProps = (0, core_1.getListControllerProps)(props); // deprecated, to be removed in v4
    const listContext = (0, core_1.useListContext)(props);
    const { defaultTitle, total, loaded, loading, filterValues, selectedIds, } = listContext;
    const version = (0, core_1.useVersion)();
    const renderList = () => ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(filters || actions) && ((0, jsx_runtime_1.jsx)(ListToolbar_1.default, Object.assign({ filters: filters }, controllerProps, { actions: actions, exporter: exporter }), void 0)), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: classes.main }, { children: [(0, jsx_runtime_1.jsxs)(Content, Object.assign({ className: (0, classnames_1.default)(classes.content, {
                            [classes.bulkActionsDisplayed]: selectedIds.length > 0,
                        }) }, { children: [bulkActionButtons !== false && bulkActionButtons && ((0, jsx_runtime_1.jsx)(BulkActionsToolbar_1.default, Object.assign({}, controllerProps, { children: bulkActionButtons }), void 0)), children &&
                                // @ts-ignore-line
                                (0, react_1.cloneElement)(react_1.Children.only(children), Object.assign(Object.assign({}, controllerProps), { hasBulkActions: bulkActionButtons !== false })), pagination && (0, react_1.cloneElement)(pagination, listContext)] }), version), aside && (0, react_1.cloneElement)(aside, listContext)] }), void 0)] }, void 0));
    const shouldRenderEmptyPage = loaded && !loading && total === 0 && !Object.keys(filterValues).length;
    return ((0, jsx_runtime_1.jsxs)(Root, Object.assign({ className: (0, classnames_1.default)('list-page', classes.root, className) }, sanitizeRestProps(rest), { children: [(0, jsx_runtime_1.jsx)(Title_1.default, { title: title, defaultTitle: defaultTitle }, void 0), shouldRenderEmptyPage && empty !== false
                // @ts-ignore
                ? (0, react_1.cloneElement)(empty, listContext)
                : renderList()] }), void 0));
};
exports.ListView = ListView;
exports.ListView.propTypes = {
    // @ts-ignore-line
    actions: prop_types_1.default.oneOfType([prop_types_1.default.bool, prop_types_1.default.element]),
    aside: prop_types_1.default.element,
    basePath: prop_types_1.default.string,
    // @ts-ignore-line
    bulkActionButtons: prop_types_1.default.oneOfType([prop_types_1.default.bool, prop_types_1.default.element]),
    children: prop_types_1.default.element,
    className: prop_types_1.default.string,
    component: core_1.ComponentPropType,
    // @ts-ignore-line
    currentSort: prop_types_1.default.shape({
        field: prop_types_1.default.string.isRequired,
        order: prop_types_1.default.string.isRequired,
    }),
    data: prop_types_1.default.any,
    defaultTitle: prop_types_1.default.string,
    displayedFilters: prop_types_1.default.object,
    // @ts-ignore-line
    exporter: prop_types_1.default.oneOfType([prop_types_1.default.func, prop_types_1.default.bool]),
    filterDefaultValues: prop_types_1.default.object,
    filters: prop_types_1.default.oneOfType([
        prop_types_1.default.element,
        prop_types_1.default.arrayOf(prop_types_1.default.element),
    ]),
    filterValues: prop_types_1.default.object,
    hasCreate: prop_types_1.default.bool,
    hideFilter: prop_types_1.default.func,
    ids: prop_types_1.default.array,
    loading: prop_types_1.default.bool,
    onSelect: prop_types_1.default.func,
    onToggleItem: prop_types_1.default.func,
    onUnselectItems: prop_types_1.default.func,
    page: prop_types_1.default.number,
    // @ts-ignore-line
    pagination: prop_types_1.default.oneOfType([prop_types_1.default.element, prop_types_1.default.bool]),
    perPage: prop_types_1.default.number,
    refresh: prop_types_1.default.func,
    resource: prop_types_1.default.string,
    selectedIds: prop_types_1.default.array,
    setFilters: prop_types_1.default.func,
    setPage: prop_types_1.default.func,
    setPerPage: prop_types_1.default.func,
    setSort: prop_types_1.default.func,
    showFilter: prop_types_1.default.func,
    title: Title_1.TitlePropType,
    total: prop_types_1.default.number,
    version: prop_types_1.default.number,
};
const DefaultBulkActionButtons = props => (0, jsx_runtime_1.jsx)(BulkDeleteButton_1.default, Object.assign({}, props), void 0);
exports.ListView.defaultProps = {
    actions: (0, jsx_runtime_1.jsx)(ListActions_1.default, {}, void 0),
    component: Card_1.default,
    bulkActionButtons: (0, jsx_runtime_1.jsx)(DefaultBulkActionButtons, {}, void 0),
    pagination: (0, jsx_runtime_1.jsx)(Pagination_1.default, {}, void 0),
    empty: (0, jsx_runtime_1.jsx)(Empty_1.Empty, {}, void 0),
};
const sanitizeRestProps = (_a) => {
    var { basePath = null, currentSort = null, data = null, defaultTitle = null, displayedFilters = null, filterDefaultValues = null, filterValues = null, hasCreate = null, hasEdit = null, hasList = null, hasShow = null, hideFilter = null, 
    // @ts-ignore
    history = null, ids = null, loading = null, loaded = null, 
    // @ts-ignore
    location = null, 
    // @ts-ignore
    match = null, onSelect = null, onToggleItem = null, onUnselectItems = null, options = null, page = null, permissions = null, perPage = null, refetch = null, resource = null, selectedIds = null, setFilters = null, setPage = null, setPerPage = null, setSort = null, showFilter = null, syncWithLocation = null, sort = null, total = null } = _a, rest = __rest(_a, ["basePath", "currentSort", "data", "defaultTitle", "displayedFilters", "filterDefaultValues", "filterValues", "hasCreate", "hasEdit", "hasList", "hasShow", "hideFilter", "history", "ids", "loading", "loaded", "location", "match", "onSelect", "onToggleItem", "onUnselectItems", "options", "page", "permissions", "perPage", "refetch", "resource", "selectedIds", "setFilters", "setPage", "setPerPage", "setSort", "showFilter", "syncWithLocation", "sort", "total"]);
    return rest;
};
exports.default = exports.ListView;
