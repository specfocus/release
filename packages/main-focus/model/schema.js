"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const nanoclone_1 = __importDefault(require("nanoclone"));
const locale_1 = require("./locale");
const Condition_1 = __importDefault(require("./Condition"));
const runTests_1 = __importDefault(require("./util/runTests"));
const createValidation_1 = __importDefault(require("./util/createValidation"));
const printValue_1 = __importDefault(require("./util/printValue"));
const Reference_1 = __importDefault(require("./Reference"));
const reach_1 = require("./util/reach");
const ValidationError_1 = __importDefault(require("./ValidationError"));
const ReferenceSet_1 = __importDefault(require("./util/ReferenceSet"));
const isAbsent_1 = __importDefault(require("./util/isAbsent"));
const toArray_1 = __importDefault(require("./util/toArray"));
class BaseSchema {
    constructor(options) {
        this.deps = [];
        this.conditions = [];
        this.internalTests = {};
        this._whitelist = new ReferenceSet_1.default();
        this._blacklist = new ReferenceSet_1.default();
        this.exclusiveTests = Object.create(null);
        this.tests = [];
        this.transforms = [];
        this.withMutation(() => {
            this.typeError(locale_1.mixed.notType);
        });
        this.type = (options === null || options === void 0 ? void 0 : options.type) || 'mixed';
        this.spec = Object.assign({ strip: false, strict: false, abortEarly: true, recursive: true, nullable: false, optional: true }, options === null || options === void 0 ? void 0 : options.spec);
        this.withMutation((s) => {
            s.nonNullable();
        });
    }
    // TODO: remove
    get _type() {
        return this.type;
    }
    _typeCheck(_value) {
        return true;
    }
    clone(spec) {
        if (this._mutate) {
            if (spec)
                Object.assign(this.spec, spec);
            return this;
        }
        // if the nested value is a schema we can skip cloning, since
        // they are already immutable
        const next = Object.create(Object.getPrototypeOf(this));
        // @ts-expect-error this is readonly
        next.type = this.type;
        next._whitelist = this._whitelist.clone();
        next._blacklist = this._blacklist.clone();
        next.internalTests = Object.assign({}, this.internalTests);
        next.exclusiveTests = Object.assign({}, this.exclusiveTests);
        // @ts-expect-error this is readonly
        next.deps = [...this.deps];
        next.conditions = [...this.conditions];
        next.tests = [...this.tests];
        next.transforms = [...this.transforms];
        next.spec = (0, nanoclone_1.default)(Object.assign(Object.assign({}, this.spec), spec));
        return next;
    }
    label(label) {
        let next = this.clone();
        next.spec.label = label;
        return next;
    }
    meta(...args) {
        if (args.length === 0)
            return this.spec.meta;
        let next = this.clone();
        next.spec.meta = Object.assign(next.spec.meta || {}, args[0]);
        return next;
    }
    // withContext<C extends AnyObject>(): BaseSchema<
    //   TType,
    //   C,
    //   TOut
    // > {
    //   return this as any;
    // }
    withMutation(fn) {
        let before = this._mutate;
        this._mutate = true;
        let result = fn(this);
        this._mutate = before;
        return result;
    }
    concat(schema) {
        if (!schema || schema === this)
            return this;
        if (schema.type !== this.type && this.type !== 'mixed')
            throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${schema.type}`);
        let base = this;
        let combined = schema.clone();
        const mergedSpec = Object.assign(Object.assign({}, base.spec), combined.spec);
        // if (combined.spec.nullable === UNSET)
        //   mergedSpec.nullable = base.spec.nullable;
        // if (combined.spec.presence === UNSET)
        //   mergedSpec.presence = base.spec.presence;
        combined.spec = mergedSpec;
        combined.internalTests = Object.assign(Object.assign({}, base.internalTests), combined.internalTests);
        // manually merge the blacklist/whitelist (the other `schema` takes
        // precedence in case of conflicts)
        combined._whitelist = base._whitelist.merge(schema._whitelist, schema._blacklist);
        combined._blacklist = base._blacklist.merge(schema._blacklist, schema._whitelist);
        // start with the current tests
        combined.tests = base.tests;
        combined.exclusiveTests = base.exclusiveTests;
        // manually add the new tests to ensure
        // the deduping logic is consistent
        combined.withMutation((next) => {
            schema.tests.forEach((fn) => {
                next.test(fn.OPTIONS);
            });
        });
        combined.transforms = [...base.transforms, ...combined.transforms];
        return combined;
    }
    isType(v) {
        if (v == null) {
            if (this.spec.nullable && v === null)
                return true;
            if (this.spec.optional && v === undefined)
                return true;
            return false;
        }
        return this._typeCheck(v);
    }
    resolve(options) {
        let schema = this;
        if (schema.conditions.length) {
            let conditions = schema.conditions;
            schema = schema.clone();
            schema.conditions = [];
            schema = conditions.reduce((prevSchema, condition) => condition.resolve(prevSchema, options), schema);
            schema = schema.resolve(options);
        }
        return schema;
    }
    /**
     *
     * @param {*} value
     * @param {Object} options
     * @param {*=} options.parent
     * @param {*=} options.context
     */
    cast(value, options = {}) {
        let resolvedSchema = this.resolve(Object.assign({ value }, options));
        let result = resolvedSchema._cast(value, options);
        if (options.assert !== false && !resolvedSchema.isType(result)) {
            let formattedValue = (0, printValue_1.default)(value);
            let formattedResult = (0, printValue_1.default)(result);
            throw new TypeError(`The value of ${options.path || 'field'} could not be cast to a value ` +
                `that satisfies the schema type: "${resolvedSchema._type}". \n\n` +
                `attempted value: ${formattedValue} \n` +
                (formattedResult !== formattedValue
                    ? `result of cast: ${formattedResult}`
                    : ''));
        }
        return result;
    }
    _cast(rawValue, _options) {
        let value = rawValue === undefined
            ? rawValue
            : this.transforms.reduce((prevValue, fn) => fn.call(this, prevValue, rawValue, this), rawValue);
        if (value === undefined) {
            value = this.getDefault();
        }
        return value;
    }
    _validate(_value, options = {}, cb) {
        let { sync, path, from = [], originalValue = _value, strict = this.spec.strict, abortEarly = this.spec.abortEarly, } = options;
        let value = _value;
        if (!strict) {
            // this._validating = true;
            value = this._cast(value, Object.assign({ assert: false }, options));
            // this._validating = false;
        }
        // value is cast, we can check if it meets type requirements
        let args = {
            value,
            path,
            options,
            originalValue,
            schema: this,
            label: this.spec.label,
            sync,
            from,
        };
        let initialTests = [];
        for (let test of Object.values(this.internalTests)) {
            if (test)
                initialTests.push(test);
        }
        (0, runTests_1.default)({
            args,
            value,
            path,
            sync,
            tests: initialTests,
            endEarly: abortEarly,
        }, (err) => {
            if (err)
                return void cb(err, value);
            (0, runTests_1.default)({
                tests: this.tests,
                args,
                path,
                sync,
                value,
                endEarly: abortEarly,
            }, cb);
        });
    }
    validate(value, options, maybeCb) {
        let schema = this.resolve(Object.assign(Object.assign({}, options), { value }));
        // callback case is for nested validations
        return typeof maybeCb === 'function'
            ? schema._validate(value, options, maybeCb)
            : new Promise((resolve, reject) => schema._validate(value, options, (err, validated) => {
                if (err)
                    reject(err);
                else
                    resolve(validated);
            }));
    }
    validateSync(value, options) {
        let schema = this.resolve(Object.assign(Object.assign({}, options), { value }));
        let result;
        schema._validate(value, Object.assign(Object.assign({}, options), { sync: true }), (err, validated) => {
            if (err)
                throw err;
            result = validated;
        });
        return result;
    }
    isValid(value, options) {
        return this.validate(value, options).then(() => true, (err) => {
            if (ValidationError_1.default.isError(err))
                return false;
            throw err;
        });
    }
    isValidSync(value, options) {
        try {
            this.validateSync(value, options);
            return true;
        }
        catch (err) {
            if (ValidationError_1.default.isError(err))
                return false;
            throw err;
        }
    }
    _getDefault() {
        let defaultValue = this.spec.default;
        if (defaultValue == null) {
            return defaultValue;
        }
        return typeof defaultValue === 'function'
            ? defaultValue.call(this)
            : (0, nanoclone_1.default)(defaultValue);
    }
    getDefault(options) {
        let schema = this.resolve(options || {});
        return schema._getDefault();
    }
    default(def) {
        if (arguments.length === 0) {
            return this._getDefault();
        }
        let next = this.clone({ default: def });
        return next;
    }
    strict(isStrict = true) {
        return this.clone({ strict: isStrict });
    }
    _isPresent(value) {
        return value != null;
    }
    nullability(nullable, message) {
        const next = this.clone({ nullable });
        next.internalTests.nullable = (0, createValidation_1.default)({
            message,
            name: 'nullable',
            test(value) {
                return value === null ? this.schema.spec.nullable : true;
            },
        });
        return next;
    }
    optionality(optional, message) {
        const next = this.clone({ optional });
        next.internalTests.optionality = (0, createValidation_1.default)({
            message,
            name: 'optionality',
            test(value) {
                return value === undefined ? this.schema.spec.optional : true;
            },
        });
        return next;
    }
    optional() {
        return this.optionality(true);
    }
    defined(message = locale_1.mixed.defined) {
        return this.optionality(false, message);
    }
    // nullable(message?: Message): any
    // nullable(nullable: true): any
    // nullable(nullable: false, message?: Message): any
    nullable() {
        return this.nullability(true);
    }
    nonNullable(message = locale_1.mixed.notNull) {
        return this.nullability(false, message);
    }
    required(message = locale_1.mixed.required) {
        return this.clone().withMutation((next) => next
            .nonNullable(message)
            .defined(message)
            .test({
            message,
            name: 'required',
            exclusive: true,
            test(value) {
                return this.schema._isPresent(value);
            },
        }));
    }
    notRequired() {
        return this.clone().withMutation((next) => {
            next.tests = next.tests.filter((test) => test.OPTIONS.name !== 'required');
            return next.nullable().optional();
        });
    }
    transform(fn) {
        let next = this.clone();
        next.transforms.push(fn);
        return next;
    }
    test(...args) {
        let opts;
        if (args.length === 1) {
            if (typeof args[0] === 'function') {
                opts = { test: args[0] };
            }
            else {
                opts = args[0];
            }
        }
        else if (args.length === 2) {
            opts = { name: args[0], test: args[1] };
        }
        else {
            opts = { name: args[0], message: args[1], test: args[2] };
        }
        if (opts.message === undefined)
            opts.message = locale_1.mixed.default;
        if (typeof opts.test !== 'function')
            throw new TypeError('`test` is a required parameters');
        let next = this.clone();
        let validate = (0, createValidation_1.default)(opts);
        let isExclusive = opts.exclusive || (opts.name && next.exclusiveTests[opts.name] === true);
        if (opts.exclusive) {
            if (!opts.name)
                throw new TypeError('Exclusive tests must provide a unique `name` identifying the test');
        }
        if (opts.name)
            next.exclusiveTests[opts.name] = !!opts.exclusive;
        next.tests = next.tests.filter((fn) => {
            if (fn.OPTIONS.name === opts.name) {
                if (isExclusive)
                    return false;
                if (fn.OPTIONS.test === validate.OPTIONS.test)
                    return false;
            }
            return true;
        });
        next.tests.push(validate);
        return next;
    }
    when(keys, options) {
        if (!Array.isArray(keys) && typeof keys !== 'string') {
            options = keys;
            keys = '.';
        }
        let next = this.clone();
        let deps = (0, toArray_1.default)(keys).map((key) => new Reference_1.default(key));
        deps.forEach((dep) => {
            // @ts-ignore readonly array
            if (dep.isSibling)
                next.deps.push(dep.key);
        });
        next.conditions.push(new Condition_1.default(deps, options));
        return next;
    }
    typeError(message) {
        let next = this.clone();
        next.internalTests.typeError = (0, createValidation_1.default)({
            message,
            name: 'typeError',
            test(value) {
                if (!(0, isAbsent_1.default)(value) && !this.schema._typeCheck(value))
                    return this.createError({
                        params: {
                            type: this.schema._type,
                        },
                    });
                return true;
            },
        });
        return next;
    }
    oneOf(enums, message = locale_1.mixed.oneOf) {
        let next = this.clone();
        enums.forEach((val) => {
            next._whitelist.add(val);
            next._blacklist.delete(val);
        });
        next.internalTests.whiteList = (0, createValidation_1.default)({
            message,
            name: 'oneOf',
            test(value) {
                if (value === undefined)
                    return true;
                let valids = this.schema._whitelist;
                let resolved = valids.resolveAll(this.resolve);
                return resolved.includes(value)
                    ? true
                    : this.createError({
                        params: {
                            values: valids.toArray().join(', '),
                            resolved,
                        },
                    });
            },
        });
        return next;
    }
    notOneOf(enums, message = locale_1.mixed.notOneOf) {
        let next = this.clone();
        enums.forEach((val) => {
            next._blacklist.add(val);
            next._whitelist.delete(val);
        });
        next.internalTests.blacklist = (0, createValidation_1.default)({
            message,
            name: 'notOneOf',
            test(value) {
                let invalids = this.schema._blacklist;
                let resolved = invalids.resolveAll(this.resolve);
                if (resolved.includes(value))
                    return this.createError({
                        params: {
                            values: invalids.toArray().join(', '),
                            resolved,
                        },
                    });
                return true;
            },
        });
        return next;
    }
    strip(strip = true) {
        let next = this.clone();
        next.spec.strip = strip;
        return next;
    }
    /**
     * Return a serialized description of the schema including validations, flags, types etc.
     *
     * @param options Provide any needed context for resolving runtime schema alterations (lazy, when conditions, etc).
     */
    describe(options) {
        const next = (options ? this.resolve(options) : this).clone();
        const { label, meta, optional, nullable } = next.spec;
        const description = {
            meta,
            label,
            optional,
            nullable,
            type: next.type,
            oneOf: next._whitelist.describe(),
            notOneOf: next._blacklist.describe(),
            tests: next.tests
                .map((fn) => ({ name: fn.OPTIONS.name, params: fn.OPTIONS.params }))
                .filter((n, idx, list) => list.findIndex((c) => c.name === n.name) === idx),
        };
        return description;
    }
}
exports.default = BaseSchema;
// @ts-expect-error
BaseSchema.prototype.__isYupSchema__ = true;
for (const method of ['validate', 'validateSync'])
    BaseSchema.prototype[`${method}At`] =
        function (path, value, options = {}) {
            const { parent, parentPath, schema } = (0, reach_1.getIn)(this, path, value, options.context);
            return schema[method](parent && parent[parentPath], Object.assign(Object.assign({}, options), { parent,
                path }));
        };
for (const alias of ['equals', 'is'])
    BaseSchema.prototype[alias] = BaseSchema.prototype.oneOf;
for (const alias of ['not', 'nope'])
    BaseSchema.prototype[alias] = BaseSchema.prototype.notOneOf;
