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
const react_1 = require("react");
const prop_types_1 = __importDefault(require("prop-types"));
const react_redux_1 = require("react-redux");
const Tooltip_1 = __importDefault(require("@mui/material/Tooltip"));
const IconButton_1 = __importDefault(require("@mui/material/IconButton"));
const Refresh_1 = __importDefault(require("@mui/icons-material/Refresh"));
const core_1 = require("../../features/core");
const RefreshIconButton = (props) => {
    const { label = 'ra.action.refresh', icon = defaultIcon, onClick, className } = props, rest = __rest(props, ["label", "icon", "onClick", "className"]);
    const dispatch = (0, react_redux_1.useDispatch)();
    const translate = (0, core_1.useTranslate)();
    const handleClick = (0, react_1.useCallback)(event => {
        event.preventDefault();
        dispatch((0, core_1.refreshView)());
        if (typeof onClick === 'function') {
            onClick(event);
        }
    }, [dispatch, onClick]);
    return ((0, jsx_runtime_1.jsx)(Tooltip_1.default, Object.assign({ title: label && translate(label, { _: label }) }, { children: (0, jsx_runtime_1.jsx)(IconButton_1.default, Object.assign({ "aria-label": label && translate(label, { _: label }), className: className, color: "inherit", onClick: handleClick }, rest, { size: "large" }, { children: icon }), void 0) }), void 0));
};
const defaultIcon = (0, jsx_runtime_1.jsx)(Refresh_1.default, {}, void 0);
RefreshIconButton.propTypes = {
    className: prop_types_1.default.string,
    label: prop_types_1.default.string,
    icon: prop_types_1.default.element,
};
exports.default = RefreshIconButton;
