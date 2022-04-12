"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.State = void 0;
// import { strict as assert } from 'assert';
const enumify_1 = require("../enumify");
class State extends enumify_1.Enumify {
    constructor(props) {
        super();
        Object.defineProperties(this, Object.getOwnPropertyDescriptors(props));
    }
    accept(x) {
        throw new Error('Must be overridden');
    }
}
exports.State = State;
State.start = new State({
    done: false,
    accept(x) {
        if (x === '1') {
            return State.one;
        }
        else {
            return State.start;
        }
    },
});
State.one = new State({
    done: false,
    accept(x) {
        if (x === '1') {
            return State.two;
        }
        else {
            return State.start;
        }
    },
});
State.two = new State({
    done: false,
    accept(x) {
        if (x === '1') {
            return State.three;
        }
        else {
            return State.start;
        }
    },
});
State.three = new State({
    done: true,
});
State._ = State.closeEnum();
function run(state, inputString) {
    const trace = [];
    for (const ch of inputString) {
        if (state.done) {
            break;
        }
        state = state.accept(ch);
        trace.push(`${ch} --> ${state}`);
    }
    return trace;
}
/*
it('run', () => {
  expect(run(State.start, '01011100')).toEqual([
    '0 --> State.start',
    '1 --> State.one',
    '0 --> State.start',
    '1 --> State.one',
    '1 --> State.two',
    '1 --> State.three',
  ]);
}));
*/
