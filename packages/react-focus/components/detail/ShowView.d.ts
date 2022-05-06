import { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { ShowControllerProps } from '../../features/core';
import { ShowProps } from '../types';
export declare const ShowView: {
    (props: ShowViewProps): JSX.Element;
    propTypes: {
        actions: PropTypes.Requireable<boolean | PropTypes.ReactElementLike>;
        aside: PropTypes.Requireable<PropTypes.ReactElementLike>;
        basePath: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<PropTypes.ReactElementLike>;
        className: PropTypes.Requireable<string>;
        defaultTitle: PropTypes.Requireable<any>;
        hasEdit: PropTypes.Requireable<boolean>;
        hasList: PropTypes.Requireable<boolean>;
        loading: PropTypes.Requireable<boolean>;
        loaded: PropTypes.Requireable<boolean>;
        record: PropTypes.Requireable<object>;
        resource: PropTypes.Requireable<string>;
        title: PropTypes.Requireable<any>;
        version: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
    defaultProps: {
        component: import("@mui/material/OverridableComponent").OverridableComponent<import("@mui/material").CardTypeMap<{}, "div">>;
    };
};
interface ShowViewProps extends ShowProps, Partial<Omit<ShowControllerProps, 'resource'>> {
    children: ReactElement;
}
export {};
