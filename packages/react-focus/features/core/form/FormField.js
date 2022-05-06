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
exports.isRequired = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const react_final_form_1 = require("react-final-form");
const validate_1 = require("./validate");
const isRequired = validate => {
    if (validate && validate.isRequired) {
        return true;
    }
    if (Array.isArray(validate)) {
        return !!validate.find(it => it.isRequired);
    }
    return false;
};
exports.isRequired = isRequired;
const FormField = (props) => {
    const { id, input, validate } = props, rest = __rest(props, ["id", "input", "validate"]);
    if (process.env.NODE_ENV !== 'production') {
        console.log('FormField is deprecated, use the useInput hook instead.');
    }
    const sanitizedValidate = Array.isArray(validate)
        ? (0, validate_1.composeValidators)(validate)
        : validate;
    const finalId = id || rest.source;
    return input ? ( // An ancestor is already decorated by Field
    React.createElement(rest.component, Object.assign({ input, id: finalId }, rest))) : ((0, jsx_runtime_1.jsx)(react_final_form_1.Field, Object.assign({}, rest, { id: finalId, name: rest.source, isRequired: (0, exports.isRequired)(validate), validate: sanitizedValidate }), void 0));
};
FormField.propTypes = {
    defaultValue: prop_types_1.default.any,
    source: prop_types_1.default.string,
    validate: prop_types_1.default.oneOfType([prop_types_1.default.func, prop_types_1.default.array]),
};
exports.default = FormField;
