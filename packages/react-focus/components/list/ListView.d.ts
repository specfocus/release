import { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { ListControllerProps } from '../../features/core';
import { ListProps } from '../types';
export declare const ListView: {
    (props: ListViewProps): JSX.Element;
    propTypes: {
        actions: PropTypes.Requireable<boolean | PropTypes.ReactElementLike>;
        aside: PropTypes.Requireable<PropTypes.ReactElementLike>;
        basePath: PropTypes.Requireable<string>;
        bulkActionButtons: PropTypes.Requireable<boolean | PropTypes.ReactElementLike>;
        children: PropTypes.Requireable<PropTypes.ReactElementLike>;
        className: PropTypes.Requireable<string>;
        component: (props: any, propName: any, componentName: any) => Error;
        currentSort: PropTypes.Requireable<PropTypes.InferProps<{
            field: PropTypes.Validator<string>;
            order: PropTypes.Validator<string>;
        }>>;
        data: PropTypes.Requireable<any>;
        defaultTitle: PropTypes.Requireable<string>;
        displayedFilters: PropTypes.Requireable<object>;
        exporter: PropTypes.Requireable<boolean | ((...args: any[]) => any)>;
        filterDefaultValues: PropTypes.Requireable<object>;
        filters: PropTypes.Requireable<PropTypes.ReactElementLike | PropTypes.ReactElementLike[]>;
        filterValues: PropTypes.Requireable<object>;
        hasCreate: PropTypes.Requireable<boolean>;
        hideFilter: PropTypes.Requireable<(...args: any[]) => any>;
        ids: PropTypes.Requireable<any[]>;
        loading: PropTypes.Requireable<boolean>;
        onSelect: PropTypes.Requireable<(...args: any[]) => any>;
        onToggleItem: PropTypes.Requireable<(...args: any[]) => any>;
        onUnselectItems: PropTypes.Requireable<(...args: any[]) => any>;
        page: PropTypes.Requireable<number>;
        pagination: PropTypes.Requireable<boolean | PropTypes.ReactElementLike>;
        perPage: PropTypes.Requireable<number>;
        refresh: PropTypes.Requireable<(...args: any[]) => any>;
        resource: PropTypes.Requireable<string>;
        selectedIds: PropTypes.Requireable<any[]>;
        setFilters: PropTypes.Requireable<(...args: any[]) => any>;
        setPage: PropTypes.Requireable<(...args: any[]) => any>;
        setPerPage: PropTypes.Requireable<(...args: any[]) => any>;
        setSort: PropTypes.Requireable<(...args: any[]) => any>;
        showFilter: PropTypes.Requireable<(...args: any[]) => any>;
        title: PropTypes.Requireable<string | PropTypes.ReactElementLike>;
        total: PropTypes.Requireable<number>;
        version: PropTypes.Requireable<number>;
    };
    defaultProps: {
        actions: JSX.Element;
        component: import("@mui/material/OverridableComponent").OverridableComponent<import("@mui/material/Card").CardTypeMap<{}, "div">>;
        bulkActionButtons: JSX.Element;
        pagination: JSX.Element;
        empty: JSX.Element;
    };
};
export interface ListViewProps extends Omit<ListProps, 'basePath' | 'hasCreate' | 'perPage' | 'resource'>, Partial<ListControllerProps> {
    children: ReactElement;
}
export default ListView;
