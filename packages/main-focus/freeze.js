"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepFreeze = exports.freeze = void 0;
const freeze = (val) => {
    if (typeof val !== 'object') {
        return val;
    }
    if (val === null) {
        return null;
    }
    if (Array.isArray(val)) {
        return Object.freeze(val.map(exports.freeze));
    }
    return (0, exports.deepFreeze)(val);
};
exports.freeze = freeze;
const deepFreeze = (obj) => Object.freeze(Object.entries(obj).reduce((acc, [key, val]) => Object.assign(acc, { [key]: (0, exports.freeze)(val) }), {}));
exports.deepFreeze = deepFreeze;
