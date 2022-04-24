"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STRING_OR_NUMBER_TYPE = exports.NUMBER_OR_STRING_TYPE = void 0;
const number_1 = require("./number");
const string_1 = require("./string");
exports.NUMBER_OR_STRING_TYPE = [number_1.NUMBER_TYPE, string_1.STRING_TYPE];
exports.STRING_OR_NUMBER_TYPE = [string_1.STRING_TYPE, number_1.NUMBER_TYPE];
