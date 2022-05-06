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
Object.defineProperty(exports, "__esModule", { value: true });
exports.usePushReducer = exports.useEnqueueAction = exports.useDequeueAction = exports.selectorAction = exports.selectorState = exports.atomStateStore = exports.atomReducerStack = exports.atomActionQueue = void 0;
const recoil_1 = require("recoil");
const maybe_1 = require("@specfocus/spec-focus/maybe");
exports.atomActionQueue = (0, recoil_1.atom)({
    key: 'atomActionQueue',
    default: []
});
exports.atomReducerStack = (0, recoil_1.atom)({
    key: 'atomReducerStack',
    default: []
});
exports.atomStateStore = (0, recoil_1.atom)({
    key: 'atomStateStore',
    default: {}
});
exports.selectorState = (0, recoil_1.selectorFamily)({
    key: 'selectorState',
    get: (key) => ({ get }) => {
        const { [key]: entry } = get(exports.atomStateStore);
        return entry instanceof recoil_1.DefaultValue ? undefined : entry;
    },
    set: (key) => ({ get, set }, state) => {
        if (state instanceof recoil_1.DefaultValue || (0, maybe_1.isNil)(state)) {
            const _a = get(exports.atomStateStore), _b = key, entry = _a[_b], next = __rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
            set(exports.atomStateStore, next);
        }
        else {
            set(exports.atomStateStore, Object.assign(Object.assign({}, get(exports.atomStateStore)), { [key]: state }));
        }
    }
});
exports.selectorAction = (0, recoil_1.selector)({
    key: 'selectorAction',
    get: ({ get }) => {
        const [top] = get(exports.atomActionQueue);
        return top;
    },
    set: ({ get, set }, action) => {
        if (action instanceof recoil_1.DefaultValue)
            return;
        const queue = get(exports.atomActionQueue);
        set(exports.atomActionQueue, [...queue, action]);
    }
});
const useDequeueAction = () => {
    const [[top], setter] = (0, recoil_1.useRecoilState)(exports.atomActionQueue);
    setter(([rem, ...next]) => next);
    return top;
};
exports.useDequeueAction = useDequeueAction;
const useEnqueueAction = (action) => {
    const setter = (0, recoil_1.useSetRecoilState)(exports.atomActionQueue);
    setter(queue => [...queue, action]);
};
exports.useEnqueueAction = useEnqueueAction;
const usePushReducer = (reducer) => {
};
exports.usePushReducer = usePushReducer;
const reuce = (state) => {
    return state;
};
const useDispatch = (state) => {
    const dispatch = (action) => {
    };
    return dispatch;
};
