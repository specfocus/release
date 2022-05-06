/// <reference types="react" />
import { Record } from '../../features/core';
import { TypographyProps } from '@mui/material/Typography';
import { PublicFieldProps, InjectedFieldProps } from './types';
/**
 * Field using a render function
 *
 * @example
 * <FunctionField
 *     source="last_name" // used for sorting
 *     label="Name"
 *     render={record => record && `${record.first_name} ${record.last_name}`}
 * />
 */
declare const FunctionField: {
    <RecordType extends Record = Record>(props: FunctionFieldProps<RecordType>): JSX.Element;
    defaultProps: {
        addLabel: boolean;
    };
    propTypes: any;
};
export interface FunctionFieldProps<RecordType extends Record = Record> extends PublicFieldProps, InjectedFieldProps<RecordType>, Omit<TypographyProps, 'textAlign'> {
    render: (record?: RecordType, source?: string) => any;
}
export default FunctionField;
