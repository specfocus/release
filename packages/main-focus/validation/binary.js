"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSameDate = exports.is = void 0;
const string_1 = require("../string");
const is = (type, val) => (![, null].includes(val) &&
    ((0, string_1.isString)(type) ? val.constructor.name === type : val.constructor === type));
exports.is = is;
/*
export const isContainedIn = (a: unknown[], b: unknown[]): boolean => {
  for (const v of new Set(a)) {
    if (
      !b.some((e) => e === v) ||
      a.filter((e) => e === v).length > b.filter((e) => e === v).length
    )
      return false;
  }
  return true;
};
*/
const isSameDate = (dateA, dateB) => (dateA.toISOString() === dateB.toISOString());
exports.isSameDate = isSameDate;
