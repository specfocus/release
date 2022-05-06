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
const LocationOnOutlined_1 = __importDefault(require("@mui/icons-material/LocationOnOutlined"));
const DomainPicker_1 = __importDefault(require("../DomainPicker"));
const useCountryContext_1 = __importDefault(require("./useCountryContext"));
const RegionPicker = (_a) => {
    var { children, domain, labelKey } = _a, spreadProps = __rest(_a, ["children", "domain", "labelKey"]);
    const _b = (0, useCountryContext_1.default)(), { set } = _b, country = __rest(_b, ["set"]);
    const defaultDomain = country.code ? `location/country/${country.code}`.toLocaleLowerCase() : null;
    return ((0, jsx_runtime_1.jsx)(DomainPicker_1.default, Object.assign({ domain: domain || defaultDomain, labelKey: labelKey || 'name', buttonSx: { justifyContent: 'flex-start' } }, spreadProps, { children: ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(LocationOnOutlined_1.default, { fontSize: spreadProps.onClick ? 'small' : 'medium' }, void 0), children] }, void 0)) }), void 0));
};
exports.default = RegionPicker;
