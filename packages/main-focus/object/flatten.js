"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const object_1 = require("./object");
const flatten = (src, path = []) => Object.entries(src).reduce((acc, [key, val]) => {
    if ((0, object_1.isObject)(val)) {
        return Object.assign(acc, flatten(val, [...path, key]));
    }
    return Object.assign(acc, { [[...path, key].join('.')]: val });
}, {});
exports.default = flatten;
