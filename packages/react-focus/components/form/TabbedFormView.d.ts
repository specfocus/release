import { ReactElement, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { FormWithRedirectRenderProps, MutationMode, Record } from '../../features/core';
export declare const TabbedFormClasses: {
    errorTabButton: string;
    content: string;
};
export declare const TabbedFormView: {
    (props: TabbedFormViewProps): ReactElement;
    propTypes: {
        basePath: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        className: PropTypes.Requireable<string>;
        defaultValue: PropTypes.Requireable<object>;
        handleSubmit: PropTypes.Requireable<(...args: any[]) => any>;
        initialValues: PropTypes.Requireable<object>;
        invalid: PropTypes.Requireable<boolean>;
        location: PropTypes.Requireable<object>;
        match: PropTypes.Requireable<object>;
        mutationMode: PropTypes.Requireable<string>;
        pristine: PropTypes.Requireable<boolean>;
        record: PropTypes.Requireable<object>;
        redirect: PropTypes.Requireable<string | boolean | ((...args: any[]) => any)>;
        resource: PropTypes.Requireable<string>;
        save: PropTypes.Requireable<(...args: any[]) => any>;
        saving: PropTypes.Requireable<boolean>;
        submitOnEnter: PropTypes.Requireable<boolean>;
        tabs: PropTypes.Validator<PropTypes.ReactElementLike>;
        toolbar: PropTypes.Requireable<PropTypes.ReactElementLike>;
        translate: PropTypes.Requireable<(...args: any[]) => any>;
        undoable: PropTypes.Requireable<boolean>;
        validate: PropTypes.Requireable<(...args: any[]) => any>;
        value: PropTypes.Requireable<number>;
        version: PropTypes.Requireable<number>;
    };
    defaultProps: {
        submitOnEnter: boolean;
        tabs: JSX.Element;
        toolbar: JSX.Element;
    };
};
export interface TabbedFormViewProps extends FormWithRedirectRenderProps {
    basePath?: string;
    children?: ReactNode;
    className?: string;
    margin?: 'none' | 'normal' | 'dense';
    mutationMode?: MutationMode;
    record?: Record;
    resource?: string;
    syncWithLocation?: boolean;
    tabs?: ReactElement;
    toolbar?: ReactElement;
    /** @deprecated use mutationMode: undoable instead */
    undoable?: boolean;
    variant?: 'standard' | 'outlined' | 'filled';
    submitOnEnter?: boolean;
    __versions?: any;
}
