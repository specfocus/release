"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const error_1 = require("./error");
const reference_1 = __importDefault(require("../reference"));
function createValidation(config) {
    function validate(_a, cb) {
        var { value, path = '', label, options, originalValue, sync } = _a, rest = __rest(_a, ["value", "path", "label", "options", "originalValue", "sync"]);
        const { name, test, params, message } = config;
        const { parent, context } = options;
        function resolve(item) {
            return reference_1.default.isRef(item) ? item.getValue(value, parent, context) : item;
        }
        function createError(overrides = {}) {
            const nextParams = Object.assign(Object.assign({ value,
                originalValue,
                label, path: overrides.path || path }, params), overrides.params);
            for (const key of Object.keys(nextParams))
                nextParams[key] = resolve(nextParams[key]);
            const error = new error_1.ValidationError(error_1.ValidationError.formatError(overrides.message || message, nextParams), value, nextParams.path, overrides.type || name);
            error.params = nextParams;
            return error;
        }
        let ctx = Object.assign({ path,
            parent, type: name, createError,
            resolve,
            options,
            originalValue }, rest);
        if (!sync) {
            try {
                Promise.resolve(test.call(ctx, value, ctx))
                    .then((validOrError) => {
                    if (error_1.ValidationError.isError(validOrError))
                        cb(validOrError);
                    else if (!validOrError)
                        cb(createError());
                    else
                        cb(null, validOrError);
                })
                    .catch(cb);
            }
            catch (err) {
                cb(err);
            }
            return;
        }
        let result;
        try {
            result = test.call(ctx, value, ctx);
            if (typeof (result === null || result === void 0 ? void 0 : result.then) === 'function') {
                throw new Error(`Validation test of type: "${ctx.type}" returned a Promise during a synchronous validate. ` +
                    `This test will finish after the validate call has returned`);
            }
        }
        catch (err) {
            cb(err);
            return;
        }
        if (error_1.ValidationError.isError(result))
            cb(result);
        else if (!result)
            cb(createError());
        else
            cb(null, result);
    }
    validate.OPTIONS = config;
    return validate;
}
exports.default = createValidation;
