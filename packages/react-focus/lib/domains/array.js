"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ONE_OR_MORE = void 0;
const ArraySchema_1 = require("../ArraySchema");
exports.ONE_OR_MORE = {
    label: 'One or more',
    minLength: 1,
    type: ArraySchema_1.ARRAY_TYPE,
};
