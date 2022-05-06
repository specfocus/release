import * as React from 'react';
import { TableCellProps } from '@mui/material/TableCell';
import { Record } from '../../../features/core';
declare const DatagridCell: React.FC<DatagridCellProps>;
export interface DatagridCellProps extends TableCellProps {
    basePath?: string;
    className?: string;
    field?: JSX.Element;
    record?: Record;
    resource?: string;
}
export default DatagridCell;
