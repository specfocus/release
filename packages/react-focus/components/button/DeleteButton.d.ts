import { ReactElement, SyntheticEvent } from 'react';
import PropTypes from 'prop-types';
import { Record, RedirectionSideEffect, MutationMode } from '../../features/core';
import { ButtonProps } from './Button';
/**
 * Button used to delete a single record. Added by default by the <Toolbar> of edit and show views.
 *
 * @typedef {Object} Props The props you can use (other props are injected if you used it in the <Toolbar>)
 * @prop {boolean} undoable Confirm the deletion using an undo button in a notification or a confirmation dialog. Defaults to 'false'.
 * @prop {Object} record The current resource record
 * @prop {string} className
 * @prop {string} label Button label. Defaults to 'ra.action.delete, translated.
 * @prop {boolean} disabled Disable the button.
 * @prop {string} variant Material-ui variant for the button. Defaults to 'contained'.
 * @prop {ReactElement} icon Override the icon. Defaults to the Delete icon from material-ui.
 *
 * @param {Props} props
 *
 * @example Usage in the <TopToolbar> of an <Edit> form
 *
 * import * as React from 'react';
 * import { Edit, DeleteButton, TopToolbar } from '../../app';
 *
 * const EditActions = props => {
 *     const { basePath, data, resource } = props;
 *     return (
 *         <TopToolbar>
 *             <DeleteButton
 *                 basePath={basePath}
 *                 record={data}
 *                 resource={resource}
 *                 undoable={false} // Renders the <DeleteWithConfirmButton>
 *             />
 *         </TopToolbar>
 *     );
 * };
 *
 * const Edit = props => {
 *     return <Edit actions={<EditActions />} {...props} />;
 * };
 */
export declare const DeleteButton: {
    (props: DeleteButtonProps): JSX.Element;
    propTypes: {
        basePath: PropTypes.Requireable<string>;
        label: PropTypes.Requireable<string>;
        mutationMode: PropTypes.Requireable<string>;
        record: PropTypes.Requireable<any>;
        redirect: PropTypes.Requireable<string | boolean | ((...args: any[]) => any)>;
        resource: PropTypes.Requireable<string>;
        undoable: PropTypes.Requireable<boolean>;
        icon: PropTypes.Requireable<PropTypes.ReactElementLike>;
    };
};
interface Props {
    basePath?: string;
    classes?: object;
    className?: string;
    confirmTitle?: string;
    confirmContent?: string;
    icon?: ReactElement;
    label?: string;
    mutationMode?: MutationMode;
    onClick?: (e: MouseEvent) => void;
    record?: Record;
    redirect?: RedirectionSideEffect;
    resource?: string;
    handleSubmit?: (event?: SyntheticEvent<HTMLFormElement>) => Promise<Object>;
    handleSubmitWithRedirect?: (redirect?: RedirectionSideEffect) => void;
    invalid?: boolean;
    pristine?: boolean;
    saving?: boolean;
    submitOnEnter?: boolean;
    /** @deprecated use mutationMode: undoable instead */
    undoable?: boolean;
}
export declare type DeleteButtonProps = Props & ButtonProps;
export {};
