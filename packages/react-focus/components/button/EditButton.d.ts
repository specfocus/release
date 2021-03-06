import { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import { Record } from '../../features/core';
import { ButtonProps } from './Button';
/**
 * Opens the Edit view of a given record:
 *
 * @example // basic usage
 * import { EditButton } from '../../app';
 *
 * const CommentEditButton = ({ record }) => (
 *     <EditButton basePath="/comments" label="Edit comment" record={record} />
 * );
 */
declare const EditButton: {
    (props: EditButtonProps): JSX.Element;
    propTypes: {
        basePath: PropTypes.Requireable<string>;
        icon: PropTypes.Requireable<PropTypes.ReactElementLike>;
        label: PropTypes.Requireable<string>;
        record: PropTypes.Requireable<any>;
        scrollToTop: PropTypes.Requireable<boolean>;
    };
};
interface Props {
    basePath?: string;
    icon?: ReactElement;
    label?: string;
    record?: Record;
    scrollToTop?: boolean;
}
export declare type EditButtonProps = Props & ButtonProps & MuiButtonProps;
export default EditButton;
