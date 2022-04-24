"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.ARRAY_TYPE = void 0;
const base_1 = __importDefault(require("./base"));
const error_1 = require("./validate/error");
const isAbsent_1 = __importDefault(require("./validate/isAbsent"));
const isSchema_1 = __importDefault(require("./validate/isSchema"));
const locale_1 = require("./validate/locale");
const printValue_1 = __importDefault(require("./validate/printValue"));
const runTests_1 = __importDefault(require("./validate/runTests"));
exports.ARRAY_TYPE = 'array';
function create(type) {
    return new ArraySchema(type);
}
exports.create = create;
class ArraySchema extends base_1.default {
    constructor(type) {
        super({ type: 'array' });
        // `undefined` specifically means uninitialized, as opposed to
        // "no subtype"
        this.innerType = type;
        this.withMutation(() => {
            this.transform(function (values) {
                if (typeof values === 'string')
                    try {
                        values = JSON.parse(values);
                    }
                    catch (err) {
                        values = null;
                    }
                return this.isType(values) ? values : null;
            });
        });
    }
    _typeCheck(v) {
        return Array.isArray(v);
    }
    get _subType() {
        return this.innerType;
    }
    _cast(_value, _opts) {
        const value = super._cast(_value, _opts);
        //should ignore nulls here
        if (!this._typeCheck(value) || !this.innerType)
            return value;
        let isChanged = false;
        const castArray = value.map((v, idx) => {
            const castElement = this.innerType.cast(v, Object.assign(Object.assign({}, _opts), { path: `${_opts.path || ''}[${idx}]` }));
            if (castElement !== v) {
                isChanged = true;
            }
            return castElement;
        });
        return isChanged ? castArray : value;
    }
    _validate(_value, options = {}, callback) {
        var _a, _b;
        let errors = [];
        let sync = options.sync;
        let path = options.path;
        let innerType = this.innerType;
        let endEarly = (_a = options.abortEarly) !== null && _a !== void 0 ? _a : this.spec.abortEarly;
        let recursive = (_b = options.recursive) !== null && _b !== void 0 ? _b : this.spec.recursive;
        let originalValue = options.originalValue != null ? options.originalValue : _value;
        super._validate(_value, options, (err, value) => {
            if (err) {
                if (!error_1.ValidationError.isError(err) || endEarly) {
                    return void callback(err, value);
                }
                errors.push(err);
            }
            if (!recursive || !innerType || !this._typeCheck(value)) {
                callback(errors[0] || null, value);
                return;
            }
            originalValue = originalValue || value;
            // #950 Ensure that sparse array empty slots are validated
            let tests = new Array(value.length);
            for (let idx = 0; idx < value.length; idx++) {
                let item = value[idx];
                let path = `${options.path || ''}[${idx}]`;
                // object._validate note for isStrict explanation
                let innerOptions = Object.assign(Object.assign({}, options), { path, strict: true, parent: value, index: idx, originalValue: originalValue[idx] });
                tests[idx] = (_, cb) => innerType.validate(item, innerOptions, cb);
            }
            (0, runTests_1.default)({
                sync,
                path,
                value,
                errors,
                endEarly,
                tests,
            }, callback);
        });
    }
    clone(spec) {
        const next = super.clone(spec);
        next.innerType = this.innerType;
        return next;
    }
    concat(schema) {
        let next = super.concat(schema);
        next.innerType = this.innerType;
        if (schema.innerType)
            next.innerType = next.innerType
                ? // @ts-expect-error Lazy doesn't have concat and will break
                    next.innerType.concat(schema.innerType)
                : schema.innerType;
        return next;
    }
    of(schema) {
        // FIXME: this should return a new instance of array without the default to be
        let next = this.clone();
        if (!(0, isSchema_1.default)(schema))
            throw new TypeError('`array.of()` sub-schema must be a valid yup schema not: ' +
                (0, printValue_1.default)(schema));
        // FIXME(ts):
        next.innerType = schema;
        return next;
    }
    length(length, message = locale_1.array.length) {
        return this.test({
            message,
            name: 'length',
            exclusive: true,
            params: { length },
            test(value) {
                return (0, isAbsent_1.default)(value) || value.length === this.resolve(length);
            },
        });
    }
    min(min, message) {
        message = message || locale_1.array.min;
        return this.test({
            message,
            name: 'min',
            exclusive: true,
            params: { min },
            // FIXME(ts): Array<typeof T>
            test(value) {
                return (0, isAbsent_1.default)(value) || value.length >= this.resolve(min);
            },
        });
    }
    max(max, message) {
        message = message || locale_1.array.max;
        return this.test({
            message,
            name: 'max',
            exclusive: true,
            params: { max },
            test(value) {
                return (0, isAbsent_1.default)(value) || value.length <= this.resolve(max);
            },
        });
    }
    ensure() {
        return this.default(() => []).transform((val, original) => {
            // We don't want to return `null` for nullable schema
            if (this._typeCheck(val))
                return val;
            return original == null ? [] : [].concat(original);
        });
    }
    compact(rejector) {
        let reject = !rejector
            ? (v) => !!v
            : (v, i, a) => !rejector(v, i, a);
        return this.transform((values) => values != null ? values.filter(reject) : values);
    }
    describe(options) {
        let base = super.describe();
        if (this.innerType) {
            let innerOptions = options;
            if (innerOptions === null || innerOptions === void 0 ? void 0 : innerOptions.value) {
                innerOptions = Object.assign(Object.assign({}, innerOptions), { parent: innerOptions.value, value: innerOptions.value[0] });
            }
            base.innerType = this.innerType.describe(options);
        }
        return base;
    }
    nullable(isNullable = true) {
        // @ts-ignore
        return super.nullable(isNullable);
    }
    // @ts-ignore
    defined() {
        return super.defined();
    }
    // @ts-ignore
    required(msg) {
        return super.required(msg);
    }
}
exports.default = ArraySchema;
create.prototype = ArraySchema.prototype;
