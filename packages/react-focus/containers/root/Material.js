"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.atomThemeSelectedKey = exports.atomThemeMap = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const CssBaseline_1 = __importDefault(require("@mui/material/CssBaseline"));
const ThemeProvider_1 = __importDefault(require("@mui/material/styles/ThemeProvider"));
const createTheme_1 = __importDefault(require("@mui/material/styles/createTheme"));
const react_1 = require("react");
const recoil_1 = require("recoil");
const LocalizationProvider_1 = __importDefault(require("@mui/lab/LocalizationProvider"));
const AdapterDateFns_1 = __importDefault(require("@mui/lab/AdapterDateFns"));
const isNight = (time) => time.getHours() > 18 || time.getHours() < 6;
const palette = {
    primary: {
        light: '#EB553C',
        main: '#EB553C',
        dark: '#EB553C',
        contrastText: '#fff',
    }
};
exports.atomThemeMap = (0, recoil_1.atom)({
    key: 'atomThemes',
    default: {
        light: { palette },
        dark: { palette: Object.assign(Object.assign({}, palette), { mode: 'dark' }) }
    }
});
exports.atomThemeSelectedKey = (0, recoil_1.atom)({
    key: 'atomThemeSelectedKey',
    default: 'light' // isNight(new Date()) ? 'dark' : 'light',
});
const Material = ({ children }) => {
    const themeMap = (0, recoil_1.useRecoilValue)(exports.atomThemeMap);
    const themeSelectedKey = (0, recoil_1.useRecoilValue)(exports.atomThemeSelectedKey);
    const theme = (0, react_1.useMemo)(() => {
        const { [themeSelectedKey]: options } = themeMap;
        return (0, createTheme_1.default)(options);
    }, [themeMap, themeSelectedKey]);
    return ((0, jsx_runtime_1.jsxs)(ThemeProvider_1.default, Object.assign({ theme: theme }, { children: [(0, jsx_runtime_1.jsx)(CssBaseline_1.default, {}, void 0), (0, jsx_runtime_1.jsx)(LocalizationProvider_1.default, Object.assign({ dateAdapter: AdapterDateFns_1.default }, { children: children }), void 0)] }), void 0));
};
exports.default = Material;
