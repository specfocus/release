import { IconButtonProps } from '@mui/material/IconButton';
import PropTypes from 'prop-types';
import { ReactElement } from 'react';
import { ListProps } from '../../features/core/controller/useListController';
import { FrameProps } from './Frame';
export declare const useStyles: (props?: any) => import("@mui/styles").ClassNameMap<"footer" | "container">;
export interface DataWidgetProps {
    onClose: () => void;
}
export interface DataFrameProps extends FrameProps, Omit<ListProps, 'title'> {
    footer?: ReactElement;
}
export declare const ToolButton: ({ name, title, ...props }: IconButtonProps) => JSX.Element;
declare function DataFrame(props: DataFrameProps): JSX.Element;
declare namespace DataFrame {
    var propTypes: {
        actions: PropTypes.Requireable<boolean | PropTypes.ReactElementLike>;
        aside: PropTypes.Requireable<PropTypes.ReactElementLike>;
        bulkActionButtons: PropTypes.Requireable<boolean | PropTypes.ReactElementLike>;
        children: PropTypes.Requireable<PropTypes.ReactElementLike>;
        classes: PropTypes.Requireable<object>;
        className: PropTypes.Requireable<string>;
        filter: PropTypes.Requireable<object>;
        filterDefaultValues: PropTypes.Requireable<object>;
        filters: PropTypes.Requireable<PropTypes.ReactElementLike | PropTypes.ReactElementLike[]>;
        pagination: PropTypes.Requireable<boolean | PropTypes.ReactElementLike>;
        perPage: PropTypes.Validator<number>;
        sort: PropTypes.Requireable<PropTypes.InferProps<{
            field: PropTypes.Requireable<string>;
            order: PropTypes.Requireable<string>;
        }>>;
        title: PropTypes.Requireable<string>;
        subtitle: PropTypes.Requireable<string>;
        authProvider: PropTypes.Requireable<(...args: any[]) => any>;
        hasCreate: PropTypes.Requireable<boolean>;
        hasEdit: PropTypes.Requireable<boolean>;
        hasList: PropTypes.Requireable<boolean>;
        hasShow: PropTypes.Requireable<boolean>;
        location: PropTypes.Requireable<any>;
        match: PropTypes.Requireable<any>;
        path: PropTypes.Requireable<string>;
        resource: PropTypes.Requireable<string>;
        syncWithLocation: PropTypes.Requireable<boolean>;
    };
    var defaultProps: {
        filter: {};
        perPage: number;
    };
}
export default DataFrame;
