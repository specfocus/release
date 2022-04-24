"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const base_1 = __importDefault(require("./base"));
const reference_1 = __importDefault(require("./reference"));
const isodate_1 = __importDefault(require("./import/isodate"));
const isAbsent_1 = __importDefault(require("./validate/isAbsent"));
const locale_1 = require("./validate/locale");
const invalidDate = new Date('');
const isDate = (obj) => Object.prototype.toString.call(obj) === '[object Date]';
function create() {
    return new DateSchema();
}
exports.create = create;
class DateSchema extends base_1.default {
    constructor() {
        super({ type: 'date' });
        this.withMutation(() => {
            this.transform(function (value) {
                if (this.isType(value))
                    return value;
                value = (0, isodate_1.default)(value);
                // 0 is a valid timestamp equivalent to 1970-01-01T00:00:00Z(unix epoch) or before.
                return !isNaN(value) ? new Date(value) : invalidDate;
            });
        });
    }
    _typeCheck(v) {
        return isDate(v) && !isNaN(v.getTime());
    }
    prepareParam(ref, name) {
        let param;
        if (!reference_1.default.isRef(ref)) {
            let cast = this.cast(ref);
            if (!this._typeCheck(cast))
                throw new TypeError(`\`${name}\` must be a Date or a value that can be \`cast()\` to a Date`);
            param = cast;
        }
        else {
            param = ref;
        }
        return param;
    }
    min(min, message = locale_1.date.min) {
        let limit = this.prepareParam(min, 'min');
        return this.test({
            message,
            name: 'min',
            exclusive: true,
            params: { min },
            test(value) {
                return (0, isAbsent_1.default)(value) || value >= this.resolve(limit);
            },
        });
    }
    max(max, message = locale_1.date.max) {
        let limit = this.prepareParam(max, 'max');
        return this.test({
            message,
            name: 'max',
            exclusive: true,
            params: { max },
            test(value) {
                return (0, isAbsent_1.default)(value) || value <= this.resolve(limit);
            },
        });
    }
}
exports.default = DateSchema;
DateSchema.INVALID_DATE = invalidDate;
create.prototype = DateSchema.prototype;
create.INVALID_DATE = invalidDate;
