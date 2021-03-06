import { ReactNode } from 'react';
import PropTypes from 'prop-types';
export declare const MENU_WIDTH = 240;
export declare const CLOSED_MENU_WIDTH = 55;
declare const Menu: {
    (props: MenuProps): JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
        dense: PropTypes.Requireable<boolean>;
        hasDashboard: PropTypes.Requireable<boolean>;
        logout: PropTypes.Requireable<PropTypes.ReactElementLike>;
        onMenuClick: PropTypes.Requireable<(...args: any[]) => any>;
    };
    defaultProps: {
        onMenuClick: () => any;
    };
};
export interface MenuProps {
    children?: ReactNode;
    className?: string;
    dense?: boolean;
    hasDashboard?: boolean;
    /**
     * @deprecated
     */
    logout?: ReactNode;
    /**
     * @deprecated
     */
    onMenuClick?: () => void;
}
export default Menu;
