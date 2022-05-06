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
const react_final_form_1 = require("react-final-form");
const FormControlLabel_1 = __importDefault(require("@mui/material/FormControlLabel"));
const Radio_1 = __importDefault(require("@mui/material/Radio"));
const core_1 = require("../../features/core");
const RadioButtonGroupInputItem = ({ choice, optionText, optionValue, source, translateChoice, onChange, }) => {
    const { getChoiceText, getChoiceValue } = (0, core_1.useChoices)({
        optionText,
        optionValue,
        translateChoice,
    });
    const label = getChoiceText(choice);
    const value = getChoiceValue(choice);
    const _a = (0, react_final_form_1.useField)(source, {
        type: 'radio',
        value,
    }).input, { type } = _a, inputProps = __rest(_a, ["type"]);
    const nodeId = `${source}_${value}`;
    return ((0, jsx_runtime_1.jsx)(FormControlLabel_1.default, { label: label, htmlFor: nodeId, control: (0, jsx_runtime_1.jsx)(Radio_1.default, Object.assign({ id: nodeId, color: "primary" }, inputProps, { onChange: (_, isActive) => isActive && onChange(value) }), void 0) }, void 0));
};
exports.default = RadioButtonGroupInputItem;
