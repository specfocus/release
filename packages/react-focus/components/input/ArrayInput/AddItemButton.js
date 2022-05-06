"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddItemButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const AddCircleOutline_1 = __importDefault(require("@mui/icons-material/AddCircleOutline"));
const useSimpleFormIterator_1 = require("./useSimpleFormIterator");
const button_1 = require("../../button");
const AddItemButton = (props) => {
    const { add } = (0, useSimpleFormIterator_1.useSimpleFormIterator)();
    return ((0, jsx_runtime_1.jsx)(button_1.Button, Object.assign({ label: "ra.action.add", onClick: () => add() }, props, { children: (0, jsx_runtime_1.jsx)(AddCircleOutline_1.default, {}, void 0) }), void 0));
};
exports.AddItemButton = AddItemButton;
