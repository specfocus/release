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
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyAsyncIterableIteratorToSink = exports.makeAsyncIterableIteratorFromSink = exports.makePushPullAsyncIterableIterator = exports.isAsyncIterable = exports.getAsyncIterator = void 0;
function getAsyncIterator(asyncIterable) {
    const method = asyncIterable[Symbol.asyncIterator];
    return method.call(asyncIterable);
}
exports.getAsyncIterator = getAsyncIterator;
function isAsyncIterable(input) {
    return (typeof input === "object" &&
        input !== null &&
        // The AsyncGenerator check is for Safari on iOS which currently does not have
        // Symbol.asyncIterator implemented
        // That means every custom AsyncIterable must be built using a AsyncGeneratorFunction (async function * () {})
        (input[Symbol.toStringTag] === "AsyncGenerator" ||
            (Symbol.asyncIterator && Symbol.asyncIterator in input)));
}
exports.isAsyncIterable = isAsyncIterable;
function createDeferred() {
    const d = {};
    d.promise = new Promise((resolve, reject) => {
        d.resolve = resolve;
        d.reject = reject;
    });
    return d;
}
const SYMBOL_FINISHED = Symbol();
const SYMBOL_NEW_VALUE = Symbol();
/**
 * makePushPullAsyncIterableIterator
 *
 * The iterable will publish values until return or throw is called.
 * Afterwards it is in the completed state and cannot be used for publishing any further values.
 * It will handle back-pressure and keep pushed values until they are consumed by a source.
 */
function makePushPullAsyncIterableIterator() {
    let isRunning = true;
    const values = [];
    let newValueD = createDeferred();
    const finishedD = createDeferred();
    const asyncIterableIterator = (function PushPullAsyncIterableIterator() {
        return __asyncGenerator(this, arguments, function* PushPullAsyncIterableIterator_1() {
            while (true) {
                if (values.length > 0) {
                    yield yield __await(values.shift());
                }
                else {
                    const result = yield __await(Promise.race([
                        newValueD.promise,
                        finishedD.promise,
                    ]));
                    if (result === SYMBOL_FINISHED) {
                        break;
                    }
                    if (result !== SYMBOL_NEW_VALUE) {
                        throw result;
                    }
                }
            }
        });
    })();
    function pushValue(value) {
        if (isRunning === false) {
            // TODO: Should this throw?
            return;
        }
        values.push(value);
        newValueD.resolve(SYMBOL_NEW_VALUE);
        newValueD = createDeferred();
    }
    // We monkey patch the original generator for clean-up
    const originalReturn = asyncIterableIterator.return.bind(asyncIterableIterator);
    asyncIterableIterator.return = (...args) => {
        isRunning = false;
        finishedD.resolve(SYMBOL_FINISHED);
        return originalReturn(...args);
    };
    const originalThrow = asyncIterableIterator.throw.bind(asyncIterableIterator);
    asyncIterableIterator.throw = (err) => {
        isRunning = false;
        finishedD.resolve(err);
        return originalThrow(err);
    };
    return {
        pushValue,
        asyncIterableIterator,
    };
}
exports.makePushPullAsyncIterableIterator = makePushPullAsyncIterableIterator;
const makeAsyncIterableIteratorFromSink = (make) => {
    const { pushValue, asyncIterableIterator } = makePushPullAsyncIterableIterator();
    const dispose = make({
        next: (value) => {
            console.log("5", value);
            pushValue(value);
        },
        complete: () => {
            asyncIterableIterator.return();
        },
        error: (err) => {
            asyncIterableIterator.throw(err);
        },
    });
    const originalReturn = asyncIterableIterator.return;
    let returnValue;
    asyncIterableIterator.return = () => {
        if (returnValue === undefined) {
            dispose();
            returnValue = originalReturn();
        }
        console.log("3");
        return returnValue;
    };
    console.log("4");
    return asyncIterableIterator;
};
exports.makeAsyncIterableIteratorFromSink = makeAsyncIterableIteratorFromSink;
function applyAsyncIterableIteratorToSink(asyncIterableIterator, sink) {
    const run = () => __awaiter(this, void 0, void 0, function* () {
        var e_1, _a;
        try {
            try {
                for (var asyncIterableIterator_1 = __asyncValues(asyncIterableIterator), asyncIterableIterator_1_1; asyncIterableIterator_1_1 = yield asyncIterableIterator_1.next(), !asyncIterableIterator_1_1.done;) {
                    const value = asyncIterableIterator_1_1.value;
                    sink.next(value);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (asyncIterableIterator_1_1 && !asyncIterableIterator_1_1.done && (_a = asyncIterableIterator_1.return)) yield _a.call(asyncIterableIterator_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            sink.complete();
        }
        catch (err) {
            sink.error(err);
        }
    });
    run();
    return () => {
        var _a;
        (_a = asyncIterableIterator.return) === null || _a === void 0 ? void 0 : _a.call(asyncIterableIterator);
    };
}
exports.applyAsyncIterableIteratorToSink = applyAsyncIterableIteratorToSink;
/*
export const myAsyncIterable = {
  async *[Symbol.asyncIterator]() {
    yield "hello";
    yield "async";
    yield "iteration!";
  },
};

(async () => {
  for await (const x of myAsyncIterable) {
    console.log(x);
    // expected output:
    //    "hello"
    //    "async"
    //    "iteration!"
  }
})();
*/ 
