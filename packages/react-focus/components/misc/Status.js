"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const getColorFromStatus = (status) => status === 'cold'
    ? '#7dbde8'
    : status === 'warm'
        ? '#e8cb7d'
        : status === 'hot'
            ? '#e88b7d'
            : status === 'in-contract'
                ? '#a4e87d'
                : '#000';
const Status = ({ status }) => ((0, jsx_runtime_1.jsx)(material_1.Box, { width: 10, height: 10, display: "inline-block", borderRadius: 5, bgcolor: getColorFromStatus(status), component: "span" }, void 0));
exports.Status = Status;
