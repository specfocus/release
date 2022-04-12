"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerationContext = void 0;
class GenerationContext {
    constructor(collection, target, sources) {
        this.collection = collection;
        this.target = target;
        this.sources = sources;
        this.generators = {};
        this.indexes = {};
        this.claim = this.claim.bind(this);
        this.find = this.find.bind(this);
    }
    claim(key, val, index) {
        let map = this.indexes[key];
        if (!map) {
            this.indexes[key] = map = {};
        }
        else if (map[val]) {
            return false;
        }
        map[val] = index;
        return true;
    }
    find(key, val) {
        const map = this.indexes[key];
        return map && map[val];
    }
    init() {
        Object.entries(this.target.fields).reduce((acc, [key, val]) => {
            return acc;
        }, {});
    }
    make() {
        throw new Error("");
    }
    push(item) {
        return this.collection.push(item) - 1;
    }
}
exports.GenerationContext = GenerationContext;
