import { ReactElement, SyntheticEvent } from 'react';
import PropTypes from 'prop-types';
import { ButtonProps } from '@mui/material/Button';
import { RedirectionSideEffect, OnSuccess, OnFailure, TransformData, Record, HandleSubmitWithRedirect } from '../../features/core';
import { FormRenderProps } from 'react-final-form';
/**
 * Submit button for resource forms (Edit and Create).
 *
 * @typedef {Object} Props the props you can use (other props are injected by the <Toolbar>)
 * @prop {string} className
 * @prop {string} label Button label. Defaults to 'ra.action.save', translated.
 * @prop {boolean} disabled Disable the button.
 * @prop {string} variant Material-ui variant for the button. Defaults to 'contained'.
 * @prop {ReactElement} icon
 * @prop {string|boolean} redirect Override of the default redirect in case of success. Can be 'list', 'show', 'edit' (for create views), or false (to stay on the creation form).
 * @prop {function} onSave (deprecated)
 * @prop {function} onSuccess Callback to execute instead of the default success side effects. Receives the dataProvider response as argument.
 * @prop {function} onFailure Callback to execute instead of the default error side effects. Receives the dataProvider error response as argument.
 * @prop {function} transform Callback to execute before calling the dataProvider. Receives the data from the form, must return that transformed data. Can be asynchronous (and return a Promise)
 *
 * @param {Props} props
 *
 * @example // with custom redirection
 *
 * <SaveButton label="post.action.save_and_edit" redirect="edit" />
 *
 * @example // with no redirection
 *
 * <SaveButton label="post.action.save_and_add" redirect={false} />
 *
 * @example // with custom success side effect
 *
 * const MySaveButton = props => {
 *     const notify = useNotify();
 *     const redirect = useRedirect();
 *     const onSuccess = (response) => {
 *         notify(`Post "${response.data.title}" saved!`);
 *         redirect('/posts');
 *     };
 *     return <SaveButton {...props} onSuccess={onSuccess} />;
 * }
 */
declare const SaveButton: {
    (props: SaveButtonProps): JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
        classes: PropTypes.Requireable<object>;
        handleSubmitWithRedirect: PropTypes.Requireable<(...args: any[]) => any>;
        onSave: PropTypes.Requireable<(...args: any[]) => any>;
        invalid: PropTypes.Requireable<boolean>;
        label: PropTypes.Requireable<string>;
        redirect: PropTypes.Requireable<string | boolean | ((...args: any[]) => any)>;
        saving: PropTypes.Requireable<boolean>;
        submitOnEnter: PropTypes.Requireable<boolean>;
        variant: PropTypes.Requireable<string>;
        icon: PropTypes.Requireable<PropTypes.ReactElementLike>;
    };
};
interface Props {
    classes?: object;
    className?: string;
    handleSubmitWithRedirect?: HandleSubmitWithRedirect | FormRenderProps['handleSubmit'];
    onSave?: (values: object, redirect: RedirectionSideEffect) => void;
    onSuccess?: OnSuccess;
    onFailure?: OnFailure;
    transform?: TransformData;
    icon?: ReactElement;
    invalid?: boolean;
    label?: string;
    onClick?: () => void;
    disabled?: boolean;
    redirect?: RedirectionSideEffect;
    saving?: boolean;
    submitOnEnter?: boolean;
    variant?: string;
    basePath?: string;
    handleSubmit?: (event?: SyntheticEvent<HTMLFormElement>) => Promise<Object>;
    record?: Record;
    resource?: string;
    undoable?: boolean;
}
export declare type SaveButtonProps = Props & ButtonProps;
export default SaveButton;
