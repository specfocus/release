"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRecordContext = exports.RecordContextProvider = exports.RecordContext = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
/**
 * Context to store the current record.
 *
 * Use the useRecordContext() hook to read the context. That's what the Edit and Show components do in ../../app.
 *
 * @example
 *
 * import { useEditController, EditContext } from '../../core';
 *
 * const Edit = props => {
 *     const { record } = useEditController(props);
 *     return (
 *         <RecordContextProvider value={record}>
 *             ...
 *         </RecordContextProvider>
 *     );
 * };
 */
exports.RecordContext = (0, react_1.createContext)(undefined);
const RecordContextProvider = ({ children, value, }) => ((0, jsx_runtime_1.jsx)(exports.RecordContext.Provider, Object.assign({ value: value }, { children: children }), void 0));
exports.RecordContextProvider = RecordContextProvider;
exports.RecordContext.displayName = 'RecordContext';
/**
 * Hook to read the record from a RecordContext.
 *
 * Must be used within a <RecordContext> such as provided by the <EditContextProvider>
 * (e.g. as a descendent of <Edit> or <EditBase>) or within a <ShowContextProvider>
 * (e.g. as a descendent of <Show> or <ShowBase>)
 *
 * @example // basic usage
 *
 * import { useRecordContext } from '../../core';
 *
 * const TitleField = () => {
 *     const record = useRecordContext();
 *     return <span>{record && record.title}</span>;
 * };
 *
 * @example // allow record override via props
 *
 * import { useRecordContext } from '../../core';
 *
 * const TitleField = (props) => {
 *     const record = useRecordContext(props);
 *     return <span>{record && record.title}</span>;
 * };
 * render(<TextField record={record} />);
 *
 * @returns {Record} A record object
 */
const useRecordContext = (props) => {
    // Can't find a way to specify the RecordType when CreateContext is declared
    // @ts-ignore
    const context = (0, react_1.useContext)(exports.RecordContext);
    return (props && props.record) || context;
};
exports.useRecordContext = useRecordContext;
