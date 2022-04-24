"use strict";
// JSON.stringify pipe
Object.defineProperty(exports, "__esModule", { value: true });
const COMMA = ',';
const stringify = (data) => {
    return JSON.stringify(data) + COMMA;
};
exports.default = stringify;
