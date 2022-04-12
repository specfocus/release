"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TYPES = exports.STRING_OR_NUMBER_TYPE = exports.NUMBER_OR_STRING_TYPE = exports.OBJECT_TYPE = exports.STRING_TYPE = exports.NUMBER_TYPE = exports.NULL_TYPE = exports.INTEGER_TYPE = exports.BOOLEAN_TYPE = exports.ARRAY_TYPE = void 0;
exports.ARRAY_TYPE = 'array';
exports.BOOLEAN_TYPE = 'boolean';
exports.INTEGER_TYPE = 'integer';
exports.NULL_TYPE = 'null';
exports.NUMBER_TYPE = 'number';
exports.STRING_TYPE = 'string';
exports.OBJECT_TYPE = 'object';
exports.NUMBER_OR_STRING_TYPE = [exports.NUMBER_TYPE, exports.STRING_TYPE];
exports.STRING_OR_NUMBER_TYPE = [exports.STRING_TYPE, exports.NUMBER_TYPE];
exports.TYPES = [
    exports.ARRAY_TYPE,
    exports.BOOLEAN_TYPE,
    exports.INTEGER_TYPE,
    exports.NULL_TYPE,
    exports.NUMBER_TYPE,
    exports.NUMBER_OR_STRING_TYPE,
    exports.STRING_TYPE,
    exports.STRING_OR_NUMBER_TYPE,
    exports.OBJECT_TYPE
];
