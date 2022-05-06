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
exports.ChipField = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@mui/material/styles");
const react_1 = require("react");
const get_1 = __importDefault(require("lodash/get"));
const Chip_1 = __importDefault(require("@mui/material/Chip"));
const Typography_1 = __importDefault(require("@mui/material/Typography"));
const classnames_1 = __importDefault(require("classnames"));
const core_1 = require("../../features/core");
const sanitizeFieldRestProps_1 = __importDefault(require("./sanitizeFieldRestProps"));
const types_1 = require("./types");
const PREFIX = 'RaChipField';
const classes = {
    chip: `${PREFIX}-chip`,
};
const StyledChip = (0, styles_1.styled)(Chip_1.default)({
    [`&.${classes.chip}`]: { margin: 4, cursor: 'inherit' },
});
exports.ChipField = (0, react_1.memo)(props => {
    const { className, classes: classesOverride, source, emptyText } = props, rest = __rest(props, ["className", "classes", "source", "emptyText"]);
    const record = (0, core_1.useRecordContext)(props);
    const value = (0, get_1.default)(record, source);
    if (value == null && emptyText) {
        return ((0, jsx_runtime_1.jsx)(Typography_1.default, Object.assign({ component: "span", variant: "body2", className: className }, (0, sanitizeFieldRestProps_1.default)(rest), { children: emptyText }), void 0));
    }
    return ((0, jsx_runtime_1.jsx)(StyledChip, Object.assign({ className: (0, classnames_1.default)(classes.chip, className), label: value }, (0, sanitizeFieldRestProps_1.default)(rest)), void 0));
});
exports.ChipField.defaultProps = {
    addLabel: true,
};
exports.ChipField.propTypes = Object.assign(Object.assign({}, exports.ChipField.propTypes), types_1.fieldPropTypes);
exports.ChipField.displayName = 'ChipField';
exports.default = exports.ChipField;
