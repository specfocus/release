"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAppLocaleState = exports.appLocale = exports.APP_LOCALE = void 0;
const react_1 = require("react");
const recoil_1 = require("recoil");
const AppTheme_1 = require("./AppTheme");
exports.APP_LOCALE = 'appLocale';
exports.appLocale = (0, recoil_1.atom)({
    key: exports.APP_LOCALE,
    default: {
        languageTag: 'enUS'
    }
});
const useAppLocaleState = (props) => {
    const [state, setState] = (0, recoil_1.useRecoilState)(exports.appLocale);
    (0, react_1.useEffect)(() => {
        const { languageTag } = props;
        setState(Object.assign(Object.assign({}, state), { languageTag }));
    }, [props]);
    (0, AppTheme_1.useThemeLocaleState)(props);
};
exports.useAppLocaleState = useAppLocaleState;
