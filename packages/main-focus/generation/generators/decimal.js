"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const decimal_1 = require("../../decimal");
function decimal({ fixed, label, max, min, } = {
    max: Number.MAX_SAFE_INTEGER,
    min: Number.MIN_SAFE_INTEGER,
}) {
    const _min = min || Number.MIN_SAFE_INTEGER;
    const _max = max || Number.MAX_SAFE_INTEGER;
    return (0, decimal_1.format)(_min + (_max - _min) * Math.random(), fixed);
}
exports.default = decimal;
