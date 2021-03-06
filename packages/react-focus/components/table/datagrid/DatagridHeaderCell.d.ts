import * as React from 'react';
import PropTypes from 'prop-types';
import { TableCellProps } from '@mui/material/TableCell';
import { SortPayload } from '../../../features/core';
import { ClassesOverride } from '../../types';
declare const useStyles: (props?: any) => import("@mui/styles").ClassNameMap<"icon" | "active">;
export declare const DatagridHeaderCell: {
    (props: DatagridHeaderCellProps): JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
        classes: PropTypes.Requireable<object>;
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
    classes?: ClassesOverride<typeof useStyles>;
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
        classes: PropTypes.Requireable<object>;
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
