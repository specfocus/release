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
const prop_types_1 = __importDefault(require("prop-types"));
const Dashboard_1 = __importDefault(require("@mui/icons-material/Dashboard"));
const core_1 = require("../../features/core");
const MenuItemLink_1 = __importDefault(require("./MenuItemLink"));
const DashboardMenuItem = (props) => {
    const { locale } = props, rest = __rest(props, ["locale"]);
    const translate = (0, core_1.useTranslate)();
    return ((0, jsx_runtime_1.jsx)(MenuItemLink_1.default, Object.assign({ to: "/", primaryText: translate('ra.page.dashboard'), leftIcon: (0, jsx_runtime_1.jsx)(Dashboard_1.default, {}, void 0) }, rest), void 0));
};
DashboardMenuItem.propTypes = {
    classes: prop_types_1.default.object,
    locale: prop_types_1.default.string,
    onClick: prop_types_1.default.func,
    dense: prop_types_1.default.bool,
    sidebarIsOpen: prop_types_1.default.bool,
};
exports.default = DashboardMenuItem;
