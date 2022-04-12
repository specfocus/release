"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const printValue_1 = __importDefault(require("./util/printValue"));
const toArray_1 = __importDefault(require("./util/toArray"));
let strReg = /\$\{\s*(\w+)\s*\}/g;
class ValidationError extends Error {
    constructor(errorOrErrors, value, field, type) {
        super();
        this.name = 'ValidationError';
        this.value = value;
        this.path = field;
        this.type = type;
        this.errors = [];
        this.inner = [];
        (0, toArray_1.default)(errorOrErrors).forEach((err) => {
            if (ValidationError.isError(err)) {
                this.errors.push(...err.errors);
                this.inner = this.inner.concat(err.inner.length ? err.inner : err);
            }
            else {
                this.errors.push(err);
            }
        });
        this.message =
            this.errors.length > 1
                ? `${this.errors.length} errors occurred`
                : this.errors[0];
        if (Error.captureStackTrace)
            Error.captureStackTrace(this, ValidationError);
    }
    static formatError(message, params) {
        const path = params.label || params.path || 'this';
        if (path !== params.path)
            params = Object.assign(Object.assign({}, params), { path });
        if (typeof message === 'string')
            return message.replace(strReg, (_, key) => (0, printValue_1.default)(params[key]));
        if (typeof message === 'function')
            return message(params);
        return message;
    }
    static isError(err) {
        return err && err.name === 'ValidationError';
    }
}
exports.default = ValidationError;
