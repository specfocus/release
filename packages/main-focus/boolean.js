"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBoolean = exports.BOOLEAN = void 0;
exports.BOOLEAN = "boolean";
const isBoolean = (val) => val instanceof Object && val.constructor === Boolean ||
    val instanceof Boolean || typeof val === exports.BOOLEAN;
exports.isBoolean = isBoolean;
