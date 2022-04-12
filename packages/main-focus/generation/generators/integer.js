"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function integer({ label, max, min, } = {
    max: Number.MAX_SAFE_INTEGER,
    min: Number.MIN_SAFE_INTEGER,
}) {
    const _min = min || Number.MIN_SAFE_INTEGER;
    const _max = max || Number.MAX_SAFE_INTEGER;
    return Math.floor(_min + (_max - _min) * Math.random());
}
exports.default = integer;
