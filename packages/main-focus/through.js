"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Through = void 0;
const readable_stream_1 = require("readable-stream");
class Through extends readable_stream_1.Transform {
    constructor(transform, flush, options) {
        super(options);
        super._transform = transform;
        super._flush = flush;
    }
    destroy(...args) {
    }
    emit(...args) {
    }
    push(...args) {
    }
}
exports.Through = Through;
