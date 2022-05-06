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
exports.useAside = exports.selectorAsideEntry = exports.atomAsideRecord = exports.useAsideActive = exports.selectorAsideActive = exports.atomAsideActive = void 0;
const maybe_1 = require("@specfocus/spec-focus/maybe");
const react_1 = __importDefault(require("react"));
const recoil_1 = require("recoil");
exports.atomAsideActive = (0, recoil_1.atom)({
    key: 'atomAsideActive',
    default: undefined
});
exports.selectorAsideActive = (0, recoil_1.selectorFamily)({
    key: 'selectorAsideActive',
    get: (key) => ({ get }) => (key === get(exports.atomAsideActive)),
    set: (key) => ({ get, set, reset }, active) => {
        if (!(active instanceof recoil_1.DefaultValue || (0, maybe_1.isNil)(active)))
            set(exports.atomAsideActive, key);
        else if (key === get(exports.atomAsideActive))
            reset(exports.atomAsideActive);
    }
});
const useAsideActive = (key) => (0, recoil_1.useRecoilState)((0, exports.selectorAsideActive)(key));
exports.useAsideActive = useAsideActive;
exports.atomAsideRecord = (0, recoil_1.atom)({
    key: 'atomAsideRecord',
    default: {}, // default value (aka initial value)
});
exports.selectorAsideEntry = (0, recoil_1.selectorFamily)({
    key: 'selectorAsideEntry',
    get: (key) => ({ get }) => {
        const { [key]: entry } = get(exports.atomAsideRecord);
        return entry instanceof recoil_1.DefaultValue ? undefined : entry;
    },
    set: (key) => ({ get, set, reset }, element) => {
        if (element instanceof recoil_1.DefaultValue || (0, maybe_1.isNil)(element)) {
            const _a = get(exports.atomAsideRecord), _b = key, entry = _a[_b], next = __rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
            set(exports.atomAsideRecord, next);
        }
        else {
            const onClose = () => {
                const active = get(exports.atomAsideActive);
                if (active === key)
                    reset(exports.atomAsideActive);
            };
            set(exports.atomAsideRecord, Object.assign(Object.assign({}, get(exports.atomAsideRecord)), { [key]: react_1.default.cloneElement(element, { onClose }) }));
        }
    }
});
const useAside = ([key, element]) => {
    const set = (0, recoil_1.useSetRecoilState)((0, exports.selectorAsideEntry)(key));
    react_1.default.useEffect(() => {
        set(element);
        return () => {
            set(undefined);
        };
    }, []);
};
exports.useAside = useAside;
