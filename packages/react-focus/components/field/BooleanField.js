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
const react_1 = require("react");
const prop_types_1 = __importDefault(require("prop-types"));
const get_1 = __importDefault(require("lodash/get"));
const classnames_1 = __importDefault(require("classnames"));
const Done_1 = __importDefault(require("@mui/icons-material/Done"));
const Clear_1 = __importDefault(require("@mui/icons-material/Clear"));
const material_1 = require("@mui/material");
const core_1 = require("../../features/core");
const types_1 = require("./types");
const sanitizeFieldRestProps_1 = __importDefault(require("./sanitizeFieldRestProps"));
const PREFIX = 'RaBooleanField';
const classes = {
    root: `${PREFIX}-root`,
};
const StyledTypography = (0, styles_1.styled)(material_1.Typography)({
    [`&.${classes.root}`]: {
        display: 'flex',
    },
});
const BooleanField = (0, react_1.memo)(props => {
    const { className, classes: classesOverride, emptyText, source, valueLabelTrue, valueLabelFalse, TrueIcon, FalseIcon, looseValue } = props, rest = __rest(props, ["className", "classes", "emptyText", "source", "valueLabelTrue", "valueLabelFalse", "TrueIcon", "FalseIcon", "looseValue"]);
    const record = (0, core_1.useRecordContext)(props);
    const translate = (0, core_1.useTranslate)();
    const value = (0, get_1.default)(record, source);
    const isTruthyValue = value === true || (looseValue && value);
    let ariaLabel = value ? valueLabelTrue : valueLabelFalse;
    if (!ariaLabel) {
        ariaLabel = isTruthyValue ? 'ra.boolean.true' : 'ra.boolean.false';
    }
    if (looseValue || value === false || value === true) {
        return ((0, jsx_runtime_1.jsx)(StyledTypography, Object.assign({ component: "span", variant: "body2", className: (0, classnames_1.default)(classes.root, className) }, (0, sanitizeFieldRestProps_1.default)(rest), { children: (0, jsx_runtime_1.jsx)(material_1.Tooltip, Object.assign({ title: translate(ariaLabel, { _: ariaLabel }) }, { children: isTruthyValue ? ((0, jsx_runtime_1.jsx)("span", { children: (0, jsx_runtime_1.jsx)(TrueIcon, { "data-testid": "true", fontSize: "small" }, void 0) }, void 0)) : ((0, jsx_runtime_1.jsx)("span", { children: (0, jsx_runtime_1.jsx)(FalseIcon, { "data-testid": "false", fontSize: "small" }, void 0) }, void 0)) }), void 0) }), void 0));
    }
    return ((0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ component: "span", variant: "body2", className: className }, (0, sanitizeFieldRestProps_1.default)(rest), { children: emptyText }), void 0));
});
BooleanField.defaultProps = {
    addLabel: true,
    TrueIcon: Done_1.default,
    FalseIcon: Clear_1.default,
    looseValue: false,
};
BooleanField.propTypes = Object.assign(Object.assign(Object.assign({}, material_1.Typography.propTypes), types_1.fieldPropTypes), { valueLabelFalse: prop_types_1.default.string, valueLabelTrue: prop_types_1.default.string, TrueIcon: prop_types_1.default.elementType, FalseIcon: prop_types_1.default.elementType, looseValue: prop_types_1.default.bool });
BooleanField.displayName = 'BooleanField';
exports.default = BooleanField;
