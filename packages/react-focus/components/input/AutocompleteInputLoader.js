"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutocompleteInputLoader = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const core_1 = require("../../features/core");
const AutocompleteInputLoader = ({ timeout = 1000 }) => {
    const oneSecondHasPassed = (0, core_1.useTimeout)(timeout);
    if (oneSecondHasPassed) {
        return (0, jsx_runtime_1.jsx)(material_1.CircularProgress, { size: 24 }, void 0);
    }
    return null;
};
exports.AutocompleteInputLoader = AutocompleteInputLoader;
