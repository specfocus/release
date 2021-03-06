import { ReactElement, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { Record } from '../../features/core';
export declare const FormTab: {
    (props: FormTabProps): JSX.Element;
    propTypes: {
        basePath: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
        contentClassName: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        intent: PropTypes.Requireable<string>;
        hidden: PropTypes.Requireable<boolean>;
        icon: PropTypes.Requireable<PropTypes.ReactElementLike>;
        label: PropTypes.Validator<string | PropTypes.ReactElementLike>;
        margin: PropTypes.Requireable<string>;
        path: PropTypes.Requireable<string>;
        record: PropTypes.Requireable<object>;
        resource: PropTypes.Requireable<string>;
        value: PropTypes.Requireable<string | number>;
        variant: PropTypes.Requireable<string>;
    };
    displayName: string;
};
export interface FormTabProps {
    basePath?: string;
    className?: string;
    classes?: object;
    children?: ReactNode;
    contentClassName?: string;
    hidden?: boolean;
    icon?: ReactElement;
    intent?: 'header' | 'content';
    label: string | ReactElement;
    margin?: 'none' | 'normal' | 'dense';
    path?: string;
    record?: Record;
    resource?: string;
    syncWithLocation?: boolean;
    value?: string | number;
    variant?: 'standard' | 'outlined' | 'filled';
}
