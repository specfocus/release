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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsyncIteration = exports.skip = exports.last = exports.first = exports.distinct = exports.unique = exports.join = void 0;
const iterable_1 = require("./iterable");
const join = (promises) => { var promises_1, promises_1_1; return __awaiter(void 0, void 0, void 0, function* () {
    var e_1, _a;
    const result = [];
    try {
        for (promises_1 = __asyncValues(promises); promises_1_1 = yield promises_1.next(), !promises_1_1.done;) {
            const val = promises_1_1.value;
            result.push(val);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (promises_1_1 && !promises_1_1.done && (_a = promises_1.return)) yield _a.call(promises_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return result;
}); };
exports.join = join;
const unique = (val, index, arr) => arr.indexOf(val) === index;
exports.unique = unique;
const distinct = (arr) => arr.filter(exports.unique);
exports.distinct = distinct;
const first = (iterable) => __awaiter(void 0, void 0, void 0, function* () { return new AsyncIteration(yield iterable).first(); });
exports.first = first;
const last = (iterable) => __awaiter(void 0, void 0, void 0, function* () { return new AsyncIteration(yield iterable).last(); });
exports.last = last;
const skip = (iterable, count) => __awaiter(void 0, void 0, void 0, function* () { return new AsyncIteration(yield iterable).skip(count); });
exports.skip = skip;
class AsyncIteration {
    constructor(asyncIterable) {
        this.asyncIterator = (0, iterable_1.isAsyncIterable)(asyncIterable)
            ? (0, iterable_1.getAsyncIterator)(asyncIterable)
            : asyncIterable;
    }
    first() {
        return __awaiter(this, void 0, void 0, function* () {
            const { done, value } = yield this.asyncIterator.next();
            if (done) {
                return;
            }
            return value;
        });
    }
    last() {
        return __awaiter(this, void 0, void 0, function* () {
            let result;
            for (;;) {
                const { done, value } = yield this.asyncIterator.next();
                if (done) {
                    break;
                }
                result = value;
            }
            return result;
        });
    }
    next() {
        return __awaiter(this, void 0, void 0, function* () {
            const { done, value } = yield this.asyncIterator.next();
            if (done) {
                return;
            }
            return value;
        });
    }
    skip(count) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let i = 0; i < count; i++) {
                const { done, value } = yield this.asyncIterator.next();
                if (done) {
                    break;
                }
            }
            return this;
        });
    }
}
exports.AsyncIteration = AsyncIteration;
