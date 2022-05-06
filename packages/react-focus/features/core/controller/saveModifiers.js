"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSaveModifiers = exports.SideEffectContextProvider = exports.SideEffectContext = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
exports.SideEffectContext = (0, react_1.createContext)({});
const SideEffectContextProvider = ({ children, value }) => ((0, jsx_runtime_1.jsx)(exports.SideEffectContext.Provider, Object.assign({ value: value }, { children: children }), void 0));
exports.SideEffectContextProvider = SideEffectContextProvider;
/**
 * Get modifiers for a save() function, and the way to update them.
 *
 * Used in useCreateController and useEditController.
 *
 * @example
 *
 * const {
 *     onSuccessRef,
 *     setOnSuccess,
 *     onFailureRef,
 *     setOnFailure,
 *     transformRef,
 *     setTransform,
 * } = useSaveModifiers({ onSuccess, onFailure, transform });
 */
const useSaveModifiers = ({ onSuccess, onFailure, transform, }) => {
    const onSuccessRef = (0, react_1.useRef)(onSuccess);
    const setOnSuccess = onSuccess => {
        onSuccessRef.current = response => {
            // reset onSuccess for next submission
            onSuccessRef.current = undefined;
            return onSuccess(response);
        };
    };
    const onFailureRef = (0, react_1.useRef)(onFailure);
    const setOnFailure = onFailure => {
        onFailureRef.current = error => {
            // reset onFailure for next submission
            onFailureRef.current = undefined;
            return onFailure(error);
        };
    };
    const transformRef = (0, react_1.useRef)(transform);
    const setTransform = transform => {
        transformRef.current = data => {
            // reset transform for next submission
            transformRef.current = undefined;
            return transform(data);
        };
    };
    return {
        onSuccessRef,
        setOnSuccess,
        onFailureRef,
        setOnFailure,
        transformRef,
        setTransform,
    };
};
exports.useSaveModifiers = useSaveModifiers;
