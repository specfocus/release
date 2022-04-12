"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMixed = void 0;
const number_1 = require("./number");
const string_1 = require("./string");
const isMixed = (val) => (0, number_1.isNumber)(val) || (0, string_1.isString)(val);
exports.isMixed = isMixed;
