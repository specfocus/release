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
const react_final_form_1 = require("react-final-form");
const ObjectSchema_1 = require("../../lib/ObjectSchema");
const AutoGrid_1 = __importDefault(require("../AutoGrid"));
const AutoFields_1 = __importDefault(require("./AutoFields"));
function AutoForm(_a) {
    var { children, form, handleSubmit, observer, schema, state } = _a, other = __rest(_a, ["children", "form", "handleSubmit", "observer", "schema", "state"]);
    const api = (0, react_final_form_1.useForm)();
    const width = (index) => {
        const [total] = other.config;
        const size = other.config[index + 1];
        if (Array.isArray(size)) {
            const [width] = size;
            return width;
        }
        return total;
    };
    const { fields, fieldsets } = Object.entries(schema.fields).reduce((acc, [key, field]) => {
        if (field.type === 'object') {
            Object.assign(acc.fieldsets, { [key]: field });
        }
        else {
            Object.assign(acc.fields, { [key]: field });
        }
        return acc;
    }, {
        fields: {},
        fieldsets: {}
    });
    const render = (values) => {
        const context = Object.assign(Object.assign({}, other), { values });
        return ((0, jsx_runtime_1.jsx)("form", Object.assign({ autoComplete: "off", onSubmit: handleSubmit, noValidate: true }, { children: (0, jsx_runtime_1.jsxs)(AutoGrid_1.default, Object.assign({}, other, { children: [(0, jsx_runtime_1.jsx)(AutoFields_1.default, { config: [width(0)], context: context, schema: schema }, void 0), // @ts-ignore
                    Object.entries(fieldsets).map(([key, schema], index, array) => {
                        return ((0, jsx_runtime_1.jsx)(AutoFields_1.default, { config: [width(index + 1)], context: context, name: key, schema: schema }, void 0));
                    }), react_1.Children.toArray(children)] }), void 0) }), void 0));
    };
    if (state.values) {
        return render((0, ObjectSchema_1.flatten)(state.values));
    }
    return ((0, jsx_runtime_1.jsx)(react_final_form_1.FormSpy, Object.assign({ subscription: { values: true } }, { children: ({ values }) => {
            if (observer) {
                observer(values, api);
            }
            return render((0, ObjectSchema_1.flatten)(values));
        } }), void 0));
}
exports.default = AutoForm;
