"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSimpleValue = exports.isSimpleType = exports.isSimpleString = exports.isSimpleObject = exports.isSimpleNumber = exports.isSimpleBoolean = void 0;
const object_1 = require("./object");
const isSimpleBoolean = (val) => typeof val === 'boolean';
exports.isSimpleBoolean = isSimpleBoolean;
const isSimpleNumber = (val) => typeof val === 'number';
exports.isSimpleNumber = isSimpleNumber;
const isSimpleObject = (val) => {
    if (!(0, object_1.isObject)(val)) {
        return false;
    }
    return !Object.values(val).some(val => !(0, exports.isSimpleType)(val));
};
exports.isSimpleObject = isSimpleObject;
const isSimpleString = (val) => typeof val === 'string';
exports.isSimpleString = isSimpleString;
const isSimpleType = (val) => {
    switch (val) {
        case NaN:
            return true;
        case null:
            return true;
    }
    switch (typeof val) {
        case 'bigint':
        case 'boolean':
        case 'number':
        case 'string':
        case 'undefined':
            return true;
        case 'function':
        case 'symbol':
            return false;
        case 'object':
            if (val === null) {
                return true;
            }
            if (Array.isArray(val)) {
                return !val.some(item => !(0, exports.isSimpleType)(item));
            }
            switch (val.constructor) {
                case Boolean:
                case Date:
                case Number:
                case String:
                    return true;
                default:
                    return !Object.values(val).some(val => !(0, exports.isSimpleType)(val));
            }
        default:
            throw 'not implemented';
    }
};
exports.isSimpleType = isSimpleType;
const isSimpleValue = (val) => typeof val === 'boolean' || typeof val === 'number' || typeof val === 'string';
exports.isSimpleValue = isSimpleValue;
