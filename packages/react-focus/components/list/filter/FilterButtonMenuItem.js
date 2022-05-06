"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterButtonMenuItem = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const MenuItem_1 = __importDefault(require("@mui/material/MenuItem"));
const prop_types_1 = __importDefault(require("prop-types"));
const react_1 = require("react");
const core_1 = require("../../../features/core");
exports.FilterButtonMenuItem = (0, react_1.forwardRef)((props, ref) => {
    const { filter, onShow } = props;
    const resource = (0, core_1.useResourceContext)(props);
    const handleShow = (0, react_1.useCallback)(() => {
        onShow({
            source: filter.props.source,
            defaultValue: filter.props.defaultValue,
        });
    }, [filter.props.defaultValue, filter.props.source, onShow]);
    return ((0, jsx_runtime_1.jsx)(MenuItem_1.default, Object.assign({ className: "new-filter-item", "data-key": filter.props.source, "data-default-value": filter.props.defaultValue, onClick: handleShow, ref: ref }, { children: (0, jsx_runtime_1.jsx)(core_1.FieldTitle, { label: filter.props.label, source: filter.props.source, resource: resource }, void 0) }), filter.props.source));
});
exports.FilterButtonMenuItem.propTypes = {
    filter: prop_types_1.default.element.isRequired,
    onShow: prop_types_1.default.func.isRequired,
    resource: prop_types_1.default.string,
};
