"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSimpleObject = exports.flatten = exports.OBJECT_TYPE = void 0;
exports.OBJECT_TYPE = 'object';
const flatten = (obj, path = []) => Object.entries(obj).reduce((acc, [key, val]) => {
    if ((0, exports.isSimpleObject)(val)) {
        return Object.assign(acc, (0, exports.flatten)(val, [...path, key]));
    }
    return Object.assign(acc, { [[...path, key].join('.')]: val });
}, {});
exports.flatten = flatten;
const isSimpleObject = (val) => typeof val === 'object' && val !== null && !Array.isArray(val) && !(val instanceof Date);
exports.isSimpleObject = isSimpleObject;
