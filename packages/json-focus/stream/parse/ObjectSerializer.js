"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectSerializer = void 0;
const through_1 = require("@specfocus/main-focus/src/through");
class ObjectSerializer {
    constructor(op, sep, cl, indent) {
        this.op = op;
        this.sep = sep;
        this.cl = cl;
        this.indent = indent;
        this.first = true;
        this.anyData = false;
        this.indent = indent || 0;
        if (op === false) {
            this.op = '';
            this.sep = '\n';
            this.cl = '';
        }
        else if (op == null) {
            this.op = '{\n';
            this.sep = '\n,\n';
            this.cl = '\n}\n';
        }
        this.stream = new through_1.Through(this.transform, this.flush);
    }
    transform(data, enc, cb) {
        this.anyData = true;
        let json;
        try {
            json = JSON.stringify(data[0]) + ':' + JSON.stringify(data[1], null, this.indent);
        }
        catch (err) {
            return cb(err);
        }
        if (this.first) {
            this.first = false;
            cb(null, (typeof this.op === 'function' ? this.op() : this.op) + json);
        }
        else {
            cb(null, this.sep + json);
        }
    }
    flush(cb) {
        if (!this.anyData)
            this.stream.push(this.op);
        if (typeof this.cl === 'function') {
            this.cl((err, res) => {
                if (err) {
                    return cb(err);
                }
                this.stream.push(res);
                cb();
            });
            return;
        }
        this.stream.push(this.cl);
        cb();
    }
}
exports.ObjectSerializer = ObjectSerializer;
