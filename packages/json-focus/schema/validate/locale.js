"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.array = exports.object = exports.boolean = exports.date = exports.number = exports.string = exports.mixed = void 0;
const printValue_1 = __importDefault(require("./printValue"));
exports.mixed = {
    default: '${path} is invalid',
    required: '${path} is a required field',
    oneOf: '${path} must be one of the following values: ${values}',
    notOneOf: '${path} must not be one of the following values: ${values}',
    notType: ({ path, type, value, originalValue }) => {
        let isCast = originalValue != null && originalValue !== value;
        return (`${path} must be a \`${type}\` type, ` +
            `but the final value was: \`${(0, printValue_1.default)(value, true)}\`` +
            (isCast
                ? ` (cast from the value \`${(0, printValue_1.default)(originalValue, true)}\`).`
                : '.'));
    },
    defined: '${path} must be defined',
    notNull: '${path} cannot be null',
};
exports.string = {
    length: '${path} must be exactly ${length} characters',
    min: '${path} must be at least ${min} characters',
    max: '${path} must be at most ${max} characters',
    matches: '${path} must match the following: "${regex}"',
    email: '${path} must be a valid email',
    url: '${path} must be a valid URL',
    uuid: '${path} must be a valid UUID',
    trim: '${path} must be a trimmed string',
    lowercase: '${path} must be a lowercase string',
    uppercase: '${path} must be a upper case string',
};
exports.number = {
    min: '${path} must be greater than or equal to ${min}',
    max: '${path} must be less than or equal to ${max}',
    lessThan: '${path} must be less than ${less}',
    moreThan: '${path} must be greater than ${more}',
    positive: '${path} must be a positive number',
    negative: '${path} must be a negative number',
    integer: '${path} must be an integer',
};
exports.date = {
    min: '${path} field must be later than ${min}',
    max: '${path} field must be at earlier than ${max}',
};
exports.boolean = {
    isValue: '${path} field must be ${value}',
};
exports.object = {
    noUnknown: '${path} field has unspecified keys: ${unknown}',
};
exports.array = {
    min: '${path} field must have at least ${min} items',
    max: '${path} field must have less than or equal to ${max} items',
    length: '${path} must have ${length} items',
};
exports.default = Object.assign(Object.create(null), {
    mixed: exports.mixed,
    string: exports.string,
    number: exports.number,
    date: exports.date,
    object: exports.object,
    array: exports.array,
    boolean: exports.boolean,
});
