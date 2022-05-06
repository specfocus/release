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
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("date-fns");
const react_final_form_1 = require("react-final-form");
const TextField_1 = require("../../../components/final-form/TextField");
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
const NumberField = ({ label: label, name, placeholder, readonly, required, schema }) => {
    const { domain } = schema;
    const textFieldProps = {
        name
    };
    if (readonly) {
        Object.assign(textFieldProps, {
            disabled: true,
            InputProps: {
                readOnly: true,
                inputProps: { min: 0, max: 10 }
            },
            variant: 'outlined',
            'aria-readonly': true,
        });
    }
    return ((0, jsx_runtime_1.jsx)(react_final_form_1.Field, { type: "number", name: name, render: (_a) => {
            var _b = _a.input, { name, value, onChange, checked } = _b, restInput = __rest(_b, ["name", "value", "onChange", "checked"]);
            return ((0, jsx_runtime_1.jsx)(TextField_1.TextField, Object.assign({ name: name, label: label, placeholder: placeholder, helperText: required && '* Required', type: "number", InputProps: restInput }, domainProps('string', domain), textFieldProps), void 0));
        } }, void 0));
};
exports.default = NumberField;
