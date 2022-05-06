"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceArrayInputContextProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ReferenceArrayInputContext_1 = require("./ReferenceArrayInputContext");
/**
 * Provider for the context which provides access to the useReferenceArrayInput features.
 *
 * @example
 * const ReferenceArrayInput = ({ children }) => {
 *     const controllerProps = useReferenceArrayInputController();
 *     return (
 *         <ReferenceArrayInputContextProvider value={controllerProps}>
 *             {children}
 *         </ReferenceArrayInputContextProvider>
 *     )
 * }
 */
const ReferenceArrayInputContextProvider = ({ children, value, }) => ((0, jsx_runtime_1.jsx)(ReferenceArrayInputContext_1.ReferenceArrayInputContext.Provider, Object.assign({ value: value }, { children: children }), void 0));
exports.ReferenceArrayInputContextProvider = ReferenceArrayInputContextProvider;
