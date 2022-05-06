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
const Refresh_1 = __importDefault(require("@mui/icons-material/Refresh"));
const core_1 = require("../../features/core");
const Button_1 = __importDefault(require("./Button"));
const RefreshButton = (props) => {
    const { label = 'ra.action.refresh', icon = defaultIcon, onClick } = props, rest = __rest(props, ["label", "icon", "onClick"]);
    const dispatch = (0, react_redux_1.useDispatch)();
    const handleClick = (0, react_1.useCallback)(event => {
        event.preventDefault();
        dispatch((0, core_1.refreshView)());
        if (typeof onClick === 'function') {
            onClick(event);
        }
    }, [dispatch, onClick]);
    return ((0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({ label: label, onClick: handleClick }, rest, { children: icon }), void 0));
};
const defaultIcon = (0, jsx_runtime_1.jsx)(Refresh_1.default, {}, void 0);
RefreshButton.propTypes = {
    label: prop_types_1.default.string,
    icon: prop_types_1.default.element,
    onClick: prop_types_1.default.func,
};
exports.default = RefreshButton;
