import * as React from 'react';
import { ReactElement, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { FormWithRedirectRenderProps, MutationMode, Record } from '../../features/core';
export declare const SimpleFormView: {
    ({ basePath, children, className, component: Component, handleSubmit, handleSubmitWithRedirect, invalid, margin, mutationMode, pristine, record, redirect, resource, saving, submitOnEnter, toolbar, undoable, variant, validating, ...rest }: SimpleFormViewProps): ReactElement;
    propTypes: {
        basePath: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        className: PropTypes.Requireable<string>;
        handleSubmit: PropTypes.Requireable<(...args: any[]) => any>;
        invalid: PropTypes.Requireable<boolean>;
        mutationMode: PropTypes.Requireable<string>;
        pristine: PropTypes.Requireable<boolean>;
        record: PropTypes.Requireable<object>;
        resource: PropTypes.Requireable<string>;
        redirect: PropTypes.Requireable<string | boolean | ((...args: any[]) => any)>;
        save: PropTypes.Requireable<(...args: any[]) => any>;
        saving: PropTypes.Requireable<boolean>;
        submitOnEnter: PropTypes.Requireable<boolean>;
        toolbar: PropTypes.Requireable<PropTypes.ReactElementLike>;
        undoable: PropTypes.Requireable<boolean>;
        validate: PropTypes.Requireable<(...args: any[]) => any>;
    };
    defaultProps: {
        submitOnEnter: boolean;
        toolbar: JSX.Element;
        component: {
            (props: import("../layout/CardContentInner").CardContentInnerProps): JSX.Element;
            propTypes: {
                className: PropTypes.Requireable<string>;
                classes: PropTypes.Requireable<object>;
                children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
            };
        };
    };
};
export interface SimpleFormViewProps extends FormWithRedirectRenderProps {
    basePath?: string;
    children?: ReactNode;
    className?: string;
    component?: React.ComponentType<any>;
    margin?: 'none' | 'normal' | 'dense';
    mutationMode?: MutationMode;
    record?: Record;
    resource?: string;
    toolbar?: ReactElement;
    /** @deprecated use mutationMode: undoable instead */
    undoable?: boolean;
    variant?: 'standard' | 'outlined' | 'filled';
    submitOnEnter?: boolean;
    __versions?: any;
}
