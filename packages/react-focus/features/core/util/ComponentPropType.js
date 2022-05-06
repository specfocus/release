"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_is_1 = require("react-is");
exports.default = (props, propName, componentName) => {
    if (props[propName] && !(0, react_is_1.isValidElementType)(props[propName])) {
        return new Error(`Invalid prop '${propName}' supplied to '${componentName}': the prop is not a valid React component`);
    }
};
