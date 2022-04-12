"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.without = exports.isSet = exports.isEmpty = exports.isArrayLike = exports.isArray = exports.ARRAY = void 0;
const function_1 = require("./function");
exports.ARRAY = "array";
const isArray = (val) => Array.isArray(val);
exports.isArray = isArray;
const isArrayLike = (val) => typeof val[Symbol.iterator] === function_1.FUNCTION;
exports.isArrayLike = isArrayLike;
const isEmpty = (val) => !(0, exports.isArray)(val) || val.length === 0;
exports.isEmpty = isEmpty;
const isSet = (val) => (0, exports.isArrayLike)(val) && !(0, exports.isArray)(val);
exports.isSet = isSet;
/*
export const isSorted = (arr: Array<number>): false | 1 | -1 => {
let direction = -(arr[0] - arr[1]);
for (let [i, val] of arr.entries()) {
direction = !direction ? -(arr[i - 1] - arr[i]) : direction;
if (i === arr.length - 1) {
  return !direction ? false : <1 | -1>(direction / Math.abs(direction));
} else if ((val - arr[i + 1]) * direction > 0) {
  return false;
}
}
throw 'never';
};
*/
/**
 * Creates an array excluding all provided values using SameValueZero for equality comparisons.
 *
 * @param array The array to filter.
 * @param values The values to exclude.
 * @return Returns the new array of filtered values.
 */
const without = (array, ...values) => {
    if ((0, exports.isEmpty)(array)) {
        return [];
    }
    const result = [];
    for (let i = 0; i < array.length; i++) {
        const val = array[i];
        if (!values.includes(val)) {
            result.push(val);
        }
    }
    return result;
};
exports.without = without;
