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
exports.ToolButton = exports.useStyles = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const AddCircle_1 = __importDefault(require("@mui/icons-material/AddCircle"));
const Delete_1 = __importDefault(require("@mui/icons-material/Delete"));
const Edit_1 = __importDefault(require("@mui/icons-material/Edit"));
const Box_1 = __importDefault(require("@mui/material/Box"));
const IconButton_1 = __importDefault(require("@mui/material/IconButton"));
const Tooltip_1 = __importDefault(require("@mui/material/Tooltip"));
const styles_1 = require("@mui/styles");
const prop_types_1 = __importDefault(require("prop-types"));
const core_1 = require("../../features/core");
const ListContextProvider_1 = __importDefault(require("../../features/core/controller/ListContextProvider"));
const useListController_1 = __importDefault(require("../../features/core/controller/useListController"));
const Copyright_1 = __importDefault(require("./Copyright"));
const Frame_1 = __importDefault(require("./Frame"));
const toolButtons = {
    create: {
        Icon: AddCircle_1.default,
    },
    destroy: {
        Icon: Delete_1.default,
    },
    update: {
        Icon: Edit_1.default,
    }
};
exports.useStyles = (0, styles_1.makeStyles)((theme) => ({
    container: {
        display: 'block',
        overflow: 'auto',
        height: `calc(100% - ${theme.spacing(14)})`
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        bottom: 0,
        height: theme.spacing(6),
        left: 0,
        position: 'fixed',
        right: 0
    }
}));
const ToolButton = (_a) => {
    var { name, title } = _a, props = __rest(_a, ["name", "title"]);
    return ((0, jsx_runtime_1.jsx)(Tooltip_1.default, Object.assign({ title: title }, { children: (0, jsx_runtime_1.jsx)(IconButton_1.default, Object.assign({ color: "inherit" }, props), void 0) }), `data-${name}-button`));
};
exports.ToolButton = ToolButton;
function DataFrame(props) {
    (0, core_1.useCheckMinimumRequiredProps)('DataFrame', ['children'], props);
    const { children, footer, title, panes: widgets } = props, otherProps = __rest(props, ["children", "footer", "title", "panes"]);
    const classes = (0, exports.useStyles)();
    const controllerProps = (0, useListController_1.default)(props);
    console.log('DataFrame render', controllerProps);
    return ((0, jsx_runtime_1.jsx)(Frame_1.default, Object.assign({}, otherProps, { children: (0, jsx_runtime_1.jsx)(ListContextProvider_1.default, Object.assign({ value: controllerProps }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: classes.container }, { children: [children, (0, jsx_runtime_1.jsx)("footer", Object.assign({ className: classes.footer }, { children: footer || ((0, jsx_runtime_1.jsx)(Box_1.default, Object.assign({ pt: 2 }, { children: (0, jsx_runtime_1.jsx)(Copyright_1.default, {}, void 0) }), void 0)) }), void 0)] }), void 0) }), void 0) }), void 0));
}
exports.default = DataFrame;
DataFrame.propTypes = {
    // the props you can change
    // @ts-ignore-line
    actions: prop_types_1.default.oneOfType([prop_types_1.default.bool, prop_types_1.default.element]),
    aside: prop_types_1.default.element,
    // @ts-ignore-line
    bulkActionButtons: prop_types_1.default.oneOfType([prop_types_1.default.element, prop_types_1.default.bool]),
    children: prop_types_1.default.element,
    classes: prop_types_1.default.object,
    className: prop_types_1.default.string,
    filter: prop_types_1.default.object,
    filterDefaultValues: prop_types_1.default.object,
    filters: prop_types_1.default.oneOfType([
        prop_types_1.default.element,
        prop_types_1.default.arrayOf(prop_types_1.default.element),
    ]),
    // @ts-ignore-line
    pagination: prop_types_1.default.oneOfType([prop_types_1.default.element, prop_types_1.default.bool]),
    perPage: prop_types_1.default.number.isRequired,
    //@ts-ignore-line
    sort: prop_types_1.default.shape({
        field: prop_types_1.default.string,
        order: prop_types_1.default.string,
    }),
    title: prop_types_1.default.string,
    subtitle: prop_types_1.default.string,
    // the props managed by ../../app
    authProvider: prop_types_1.default.func,
    hasCreate: prop_types_1.default.bool,
    hasEdit: prop_types_1.default.bool,
    hasList: prop_types_1.default.bool,
    hasShow: prop_types_1.default.bool,
    location: prop_types_1.default.any,
    match: prop_types_1.default.any,
    path: prop_types_1.default.string,
    resource: prop_types_1.default.string,
    syncWithLocation: prop_types_1.default.bool,
};
DataFrame.defaultProps = {
    filter: {},
    perPage: 10,
};
