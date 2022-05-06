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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useThemeLocaleState = exports.useAppThemeValue = exports.useAppThemeState = exports.appTheme = exports.APP_THEME = void 0;
const styles_1 = require("@mui/material/styles");
const react_1 = require("react");
const recoil_1 = require("recoil");
const default_1 = __importDefault(require("../theme/default"));
exports.APP_THEME = 'appTheme';
exports.appTheme = (0, recoil_1.atom)({
    key: exports.APP_THEME,
    default: {
        themeOptions: default_1.default
    }
});
const useAppThemeState = ({ themeKey }) => {
    const [state, setState] = (0, recoil_1.useRecoilState)(exports.appTheme);
    (0, react_1.useEffect)(() => {
        Promise.resolve().then(() => __importStar(require(`../theme/${themeKey}`))).then(themeOptions => {
            const theme = (0, styles_1.createTheme)(themeOptions, state.localization);
            setState(Object.assign(Object.assign({}, state), { theme, themeKey, themeOptions }));
        });
    }, [themeKey]);
};
exports.useAppThemeState = useAppThemeState;
const useAppThemeValue = () => {
    const { theme } = (0, recoil_1.useRecoilValue)(exports.appTheme);
    return theme;
};
exports.useAppThemeValue = useAppThemeValue;
const useThemeLocaleState = ({ languageTag }) => {
    const [state, setState] = (0, recoil_1.useRecoilState)(exports.appTheme);
    (0, react_1.useEffect)(() => {
        Promise.resolve().then(() => __importStar(require('@mui/material/locale'))).then(locales => {
            const localization = locales.default[languageTag.replace('-', '')];
            if (localization) {
                const theme = (0, styles_1.createTheme)(state.themeOptions, localization);
                setState(Object.assign(Object.assign({}, state), { localization, theme }));
            }
        });
    }, [languageTag]);
};
exports.useThemeLocaleState = useThemeLocaleState;
