import * as React from 'react';
import { ReactNode } from 'react';
import { Record } from '../types';
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
export declare const RecordContext: React.Context<Record | Omit<Record, "id">>;
export declare const RecordContextProvider: <RecordType extends Record | Omit<Record, "id"> = Record>({ children, value, }: RecordContextOptions<RecordType>) => JSX.Element;
export interface RecordContextOptions<RecordType> {
    children: ReactNode;
    value?: RecordType;
}
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
export declare const useRecordContext: <RecordType extends Record | Omit<Record, "id"> = Record>(props?: UseRecordContextParams<RecordType>) => RecordType;
export interface UseRecordContextParams<RecordType extends Record | Omit<Record, 'id'> = Record> {
    record?: RecordType;
    [key: string]: any;
}
