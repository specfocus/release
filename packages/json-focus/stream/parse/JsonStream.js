"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonStream = void 0;
const through_1 = require("@specfocus/main-focus/src/through");
class JsonStream extends through_1.Through {
    constructor(transform, flush, options) {
        super(transform, flush, options);
        this.locked = false;
    }
    cancel(reason) {
        throw new Error('Method not implemented.');
    }
    getReader() {
        throw new Error('Method not implemented.');
    }
    pipeThrough(transform, options) {
        throw new Error('Method not implemented.');
    }
    pipeTo(destination, options) {
        throw new Error('Method not implemented.');
    }
    tee() {
        throw new Error('Method not implemented.');
    }
    forEach(callbackfn, thisArg) {
        throw new Error('Method not implemented.');
    }
}
exports.JsonStream = JsonStream;
