"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const ChipField = ({ data, name }) => {
    console.log('ARRAY field', name);
    return ((0, jsx_runtime_1.jsx)("ul", { children: (data || []).map((item) => ((0, jsx_runtime_1.jsx)("li", { children: JSON.stringify(item) }, void 0))) }, void 0));
};
exports.default = ChipField;
