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
const FilterList_1 = __importDefault(require("@mui/icons-material/FilterList"));
const Menu_1 = __importDefault(require("@mui/material/Menu"));
const styles_1 = require("@mui/material/styles");
const classnames_1 = __importDefault(require("classnames"));
const get_1 = __importDefault(require("lodash/get"));
const prop_types_1 = __importDefault(require("prop-types"));
const react_1 = require("react");
const core_1 = require("../../../features/core");
const Button_1 = __importDefault(require("../../button/Button"));
const FilterContext_1 = require("../FilterContext");
const FilterButtonMenuItem_1 = require("./FilterButtonMenuItem");
const PREFIX = 'RaFilterButton';
const classes = {
    root: `${PREFIX}-root`,
};
const Root = (0, styles_1.styled)('div')(({ theme }) => ({
    [`&.${classes.root}`]: { display: 'inline-block' },
}));
const FilterButton = (props) => {
    const { filters: filtersProp, className } = props, rest = __rest(props, ["filters", "className"]);
    const filters = (0, react_1.useContext)(FilterContext_1.FilterContext) || filtersProp;
    const resource = (0, core_1.useResourceContext)(props);
    const { displayedFilters = {}, filterValues, showFilter } = (0, core_1.useListContext)(props);
    const [open, setOpen] = (0, react_1.useState)(false);
    const anchorEl = (0, react_1.useRef)();
    const hiddenFilters = filters.filter((filterElement) => !filterElement.props.alwaysOn &&
        !displayedFilters[filterElement.props.source] &&
        typeof (0, get_1.default)(filterValues, filterElement.props.source) ===
            'undefined');
    const handleClickButton = (0, react_1.useCallback)(event => {
        // This prevents ghost click.
        event.preventDefault();
        setOpen(true);
        anchorEl.current = event.currentTarget;
    }, [anchorEl, setOpen]);
    const handleRequestClose = (0, react_1.useCallback)(() => {
        setOpen(false);
    }, [setOpen]);
    const handleShow = (0, react_1.useCallback)(({ source, defaultValue }) => {
        showFilter(source, defaultValue);
        setOpen(false);
    }, [showFilter, setOpen]);
    if (hiddenFilters.length === 0)
        return null;
    return ((0, jsx_runtime_1.jsxs)(Root, Object.assign({ className: (0, classnames_1.default)(classes.root, className) }, sanitizeRestProps(rest), { children: [(0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({ className: "add-filter", label: "ra.action.add_filter", onClick: handleClickButton }, { children: (0, jsx_runtime_1.jsx)(FilterList_1.default, {}, void 0) }), void 0), (0, jsx_runtime_1.jsx)(Menu_1.default, Object.assign({ open: open, anchorEl: anchorEl.current, onClose: handleRequestClose }, { children: hiddenFilters.map((filterElement) => ((0, jsx_runtime_1.jsx)(FilterButtonMenuItem_1.FilterButtonMenuItem, { filter: filterElement, resource: resource, onShow: handleShow }, filterElement.props.source))) }), void 0)] }), void 0));
};
const sanitizeRestProps = (_a) => {
    var { displayedFilters = null, filterValues = null, showFilter = null } = _a, rest = __rest(_a, ["displayedFilters", "filterValues", "showFilter"]);
    return rest;
};
FilterButton.propTypes = {
    resource: prop_types_1.default.string,
    filters: prop_types_1.default.arrayOf(prop_types_1.default.node),
    displayedFilters: prop_types_1.default.object,
    filterValues: prop_types_1.default.object,
    showFilter: prop_types_1.default.func,
    className: prop_types_1.default.string,
};
exports.default = FilterButton;
