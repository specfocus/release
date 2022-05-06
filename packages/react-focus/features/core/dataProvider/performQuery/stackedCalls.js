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
exports.replayStackedCalls = exports.stackOptimisticCall = exports.stackCall = exports.getRemainingStackedCalls = void 0;
const doQuery_1 = require("./doQuery");
let nbRemainingStackedCalls = 0;
const getRemainingStackedCalls = () => nbRemainingStackedCalls;
exports.getRemainingStackedCalls = getRemainingStackedCalls;
// List of dataProvider calls emitted while in optimistic mode.
// These calls get replayed once the dataProvider exits optimistic mode
const stackedCalls = [];
const stackCall = params => {
    stackedCalls.push(params);
    nbRemainingStackedCalls++;
};
exports.stackCall = stackCall;
const stackedOptimisticCalls = [];
const stackOptimisticCall = params => {
    stackedOptimisticCalls.push(params);
    nbRemainingStackedCalls++;
};
exports.stackOptimisticCall = stackOptimisticCall;
// Replay calls recorded while in optimistic mode
const replayStackedCalls = () => __awaiter(void 0, void 0, void 0, function* () {
    let clone;
    // We must perform any undoable queries first so that the effects of previous undoable
    // queries do not conflict with this one.
    // We only handle all side effects queries if there are no more undoable queries
    if (stackedOptimisticCalls.length > 0) {
        clone = [...stackedOptimisticCalls];
        // remove these calls from the list *before* doing them
        // because side effects in the calls can add more calls
        // so we don't want to erase these.
        stackedOptimisticCalls.splice(0, stackedOptimisticCalls.length);
        yield Promise.all(clone.map(params => Promise.resolve(doQuery_1.doQuery.call(null, params))));
        // once the calls are finished, decrease the number of remaining calls
        nbRemainingStackedCalls -= clone.length;
    }
    else {
        clone = [...stackedCalls];
        // remove these calls from the list *before* doing them
        // because side effects in the calls can add more calls
        // so we don't want to erase these.
        stackedCalls.splice(0, stackedCalls.length);
        yield Promise.all(clone.map(params => Promise.resolve(doQuery_1.doQuery.call(null, params))));
        // once the calls are finished, decrease the number of remaining calls
        nbRemainingStackedCalls -= clone.length;
    }
});
exports.replayStackedCalls = replayStackedCalls;
