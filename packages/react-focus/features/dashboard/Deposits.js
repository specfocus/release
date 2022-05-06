"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const Link_1 = __importDefault(require("@mui/material/Link"));
const styles_1 = require("@mui/styles");
const Typography_1 = __importDefault(require("@mui/material/Typography"));
const Title_1 = __importDefault(require("./Title"));
function preventDefault(event) {
    event.preventDefault();
}
const useStyles = (0, styles_1.makeStyles)({
    depositContext: {
        flex: 1,
    },
});
function Deposits() {
    const classes = useStyles();
    return ((0, jsx_runtime_1.jsxs)(react_1.default.Fragment, { children: [(0, jsx_runtime_1.jsx)(Title_1.default, { children: "Recent Deposits" }, void 0), (0, jsx_runtime_1.jsx)(Typography_1.default, Object.assign({ component: "p", variant: "h4" }, { children: "$3,024.00" }), void 0), (0, jsx_runtime_1.jsx)(Typography_1.default, Object.assign({ color: "textSecondary", className: classes.depositContext }, { children: "on 15 March, 2019" }), void 0), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(Link_1.default, Object.assign({ color: "primary", href: "#", onClick: preventDefault }, { children: "View balance" }), void 0) }, void 0)] }, void 0));
}
exports.default = Deposits;
