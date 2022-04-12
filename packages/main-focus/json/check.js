"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const check = (x, y) => {
    if ('string' === typeof x)
        return y == x;
    else if (x && 'function' === typeof x.exec)
        return x.exec(y);
    else if ('boolean' === typeof x || 'object' === typeof x)
        return x;
    else if ('function' === typeof x)
        return x(y);
    return false;
};
exports.default = check;
