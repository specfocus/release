"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const date_fns_1 = __importDefault(require("@date-io/date-fns"));
require("date-fns");
const react_i18next_1 = require("react-i18next");
const DatePicker_1 = require("../../../components/final-form/DatePicker");
// import ruLocale from 'date-fns/locale/ru';
const DOMAINS = __importStar(require("../../../lib/domains"));
function domainProps(type, domain) {
    const domains = DOMAINS;
    let props = domains[type.toUpperCase()] || {};
    let position = domain ? domain.length : -1;
    while (domain && position > 0) {
        const val = domains[domain];
        if (val) {
            props = val;
            break;
        }
        position = domain.lastIndexOf('_', position);
        domain = domain.slice(0, position);
    }
    return props;
}
;
const DateField = (_a) => {
    var { readonly, required, value } = _a, props = __rest(_a, ["readonly", "required", "value"]);
    const { t } = (0, react_i18next_1.useTranslation)();
    const { domain } = props;
    return ((0, jsx_runtime_1.jsx)(DatePicker_1.DatePicker, Object.assign({}, props, { 
        // format="yyyy-MM-dd"
        // placeholder={/*translate(placeholder, t) ||*/ "yyyy-MM-dd"}
        dateFunsUtils: date_fns_1.default, 
        // helperText={required && '* Required'}
        readOnly: readonly }, domainProps('string', domain)), void 0));
};
exports.default = DateField;
