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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const React = __importStar(require("react"));
const styles_1 = require("@mui/material/styles");
const prop_types_1 = __importDefault(require("prop-types"));
const IconButton_1 = __importDefault(require("@mui/material/IconButton"));
const HighlightOff_1 = __importDefault(require("@mui/icons-material/HighlightOff"));
const classnames_1 = __importDefault(require("classnames"));
const core_1 = require("../../../features/core");
const PREFIX = 'RaFilterFormInput';
const classes = {
    body: `${PREFIX}-body`,
    spacer: `${PREFIX}-spacer`,
    hideButton: `${PREFIX}-hideButton`,
};
const Root = (0, styles_1.styled)('div')(({ theme }) => ({
    [`&.${classes.body}`]: {
        display: 'flex',
        alignItems: 'flex-end',
        pointerEvents: 'auto',
    },
    [`& .${classes.spacer}`]: { width: theme.spacing(2) },
    [`& .${classes.hideButton}`]: {},
}));
const emptyRecord = {};
const FilterFormInput = props => {
    const { filterElement, handleHide, variant, margin } = props;
    const resource = (0, core_1.useResourceContext)(props);
    const translate = (0, core_1.useTranslate)();
    return ((0, jsx_runtime_1.jsxs)(Root, Object.assign({ "data-source": filterElement.props.source, className: (0, classnames_1.default)('filter-field', classes.body) }, { children: [!filterElement.props.alwaysOn && ((0, jsx_runtime_1.jsx)(IconButton_1.default, Object.assign({ className: (0, classnames_1.default)('hide-filter', classes.hideButton), onClick: handleHide, "data-key": filterElement.props.source, title: translate('ra.action.remove_filter'), size: "large" }, { children: (0, jsx_runtime_1.jsx)(HighlightOff_1.default, {}, void 0) }), void 0)), React.cloneElement(filterElement, {
                allowEmpty: filterElement.props.allowEmpty === undefined
                    ? true
                    : filterElement.props.allowEmpty,
                resource,
                record: emptyRecord,
                variant,
                margin,
                helperText: false,
                // ignore defaultValue in Field because it was already set in Form (via mergedInitialValuesWithDefaultValues)
                defaultValue: undefined,
            }), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: classes.spacer }, { children: "\u00A0" }), void 0)] }), void 0));
};
FilterFormInput.propTypes = {
    filterElement: prop_types_1.default.node,
    handleHide: prop_types_1.default.func,
    resource: prop_types_1.default.string,
    margin: prop_types_1.default.string,
    variant: prop_types_1.default.string,
};
exports.default = FilterFormInput;
