/// <reference types="react" />
import { SnackbarProps } from '@mui/material';
import PropTypes from 'prop-types';
export interface NotificationProps extends Omit<SnackbarProps, 'open'> {
    type?: string;
}
declare const Notification: {
    (props: NotificationProps): JSX.Element;
    propTypes: {
        type: PropTypes.Requireable<string>;
    };
    defaultProps: {
        type: string;
        autoHideDuration: number;
    };
};
export default Notification;
