"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("date-fns");
const react_1 = require("react");
const Fieldset_1 = __importDefault(require("../../components/Fieldset"));
const BooleanDomain_1 = require("../../lib/BooleanDomain");
const AutoGrid_1 = __importDefault(require("../AutoGrid"));
const ActionField_1 = __importDefault(require("./fields/ActionField"));
const ArrayField_1 = __importDefault(require("./fields/ArrayField"));
const BooleanFieldGroup_1 = __importDefault(require("./fields/BooleanFieldGroup"));
const BooleanXorFieldGroup_1 = __importDefault(require("./fields/BooleanXorFieldGroup"));
const SimpleField_1 = __importDefault(require("./fields/SimpleField"));
const useFieldset_1 = __importDefault(require("./useFieldset"));
function AutoFields({ config, context, name, schema, }) {
    const { domain, fields } = schema;
    const props = { context, name, schema };
    const { getFieldProps, hidden, t } = (0, useFieldset_1.default)(props);
    if (hidden) {
        return null;
    }
    switch (domain) {
        case BooleanDomain_1.BOOLEAN_XOR_DOMAIN:
            return ((0, jsx_runtime_1.jsx)(Fieldset_1.default, Object.assign({ subtitle: name }, { children: (0, jsx_runtime_1.jsx)(BooleanXorFieldGroup_1.default, Object.assign({}, props), void 0) }), void 0));
        case BooleanDomain_1.BOOLEAN_DOMAIN:
            return (
            // @ts-ignore
            (0, jsx_runtime_1.jsx)(Fieldset_1.default, Object.assign({ subtitle: t(name) }, { children: (0, jsx_runtime_1.jsx)(BooleanFieldGroup_1.default, Object.assign({}, props), void 0) }), void 0));
    }
    return (
    // @ts-ignore
    (0, jsx_runtime_1.jsx)(Fieldset_1.default, Object.assign({ subtitle: t(name) }, { children: (0, jsx_runtime_1.jsx)(AutoGrid_1.default, Object.assign({ config: config }, { children: Object.entries(fields).map(([key, field]) => {
                var _a;
                const props = getFieldProps(key, field);
                if ((_a = context.excludes) === null || _a === void 0 ? void 0 : _a.includes(props.name)) {
                    return null;
                }
                if (field.type === 'action') {
                    return (
                    // @ts-ignore
                    (0, jsx_runtime_1.jsx)(react_1.Fragment, { children: (0, jsx_runtime_1.jsx)(ActionField_1.default, Object.assign({}, props, { 
                            // @ts-ignore
                            payload: field.payload || {}, dispatch: context.dispatch, values: context.values }), void 0) }, field.name));
                }
                if (field.type === 'array') {
                    return (
                    // @ts-ignore
                    (0, jsx_runtime_1.jsx)(react_1.Fragment, { children: (0, jsx_runtime_1.jsx)(ArrayField_1.default, Object.assign({}, props), void 0) }, field.name));
                }
                return (
                // @ts-ignore
                (0, jsx_runtime_1.jsx)(react_1.Fragment, { children: (0, jsx_runtime_1.jsx)(SimpleField_1.default, Object.assign({}, props, { 
                        // @ts-ignore
                        dispatch: context.dispatch, values: context.values }), void 0) }, field.name));
            }) }), void 0) }), void 0));
}
exports.default = AutoFields;
