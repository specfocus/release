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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRouter = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const useRouter = (...args) => {
    return (0, react_router_dom_1.useRoutes)(args);
};
exports.useRouter = useRouter;
const Navigation = (_a) => {
    var { children } = _a, router = __rest(_a, ["children"]);
    return ((0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, Object.assign({}, router, { children: children }), void 0));
};
exports.default = Navigation;
