import { ReactElement, ReactEventHandler, SyntheticEvent } from 'react';
import PropTypes from 'prop-types';
import { Record, RedirectionSideEffect, OnSuccess, OnFailure } from '../../features/core';
import { ButtonProps } from './Button';
export declare const DeleteWithUndoButton: {
    (props: DeleteWithUndoButtonProps): JSX.Element;
    propTypes: {
        basePath: PropTypes.Requireable<string>;
        classes: PropTypes.Requireable<object>;
        className: PropTypes.Requireable<string>;
        label: PropTypes.Requireable<string>;
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
    icon?: ReactElement;
    label?: string;
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
}
export declare type DeleteWithUndoButtonProps = Props & ButtonProps;
export {};
