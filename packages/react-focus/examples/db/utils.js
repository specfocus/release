"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomFloat = exports.randomDate = exports.weightedBoolean = exports.weightedArrayElement = void 0;
const en_1 = __importDefault(require("faker/locale/en"));
const weightedArrayElement = (values, weights) => en_1.default.random.arrayElement(values.reduce((acc, value, index) => acc.concat(new Array(weights[index]).fill(value)), []));
exports.weightedArrayElement = weightedArrayElement;
const weightedBoolean = likelyhood => en_1.default.datatype.number(99) < likelyhood;
exports.weightedBoolean = weightedBoolean;
const randomDate = (minDate, maxDate) => {
    const minTs = minDate instanceof Date
        ? minDate.getTime()
        : Date.now() - 5 * 365 * 24 * 60 * 60 * 1000; // 5 years
    const maxTs = maxDate instanceof Date ? maxDate.getTime() : Date.now();
    const range = maxTs - minTs;
    const randomRange = en_1.default.datatype.number({ max: range });
    // move it more towards today to account for traffic increase
    const ts = Math.sqrt(randomRange / range) * range;
    return new Date(minTs + ts);
};
exports.randomDate = randomDate;
const randomFloat = (min, max) => parseFloat(en_1.default.datatype.number({ min, max, precision: 0.01 }).toFixed(2));
exports.randomFloat = randomFloat;
