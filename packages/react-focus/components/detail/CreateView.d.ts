import { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { CreateControllerProps } from '../../features/core';
import { CreateProps } from '../types';
export declare const CreateView: {
    (props: CreateViewProps): JSX.Element;
    propTypes: {
        actions: PropTypes.Requireable<PropTypes.ReactElementLike>;
        aside: PropTypes.Requireable<PropTypes.ReactElementLike>;
        basePath: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<PropTypes.ReactElementLike>;
        className: PropTypes.Requireable<string>;
        defaultTitle: PropTypes.Requireable<any>;
        hasList: PropTypes.Requireable<boolean>;
        hasShow: PropTypes.Requireable<boolean>;
        record: PropTypes.Requireable<object>;
        redirect: PropTypes.Requireable<string | boolean>;
        resource: PropTypes.Requireable<string>;
        save: PropTypes.Requireable<(...args: any[]) => any>;
        title: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        onSuccess: PropTypes.Requireable<(...args: any[]) => any>;
        onFailure: PropTypes.Requireable<(...args: any[]) => any>;
        setOnSuccess: PropTypes.Requireable<(...args: any[]) => any>;
        setOnFailure: PropTypes.Requireable<(...args: any[]) => any>;
        setTransform: PropTypes.Requireable<(...args: any[]) => any>;
    };
    defaultProps: {
        component: import("@mui/material/OverridableComponent").OverridableComponent<import("@mui/material").CardTypeMap<{}, "div">>;
    };
};
interface CreateViewProps extends CreateProps, Omit<CreateControllerProps, 'resource'> {
    children: ReactElement;
}
export {};
