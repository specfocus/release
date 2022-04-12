"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUndefined = exports.isSome = exports.isNil = exports.isNull = exports.isEmpty = void 0;
const array_1 = require("./array");
const object_1 = require("./object");
const string_1 = require("./string");
const isEmpty = (val) => (0, exports.isNil)(val) ||
    ((0, string_1.isString)(val) && val.length === 0) ||
    ((0, array_1.isArray)(val) && val.length === 0) ||
    ((0, object_1.isObject)(val) && !(Object.keys(val) || val).length);
exports.isEmpty = isEmpty;
const isNull = (val) => val === null;
exports.isNull = isNull;
const isNil = (val) => val === undefined || val === null || Number.isNaN(val);
exports.isNil = isNil;
const isSome = (input) => input != null;
exports.isSome = isSome;
const isUndefined = (val) => val === undefined;
exports.isUndefined = isUndefined;
