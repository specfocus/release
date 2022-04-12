"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StreamParser = void 0;
const Parser_1 = require("./Parser");
const through_1 = require("../through");
class StreamParser extends Parser_1.Parser {
    constructor(path, map) {
        super();
        this.path = path;
        this.map = map;
        this.count = 0;
        this._onToken = super.onToken;
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
        this.write(chunk);
        callback();
    }
    flush(callback) {
        if (this.header) {
            this.stream.emit('header', this.header);
        }
        if (this.footer) {
            this.stream.emit('footer', this.footer);
        }
        if (this.tState !== Parser_1.Parser.C.START || this.stack.length > 0) {
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
                if (!check(key, c.key)) {
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
                    if (check(nextKey, c.key)) {
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
    onToken(token, value) {
        super.onToken(token, value);
        if (this.stack.length === 0) {
            if (this.stream.root) {
                if (!this.path) {
                    this.stream.push(this.stream.root);
                }
                this.count = 0;
                this.stream.root = null;
            }
        }
    }
    onError(err) {
        if (err.message.indexOf('at position') > -1)
            err.message = 'Invalid JSON (' + err.message + ')';
        this.stream.destroy(err);
    }
}
exports.StreamParser = StreamParser;
function check(x, y) {
    if ('string' === typeof x)
        return y == x;
    else if (x && 'function' === typeof x.exec)
        return x.exec(y);
    else if ('boolean' === typeof x || 'object' === typeof x)
        return x;
    else if ('function' === typeof x)
        return x(y);
    return false;
}
