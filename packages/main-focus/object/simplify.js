"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.simplifyObject = void 0;
// TODO: reuse clone with simplify argument
const simplify = (val) => {
    switch (typeof val) {
        case 'bigint':
        case 'boolean':
        case 'number':
        case 'string':
            return val;
        case 'undefined':
        case 'function':
        case 'symbol':
            return;
        case 'object':
            if (val === null)
                return null;
            if (val instanceof Boolean)
                return val.valueOf();
            if (val instanceof Date)
                return val.valueOf();
            if (val instanceof Number)
                return val.valueOf();
            if (val instanceof String)
                return val.valueOf();
            if (Array.isArray(val))
                return val.map(simplify);
            return (0, exports.simplifyObject)(val);
    }
    ;
};
const simplifyObject = (src) => Object.entries(src).reduce((acc, [key, val]) => {
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
            return Object.assign(acc, { [key]: val });
        case 'undefined':
        case 'function':
        case 'symbol':
            return acc;
        case 'object':
            if (val === null) {
                return Object.assign(acc, { [key]: val });
            }
            if (Array.isArray(val)) {
                return Object.assign(acc, { [key]: val.map(simplify) });
            }
            switch (val.constructor) {
                case Boolean:
                case Date:
                case Number:
                case String:
                    return Object.assign(acc, { [key]: val.valueOf() });
                default:
                    return Object.assign(acc, { [key]: simplify(val) });
            }
        default:
            throw 'not implemented';
    }
}, {});
exports.simplifyObject = simplifyObject;
exports.default = simplify;
