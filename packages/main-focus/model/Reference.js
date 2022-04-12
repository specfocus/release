"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const property_expr_1 = require("../object/property-expr");
const prefixes = {
    context: '$',
    value: '.',
};
function create(key, options) {
    return new Reference(key, options);
}
exports.create = create;
class Reference {
    constructor(key, options = {}) {
        if (typeof key !== 'string')
            throw new TypeError('ref must be a string, got: ' + key);
        this.key = key.trim();
        if (key === '')
            throw new TypeError('ref must be a non-empty string');
        this.isContext = this.key[0] === prefixes.context;
        this.isValue = this.key[0] === prefixes.value;
        this.isSibling = !this.isContext && !this.isValue;
        let prefix = this.isContext
            ? prefixes.context
            : this.isValue
                ? prefixes.value
                : '';
        this.path = this.key.slice(prefix.length);
        this.getter = this.path && (0, property_expr_1.getter)(this.path, true);
        this.map = options.map;
    }
    getValue(value, parent, context) {
        let result = this.isContext ? context : this.isValue ? value : parent;
        if (this.getter)
            result = this.getter(result || {});
        if (this.map)
            result = this.map(result);
        return result;
    }
    /**
     *
     * @param {*} value
     * @param {Object} options
     * @param {Object=} options.context
     * @param {Object=} options.parent
     */
    cast(value, options) {
        return this.getValue(value, options === null || options === void 0 ? void 0 : options.parent, options === null || options === void 0 ? void 0 : options.context);
    }
    resolve() {
        return this;
    }
    describe() {
        return {
            type: 'ref',
            key: this.key,
        };
    }
    toString() {
        return `Ref(${this.key})`;
    }
    static isRef(value) {
        return value && value.__isYupRef;
    }
}
exports.default = Reference;
// @ts-ignore
Reference.prototype.__isYupRef = true;
