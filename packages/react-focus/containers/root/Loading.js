"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Skeleton_1 = __importDefault(require("@mui/lab/Skeleton"));
const Center_1 = __importDefault(require("../../components/Center"));
const Loading = () => {
    return ((0, jsx_runtime_1.jsxs)(Center_1.default, { children: [(0, jsx_runtime_1.jsx)(Skeleton_1.default, {}, void 0), (0, jsx_runtime_1.jsx)(Skeleton_1.default, { animation: false }, void 0), (0, jsx_runtime_1.jsx)(Skeleton_1.default, { animation: "wave" }, void 0), (0, jsx_runtime_1.jsx)(Skeleton_1.default, { variant: "text" }, void 0), (0, jsx_runtime_1.jsx)(Skeleton_1.default, { variant: "rectangular", width: 40, height: 40 }, void 0), (0, jsx_runtime_1.jsx)(Skeleton_1.default, { variant: "rectangular", width: 210, height: 118 }, void 0)] }, void 0));
};
exports.default = Loading;
