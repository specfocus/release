"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowContextProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const RecordContext_1 = require("../RecordContext");
const ShowContext_1 = require("./ShowContext");
/**
 * Create a Show Context.
 *
 * @example
 *
 * const MyShow = (props) => {
 *     const controllerProps = useShowController(props);
 *     return (
 *         <ShowContextProvider value={controllerProps}>
 *             <MyShowView>
 *         </ShowContextProvider>
 *     );
 * };
 *
 * const MyShowView = () => {
 *     const record = useRecordContext();
 * }
 *
 * @see ShowContext
 * @see RecordContext
 */
const ShowContextProvider = ({ children, value, }) => ((0, jsx_runtime_1.jsx)(ShowContext_1.ShowContext.Provider, Object.assign({ value: value }, { children: (0, jsx_runtime_1.jsx)(RecordContext_1.RecordContextProvider, Object.assign({ value: value && value.record }, { children: children }), void 0) }), void 0));
exports.ShowContextProvider = ShowContextProvider;
