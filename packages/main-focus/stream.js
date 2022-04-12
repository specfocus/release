"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isStream = void 0;
const function_1 = require("./function");
const maybe_1 = require("./maybe");
const object_1 = require("./object");
const isStream = (val) => !(0, maybe_1.isNull)(val) && (0, object_1.isObject)(val) && typeof val.pipe === function_1.FUNCTION;
exports.isStream = isStream;
