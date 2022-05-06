"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const styles_1 = require("@mui/material/styles");
const recharts_1 = require("recharts");
const Title_1 = __importDefault(require("./Title"));
// Generate Sales Data
function createData(time, amount) {
    return { time, amount };
}
const data = [
    createData('00:00', 0),
    createData('03:00', 300),
    createData('06:00', 600),
    createData('09:00', 800),
    createData('12:00', 1500),
    createData('15:00', 2000),
    createData('18:00', 2400),
    createData('21:00', 2400),
    createData('24:00', undefined),
];
function Chart() {
    const theme = (0, styles_1.useTheme)();
    return ((0, jsx_runtime_1.jsxs)(react_1.default.Fragment, { children: [(0, jsx_runtime_1.jsx)(Title_1.default, { children: "Today" }, void 0), (0, jsx_runtime_1.jsx)(recharts_1.ResponsiveContainer, { children: (0, jsx_runtime_1.jsxs)(recharts_1.LineChart, Object.assign({ data: data, margin: {
                        top: 16,
                        right: 16,
                        bottom: 0,
                        left: 24,
                    } }, { children: [(0, jsx_runtime_1.jsx)(recharts_1.XAxis, { dataKey: "time", stroke: theme.palette.text.secondary }, void 0), (0, jsx_runtime_1.jsx)(recharts_1.YAxis, Object.assign({ stroke: theme.palette.text.secondary }, { children: (0, jsx_runtime_1.jsx)(recharts_1.Label, Object.assign({ angle: 270, position: "left", style: { textAnchor: 'middle', fill: theme.palette.text.primary } }, { children: "Sales ($)" }), void 0) }), void 0), (0, jsx_runtime_1.jsx)(recharts_1.Line, { type: "monotone", dataKey: "amount", stroke: theme.palette.primary.main, dot: false }, void 0)] }), void 0) }, void 0)] }, void 0));
}
exports.default = Chart;
