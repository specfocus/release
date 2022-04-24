"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.OBJECT_TYPE = void 0;
const base_1 = __importDefault(require("./base"));
const sortByKeyOrder_1 = __importDefault(require("./validate/sortByKeyOrder"));
const property_expr_1 = require("@specfocus/main-focus/src/object/property-expr");
const error_1 = require("./validate/error");
const runTests_1 = __importDefault(require("./validate/runTests"));
const locale_1 = require("./validate/locale");
const string_1 = require("@specfocus/main-focus/src/string");
const sortFields_1 = __importDefault(require("./validate/sortFields"));
exports.OBJECT_TYPE = 'object';
const deepHas = (obj, p) => {
    const path = [...(0, property_expr_1.normalizePath)(p)];
    if (path.length === 1)
        return path[0] in obj;
    let last = path.pop();
    let parent = (0, property_expr_1.getter)((0, property_expr_1.join)(path), true)(obj);
    return !!(parent && last in parent);
};
let isObject = (obj) => Object.prototype.toString.call(obj) === '[object Object]';
function unknown(ctx, value) {
    let known = Object.keys(ctx.fields);
    return Object.keys(value).filter((key) => known.indexOf(key) === -1);
}
const defaultSort = (0, sortByKeyOrder_1.default)([]);
class ObjectSchema extends base_1.default {
    constructor(spec) {
        super({
            type: 'object',
        });
        this.fields = Object.create(null);
        this._sortErrors = defaultSort;
        this._nodes = [];
        this._excludedEdges = [];
        this.withMutation(() => {
            this.transform(function coerce(value) {
                if (typeof value === 'string') {
                    try {
                        value = JSON.parse(value);
                    }
                    catch (err) {
                        value = null;
                    }
                }
                if (this.isType(value))
                    return value;
                return null;
            });
            if (spec) {
                this.shape(spec);
            }
        });
    }
    _typeCheck(value) {
        return isObject(value) || typeof value === 'function';
    }
    _cast(_value, options = {}) {
        var _a;
        let value = super._cast(_value, options);
        //should ignore nulls here
        if (value === undefined)
            return this.getDefault();
        if (!this._typeCheck(value))
            return value;
        let fields = this.fields;
        let strip = (_a = options.stripUnknown) !== null && _a !== void 0 ? _a : this.spec.noUnknown;
        let props = this._nodes.concat(Object.keys(value).filter((v) => this._nodes.indexOf(v) === -1));
        let intermediateValue = {}; // is filled during the transform below
        let innerOptions = Object.assign(Object.assign({}, options), { parent: intermediateValue, __validating: options.__validating || false });
        let isChanged = false;
        for (const prop of props) {
            let field = fields[prop];
            let exists = prop in value;
            if (field) {
                let fieldValue;
                let inputValue = value[prop];
                // safe to mutate since this is fired in sequence
                innerOptions.path = (options.path ? `${options.path}.` : '') + prop;
                // innerOptions.value = value[prop];
                field = field.resolve({
                    value: inputValue,
                    context: options.context,
                    parent: intermediateValue,
                });
                let fieldSpec = field instanceof base_1.default ? field.spec : undefined;
                let strict = fieldSpec === null || fieldSpec === void 0 ? void 0 : fieldSpec.strict;
                if (fieldSpec === null || fieldSpec === void 0 ? void 0 : fieldSpec.strip) {
                    isChanged = isChanged || prop in value;
                    continue;
                }
                fieldValue =
                    !options.__validating || !strict
                        ? // TODO: use _cast, this is double resolving
                            field.cast(value[prop], innerOptions)
                        : value[prop];
                if (fieldValue !== undefined) {
                    intermediateValue[prop] = fieldValue;
                }
            }
            else if (exists && !strip) {
                intermediateValue[prop] = value[prop];
            }
            if (intermediateValue[prop] !== value[prop]) {
                isChanged = true;
            }
        }
        return isChanged ? intermediateValue : value;
    }
    _validate(_value, opts = {}, callback) {
        let errors = [];
        let { sync, from = [], originalValue = _value, abortEarly = this.spec.abortEarly, recursive = this.spec.recursive, } = opts;
        from = [{ schema: this, value: originalValue }, ...from];
        // this flag is needed for handling `strict` correctly in the context of
        // validation vs just casting. e.g strict() on a field is only used when validating
        opts.__validating = true;
        opts.originalValue = originalValue;
        opts.from = from;
        super._validate(_value, opts, (err, value) => {
            if (err) {
                if (!error_1.ValidationError.isError(err) || abortEarly) {
                    return void callback(err, value);
                }
                errors.push(err);
            }
            if (!recursive || !isObject(value)) {
                callback(errors[0] || null, value);
                return;
            }
            originalValue = originalValue || value;
            let tests = this._nodes.map((key) => (__, cb) => {
                let path = key.indexOf('.') === -1
                    ? (opts.path ? `${opts.path}.` : '') + key
                    : `${opts.path || ''}["${key}"]`;
                let field = this.fields[key];
                if (field && 'validate' in field) {
                    field.validate(value[key], Object.assign(Object.assign({}, opts), { 
                        // @ts-ignore
                        path,
                        from, 
                        // inner fields are always strict:
                        // 1. this isn't strict so the casting will also have cast inner values
                        // 2. this is strict in which case the nested values weren't cast either
                        strict: true, parent: value, originalValue: originalValue[key] }), cb);
                    return;
                }
                cb(null);
            });
            (0, runTests_1.default)({
                sync,
                tests,
                value,
                errors,
                endEarly: abortEarly,
                sort: this._sortErrors,
                path: opts.path,
            }, callback);
        });
    }
    clone(spec) {
        const next = super.clone(spec);
        next.fields = Object.assign({}, this.fields);
        next._nodes = this._nodes;
        next._excludedEdges = this._excludedEdges;
        next._sortErrors = this._sortErrors;
        return next;
    }
    concat(schema) {
        let next = super.concat(schema);
        let nextFields = next.fields;
        for (let [field, schemaOrRef] of Object.entries(this.fields)) {
            const target = nextFields[field];
            if (target === undefined) {
                nextFields[field] = schemaOrRef;
            }
            else if (target instanceof base_1.default &&
                schemaOrRef instanceof base_1.default) {
                nextFields[field] = schemaOrRef.concat(target);
            }
        }
        return next.withMutation((s) => s.setFields(nextFields, this._excludedEdges));
    }
    _getDefault() {
        if ('default' in this.spec) {
            return super._getDefault();
        }
        // if there is no default set invent one
        if (!this._nodes.length) {
            return undefined;
        }
        return this.getDefaultFromShape();
    }
    getDefaultFromShape() {
        let dft = {};
        this._nodes.forEach((key) => {
            const field = this.fields[key];
            dft[key] = 'default' in field ? field.getDefault() : undefined;
        });
        return dft;
    }
    setFields(shape, excludedEdges) {
        let next = this.clone();
        next.fields = shape;
        next._nodes = (0, sortFields_1.default)(shape, excludedEdges);
        next._sortErrors = (0, sortByKeyOrder_1.default)(Object.keys(shape));
        // XXX: this carries over edges which may not be what you want
        if (excludedEdges)
            next._excludedEdges = excludedEdges;
        return next;
    }
    shape(additions, excludes = []) {
        return this.clone().withMutation((next) => {
            let edges = next._excludedEdges;
            if (excludes.length) {
                if (!Array.isArray(excludes[0]))
                    excludes = [excludes];
                edges = [...next._excludedEdges, ...excludes];
            }
            // XXX: excludes here is wrong
            return next.setFields(Object.assign(next.fields, additions), edges);
        });
    }
    partial() {
        const partial = {};
        for (const [key, schema] of Object.entries(this.fields)) {
            partial[key] = schema instanceof base_1.default ? schema.optional() : schema;
        }
        return this.setFields(partial);
    }
    deepPartial() {
        const partial = {};
        for (const [key, schema] of Object.entries(this.fields)) {
            if (schema instanceof ObjectSchema)
                partial[key] = schema.deepPartial();
            else
                partial[key] =
                    schema instanceof base_1.default ? schema.optional() : schema;
        }
        return this.setFields(partial);
    }
    pick(keys) {
        const picked = {};
        for (const key of keys) {
            if (this.fields[key])
                picked[key] = this.fields[key];
        }
        return this.setFields(picked);
    }
    omit(keys) {
        const fields = Object.assign({}, this.fields);
        for (const key of keys) {
            delete fields[key];
        }
        return this.setFields(fields);
    }
    from(from, to, alias) {
        let fromGetter = (0, property_expr_1.getter)(from, true);
        return this.transform((obj) => {
            if (!obj)
                return obj;
            let newObj = obj;
            if (deepHas(obj, from)) {
                newObj = Object.assign({}, obj);
                if (!alias)
                    delete newObj[from];
                newObj[to] = fromGetter(obj);
            }
            return newObj;
        });
    }
    noUnknown(noAllow = true, message = locale_1.object.noUnknown) {
        if (typeof noAllow === 'string') {
            message = noAllow;
            noAllow = true;
        }
        let next = this.test({
            name: 'noUnknown',
            exclusive: true,
            message: message,
            test(value) {
                if (value == null)
                    return true;
                const unknownKeys = unknown(this.schema, value);
                return (!noAllow ||
                    unknownKeys.length === 0 ||
                    this.createError({ params: { unknown: unknownKeys.join(', ') } }));
            },
        });
        next.spec.noUnknown = noAllow;
        return next;
    }
    unknown(allow = true, message = locale_1.object.noUnknown) {
        return this.noUnknown(!allow, message);
    }
    transformKeys(fn) {
        return this.transform((obj) => {
            if (!obj)
                return obj;
            const result = {};
            for (const key of Object.keys(obj))
                result[fn(key)] = obj[key];
            return result;
        });
    }
    camelCase() {
        return this.transformKeys(string_1.camelCase);
    }
    snakeCase() {
        return this.transformKeys(string_1.snakeCase);
    }
    constantCase() {
        return this.transformKeys((key) => (0, string_1.snakeCase)(key).toUpperCase());
    }
    describe(options) {
        let base = super.describe(options);
        base.fields = {};
        for (const [key, value] of Object.entries(this.fields)) {
            let innerOptions = options;
            if (innerOptions === null || innerOptions === void 0 ? void 0 : innerOptions.value) {
                innerOptions = Object.assign(Object.assign({}, innerOptions), { parent: innerOptions.value, value: innerOptions.value[key] });
            }
            base.fields[key] = value.describe(innerOptions);
        }
        return base;
    }
}
exports.default = ObjectSchema;
function create(spec) {
    return new ObjectSchema(spec);
}
exports.create = create;
create.prototype = ObjectSchema.prototype;
