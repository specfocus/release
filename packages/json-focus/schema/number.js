"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.NUMBER_TYPE = exports.INTEGER_TYPE = void 0;
const locale_1 = require("./validate/locale");
const base_1 = __importDefault(require("./base"));
const isAbsent_1 = __importDefault(require("./validate/isAbsent"));
exports.INTEGER_TYPE = 'integer';
exports.NUMBER_TYPE = 'number';
const isNaN = (value) => value != +value;
function create() {
    return new NumberSchema();
}
exports.create = create;
class NumberSchema extends base_1.default {
    constructor() {
        super({ type: 'number' });
        this.withMutation(() => {
            this.transform(function (value) {
                let parsed = value;
                if (typeof parsed === 'string') {
                    parsed = parsed.replace(/\s/g, '');
                    if (parsed === '')
                        return NaN;
                    // don't use parseFloat to avoid positives on alpha-numeric strings
                    parsed = +parsed;
                }
                if (this.isType(parsed))
                    return parsed;
                return parseFloat(parsed);
            });
        });
    }
    _typeCheck(value) {
        if (value instanceof Number)
            value = value.valueOf();
        return typeof value === 'number' && !isNaN(value);
    }
    min(min, message = locale_1.number.min) {
        return this.test({
            message,
            name: 'min',
            exclusive: true,
            params: { min },
            test(value) {
                return (0, isAbsent_1.default)(value) || value >= this.resolve(min);
            },
        });
    }
    max(max, message = locale_1.number.max) {
        return this.test({
            message,
            name: 'max',
            exclusive: true,
            params: { max },
            test(value) {
                return (0, isAbsent_1.default)(value) || value <= this.resolve(max);
            },
        });
    }
    lessThan(less, message = locale_1.number.lessThan) {
        return this.test({
            message,
            name: 'max',
            exclusive: true,
            params: { less },
            test(value) {
                return (0, isAbsent_1.default)(value) || value < this.resolve(less);
            },
        });
    }
    moreThan(more, message = locale_1.number.moreThan) {
        return this.test({
            message,
            name: 'min',
            exclusive: true,
            params: { more },
            test(value) {
                return (0, isAbsent_1.default)(value) || value > this.resolve(more);
            },
        });
    }
    positive(msg = locale_1.number.positive) {
        return this.moreThan(0, msg);
    }
    negative(msg = locale_1.number.negative) {
        return this.lessThan(0, msg);
    }
    integer(message = locale_1.number.integer) {
        return this.test({
            name: 'integer',
            message,
            test: (val) => (0, isAbsent_1.default)(val) || Number.isInteger(val),
        });
    }
    truncate() {
        return this.transform((value) => (!(0, isAbsent_1.default)(value) ? value | 0 : value));
    }
    round(method) {
        let avail = ['ceil', 'floor', 'round', 'trunc'];
        method = (method === null || method === void 0 ? void 0 : method.toLowerCase()) || 'round';
        // this exists for symemtry with the new Math.trunc
        if (method === 'trunc')
            return this.truncate();
        if (avail.indexOf(method.toLowerCase()) === -1)
            throw new TypeError('Only valid options for round() are: ' + avail.join(', '));
        return this.transform((value) => !(0, isAbsent_1.default)(value) ? Math[method](value) : value);
    }
}
exports.default = NumberSchema;
create.prototype = NumberSchema.prototype;
