"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PHONE_NUMBER = exports.GUID = exports.EMAIL = exports.TEXT = exports.DATE_TIME = exports.DATE = void 0;
const StringSchema_1 = require("../StringSchema");
exports.DATE = {
    format: 'date',
    label: 'Date',
    type: StringSchema_1.STRING_TYPE,
};
exports.DATE_TIME = {
    format: 'datetime',
    label: 'Date and Time',
    type: StringSchema_1.STRING_TYPE,
};
exports.TEXT = {
    label: 'Text',
    type: StringSchema_1.STRING_TYPE,
};
exports.EMAIL = {
    format: 'email',
    label: 'Email',
    type: StringSchema_1.STRING_TYPE,
};
exports.GUID = {
    format: 'uuid',
    label: 'Guid',
    type: StringSchema_1.STRING_TYPE,
};
exports.PHONE_NUMBER = {
    format: 'phone',
    label: 'Phone Number',
    type: StringSchema_1.STRING_TYPE,
};
