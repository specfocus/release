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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_final_form_1 = require("react-final-form");
const react_i18next_1 = require("react-i18next");
const DOMAINS = __importStar(require("../../lib/domains"));
const ObjectSchema_1 = require("../../lib/ObjectSchema");
const StringSchema_1 = require("../../lib/StringSchema");
;
const getIn = (key, rec) => rec && rec[key];
const textIn = (key, t, rec) => {
    const val = getIn(key, rec);
    if (typeof val === 'string') {
        return { label: t(val) || val };
    }
    const trans = obj => Object.entries(obj)
        .reduce((acc, [key, val]) => typeof val === 'string'
        ? Object.assign(acc, { [key]: t(val) || val })
        : Object.assign(acc, { [key]: trans(val) }), {});
    return trans(val || { label: key });
};
const useFieldset = ({ context, name: fieldset, schema: { fields } }) => {
    const api = (0, react_final_form_1.useForm)();
    const { batch, change } = api;
    const { t } = (0, react_i18next_1.useTranslation)();
    const { classes, dispatch, dependencies, immutables, i18n, requires, styles, values, variants } = context;
    const getName = (key) => fieldset ? `${fieldset}.${key}` : key;
    const getDependencies = (name) => {
        if (!name) {
            return;
        }
        const dependency = getIn(name, dependencies);
        if (typeof dependency === 'string') {
            return { [dependency]: values[dependency] };
        }
        else if (Array.isArray(dependency)) {
            return dependency.reduce((acc, item) => Object.assign(acc, { [item]: values[item] }), {});
        }
        else if ((0, ObjectSchema_1.isSimpleObject)(dependency)) {
            return Object.entries(dependency)
                .reduce((acc, [item]) => Object.assign(acc, { [item]: values[item] }), {});
        }
        ;
    };
    const isReady = (name) => {
        if (!name) {
            return true;
        }
        const dependency = getIn(name, dependencies);
        if (typeof dependency === 'string') {
            return Boolean(values[dependency]);
        }
        else if (Array.isArray(dependency)) {
            return dependency.some(name => !Boolean(values[name]));
        }
        else if ((0, ObjectSchema_1.isSimpleObject)(dependency)) {
            return Object.entries(dependency) // TODO: also check for val being an array of values or a sift expre
                .map(([key, val]) => ([values[key], val]))
                .filter(([lhs, rhs]) => lhs != rhs)
                .length === 0;
        }
        return true;
    };
    (0, react_1.useEffect)(() => batch(() => {
        const dirty = Object.keys(fields)
            .map(getName)
            .filter(name => isReady(name) === false)
            .filter(name => typeof values[name] !== 'undefined');
        dirty.forEach(change);
    }), [batch, change, fields, fieldset, values]);
    const getFieldProps = (key, schema) => {
        const name = getName(key);
        let value = values[name];
        if (!value) {
            const tuples = Object.entries(values).filter(([key]) => key.startsWith(name + '.'));
            if (tuples.length) {
                value = tuples.reduce((acc, [key, val]) => Object.assign(acc, { [key.substring(name.length + 1)]: val }), {});
            }
        }
        const props = Object.assign(Object.assign({}, textIn(name, t, i18n)), { api, 
            // context,
            dependencies: getDependencies(name), 
            // @ts-ignore
            dispatch,
            name,
            schema,
            t,
            value });
        if (classes && styles) {
            const style = styles[name];
            if (style) {
                const className = classes[style];
                if (className) {
                    Object.assign(props, { className });
                }
            }
        }
        if (isReady(name) === false) {
            Object.assign(props, { disabled: true });
        }
        if (immutables[name]) {
            Object.assign(props, { readonly: true });
        }
        if (requires[name]) {
            Object.assign(props, { required: true });
        }
        if (variants && variants[name]) {
            Object.assign(props, { variant: variants[name] });
        }
        const { domain: domainName, type } = schema;
        if (!domainName) {
        }
        else {
            const domain = DOMAINS[domainName];
            if (domain) {
                Object.assign(props, { domain });
                if (type === StringSchema_1.STRING_TYPE && (domain === null || domain === void 0 ? void 0 : domain.enum) && !props.disabled) {
                    const parent = dependencies[name];
                    if (typeof parent === 'string') {
                        const filter = values[parent];
                        Object.assign(props, { filter });
                    }
                }
            }
        }
        /*
        if (placeholder) {
          Object.assign(props, { placeholder: t(placeholder) });
        }
        */
        return props;
    };
    return {
        api,
        hidden: !isReady(fieldset),
        getFieldProps,
        t
    };
};
exports.default = useFieldset;
