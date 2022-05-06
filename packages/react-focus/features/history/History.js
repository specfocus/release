"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePushLocationOnce = exports.usePopLocationOnce = exports.selectorLocation = exports.useHistory = exports.atomHistory = void 0;
const react_1 = __importDefault(require("react"));
const react_router_1 = require("react-router");
const recoil_1 = require("recoil");
exports.atomHistory = (0, recoil_1.atom)({
    key: 'atomHistory',
    default: []
});
const useHistory = () => (0, recoil_1.useRecoilValue)(exports.atomHistory);
exports.useHistory = useHistory;
exports.selectorLocation = (0, recoil_1.selector)({
    key: 'selectorLocation',
    get: ({ get }) => {
        const [top] = get(exports.atomHistory);
        return top;
    },
    set: ({ get, set }, location) => {
        if (location instanceof recoil_1.DefaultValue)
            return;
        const history = get(exports.atomHistory);
        if (location) {
            set(exports.atomHistory, [location, ...history]);
        }
        else {
            const [, ...next] = history;
            set(exports.atomHistory, next);
        }
    }
});
const usePopLocationOnce = () => {
    const [top, set] = (0, recoil_1.useRecoilState)(exports.selectorLocation);
    react_1.default.useEffect(() => set(undefined), []);
    return top;
};
exports.usePopLocationOnce = usePopLocationOnce;
const usePushLocationOnce = (location) => {
    const set = (0, recoil_1.useSetRecoilState)(exports.selectorLocation);
    react_1.default.useEffect(() => set(location), []);
};
exports.usePushLocationOnce = usePushLocationOnce;
const HistoryController = () => {
    const location = (0, react_router_1.useLocation)();
    // const history = useRecoildState(atomHistory);
    // TODO: track going back
    const set = (0, recoil_1.useSetRecoilState)(exports.selectorLocation);
    react_1.default.useEffect(() => set(location), [location]);
    return null;
};
exports.default = HistoryController;
