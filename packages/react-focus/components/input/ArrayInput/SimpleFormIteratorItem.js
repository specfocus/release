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
exports.SimpleFormIteratorItem = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const material_1 = require("@mui/material");
const classnames_1 = __importDefault(require("classnames"));
const FormInput_1 = __importDefault(require("../../form/FormInput"));
const useSimpleFormIteratorStyles_1 = require("./useSimpleFormIteratorStyles");
const useSimpleFormIterator_1 = require("./useSimpleFormIterator");
const SimpleFormIteratorItemContext_1 = require("./SimpleFormIteratorItemContext");
const SimpleFormIteratorItem = (props) => {
    const { basePath, children, disabled, disableReordering, disableRemove, getItemLabel, index, margin, member, record, removeButton, reOrderButtons, resource, source, variant, } = props;
    const { total, reOrder, remove } = (0, useSimpleFormIterator_1.useSimpleFormIterator)();
    // Returns a boolean to indicate whether to disable the remove button for certain fields.
    // If disableRemove is a function, then call the function with the current record to
    // determining if the button should be disabled. Otherwise, use a boolean property that
    // enables or disables the button for all of the fields.
    const disableRemoveField = (record) => {
        if (typeof disableRemove === 'boolean') {
            return disableRemove;
        }
        return disableRemove && disableRemove(record);
    };
    // remove field and call the onClick event of the button passed as removeButton prop
    const handleRemoveButtonClick = (originalOnClickHandler, index) => (event) => {
        remove(index);
        if (originalOnClickHandler) {
            originalOnClickHandler(event);
        }
    };
    const context = (0, react_1.useMemo)(() => ({
        index,
        total,
        reOrder: newIndex => reOrder(index, newIndex),
        remove: () => remove(index),
    }), [index, total, reOrder, remove]);
    return ((0, jsx_runtime_1.jsx)(SimpleFormIteratorItemContext_1.SimpleFormIteratorItemContext.Provider, Object.assign({ value: context }, { children: (0, jsx_runtime_1.jsxs)("li", Object.assign({ className: useSimpleFormIteratorStyles_1.SimpleFormIteratorClasses.line }, { children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: useSimpleFormIteratorStyles_1.SimpleFormIteratorClasses.indexContainer }, { children: [(0, jsx_runtime_1.jsx)(material_1.Typography, Object.assign({ variant: "body1", className: useSimpleFormIteratorStyles_1.SimpleFormIteratorClasses.index }, { children: getItemLabel(index) }), void 0), !disabled &&
                                !disableReordering &&
                                (0, react_1.cloneElement)(reOrderButtons, {
                                    index,
                                    max: total,
                                    reOrder,
                                    className: (0, classnames_1.default)('button-reorder', `button-reorder-${source}-${index}`),
                                })] }), void 0) }, void 0), (0, jsx_runtime_1.jsx)("section", Object.assign({ className: useSimpleFormIteratorStyles_1.SimpleFormIteratorClasses.form }, { children: react_1.Children.map(children, (input, index2) => {
                        if (!(0, react_1.isValidElement)(input)) {
                            return null;
                        }
                        const _a = input.props, { source } = _a, inputProps = __rest(_a, ["source"]);
                        return ((0, jsx_runtime_1.jsx)(FormInput_1.default, { basePath: input.props.basePath || basePath, input: (0, react_1.cloneElement)(input, Object.assign({ source: source
                                    ? `${member}.${source}`
                                    : member, index: source ? undefined : index2, label: typeof input.props.label === 'undefined'
                                    ? source
                                        ? `resources.${resource}.fields.${source}`
                                        : undefined
                                    : input.props.label, disabled }, inputProps)), record: record, resource: resource, variant: variant, margin: margin }, void 0));
                    }) }), void 0), !disabled && !disableRemoveField(record) && ((0, jsx_runtime_1.jsx)("span", Object.assign({ className: useSimpleFormIteratorStyles_1.SimpleFormIteratorClasses.action }, { children: (0, react_1.cloneElement)(removeButton, {
                        onClick: handleRemoveButtonClick(removeButton.props.onClick, index),
                        className: (0, classnames_1.default)('button-remove', `button-remove-${source}-${index}`),
                    }) }), void 0))] }), void 0) }), void 0));
};
exports.SimpleFormIteratorItem = SimpleFormIteratorItem;
