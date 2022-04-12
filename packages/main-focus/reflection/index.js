"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STRING_TYPES = exports.NUMBER_TYPES = exports.INTEGER_TYPES = exports.FLOAT_TYPES = exports.DATE_TYPES = exports.USERNAME = exports.URL = exports.REGEX = exports.PASSWORD = exports.NAME = exports.GUID = exports.EMAIL = exports.DATE_STR = exports.FIELDSET = exports.DOMAIN = exports.TIMESTAMP = exports.STRING = exports.NUMBER = exports.INTEGER = exports.DOUBLE = exports.DECIMAL = exports.DATE_TIME = exports.DATE = exports.BOOLEAN = void 0;
exports.BOOLEAN = "boolean";
exports.DATE = "date";
exports.DATE_TIME = "datetime";
exports.DECIMAL = "decimal";
exports.DOUBLE = "double";
exports.INTEGER = "integer";
exports.NUMBER = "number";
exports.STRING = "string";
exports.TIMESTAMP = "timestamp";
exports.DOMAIN = "domain";
exports.FIELDSET = "fieldset";
exports.DATE_STR = "date";
exports.EMAIL = "email";
exports.GUID = "guid";
exports.NAME = "name";
exports.PASSWORD = "password";
exports.REGEX = "regex";
exports.URL = "url";
exports.USERNAME = "username";
exports.DATE_TYPES = [exports.DATE, exports.DATE_TIME];
exports.FLOAT_TYPES = [
    exports.DECIMAL,
    exports.DOUBLE,
    exports.NUMBER,
];
exports.INTEGER_TYPES = [
    exports.INTEGER,
    exports.TIMESTAMP,
];
exports.NUMBER_TYPES = [
    ...exports.INTEGER_TYPES,
    ...exports.FLOAT_TYPES
];
exports.STRING_TYPES = [
    exports.DATE_STR,
    exports.EMAIL,
    exports.GUID,
    exports.NAME,
    exports.PASSWORD,
    exports.REGEX,
    exports.STRING,
    exports.URL,
    exports.USERNAME,
];
