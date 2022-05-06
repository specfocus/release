"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCheckMinimumRequiredProps = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const checkMinimumRequiredProps = (displayName, requiredProps) => (WrappedComponent) => (props) => {
    (0, exports.useCheckMinimumRequiredProps)(displayName, requiredProps, props);
    return (0, jsx_runtime_1.jsx)(WrappedComponent, Object.assign({}, props), void 0);
};
exports.default = checkMinimumRequiredProps;
// Not a hook but named that way to avoid conflicts with the old one
const useCheckMinimumRequiredProps = (displayName, requiredProps, props) => {
    const propNames = Object.keys(props);
    const missingProps = requiredProps.filter(prop => !propNames.includes(prop));
    if (missingProps.length > 0) {
        throw new Error(`<${displayName}> component is not properly configured, some essential props are missing.
Be sure to pass the props from the parent. Example:

const My${displayName} = props => (
    <${displayName} {...props}></${displayName}>
);

The missing props are: ${missingProps.join(', ')}`);
    }
};
exports.useCheckMinimumRequiredProps = useCheckMinimumRequiredProps;
