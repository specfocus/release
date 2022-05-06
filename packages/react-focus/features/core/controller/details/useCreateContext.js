"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCreateContext = void 0;
const react_1 = require("react");
const defaults_1 = __importDefault(require("lodash/defaults"));
const CreateContext_1 = require("./CreateContext");
/**
 * Hook to read the create controller props from the CreateContext.
 *
 * Mostly used within a <CreateContext.Provider> (e.g. as a descendent of <Create>).
 *
 * But you can also use it without a <CreateContext.Provider>. In this case, it is up to you
 * to pass all the necessary props.
 *
 * The given props will take precedence over context values.
 *
 * @typedef {Object} CreateControllerProps
 *
 * @returns {CreateControllerProps} create controller props
 *
 * @see useCreateController for how it is filled
 *
 */
const useCreateContext = (props) => {
    const context = (0, react_1.useContext)(
    // Can't find a way to specify the RecordType when CreateContext is declared
    // @ts-ignore
    CreateContext_1.CreateContext);
    // Props take precedence over the context
    return (0, react_1.useMemo)(() => (0, defaults_1.default)({}, props != null ? extractCreateContextProps(props) : {}, context), [context, props]);
};
exports.useCreateContext = useCreateContext;
/**
 * Extract only the create controller props
 *
 * @param {Object} props props passed to the useCreateContext hook
 *
 * @returns {CreateControllerProps} create controller props
 */
const extractCreateContextProps = ({ basePath, record, defaultTitle, onFailureRef, onSuccessRef, transformRef, loaded, loading, redirect, setOnFailure, setOnSuccess, setTransform, resource, save, saving, successMessage, version, }) => ({
    basePath,
    record,
    defaultTitle,
    onFailureRef,
    onSuccessRef,
    transformRef,
    loaded,
    loading,
    redirect,
    setOnFailure,
    setOnSuccess,
    setTransform,
    resource,
    save,
    saving,
    successMessage,
    version,
});
