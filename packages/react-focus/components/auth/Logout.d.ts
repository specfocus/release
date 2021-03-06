import { FunctionComponent, ReactElement } from 'react';
import { MenuItemProps } from '@mui/material/MenuItem';
interface Props {
    className?: string;
    redirectTo?: string;
    icon?: ReactElement;
}
/**
 * Logout button component, to be passed to the Admin component
 *
 * Used for the Logout Menu item in the sidebar
 */
declare const LogoutWithRef: FunctionComponent<Props & MenuItemProps<'li', {
    button: true;
}>>;
export default LogoutWithRef;
