"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEditContext = void 0;
const react_1 = require("react");
const defaults_1 = __importDefault(require("lodash/defaults"));
const EditContext_1 = require("./EditContext");
/**
 * Hook to read the edit controller props from the CreateContext.
 *
 * Mostly used within a <EditContext.Provider> (e.g. as a descendent of <Edit>).
 *
 * But you can also use it without a <EditContext.Provider>. In this case, it is up to you
 * to pass all the necessary props.
 *
 * The given props will take precedence over context values.
 *
 * @typedef {Object} EditControllerProps
 *
 * @returns {EditControllerProps} edit controller props
 *
 * @see useEditController for how it is filled
 *
 */
const useEditContext = (props) => {
    // Can't find a way to specify the RecordType when EditContext is declared
    // @ts-ignore
    const context = (0, react_1.useContext)(EditContext_1.EditContext);
    // Props take precedence over the context
    return (0, react_1.useMemo)(() => (0, defaults_1.default)({}, props != null ? extractEditContextProps(props) : {}, context), [context, props]);
};
exports.useEditContext = useEditContext;
/**
 * Extract only the edit controller props
 *
 * @param {Object} props props passed to the useEditContext hook
 *
 * @returns {EditControllerProps} edit controller props
 */
const extractEditContextProps = ({ basePath, data, record, defaultTitle, onFailureRef, onSuccessRef, transformRef, loaded, loading, redirect, setOnFailure, setOnSuccess, setTransform, resource, save, saving, successMessage, version, }) => ({
    basePath,
    // Necessary for actions (EditActions) which expect a data prop containing the record
    // @deprecated - to be removed in 4.0d
    data: record || data,
    record: record || data,
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
