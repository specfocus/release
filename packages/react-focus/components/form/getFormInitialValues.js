"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getFormInitialValues(initialValues, defaultValue, record) {
    let finalInitialValues = Object.assign(Object.assign({}, initialValues), record);
    if (typeof defaultValue !== 'undefined') {
        console.warn('"defaultValue" is deprecated, please use "initialValues" instead');
    }
    if (typeof defaultValue === 'object') {
        finalInitialValues = Object.assign(Object.assign({}, defaultValue), finalInitialValues);
    }
    else if (typeof defaultValue === 'function') {
        finalInitialValues = Object.assign(Object.assign({}, defaultValue(record)), finalInitialValues);
    }
    return finalInitialValues;
}
exports.default = getFormInitialValues;
