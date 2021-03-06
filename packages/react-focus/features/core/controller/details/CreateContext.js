"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateContext = void 0;
const react_1 = require("react");
/**
 * Context to store the result of the useCreateController() hook.
 *
 * Use the useCreateContext() hook to read the context. That's what the Create components do in ../../app.
 *
 * @example
 *
 * import { useCreateController, CreateContextProvider } from '../../../core';
 *
 * const Create = props => {
 *     const controllerProps = useCreateController(props);
 *     return (
 *         <CreateContextProvider value={controllerProps}>
 *             ...
 *         </CreateContextProvider>
 *     );
 * };
 */
exports.CreateContext = (0, react_1.createContext)({
    basePath: null,
    record: null,
    defaultTitle: null,
    onFailureRef: null,
    onSuccessRef: null,
    transformRef: null,
    loaded: null,
    loading: null,
    redirect: null,
    setOnFailure: null,
    setOnSuccess: null,
    setTransform: null,
    resource: null,
    save: null,
    saving: null,
    successMessage: null,
    version: null,
});
exports.CreateContext.displayName = 'CreateContext';
