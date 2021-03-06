import * as React from 'react';
import PropTypes from 'prop-types';
declare const UserMenu: {
    (props: UserMenuProps): JSX.Element;
    propTypes: {
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        classes: PropTypes.Requireable<object>;
        label: PropTypes.Requireable<string>;
        logout: PropTypes.Requireable<PropTypes.ReactElementLike>;
        icon: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
};
export interface UserMenuProps {
    children?: React.ReactNode;
    label?: string;
    logout?: React.ReactNode;
    icon?: React.ReactNode;
}
export default UserMenu;
