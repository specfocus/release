import { ReactElement, SyntheticEvent, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { ButtonProps as MuiButtonProps, PropTypes as MuiPropTypes } from '@mui/material';
import { Record, RedirectionSideEffect } from '../../features/core';
/**
 * A generic Button with side icon. Only the icon is displayed on small screens.
 *
 * The component translates the label. Pass the icon as child.
 * The icon displays on the left side of the button by default. Set alignIcon prop to 'right' to inverse.
 *
 * @example
 *
 * <Button label="Edit" color="secondary" onClick={doEdit}>
 *   <ContentCreate />
 * </Button>
 *
 */
declare const Button: {
    (props: ButtonProps): JSX.Element;
    propTypes: {
        alignIcon: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<PropTypes.ReactElementLike>;
        classes: PropTypes.Requireable<object>;
        className: PropTypes.Requireable<string>;
        color: PropTypes.Requireable<string>;
        disabled: PropTypes.Requireable<boolean>;
        label: PropTypes.Requireable<string>;
        size: PropTypes.Requireable<string>;
    };
};
interface Props {
    alignIcon?: 'left' | 'right';
    children?: ReactElement;
    classes?: object;
    className?: string;
    color?: MuiPropTypes.Color;
    component?: ReactNode;
    to?: string;
    disabled?: boolean;
    label?: string;
    size?: 'small' | 'medium' | 'large';
    icon?: ReactElement;
    redirect?: RedirectionSideEffect;
    variant?: string;
    basePath?: string;
    handleSubmit?: (event?: SyntheticEvent<HTMLFormElement>) => Promise<Object>;
    handleSubmitWithRedirect?: (redirect?: RedirectionSideEffect) => void;
    invalid?: boolean;
    onSave?: (values: object, redirect: RedirectionSideEffect) => void;
    saving?: boolean;
    submitOnEnter?: boolean;
    pristine?: boolean;
    record?: Record;
    resource?: string;
    undoable?: boolean;
}
export declare type ButtonProps = Props & MuiButtonProps;
export declare const sanitizeButtonRestProps: ({ basePath, handleSubmit, handleSubmitWithRedirect, invalid, onSave, pristine, record, redirect, resource, saving, submitOnEnter, undoable, ...rest }: any) => any;
export default Button;
