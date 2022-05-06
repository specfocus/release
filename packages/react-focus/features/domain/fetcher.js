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
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectorDomainFetcher = exports.match = exports.useDomainConfig = exports.requestOptions = exports.atomDomainConfig = exports.CONTENT_TYPE = void 0;
const recoil_1 = require("recoil");
// import type { Domain } from '@specfocus/spec-focus/domain';
const string_1 = require("@specfocus/spec-focus/string");
exports.CONTENT_TYPE = 'content-type';
exports.atomDomainConfig = (0, recoil_1.atom)({
    key: 'atomDomainFetcherConfig',
    default: {}
});
exports.requestOptions = {
    method: 'GET',
    // mode: 'no-cors',
    headers: {
        // 'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    }
};
const useDomainConfig = () => (0, recoil_1.useRecoilCallback)(({ snapshot, set }) => (config) => __awaiter(void 0, void 0, void 0, function* () {
    const state = yield snapshot.getPromise(exports.atomDomainConfig);
    set(exports.atomDomainConfig, Object.assign(Object.assign({}, state), config));
}));
exports.useDomainConfig = useDomainConfig;
const match = (arr, s) => {
    if (!s) {
        return '*';
    }
    let best;
    for (let item of arr) {
        if (s.startsWith(item) && (!best || best.length < s.length)) {
            best = item;
        }
    }
    return best !== null && best !== void 0 ? best : '*';
};
exports.match = match;
exports.selectorDomainFetcher = (0, recoil_1.selectorFamily)({
    key: 'selectorDomainFetcher',
    get: (key) => ({ get }) => __awaiter(void 0, void 0, void 0, function* () {
        const config = get(exports.atomDomainConfig);
        const k = (0, exports.match)(Object.keys(config), key);
        const { urlTemplate } = config[k] || { urlTemplate: '/domains/{key}.json' };
        const url = (0, string_1.supplant)(urlTemplate, { key });
        return fetch(url, exports.requestOptions)
            .then(response => {
            if (response.headers.has(exports.CONTENT_TYPE) && response.headers.get(exports.CONTENT_TYPE).indexOf('application/json') !== -1) {
                return response.json();
            }
            return { type: key, values: [] };
        })
            .catch(err => {
            console.error(err);
            return { type: key, values: [] };
        });
    })
});
