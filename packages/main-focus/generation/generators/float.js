"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function float({ label, max, min, } = {
    max: Number.MAX_VALUE,
    min: Number.MIN_VALUE
}) {
    const _min = min || Number.MIN_VALUE;
    const _max = max || Number.MAX_VALUE;
    return _min + (_max - _min) * Math.random();
}
exports.default = float;
