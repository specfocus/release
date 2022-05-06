"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const CardContent_1 = __importDefault(require("@mui/material/CardContent"));
const Typography_1 = __importDefault(require("@mui/material/Typography"));
const core_1 = require("../../../features/core");
const PaginationLimit = () => {
    const translate = (0, core_1.useTranslate)();
    return ((0, jsx_runtime_1.jsx)(CardContent_1.default, { children: (0, jsx_runtime_1.jsx)(Typography_1.default, Object.assign({ variant: "body2" }, { children: translate('ra.navigation.no_results') }), void 0) }, void 0));
};
exports.default = (0, react_1.memo)(PaginationLimit);
