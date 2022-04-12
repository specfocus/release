"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isObject = exports.isEmpty = void 0;
const function_1 = require("../function");
const maybe_1 = require("../maybe");
const value_1 = require("../value");
const isEmpty = (val) => val == null || ((0, exports.isObject)(val) && Object.keys(val).length === 0);
exports.isEmpty = isEmpty;
const isObject = (val) => !(0, maybe_1.isNil)(val) && !(0, value_1.isValue)(val) && !Array.isArray(val) && !(0, function_1.isFunction)(val) && !(val instanceof Date);
exports.isObject = isObject;
