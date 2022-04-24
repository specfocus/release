"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StreamParser = void 0;
const tokenizer_1 = __importDefault(require("../input/tokenizer"));
const through_1 = require("@specfocus/main-focus/src/through");
const check_1 = __importDefault(require("./check"));
class StreamParser extends tokenizer_1.default {
    constructor(path, map) {
        super();
        this.path = path;
        this.map = map;
        this.count = 0;
        this.stream = new through_1.Through(this.transform, this.flush);
    }
    setHeaderFooter(key, value) {
        // header has not been emitted yet
        if (this.header !== false) {
            this.header = this.header || {};
            this.header[key] = value;
        }
        // footer has not been emitted yet but header has
        if (this.footer !== false && this.header === false) {
            this.footer = this.footer || {};
            this.footer[key] = value;
        }
    }
    transform(chunk, encoding, callback) {
        if (typeof chunk === 'string')
            chunk = Buffer.from(chunk);
        const tokens = this.tokenize(chunk);
        for (const token of tokens) {
            if (token.type === 'error') {
                callback(new Error(token.message), token);
            }
            else {
                callback(undefined, token);
            }
        }
    }
    flush(callback) {
        if (this.header) {
            this.stream.emit('header', this.header);
        }
        if (this.footer) {
            this.stream.emit('footer', this.footer);
        }
        if (this.tState !== tokenizer_1.default.C.START || this.stack.length > 0) {
            callback(new Error('Incomplete JSON'));
            return;
        }
        callback();
    }
    onValue(value) {
        if (!this.root) {
            this.stream.root = value;
        }
        if (!this.path) {
            return;
        }
        let i = 0; // iterates on path
        let j = 0; // iterates on stack
        let emitKey = false;
        let emitPath = false;
        while (i < this.path.length) {
            const key = this.path[i];
            let c;
            j++;
            if (key && !key.recurse) {
                c = j === this.stack.length ? this : this.stack[j];
                if (!c)
                    return;
                if (!(0, check_1.default)(key, c.key)) {
                    this.setHeaderFooter(c.key, value);
                    return;
                }
                emitKey = !!key.emitKey;
                emitPath = !!key.emitPath;
                i++;
            }
            else {
                i++;
                const nextKey = this.path[i];
                if (!nextKey)
                    return;
                while (true) {
                    c = j === this.stack.length ? this : this.stack[j];
                    if (!c)
                        return;
                    if ((0, check_1.default)(nextKey, c.key)) {
                        i++;
                        if (!Object.isFrozen(this.stack[j]))
                            this.stack[j].value = null;
                        break;
                    }
                    else {
                        this.setHeaderFooter(c.key, value);
                    }
                    j++;
                }
            }
        }
        // emit header
        if (this.header) {
            this.stream.emit('header', this.header);
            this.header = false;
        }
        if (j !== this.stack.length)
            return;
        this.count++;
        const actualPath = this.stack
            .slice(1)
            .map(function (element) {
            return element.key;
        })
            .concat([this.key]);
        let data = value;
        if (null != data)
            if (null != (data = this.map ? this.map(data, actualPath) : data)) {
                if (emitKey || emitPath) {
                    data = { value: data };
                    if (emitKey)
                        data.key = this.key;
                    if (emitPath)
                        data.path = actualPath;
                }
                this.stream.push(data);
            }
        if (this.value)
            delete this.value[this.key];
        for (const k in this.stack)
            if (!Object.isFrozen(this.stack[k]))
                this.stack[k].value = null;
    }
    onError(err) {
        if (err.message.indexOf('at position') > -1)
            err.message = 'Invalid JSON (' + err.message + ')';
        this.stream.destroy(err);
    }
}
exports.StreamParser = StreamParser;
