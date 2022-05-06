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
exports.FormTabHeader = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const prop_types_1 = __importDefault(require("prop-types"));
const react_router_dom_1 = require("react-router-dom");
const Tab_1 = __importDefault(require("@mui/material/Tab"));
const classnames_1 = __importDefault(require("classnames"));
const core_1 = require("../../features/core");
const react_final_form_1 = require("react-final-form");
const TabbedFormView_1 = require("./TabbedFormView");
const FormTabHeader = (_a) => {
    var { label, value, icon, className, syncWithLocation } = _a, rest = __rest(_a, ["label", "value", "icon", "className", "syncWithLocation"]);
    const translate = (0, core_1.useTranslate)();
    const location = (0, react_router_dom_1.useLocation)();
    const { submitFailed } = (0, react_final_form_1.useFormState)(UseFormStateOptions);
    const formGroup = (0, core_1.useFormGroup)(value.toString());
    const propsForLink = {
        component: react_router_dom_1.Link,
        to: Object.assign(Object.assign({}, location), { pathname: value }),
    };
    return ((0, jsx_runtime_1.jsx)(Tab_1.default, Object.assign({ label: (0, react_1.isValidElement)(label) ? label : translate(label, { _: label }), value: value, icon: icon, className: (0, classnames_1.default)('form-tab', className, {
            [TabbedFormView_1.TabbedFormClasses.errorTabButton]: formGroup.invalid && (formGroup.touched || submitFailed),
            error: formGroup.invalid && (formGroup.touched || submitFailed),
        }) }, (syncWithLocation ? propsForLink : {}), { id: `tabheader-${value}`, "aria-controls": `tabpanel-${value}` }, rest), void 0));
};
exports.FormTabHeader = FormTabHeader;
const UseFormStateOptions = {
    subscription: {
        submitFailed: true,
    },
};
exports.FormTabHeader.propTypes = {
    basePath: prop_types_1.default.string,
    className: prop_types_1.default.string,
    contentClassName: prop_types_1.default.string,
    children: prop_types_1.default.node,
    intent: prop_types_1.default.oneOf(['header', 'content']),
    hidden: prop_types_1.default.bool,
    icon: prop_types_1.default.element,
    label: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.element])
        .isRequired,
    margin: prop_types_1.default.oneOf(['none', 'dense', 'normal']),
    path: prop_types_1.default.string,
    // @ts-ignore
    record: prop_types_1.default.object,
    resource: prop_types_1.default.string,
    value: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    variant: prop_types_1.default.oneOf(['standard', 'outlined', 'filled']),
};
