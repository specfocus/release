"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUndefined = exports.isSymbol = exports.isStream = exports.isPrimitive = exports.isNumberOrString = exports.isNaN = exports.isLeapYear = exports.isFunction = void 0;
const function_1 = require("../function");
const maybe_1 = require("../maybe");
const number_1 = require("../number");
const object_1 = require("../object");
const string_1 = require("../string");
const symbol_1 = require("../symbol");
const isFunction = (val) => typeof val === function_1.FUNCTION;
exports.isFunction = isFunction;
const isLeapYear = (val) => (0, number_1.isPositiveInteger)(val) && new Date(val, 1, 29).getMonth() === 1;
exports.isLeapYear = isLeapYear;
const isNaN = (val) => Number.isNaN(val);
exports.isNaN = isNaN;
const isNumberOrString = (val) => (0, number_1.isNumber)(val) || (0, string_1.isString)(val);
exports.isNumberOrString = isNumberOrString;
const isPrimitive = (val) => Object(val) !== val;
exports.isPrimitive = isPrimitive;
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
const isStream = (val) => !(0, maybe_1.isNull)(val) && (0, object_1.isObject)(val) && typeof val.pipe === function_1.FUNCTION;
exports.isStream = isStream;
/// export const isString = (val: unknown): boolean => (typeof val === 'string');
const isSymbol = (val) => typeof val === symbol_1.SYMBOL;
exports.isSymbol = isSymbol;
const isUndefined = (val) => val === undefined;
exports.isUndefined = isUndefined;
