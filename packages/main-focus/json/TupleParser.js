"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TupleParser = void 0;
const maybe_1 = require("../maybe");
const Parser_1 = require("./Parser");
class TupleParser extends Parser_1.Parser {
    constructor() {
        super(...arguments);
        this.tuples = [];
    }
    onValue(value) {
        if (this.stack.length === 1) {
            if (!(0, maybe_1.isUndefined)(this.key)) {
                this.tuples.push([this.key, value]);
                console.log(JSON.stringify(this.tuples));
            }
            else {
                this.tuples.push(value);
                console.log(JSON.stringify(this.tuples));
            }
        }
        else if (this.stack.length === 0) {
            if (this.tuples.length === 0) {
                this.tuples.push(value);
                console.log(JSON.stringify(this.tuples));
            }
        }
    }
    onToken(token, value) {
        if (this.stack.length === 0) {
            if (token === Parser_1.LEFT_BRACE) {
                this.tuples.push({});
            }
            else if (token === Parser_1.LEFT_BRACKET) {
                this.tuples.push([]);
            }
        }
        super.onToken(token, value);
    }
}
exports.TupleParser = TupleParser;
