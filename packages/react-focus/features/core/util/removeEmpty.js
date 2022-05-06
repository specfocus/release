"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const isObject = obj => obj && Object.prototype.toString.call(obj) === '[object Object]';
const isEmpty = obj => obj instanceof Date
    ? false
    : obj === '' ||
        obj === null ||
        obj === undefined ||
        (0, react_redux_1.shallowEqual)(obj, {});
const removeEmpty = object => Object.keys(object).reduce((acc, key) => {
    let child = object[key];
    if (isObject(object[key])) {
        child = removeEmpty(object[key]);
    }
    return isEmpty(child) ? acc : Object.assign(Object.assign({}, acc), { [key]: child });
}, {});
exports.default = removeEmpty;
