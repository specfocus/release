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
exports.FormTab = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const core_1 = require("../../features/core");
const FormInput_1 = __importDefault(require("./FormInput"));
const FormTabHeader_1 = require("./FormTabHeader");
const hiddenStyle = { display: 'none' };
const FormTab = (props) => {
    const { basePath, className, contentClassName, children, hidden, icon, intent, label, margin, path, record, resource, variant, value } = props, rest = __rest(props, ["basePath", "className", "contentClassName", "children", "hidden", "icon", "intent", "label", "margin", "path", "record", "resource", "variant", "value"]);
    const renderHeader = () => ((0, jsx_runtime_1.jsx)(FormTabHeader_1.FormTabHeader, Object.assign({ label: label, value: value, icon: icon, className: className }, rest), void 0));
    const renderContent = () => ((0, jsx_runtime_1.jsx)(core_1.FormGroupContextProvider, Object.assign({ name: value.toString() }, { children: (0, jsx_runtime_1.jsx)("span", Object.assign({ style: hidden ? hiddenStyle : null, className: contentClassName, id: `tabpanel-${value}`, "aria-labelledby": `tabheader-${value}`, "aria-hidden": hidden || undefined }, { children: React.Children.map(children, (input) => input && ((0, jsx_runtime_1.jsx)(FormInput_1.default, { basePath: basePath, input: input, record: record, resource: resource, variant: input.props.variant || variant, margin: input.props.margin || margin }, void 0))) }), void 0) }), void 0));
    return intent === 'header' ? renderHeader() : renderContent();
};
exports.FormTab = FormTab;
exports.FormTab.propTypes = {
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
exports.FormTab.displayName = 'FormTab';
