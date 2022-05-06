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
exports.CloneButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const prop_types_1 = __importDefault(require("prop-types"));
const Queue_1 = __importDefault(require("@mui/icons-material/Queue"));
const react_router_dom_1 = require("react-router-dom");
const query_string_1 = require("query-string");
const core_1 = require("../../features/core");
const Button_1 = __importDefault(require("./Button"));
const CloneButton = (props) => {
    const { basePath = '', label = 'ra.action.clone', scrollToTop = true, record, icon = defaultIcon } = props, rest = __rest(props, ["basePath", "label", "scrollToTop", "record", "icon"]);
    const resource = (0, core_1.useResourceContext)();
    const pathname = basePath ? `${basePath}/create` : `/${resource}/create`;
    return ((0, jsx_runtime_1.jsx)(Button_1.default, Object.assign({ component: react_router_dom_1.Link, 
        // @ts-ignore
        to: record
            ? {
                pathname,
                search: (0, query_string_1.stringify)({
                    source: JSON.stringify(omitId(record)),
                })
            }
            : pathname, label: label, state: { _scrollToTop: scrollToTop }, onClick: stopPropagation }, rest, { children: icon }), void 0));
};
exports.CloneButton = CloneButton;
const defaultIcon = (0, jsx_runtime_1.jsx)(Queue_1.default, {}, void 0);
// useful to prevent click bubbling in a datagrid with rowClick
const stopPropagation = e => e.stopPropagation();
const omitId = (_a) => {
    var { id } = _a, rest = __rest(_a, ["id"]);
    return rest;
};
exports.CloneButton.propTypes = {
    basePath: prop_types_1.default.string,
    icon: prop_types_1.default.element,
    label: prop_types_1.default.string,
    record: prop_types_1.default.any,
};
exports.default = (0, react_1.memo)(exports.CloneButton);
