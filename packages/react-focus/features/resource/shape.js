"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.simplify = void 0;
const simplify = (fields) => Object.entries(fields).reduce((acc, [key, val]) => val.type !== 'object' ? Object.assign({ [key]: val }) : acc, {});
exports.simplify = simplify;
