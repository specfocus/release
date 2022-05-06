"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateContextProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const RecordContext_1 = require("../RecordContext");
const CreateContext_1 = require("./CreateContext");
const SaveContext_1 = require("./SaveContext");
/**
 * Create a Create Context.
 *
 * @example
 *
 * const MyCreate = (props) => {
 *     const controllerProps = useCreateController(props);
 *     return (
 *         <CreateContextProvider value={controllerProps}>
 *             <MyCreateView>
 *         </CreateContextProvider>
 *     );
 * };
 *
 * const MyCreateView = () => {
 *     const record = useRecordContext();
 *     // or, to rerender only when the save operation change but not data
 *     const { saving } = useCreateContext();
 * }
 *
 * @see CreateContext
 * @see RecordContext
 */
const CreateContextProvider = ({ children, value, }) => ((0, jsx_runtime_1.jsx)(CreateContext_1.CreateContext.Provider, Object.assign({ value: value }, { children: (0, jsx_runtime_1.jsx)(SaveContext_1.SaveContextProvider, Object.assign({ value: (0, SaveContext_1.usePickSaveContext)(value) }, { children: (0, jsx_runtime_1.jsx)(RecordContext_1.RecordContextProvider, Object.assign({ value: value && value.record }, { children: children }), void 0) }), void 0) }), void 0));
exports.CreateContextProvider = CreateContextProvider;
