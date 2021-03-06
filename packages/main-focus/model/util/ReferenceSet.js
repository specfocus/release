"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Reference_1 = __importDefault(require("../Reference"));
class ReferenceSet {
    constructor() {
        this.list = new Set();
        this.refs = new Map();
    }
    get size() {
        return this.list.size + this.refs.size;
    }
    describe() {
        const description = [];
        for (const item of this.list)
            description.push(item);
        for (const [, ref] of this.refs)
            description.push(ref.describe());
        return description;
    }
    toArray() {
        return Array.from(this.list).concat(Array.from(this.refs.values()));
    }
    resolveAll(resolve) {
        return this.toArray().reduce((acc, e) => acc.concat(Reference_1.default.isRef(e) ? resolve(e) : e), []);
    }
    add(value) {
        Reference_1.default.isRef(value)
            ? this.refs.set(value.key, value)
            : this.list.add(value);
    }
    delete(value) {
        Reference_1.default.isRef(value)
            ? this.refs.delete(value.key)
            : this.list.delete(value);
    }
    clone() {
        const next = new ReferenceSet();
        next.list = new Set(this.list);
        next.refs = new Map(this.refs);
        return next;
    }
    merge(newItems, removeItems) {
        const next = this.clone();
        newItems.list.forEach((value) => next.add(value));
        newItems.refs.forEach((value) => next.add(value));
        removeItems.list.forEach((value) => next.delete(value));
        removeItems.refs.forEach((value) => next.delete(value));
        return next;
    }
}
exports.default = ReferenceSet;
