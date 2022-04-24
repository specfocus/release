"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TYPES = void 0;
const array_1 = require("./array");
const boolean_1 = require("./boolean");
const nullable_1 = require("./nullable");
const number_1 = require("./number");
const object_1 = require("./object");
const string_1 = require("./string");
const value_1 = require("./value");
exports.TYPES = [
    array_1.ARRAY_TYPE,
    boolean_1.BOOLEAN_TYPE,
    number_1.INTEGER_TYPE,
    nullable_1.NULL_TYPE,
    number_1.NUMBER_TYPE,
    value_1.NUMBER_OR_STRING_TYPE,
    string_1.STRING_TYPE,
    value_1.STRING_OR_NUMBER_TYPE,
    object_1.OBJECT_TYPE
];
