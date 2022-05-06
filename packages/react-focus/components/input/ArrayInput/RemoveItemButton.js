"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveItemButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const RemoveCircleOutline_1 = __importDefault(require("@mui/icons-material/RemoveCircleOutline"));
const button_1 = require("../../button");
const useSimpleFormIteratorItem_1 = require("./useSimpleFormIteratorItem");
const RemoveItemButton = (props) => {
    const { remove } = (0, useSimpleFormIteratorItem_1.useSimpleFormIteratorItem)();
    return ((0, jsx_runtime_1.jsx)(button_1.Button, Object.assign({ label: "ra.action.remove", onClick: () => remove() }, props, { children: (0, jsx_runtime_1.jsx)(RemoveCircleOutline_1.default, {}, void 0) }), void 0));
};
exports.RemoveItemButton = RemoveItemButton;
