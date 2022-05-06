"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Grid_1 = __importDefault(require("@mui/material/Grid"));
const styles_1 = require("@mui/styles");
const clsx_1 = __importDefault(require("clsx"));
const Chart_1 = __importDefault(require("./Chart"));
const Deposits_1 = __importDefault(require("./Deposits"));
const Orders_1 = __importDefault(require("./Orders"));
const Paper_1 = __importDefault(require("../../components/Paper"));
const ContentFrame_1 = __importDefault(require("../../containers/Layout/ContentFrame"));
const titlebar_1 = require("features/titlebar");
const useStyles = (0, styles_1.makeStyles)((theme) => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
}));
function Dashboard() {
    const classes = useStyles();
    const fixedHeightPaper = (0, clsx_1.default)(classes.paper, classes.fixedHeight);
    (0, titlebar_1.useTitlebar)({
        title: 'Dashboard',
        tools: []
    });
    return ((0, jsx_runtime_1.jsx)(ContentFrame_1.default, Object.assign({ name: "dashboard", maxWidth: "lg" }, { children: (0, jsx_runtime_1.jsxs)(Grid_1.default, Object.assign({ container: true, spacing: 3 }, { children: [(0, jsx_runtime_1.jsx)(Grid_1.default, Object.assign({ item: true, xs: 12, md: 8, lg: 9 }, { children: (0, jsx_runtime_1.jsx)(Paper_1.default, Object.assign({ className: fixedHeightPaper }, { children: (0, jsx_runtime_1.jsx)(Chart_1.default, {}, void 0) }), void 0) }), void 0), (0, jsx_runtime_1.jsx)(Grid_1.default, Object.assign({ item: true, xs: 12, md: 4, lg: 3 }, { children: (0, jsx_runtime_1.jsx)(Paper_1.default, Object.assign({ className: fixedHeightPaper }, { children: (0, jsx_runtime_1.jsx)(Deposits_1.default, {}, void 0) }), void 0) }), void 0), (0, jsx_runtime_1.jsx)(Grid_1.default, Object.assign({ item: true, xs: 12 }, { children: (0, jsx_runtime_1.jsx)(Paper_1.default, Object.assign({ className: classes.paper }, { children: (0, jsx_runtime_1.jsx)(Orders_1.default, {}, void 0) }), void 0) }), void 0)] }), void 0) }), void 0));
}
exports.default = Dashboard;
