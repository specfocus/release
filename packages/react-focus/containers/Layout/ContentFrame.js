"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyles = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Box_1 = __importDefault(require("@mui/material/Box"));
const Container_1 = __importDefault(require("@mui/material/Container"));
const styles_1 = require("@mui/styles");
const Copyright_1 = __importDefault(require("./Copyright"));
const Frame_1 = __importDefault(require("./Frame"));
exports.useStyles = (0, styles_1.makeStyles)((theme) => ({
    container: {
        display: 'block',
        height: '100%',
        overflowY: 'auto',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(2)
    }
}));
function ContentFrame(_a) {
    var { children, maxWidth } = _a, props = __rest(_a, ["children", "maxWidth"]);
    const classes = (0, exports.useStyles)();
    return ((0, jsx_runtime_1.jsx)(Frame_1.default, Object.assign({}, props, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: classes.container }, { children: (0, jsx_runtime_1.jsxs)(Container_1.default, Object.assign({ maxWidth: maxWidth }, { children: [children, (0, jsx_runtime_1.jsx)(Box_1.default, Object.assign({ pt: 4 }, { children: (0, jsx_runtime_1.jsx)(Copyright_1.default, {}, void 0) }), void 0)] }), void 0) }), void 0) }), void 0));
}
exports.default = ContentFrame;
