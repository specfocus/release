"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditContext = void 0;
const react_1 = require("react");
/**
 * Context to store the result of the useEditController() hook.
 *
 * Use the useEditContext() hook to read the context. That's what the Edit components do in ../../app.
 *
 * @example
 *
 * import { useEditController, EditContextProvider } from '../../../core';
 *
 * const Edit = props => {
 *     const controllerProps = useEditController(props);
 *     return (
 *         <EditContextProvider value={controllerProps}>
 *             ...
 *         </EditContextProvider>
 *     );
 * };
 */
exports.EditContext = (0, react_1.createContext)({
    basePath: null,
    record: null,
    defaultTitle: null,
    loaded: null,
    loading: null,
    onFailureRef: null,
    onSuccessRef: null,
    transformRef: null,
    redirect: null,
    setOnFailure: null,
    setOnSuccess: null,
    setTransform: null,
    refetch: null,
    resource: null,
    save: null,
    saving: null,
    successMessage: null,
    version: null,
});
exports.EditContext.displayName = 'EditContext';
