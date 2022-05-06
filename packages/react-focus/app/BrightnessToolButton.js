"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrightnessToolButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Brightness4_1 = __importDefault(require("@mui/icons-material/Brightness4"));
const Brightness7_1 = __importDefault(require("@mui/icons-material/Brightness7"));
const IconButton_1 = __importDefault(require("@mui/material/IconButton"));
const recoil_1 = require("recoil");
const TranslatedTooltip_1 = __importDefault(require("../components/TranslatedTooltip"));
const AppState_1 = require("./AppState");
const BrightnessToolButton = ({ toggle, value }) => ((0, jsx_runtime_1.jsx)(TranslatedTooltip_1.default, Object.assign({ title: "Brightness" }, { children: (0, jsx_runtime_1.jsxs)(IconButton_1.default, Object.assign({ color: "inherit", onClick: toggle }, { children: [value === 'dark' && ((0, jsx_runtime_1.jsx)(Brightness7_1.default, {}, void 0)), value !== 'dark' && ((0, jsx_runtime_1.jsx)(Brightness4_1.default, {}, void 0))] }), void 0) }), void 0));
exports.BrightnessToolButton = BrightnessToolButton;
function default_1() {
    const [theme, setTheme] = (0, recoil_1.useRecoilState)(AppState_1.atomTheme);
    const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
    return ((0, jsx_runtime_1.jsx)(exports.BrightnessToolButton, { toggle: toggleTheme, value: theme }, "app-brightness-button"));
}
exports.default = default_1;
