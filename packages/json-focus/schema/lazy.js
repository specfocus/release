"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const isSchema_1 = __importDefault(require("./validate/isSchema"));
function create(builder) {
    return new Lazy(builder);
}
exports.create = create;
class Lazy {
    constructor(builder) {
        this.builder = builder;
        this.type = 'lazy';
        this.__isYupSchema__ = true;
        this._resolve = (value, options = {}) => {
            let schema = this.builder(value, options);
            if (!(0, isSchema_1.default)(schema))
                throw new TypeError('lazy() functions must return a valid schema');
            return schema.resolve(options);
        };
        this.spec = { meta: undefined };
    }
    clone() {
        const next = new Lazy(this.builder);
        next.spec = Object.assign({}, this.spec);
        // @ts-ignore
        return next;
    }
    resolve(options) {
        return this._resolve(options.value, options);
    }
    cast(value, options) {
        return this._resolve(value, options).cast(value, options);
    }
    validate(value, options, maybeCb) {
        // @ts-expect-error missing public callback on type
        return this._resolve(value, options).validate(value, options, maybeCb);
    }
    validateSync(value, options) {
        return this._resolve(value, options).validateSync(value, options);
    }
    validateAt(path, value, options) {
        return this._resolve(value, options).validateAt(path, value, options);
    }
    validateSyncAt(path, value, options) {
        return this._resolve(value, options).validateSyncAt(path, value, options);
    }
    isValid(value, options) {
        return this._resolve(value, options).isValid(value, options);
    }
    isValidSync(value, options) {
        return this._resolve(value, options).isValidSync(value, options);
    }
    describe(options) {
        return options
            ? this.resolve(options).describe(options)
            : { type: 'lazy', meta: this.spec.meta, label: undefined };
    }
    meta(...args) {
        if (args.length === 0)
            return this.spec.meta;
        let next = this.clone();
        next.spec.meta = Object.assign(next.spec.meta || {}, args[0]);
        return next;
    }
}
exports.default = Lazy;
