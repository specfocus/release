"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = require("assert");
const enumify_1 = require("../enumify");
class Mode extends enumify_1.Enumify {
    constructor(n) {
        super();
        this.n = n;
    }
    static() {
        Mode.closeEnum();
    }
}
Mode.USER_R = new Mode(0b100000000);
Mode.USER_W = new Mode(0b010000000);
Mode.USER_X = new Mode(0b001000000);
Mode.GROUP_R = new Mode(0b000100000);
Mode.GROUP_W = new Mode(0b000010000);
Mode.GROUP_X = new Mode(0b000001000);
Mode.ALL_R = new Mode(0b000000100);
Mode.ALL_W = new Mode(0b000000010);
Mode.ALL_X = new Mode(0b000000001);
assert_1.strict.equal(Mode.USER_R.n | Mode.USER_W.n | Mode.USER_X.n | Mode.GROUP_R.n | Mode.GROUP_X.n | Mode.ALL_R.n | Mode.ALL_X.n, 0o755);
assert_1.strict.equal(Mode.USER_R.n | Mode.USER_W.n | Mode.USER_X.n | Mode.GROUP_R.n, 0o740);
