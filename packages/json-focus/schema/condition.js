"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isSchema_1 = __importDefault(require("./validate/isSchema"));
class Condition {
    constructor(refs, options) {
        this.refs = refs;
        this.refs = refs;
        if (typeof options === 'function') {
            this.fn = options;
            return;
        }
        if (!('is' in options))
            throw new TypeError('`is:` is required for `when()` conditions');
        if (!options.then && !options.otherwise)
            throw new TypeError('either `then:` or `otherwise:` is required for `when()` conditions');
        let { is, then, otherwise } = options;
        let check = typeof is === 'function'
            ? is
            : (...values) => values.every((value) => value === is);
        this.fn = function (...args) {
            let options = args.pop();
            let schema = args.pop();
            let branch = check(...args) ? then : otherwise;
            if (!branch)
                return undefined;
            if (typeof branch === 'function')
                return branch(schema);
            return schema.concat(branch.resolve(options));
        };
    }
    resolve(base, options) {
        let values = this.refs.map((ref) => ref.getValue(options === null || options === void 0 ? void 0 : options.value, options === null || options === void 0 ? void 0 : options.parent, options === null || options === void 0 ? void 0 : options.context));
        let schema = this.fn.apply(base, values.concat(base, options));
        if (schema === undefined || schema === base)
            return base;
        if (!(0, isSchema_1.default)(schema))
            throw new TypeError('conditions must return a schema object');
        return schema.resolve(options);
    }
}
exports.default = Condition;
