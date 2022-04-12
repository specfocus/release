"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.valueDictionary = exports.valueArray = void 0;
const uuid_1 = require("uuid");
const boolean_1 = require("../../boolean");
const float_1 = require("../../float");
const number_1 = require("../../number");
const string_1 = require("../../string");
const boolean_2 = __importDefault(require("./boolean"));
const date_1 = __importDefault(require("./date"));
const email_1 = __importDefault(require("./email"));
const float_2 = __importDefault(require("./float"));
const integer_1 = __importDefault(require("./integer"));
const password_1 = __importDefault(require("./password"));
const phrase_1 = __importDefault(require("./phrase"));
const regex_1 = __importDefault(require("./regex"));
const url_1 = __importDefault(require("./url"));
const username_1 = __importDefault(require("./username"));
const word_1 = __importDefault(require("./word"));
function valueArray(type, count) {
    const ret = [];
    for (let i = 0; i < count; i++) {
        ret.push(value(type));
    }
    return ret;
}
exports.valueArray = valueArray;
function valueDictionary(type, count, keyType = string_1.GUID) {
    const ret = {};
    for (let i = 0; i < count; i++) {
        Object.assign(ret, { [value(keyType)]: value(type) });
    }
    return ret;
}
exports.valueDictionary = valueDictionary;
function value(type) {
    switch (type) {
        case boolean_1.BOOLEAN:
            return (0, boolean_2.default)();
        case string_1.DATE_STR:
            return (0, date_1.default)();
        case string_1.EMAIL:
            return (0, email_1.default)();
        case float_1.FLOAT:
            return float_2.default;
        case string_1.GUID:
            return (0, uuid_1.v4)();
        case number_1.INTEGER:
            return (0, integer_1.default)({ max: 99, min: 1 });
        case string_1.NAME:
            return (0, word_1.default)();
        case string_1.PASSWORD:
            return (0, password_1.default)();
        case string_1.REGEX:
            return (0, regex_1.default)();
        case string_1.STRING:
            return (0, phrase_1.default)();
        case string_1.URL:
            return (0, url_1.default)();
        case string_1.USERNAME:
            return (0, username_1.default)();
    }
}
exports.default = value;
