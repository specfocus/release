"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reduce = void 0;
const array_1 = require("./array");
const object_1 = require("./object");
const reduce = (directory) => Object.entries(directory).reduce((result, [left, val]) => !(0, object_1.isObject)(val) || (0, array_1.isArray)(val)
    ? Object.assign(result, { [left]: val })
    : Object.entries((0, exports.reduce)(val)).reduce((acc, [right, terminal]) => Object.assign(acc, { [[left, right].join(".")]: terminal }), result), {});
exports.reduce = reduce;
