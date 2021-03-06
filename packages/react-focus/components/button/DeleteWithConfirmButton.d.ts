import React, { ReactEventHandler, ReactElement, SyntheticEvent } from 'react';
import PropTypes from 'prop-types';
import { MutationMode, OnSuccess, OnFailure, Record, RedirectionSideEffect } from '../../features/core';
import { ButtonProps } from './Button';
export declare const DeleteWithConfirmButton: {
    (props: DeleteWithConfirmButtonProps): JSX.Element;
    propTypes: {
        basePath: PropTypes.Requireable<string>;
        classes: PropTypes.Requireable<object>;
        className: PropTypes.Requireable<string>;
        confirmTitle: PropTypes.Requireable<string>;
        confirmContent: PropTypes.Requireable<string>;
        label: PropTypes.Requireable<string>;
        mutationMode: PropTypes.Requireable<string>;
        undoable: PropTypes.Requireable<boolean>;
        record: PropTypes.Requireable<any>;
        redirect: PropTypes.Requireable<string | boolean | ((...args: any[]) => any)>;
        resource: PropTypes.Requireable<string>;
        icon: PropTypes.Requireable<PropTypes.ReactElementLike>;
    };
};
interface Props {
    basePath?: string;
    classes?: object;
    className?: string;
    confirmTitle?: string;
    confirmContent?: React.ReactNode;
    icon?: ReactElement;
    label?: string;
    mutationMode?: MutationMode;
    onClick?: ReactEventHandler<any>;
    record?: Record;
    redirect?: RedirectionSideEffect;
    resource?: string;
    handleSubmit?: (event?: SyntheticEvent<HTMLFormElement>) => Promise<Object>;
    handleSubmitWithRedirect?: (redirect?: RedirectionSideEffect) => void;
    invalid?: boolean;
    pristine?: boolean;
    saving?: boolean;
    submitOnEnter?: boolean;
    onSuccess?: OnSuccess;
    onFailure?: OnFailure;
    /** @deprecated use mutationMode: undoable instead */
    undoable?: boolean;
}
export declare type DeleteWithConfirmButtonProps = Props & ButtonProps;
export {};
