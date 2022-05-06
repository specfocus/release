"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryProvider = exports.CountryContext = exports.atomGlobalCountry = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const recoil_1 = require("recoil");
exports.atomGlobalCountry = (0, recoil_1.atom)({
    key: 'atomGlobalCountry',
    default: {}
});
const DEFAULT_VALUE = { set: () => { throw 'not implemented'; } };
exports.CountryContext = react_1.default.createContext(DEFAULT_VALUE);
const CountryProvider = ({ children }) => {
    const globalState = (0, recoil_1.useRecoilValue)(exports.atomGlobalCountry);
    const [state, set] = react_1.default.useState(globalState);
    return ((0, jsx_runtime_1.jsx)(exports.CountryContext.Provider, Object.assign({ value: Object.assign(Object.assign({}, state), { set }) }, { children: children }), void 0));
};
exports.CountryProvider = CountryProvider;
const useCountryContext = () => {
    const [state, set] = (0, recoil_1.useRecoilState)(exports.atomGlobalCountry);
    const value = react_1.default.useContext(exports.CountryContext);
    if (value !== DEFAULT_VALUE) {
        return value;
    }
    return Object.assign(Object.assign({}, state), { set });
};
exports.default = useCountryContext;
