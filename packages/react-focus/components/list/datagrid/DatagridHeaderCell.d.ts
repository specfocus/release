import { TableCellProps } from '@mui/material/TableCell';
import PropTypes from 'prop-types';
import * as React from 'react';
import { SortPayload } from '../../../features/core';
export declare const DatagridHeaderCell: {
    (props: DatagridHeaderCellProps): JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
        field: PropTypes.Requireable<PropTypes.ReactElementLike>;
        currentSort: PropTypes.Validator<PropTypes.InferProps<{
            sort: PropTypes.Requireable<string>;
            order: PropTypes.Requireable<string>;
        }>>;
        isSorting: PropTypes.Requireable<boolean>;
        resource: PropTypes.Requireable<string>;
        updateSort: PropTypes.Requireable<(...args: any[]) => any>;
    };
};
export interface DatagridHeaderCellProps extends Omit<TableCellProps, 'classes'> {
    className?: string;
    field?: JSX.Element;
    isSorting?: boolean;
    resource: string;
    currentSort: SortPayload;
    updateSort?: (event: any) => void;
}
declare const _default: React.MemoExoticComponent<{
    (props: DatagridHeaderCellProps): JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
        field: PropTypes.Requireable<PropTypes.ReactElementLike>;
        currentSort: PropTypes.Validator<PropTypes.InferProps<{
            sort: PropTypes.Requireable<string>;
            order: PropTypes.Requireable<string>;
        }>>;
        isSorting: PropTypes.Requireable<boolean>;
        resource: PropTypes.Requireable<string>;
        updateSort: PropTypes.Requireable<(...args: any[]) => any>;
    };
}>;
export default _default;
