import { DeprecatedThemeOptions } from '@mui/material';
import PropTypes from 'prop-types';
import { ComponentType, ErrorInfo, HtmlHTMLAttributes, ReactElement } from 'react';
import { CoreLayoutProps } from '../../features/core';
import { AppBarProps } from './AppBar';
import { MenuProps } from './Menu';
export interface LayoutProps extends CoreLayoutProps, Omit<HtmlHTMLAttributes<HTMLDivElement>, 'title'> {
    appBar?: ComponentType<AppBarProps>;
    classes?: any;
    className?: string;
    error?: ComponentType<{
        error?: Error;
        errorInfo?: ErrorInfo;
        title?: string | ReactElement<any>;
    }>;
    menu?: ComponentType<MenuProps>;
    notification?: ComponentType;
    sidebar?: ComponentType<{
        children: JSX.Element;
    }>;
    theme?: DeprecatedThemeOptions;
}
export interface LayoutState {
    hasError: boolean;
    error?: Error;
    errorInfo?: ErrorInfo;
}
declare const Layout: {
    ({ theme: themeOverride, ...props }: LayoutProps): JSX.Element;
    propTypes: {
        theme: PropTypes.Requireable<object>;
    };
    defaultProps: {
        theme: import("@mui/material").ThemeOptions;
    };
};
export default Layout;
