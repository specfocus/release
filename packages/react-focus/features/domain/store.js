"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDomains = exports.useDomain2 = exports.isPromise = exports.useDomain = exports.useDomainFetch = exports.selectorDomains = exports.selectorDomain = exports.atomDomainStore = void 0;
const maybe_1 = require("@specfocus/spec-focus/maybe");
const react_1 = __importDefault(require("react"));
const recoil_1 = require("recoil");
const fetcher_1 = require("./fetcher");
exports.atomDomainStore = (0, recoil_1.atom)({
    key: 'atomDomainStore',
    default: {}
});
exports.selectorDomain = (0, recoil_1.selectorFamily)({
    key: 'selectorDomain',
    get: (key) => ({ get }) => __awaiter(void 0, void 0, void 0, function* () {
        const { [key]: entry } = get(exports.atomDomainStore);
        if (!(entry instanceof recoil_1.DefaultValue || (0, maybe_1.isNil)(entry))) {
            return entry;
        }
    }),
    set: (key) => ({ get, set }, entry) => set(exports.atomDomainStore, Object.assign(Object.assign({}, get(exports.atomDomainStore)), { [key]: entry }))
});
exports.selectorDomains = (0, recoil_1.selectorFamily)({
    key: 'selectorDomains',
    get: (keys) => ({ get }) => keys.reduce((acc, key) => {
        const { [key]: entry } = get(exports.atomDomainStore);
        if (!(entry instanceof recoil_1.DefaultValue || (0, maybe_1.isNil)(entry))) {
            Object.assign(acc, { [key]: entry });
        }
        return acc;
    }, {})
});
const useDomainFetch = () => (0, recoil_1.useRecoilCallback)(({ snapshot, set }) => (key) => __awaiter(void 0, void 0, void 0, function* () {
    const loadable = snapshot.getLoadable((0, fetcher_1.selectorDomainFetcher)(key));
    const { state } = loadable;
    let domain;
    switch (state) {
        case 'loading':
            const promise = Promise.resolve(loadable.toPromise());
            set(exports.atomDomainStore, store => (Object.assign(Object.assign({}, store), { [key]: promise })));
            domain = yield promise;
            set((0, exports.selectorDomain)(key), domain);
            break;
        case 'hasValue':
            domain = loadable.getValue();
            break;
        case 'hasError':
            break;
    }
    return domain;
}));
exports.useDomainFetch = useDomainFetch;
const useDomain = (key, timespan) => {
    const fetcher = (0, exports.useDomainFetch)();
    const [entry, set] = (0, recoil_1.useRecoilState)((0, exports.selectorDomain)(key));
    react_1.default.useEffect(() => {
        const expireTime = typeof timespan === 'number' && Number.isSafeInteger(timespan) ? Date.now() : 0;
        if (key && !entry || (expireTime > 0 && entry.expireTime > 0 && expireTime > (entry === null || entry === void 0 ? void 0 : entry.expireTime))) {
            fetcher(key).then(domain => set(Object.assign(Object.assign({}, domain), { expireTime: timespan ? Date.now() + timespan : -1 })));
        }
    }, [entry, fetcher, set]);
    return entry || { type: key, values: [] };
};
exports.useDomain = useDomain;
const isPromise = (val) => Promise.resolve(val) == val;
exports.isPromise = isPromise;
const useDomain2 = (key) => {
    const requireDomain = (0, exports.useDomainFetch)();
    const value = (0, recoil_1.useRecoilValue)((0, exports.selectorDomain)(key));
    if (!key) {
        return null;
    }
    if ((0, exports.isPromise)(value)) {
        return { type: key, values: [] };
    }
    else if ((0, maybe_1.isNil)(value)) {
        requireDomain(key);
        return { type: key, values: [] };
    }
    return value;
};
exports.useDomain2 = useDomain2;
const useDomains = (keys) => {
    const requireDomain = (0, exports.useDomainFetch)();
    const ready = (0, recoil_1.useRecoilValue)((0, exports.selectorDomains)(keys));
    console.log({ store: ready });
    keys.forEach(key => {
        if (!(key in ready)) {
            console.log({ require: key });
            requireDomain(key);
        }
    });
    return ready;
};
exports.useDomains = useDomains;
