import { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { DrawerProps } from '@mui/material';
export declare const DRAWER_WIDTH = 240;
export declare const CLOSED_DRAWER_WIDTH = 55;
declare const Sidebar: {
    (props: SidebarProps): JSX.Element;
    propTypes: {
        children: PropTypes.Validator<PropTypes.ReactNodeLike>;
    };
};
export interface SidebarProps extends DrawerProps {
    children: ReactElement;
    closedSize?: number;
    size?: number;
}
export default Sidebar;
