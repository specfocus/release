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
const jsx_runtime_1 = require("react/jsx-runtime");
const AppBar_1 = __importDefault(require("@mui/material/AppBar"));
const Box_1 = __importDefault(require("@mui/material/Box"));
const Hidden_1 = __importDefault(require("@mui/material/Hidden"));
const Toolbar_1 = __importDefault(require("@mui/material/Toolbar"));
const react_1 = require("react");
const recoil_1 = require("recoil");
const TranslatedTypography_1 = __importDefault(require("../../components/TranslatedTypography"));
const state_1 = require("./state");
// import UserAvatar from '../../app/AppMenu';
const UserAvatar = () => {
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}, void 0));
};
;
const Titlebar = (_a) => {
    var { children } = _a, bar = __rest(_a, ["children"]);
    const { title, tools } = (0, recoil_1.useRecoilValue)(state_1.atomTitlebar);
    return ((0, jsx_runtime_1.jsxs)(Box_1.default, Object.assign({ sx: { display: 'flex', flexDirection: 'column', flexGrow: 1, height: '100vh', overflow: 'hidden' } }, { children: [(0, jsx_runtime_1.jsxs)(AppBar_1.default, Object.assign({ color: (tools === null || tools === void 0 ? void 0 : tools.length) ? 'default' : 'primary' }, bar, { children: [(0, jsx_runtime_1.jsxs)(Toolbar_1.default, Object.assign({ sx: { paddingRight: 24 } }, { children: [(0, jsx_runtime_1.jsx)(Hidden_1.default, Object.assign({ xlDown: Boolean(tools === null || tools === void 0 ? void 0 : tools.length), smDown: true }, { children: (0, jsx_runtime_1.jsx)(TranslatedTypography_1.default, Object.assign({ color: "inherit", component: "h1", i18nKey: title, variant: "h6", sx: {
                                        flexGrow: 0,
                                        marginLeft: 0,
                                    }, noWrap: true }, { children: title }), void 0) }), void 0), (0, jsx_runtime_1.jsx)(Box_1.default, Object.assign({ alignItems: "center", display: "flex", flexDirection: "row", flexGrow: 1, flex: "row", flexWrap: "nowrap", justifyContent: "flex-end", marginRight: 6 }, { children: react_1.Children.toArray(tools).map((child, index) => ((0, jsx_runtime_1.jsx)(react_1.Fragment, { children: child }, `toolbar-${index}`))) }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)(Hidden_1.default, Object.assign({ smDown: true }, { children: (0, jsx_runtime_1.jsx)(UserAvatar, {}, void 0) }), void 0)] }), void 0), (0, jsx_runtime_1.jsx)(Box_1.default, Object.assign({ sx: { backgroundColor: '#777', display: 'block', flexGrow: 1, overflow: 'hidden' } }, { children: children }), void 0)] }), void 0));
};
exports.default = Titlebar;
