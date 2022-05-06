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
exports.COUNTRY_OPTION_TEMPLATE = exports.countryTransformFn = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const PublicOutlined_1 = __importDefault(require("@mui/icons-material/PublicOutlined"));
const convertCountryCodeToFlag_1 = __importDefault(require("./convertCountryCodeToFlag"));
const DomainPicker_1 = __importDefault(require("../DomainPicker"));
const useCountryContext_1 = __importDefault(require("./useCountryContext"));
const countryTransformFn = (_a) => {
    var { code } = _a, spread = __rest(_a, ["code"]);
    return (Object.assign(Object.assign({}, spread), { code, icon: code ? (0, convertCountryCodeToFlag_1.default)(code) : null }));
};
exports.countryTransformFn = countryTransformFn;
exports.COUNTRY_OPTION_TEMPLATE = `<span>{icon}</span>
&nbsp;<span>{name} ({code}) +{phone}<span>
`;
const CountryPicker = (_a) => {
    var { children, domain, onChange } = _a, spreadProps = __rest(_a, ["children", "domain", "onChange"]);
    const _b = (0, useCountryContext_1.default)(), { code, set } = _b, spread = __rest(_b, ["code", "set"]);
    const handleChange = (country) => set(Object.assign(Object.assign({}, spread), country));
    return ((0, jsx_runtime_1.jsx)(DomainPicker_1.default, Object.assign({ domain: domain || 'location/country', labelKey: "name", onChange: onChange || handleChange, optionTemplate: exports.COUNTRY_OPTION_TEMPLATE, transformFn: exports.countryTransformFn, value: spreadProps.value || code || '' }, spreadProps, { children: ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(PublicOutlined_1.default, { fontSize: spreadProps.onClick ? 'small' : 'medium' }, void 0), children] }, void 0)) }), void 0));
};
exports.default = CountryPicker;
