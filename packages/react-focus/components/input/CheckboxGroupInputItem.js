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
const styles_1 = require("@mui/material/styles");
const FormControlLabel_1 = __importDefault(require("@mui/material/FormControlLabel"));
const Checkbox_1 = __importDefault(require("@mui/material/Checkbox"));
const core_1 = require("../../features/core");
const PREFIX = 'RaCheckboxGroupInputItem';
const classes = {
    checkbox: `${PREFIX}-checkbox`,
};
const StyledFormControlLabel = (0, styles_1.styled)(FormControlLabel_1.default)({
    [`& .${classes.checkbox}`]: {
        height: 32,
    },
});
const CheckboxGroupInputItem = props => {
    const { classes: classesOverride, id, choice, onChange, optionText, optionValue, options, translateChoice, value } = props, rest = __rest(props, ["classes", "id", "choice", "onChange", "optionText", "optionValue", "options", "translateChoice", "value"]);
    const { getChoiceText, getChoiceValue } = (0, core_1.useChoices)({
        optionText,
        optionValue,
        translateChoice,
    });
    const choiceName = getChoiceText(choice);
    return ((0, jsx_runtime_1.jsx)(StyledFormControlLabel, { htmlFor: `${id}_${getChoiceValue(choice)}`, onChange: onChange, control: (0, jsx_runtime_1.jsx)(Checkbox_1.default, Object.assign({ id: `${id}_${getChoiceValue(choice)}`, color: "primary", className: classes.checkbox, checked: value
                ? value.find(v => v == getChoiceValue(choice)) !== // eslint-disable-line eqeqeq
                    undefined
                : false, value: String(getChoiceValue(choice)) }, options, rest), void 0), label: choiceName }, getChoiceValue(choice)));
};
exports.default = CheckboxGroupInputItem;
