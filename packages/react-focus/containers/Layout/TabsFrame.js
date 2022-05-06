"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const Tabs_1 = __importDefault(require("@mui/material/Tabs"));
const styles_1 = require("@mui/styles");
const react_1 = __importStar(require("react"));
const TranslatedTab_1 = __importDefault(require("../../components/TranslatedTab"));
const Copyright_1 = __importDefault(require("./Copyright"));
const Frame_1 = __importDefault(require("./Frame"));
function tabProps(index) {
    return {
        key: `tab-${index}`,
        id: `tab-${index}`,
        'aria-controls': `tabpanel-${index}`,
    };
}
function tabpanelProps(index) {
    return {
        role: 'tabpanel',
        key: `tabpanel-${index}`,
        id: `tabpanel-${index}`,
        'aria-labelledby': `tab-${index}`,
    };
}
exports.useStyles = (0, styles_1.makeStyles)((theme) => ({
    header: {
        height: theme.spacing(6),
        marginBottom: 0
    },
    content: {
        marginTop: 0
    },
    container: {
        display: 'block',
        height: `calc(100% - ${theme.spacing(6)}px)`,
        overflowY: 'auto',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(2)
    }
}));
function TabsFrame(_a) {
    var { children, maxWidth, sections } = _a, props = __rest(_a, ["children", "maxWidth", "sections"]);
    const classes = (0, exports.useStyles)();
    const [tab, setTab] = react_1.default.useState(-1);
    (0, react_1.useEffect)(() => { setTimeout(() => setTab(0), 500); }, [setTab]);
    const handleTabChange = (event, newValue) => {
        setTab(newValue);
    };
    // filter here what the end user can see
    const view = Object.values(sections);
    return ((0, jsx_runtime_1.jsxs)(Frame_1.default, Object.assign({}, props, { children: [(0, jsx_runtime_1.jsx)(Container_1.default, Object.assign({ className: classes.header, maxWidth: maxWidth }, { children: (0, jsx_runtime_1.jsx)(Tabs_1.default, Object.assign({ value: tab, onChange: handleTabChange, "aria-label": "tabs" }, { children: view.map(({ title }, index) => ((0, jsx_runtime_1.jsx)(TranslatedTab_1.default, Object.assign({ label: title }, tabProps(index)), void 0))) }), void 0) }), void 0), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: classes.container }, { children: (0, jsx_runtime_1.jsxs)(Container_1.default, Object.assign({ className: classes.content, maxWidth: maxWidth }, { children: [react_1.Children.toArray(children).map((Child, index) => ((0, jsx_runtime_1.jsx)("div", Object.assign({ hidden: tab !== index }, tabpanelProps(index), { children: tab === index && Child }), void 0))), (0, jsx_runtime_1.jsx)(Box_1.default, Object.assign({ pt: 4 }, { children: (0, jsx_runtime_1.jsx)(Copyright_1.default, {}, void 0) }), void 0)] }), void 0) }), void 0)] }), void 0));
}
exports.default = TabsFrame;
