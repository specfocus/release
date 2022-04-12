"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promiseWithTimeout = exports.getResult = exports.getTruthy = exports.isPending = exports.isPromise = void 0;
const util_1 = require("util");
const PENDING = 'pending';
const isPromise = (val) => Promise.resolve(val) == val;
exports.isPromise = isPromise;
const isPending = (promise) => (0, util_1.inspect)(promise).includes(PENDING);
exports.isPending = isPending;
const getTruthy = (promise) => {
    if ((0, util_1.inspect)(promise).includes('{ true }')) {
        return true;
    }
    if ((0, util_1.inspect)(promise).includes('{ false }')) {
        return false;
    }
};
exports.getTruthy = getTruthy;
const getResult = (promise) => {
    if ((0, exports.isPending)(promise)) {
        console.log('pending');
        return;
    }
    console.log('not pending', (0, util_1.inspect)(promise));
    let result;
    promise.then(r => { result = r; });
    return result;
};
exports.getResult = getResult;
const promiseWithTimeout = (promise) => {
    let timeoutId;
    const timeoutPromise = new Promise((_, reject) => {
        timeoutId = setTimeout(() => {
            reject(new Error('Request timed out'));
        }, 4000);
    });
    return [
        Promise.race([promise, timeoutPromise]),
        timeoutId
    ];
};
exports.promiseWithTimeout = promiseWithTimeout;
