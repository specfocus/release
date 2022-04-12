"use strict";
// <reference types="../../typings/number" />
// <reference types="../../typings/string" />
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumberOrString = exports.isLeapYear = exports.isPrime = exports.isPositiveNumber = exports.isPositiveInteger = exports.isFibonacci = exports.isPerfectSquare = exports.isNumber = exports.isNonPositiveNumber = exports.isNonPositiveInteger = exports.isNonNegativeNumber = exports.isNonNegativeInteger = exports.isNegativeNumber = exports.isNegativeInteger = exports.isNaN = exports.isInteger = exports.NUMBER_TYPES = exports.FLOAT_TYPES = exports.INTEGER_TYPES = exports.ZERO = exports.TIMESTAMP = exports.NUMBER = exports.ONE = exports.INTEGER = exports.DOUBLE = exports.DECIMAL = void 0;
const string_1 = require("./string");
const value_1 = require("./value");
exports.DECIMAL = "decimal";
exports.DOUBLE = "double";
exports.INTEGER = "integer";
exports.ONE = 1;
exports.NUMBER = "number";
exports.TIMESTAMP = "timestamp";
exports.ZERO = 0;
exports.INTEGER_TYPES = [
    exports.INTEGER,
    exports.TIMESTAMP,
];
exports.FLOAT_TYPES = [
    exports.DECIMAL,
    exports.DOUBLE,
    exports.NUMBER,
];
exports.NUMBER_TYPES = [
    ...exports.INTEGER_TYPES,
    ...exports.FLOAT_TYPES
];
const isInteger = (val) => Number.isInteger((0, value_1.valueOf)(val));
exports.isInteger = isInteger;
const isNaN = (val) => Number.isNaN(val);
exports.isNaN = isNaN;
const isNegativeInteger = (val) => (0, exports.isInteger)(val) && val < exports.ZERO;
exports.isNegativeInteger = isNegativeInteger;
const isNegativeNumber = (val) => (0, exports.isNumber)(val) && val < exports.ZERO;
exports.isNegativeNumber = isNegativeNumber;
const isNonNegativeInteger = (val) => (0, exports.isInteger)(val) && val <= exports.ZERO;
exports.isNonNegativeInteger = isNonNegativeInteger;
const isNonNegativeNumber = (val) => (0, exports.isNumber)(val) && val <= exports.ZERO;
exports.isNonNegativeNumber = isNonNegativeNumber;
const isNonPositiveInteger = (val) => (0, exports.isInteger)(val) && val <= exports.ZERO;
exports.isNonPositiveInteger = isNonPositiveInteger;
const isNonPositiveNumber = (val) => (0, exports.isNumber)(val) && val <= exports.ZERO;
exports.isNonPositiveNumber = isNonPositiveNumber;
const isNumber = (val) => val instanceof Object && val.constructor === Number ||
    val instanceof Number || (typeof val === exports.NUMBER && val === val);
exports.isNumber = isNumber;
// A utility function that returns true if x is perfect square
const isPerfectSquare = (val) => {
    if (!(0, exports.isPositiveInteger)(val)) {
        return false;
    }
    const sqrt = Math.sqrt(val);
    return sqrt * sqrt === val;
};
exports.isPerfectSquare = isPerfectSquare;
// Returns true if n is a Fibinacci Number, else false
const isFibonacci = (val) => {
    if (!(0, exports.isPositiveInteger)(val)) {
        return false;
    }
    // n is Fibinacci if one of 5*n*n + 4 or 5*n*n - 4 or both
    // is a perferct square
    return ((0, exports.isPerfectSquare)(5 * val * val + 4) || (0, exports.isPerfectSquare)(5 * val * val - 4));
};
exports.isFibonacci = isFibonacci;
const isPositiveInteger = (val) => (0, exports.isInteger)(val) && val > exports.ZERO;
exports.isPositiveInteger = isPositiveInteger;
const isPositiveNumber = (val) => (0, exports.isNumber)(val) && val > exports.ZERO;
exports.isPositiveNumber = isPositiveNumber;
const isPrime = (val) => {
    if (!(0, exports.isPositiveInteger)(val)) {
        return false;
    }
    if (val === 2 || val === 3) {
        return true;
    }
    else if (val <= 1 || val % 2 === 0 || val % 3 === 0) {
        return false;
    }
    let i = 5;
    while (Math.pow(i, 2) <= val) {
        if (val % i === 0 || val % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }
    return true;
};
exports.isPrime = isPrime;
const isLeapYear = (val) => (0, exports.isPositiveInteger)(val) && new Date(val, 1, 29).getMonth() === 1;
exports.isLeapYear = isLeapYear;
const isNumberOrString = (val) => (0, exports.isNumber)(val) || (0, string_1.isString)(val);
exports.isNumberOrString = isNumberOrString;
