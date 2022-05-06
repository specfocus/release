/// <reference types="react" />
import { TableProps } from '@mui/material/Table';
import { ObjectSchema } from '../../lib/ObjectSchema';
interface TableState {
    canAdd?: boolean;
    canDelete?: boolean;
    canModify?: boolean;
    orderBy: string | string[];
}
interface AutoTableProps extends TableProps {
    initialState: TableState;
    schema: ObjectSchema;
}
export default function AutoTable({ initialState, schema, ...otherProps }: AutoTableProps): JSX.Element;
export {};
