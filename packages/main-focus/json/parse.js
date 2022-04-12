"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StreamParser_1 = require("./StreamParser");
const parse = (path, map) => {
    if ('string' === typeof path)
        path = path.split('.').map(function (e) {
            if (e === '$*')
                return { emitKey: true };
            else if (e === '*')
                return true;
            else if (e === '')
                // '..'.split('.') returns an empty string
                return { recurse: true };
            else
                return e;
        });
    if (!path || !path.length) {
        path = null;
    }
    if (!path || !path.length)
        path = null;
    const parser = new StreamParser_1.StreamParser(path, map);
    return parser.stream;
};
exports.default = parse;
