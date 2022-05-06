import PropTypes from 'prop-types';
import * as React from 'react';
import { Identifier, Record, RecordMap, SortPayload } from '../../../features/core';
/**
 * The default Datagrid Header component.
 *
 * Renders select all checkbox as well as column header buttons used for sorting.
 */
export declare const DatagridHeader: {
    (props: DatagridHeaderProps): JSX.Element;
    propTypes: {
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        className: PropTypes.Requireable<string>;
        currentSort: PropTypes.Requireable<Required<PropTypes.InferProps<{
            field: PropTypes.Requireable<string>;
            order: PropTypes.Requireable<string>;
        }>>>;
        data: PropTypes.Requireable<any>;
        hasExpand: PropTypes.Requireable<boolean>;
        hasBulkActions: PropTypes.Requireable<boolean>;
        ids: PropTypes.Requireable<any[]>;
        isRowSelectable: PropTypes.Requireable<(...args: any[]) => any>;
        isRowExpandable: PropTypes.Requireable<(...args: any[]) => any>;
        onSelect: PropTypes.Requireable<(...args: any[]) => any>;
        onToggleItem: PropTypes.Requireable<(...args: any[]) => any>;
        resource: PropTypes.Requireable<string>;
        selectedIds: PropTypes.Requireable<any[]>;
        setSort: PropTypes.Requireable<(...args: any[]) => any>;
    };
    displayName: string;
};
export interface DatagridHeaderProps<RecordType extends Record = Record> {
    children?: React.ReactNode;
    className?: string;
    hasExpand?: boolean;
    hasBulkActions?: boolean;
    isRowSelectable?: (record: Record) => boolean;
    isRowExpandable?: (record: Record) => boolean;
    size?: 'medium' | 'small';
    currentSort?: SortPayload;
    data?: RecordMap<RecordType>;
    ids?: Identifier[];
    onSelect?: (ids: Identifier[]) => void;
    onToggleItem?: (id: Identifier) => void;
    resource?: string;
    selectedIds?: Identifier[];
    setSort?: (sort: string, order?: string) => void;
}
