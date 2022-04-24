"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.BOOLEAN_TYPE = void 0;
const base_1 = __importDefault(require("./base"));
const isAbsent_1 = __importDefault(require("./validate/isAbsent"));
const locale_1 = require("./validate/locale");
exports.BOOLEAN_TYPE = 'boolean';
function create() {
    return new BooleanSchema();
}
exports.create = create;
class BooleanSchema extends base_1.default {
    constructor() {
        super({ type: 'boolean' });
        this.withMutation(() => {
            this.transform(function (value) {
                if (!this.isType(value)) {
                    if (/^(true|1)$/i.test(String(value)))
                        return true;
                    if (/^(false|0)$/i.test(String(value)))
                        return false;
                }
                return value;
            });
        });
    }
    _typeCheck(v) {
        if (v instanceof Boolean)
            v = v.valueOf();
        return typeof v === 'boolean';
    }
    isTrue(message = locale_1.boolean.isValue) {
        return this.test({
            message,
            name: 'is-value',
            exclusive: true,
            params: { value: 'true' },
            test(value) {
                return (0, isAbsent_1.default)(value) || value === true;
            },
        });
    }
    isFalse(message = locale_1.boolean.isValue) {
        return this.test({
            message,
            name: 'is-value',
            exclusive: true,
            params: { value: 'false' },
            test(value) {
                return (0, isAbsent_1.default)(value) || value === false;
            },
        });
    }
}
exports.default = BooleanSchema;
create.prototype = BooleanSchema.prototype;
