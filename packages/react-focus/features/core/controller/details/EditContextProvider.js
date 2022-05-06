"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditContextProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const RecordContext_1 = require("../RecordContext");
const EditContext_1 = require("./EditContext");
const SaveContext_1 = require("./SaveContext");
/**
 * Create an Edit Context.
 *
 * @example
 *
 * const MyEdit = (props) => {
 *     const controllerProps = useEditController(props);
 *     return (
 *         <EditContextProvider value={controllerProps}>
 *             <MyEditView>
 *         </EditContextProvider>
 *     );
 * };
 *
 * const MyEditView = () => {
 *     const record = useRecordContext();
 *     // or, to rerender only when the save operation change but not data
 *     const { saving } = useEditContext();
 * }
 *
 * @see EditContext
 * @see RecordContext
 */
const EditContextProvider = ({ children, value, }) => ((0, jsx_runtime_1.jsx)(EditContext_1.EditContext.Provider, Object.assign({ value: value }, { children: (0, jsx_runtime_1.jsx)(SaveContext_1.SaveContextProvider, Object.assign({ value: (0, SaveContext_1.usePickSaveContext)(value) }, { children: (0, jsx_runtime_1.jsx)(RecordContext_1.RecordContextProvider, Object.assign({ value: value && value.record }, { children: children }), void 0) }), void 0) }), void 0));
exports.EditContextProvider = EditContextProvider;
