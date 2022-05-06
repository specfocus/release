"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReOrderButtons = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const button_1 = require("../../button");
const ArrowUpward_1 = __importDefault(require("@mui/icons-material/ArrowUpward"));
const ArrowDownward_1 = __importDefault(require("@mui/icons-material/ArrowDownward"));
const useSimpleFormIteratorItem_1 = require("./useSimpleFormIteratorItem");
const ReOrderButtons = ({ className }) => {
    const { index, total, reOrder } = (0, useSimpleFormIteratorItem_1.useSimpleFormIteratorItem)();
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: className }, { children: [(0, jsx_runtime_1.jsx)(button_1.IconButtonWithTooltip, Object.assign({ label: "ra.action.move_up", size: "small", onClick: () => reOrder(index - 1), disabled: index <= 0 }, { children: (0, jsx_runtime_1.jsx)(ArrowUpward_1.default, {}, void 0) }), void 0), (0, jsx_runtime_1.jsx)(button_1.IconButtonWithTooltip, Object.assign({ label: "ra.action.move_down", size: "small", onClick: () => reOrder(index + 1), disabled: total == null || index >= total - 1 }, { children: (0, jsx_runtime_1.jsx)(ArrowDownward_1.default, {}, void 0) }), void 0)] }), void 0));
};
exports.ReOrderButtons = ReOrderButtons;
