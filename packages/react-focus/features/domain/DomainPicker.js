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
const MixedAutocomplete_1 = __importDefault(require("../../components/MixedAutocomplete"));
const react_1 = __importDefault(require("react"));
const store_1 = require("./store");
const string_1 = require("@specfocus/spec-focus/string");
const getOptions = (domain, key) => {
    if (Array.isArray(domain === null || domain === void 0 ? void 0 : domain.values) && key) {
        const map = domain.values.reduce((acc, item) => item instanceof Object ? Object.assign(acc, { [item[key]]: item }) : acc, {});
        return [Object.keys(map), map];
    }
    return [Object.keys((domain === null || domain === void 0 ? void 0 : domain.values) || {}), (domain === null || domain === void 0 ? void 0 : domain.values) || {}];
};
const DomainPicker = (_a) => {
    var { domain: key, labelKey, onChange, optionTemplate, template, transformFn, value: initialValue, valueKey } = _a, spread = __rest(_a, ["domain", "labelKey", "onChange", "optionTemplate", "template", "transformFn", "value", "valueKey"]);
    react_1.default.useEffect(() => {
        if (!key && !initialValue) {
            if (onChange) {
                onChange(undefined);
            }
        }
    }, [initialValue, key, onChange]);
    const domain = (0, store_1.useDomain)(key);
    /*
    const domains = useDomains([key]);
    const { [key]: domain } = domains;
    */
    const [options, map] = react_1.default.useMemo(() => getOptions(domain, valueKey), [domain]);
    const handleChange = react_1.default.useCallback((event, value, reason) => {
        if (onChange) {
            const { [value]: data } = map;
            if (data) {
                onChange(Object.assign(Object.assign({}, data), { value }));
            }
            else {
                onChange(value);
            }
        }
    }, [map, onChange]);
    const translations = react_1.default.useMemo(() => {
        if (!labelKey) {
            return;
        }
        return Object.entries(map).reduce((acc, [key, value]) => {
            const label = value[labelKey];
            return !label ? acc : Object.assign(acc, { [key]: label });
        }, {});
    }, [labelKey, map]);
    const props = react_1.default.useMemo(() => {
        const internalProps = Object.assign(Object.assign({}, spread), { disabled: !key, onChange: handleChange, options,
            translations, value: key ? initialValue : undefined });
        if (optionTemplate) {
            Object.assign(internalProps, {
                renderOption: (params, option) => {
                    let data = map[option];
                    if (!data) {
                        return option;
                    }
                    if (transformFn) {
                        data = transformFn(data);
                    }
                    return data ? ((0, jsx_runtime_1.jsx)("li", Object.assign({}, params, { dangerouslySetInnerHTML: { __html: (0, string_1.supplant)(optionTemplate, data) } }), void 0)) : option;
                }
            });
        }
        return internalProps;
    }, [initialValue, key, spread, translations]);
    return ((0, jsx_runtime_1.jsx)(MixedAutocomplete_1.default, Object.assign({}, props), void 0));
};
exports.default = DomainPicker;
