"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findIndex(arr, err) {
    let idx = Infinity;
    arr.some((key, ii) => {
        var _a;
        if (((_a = err.path) === null || _a === void 0 ? void 0 : _a.indexOf(key)) !== -1) {
            idx = ii;
            return true;
        }
    });
    return idx;
}
function sortByKeyOrder(keys) {
    return (a, b) => {
        return findIndex(keys, a) - findIndex(keys, b);
    };
}
exports.default = sortByKeyOrder;
