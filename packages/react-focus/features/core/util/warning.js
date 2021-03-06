"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (condition, message) => {
    if (condition && process.env.NODE_ENV !== 'production') {
        console.warn(message); // eslint-disable-line
    }
};
