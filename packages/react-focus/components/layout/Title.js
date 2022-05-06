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
exports.TitlePropType = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_dom_1 = require("react-dom");
const prop_types_1 = __importDefault(require("prop-types"));
const core_1 = require("../../features/core");
const Title = (_a) => {
    var { className, defaultTitle, record, title } = _a, rest = __rest(_a, ["className", "defaultTitle", "record", "title"]);
    const translate = (0, core_1.useTranslate)();
    const container = typeof document !== 'undefined'
        ? document.getElementById('../../app-title')
        : null;
    if (!container)
        return null;
    (0, core_1.warning)(!defaultTitle && !title, 'Missing title prop in <Title> element');
    const titleElement = !title ? ((0, jsx_runtime_1.jsx)("span", Object.assign({ className: className }, rest, { children: defaultTitle }), void 0)) : typeof title === 'string' ? ((0, jsx_runtime_1.jsx)("span", Object.assign({ className: className }, rest, { children: translate(title, { _: title }) }), void 0)) : ((0, react_1.cloneElement)(title, Object.assign({ className, record }, rest)));
    return (0, react_dom_1.createPortal)(titleElement, container);
};
exports.TitlePropType = prop_types_1.default.oneOfType([
    prop_types_1.default.string,
    prop_types_1.default.element,
]);
Title.propTypes = {
    defaultTitle: prop_types_1.default.string,
    className: prop_types_1.default.string,
    record: prop_types_1.default.any,
    title: exports.TitlePropType,
};
exports.default = Title;
