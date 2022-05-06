"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTitlebar = exports.atomTitlebar = void 0;
const recoil_1 = require("recoil");
const react_1 = __importDefault(require("react"));
exports.atomTitlebar = (0, recoil_1.atom)({
    key: 'atomTitlebar',
    default: {
        title: '',
        tools: []
    }
});
const useTitlebar = (config) => {
    const [previous] = react_1.default.useState((0, recoil_1.useRecoilValue)(exports.atomTitlebar));
    const setTitlebar = (0, recoil_1.useSetRecoilState)(exports.atomTitlebar);
    react_1.default.useEffect(() => {
        setTitlebar(config);
        return () => setTitlebar(previous);
    }, []);
};
exports.useTitlebar = useTitlebar;
