"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.valueOf = exports.isValue = void 0;
const boolean_1 = require("./boolean");
const date_1 = require("./date");
const number_1 = require("./number");
const string_1 = require("./string");
const isValue = (val) => (0, boolean_1.isBoolean)(val) || (0, date_1.isDate)(val) || (0, number_1.isNumber)(val) || (0, string_1.isString)(val);
exports.isValue = isValue;
const valueOf = (val) => {
    if (val instanceof Boolean) {
        return val.valueOf();
    }
    if (val instanceof Date) {
        return val.valueOf();
    }
    if (val instanceof Number) {
        return val.valueOf();
    }
    if (val instanceof String) {
        return val.valueOf();
    }
    return val;
};
exports.valueOf = valueOf;
