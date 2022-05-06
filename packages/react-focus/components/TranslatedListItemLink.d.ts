import { ListItemProps } from '@mui/material/ListItem';
import React from 'react';
import { NavLinkProps } from 'react-router-dom';
import { Theme } from '@mui/material/styles/createTheme';
declare type LinkProps = Pick<NavLinkProps, 'className' | 'caseSensitive' | 'end' | 'reloadDocument' | 'replace' | 'state' | 'style' | 'to'>;
export interface TranslatedListItemLinkProps extends Omit<ListItemProps, 'className' | 'style'>, LinkProps {
    icon: React.ReactElement;
    primary: string;
    secondary?: string;
}
export declare const ItemIcon: import("@emotion/styled-base").StyledComponent<import("@mui/material/ListItemIcon").ListItemIconProps & import("@mui/system").MUIStyledCommonProps<Theme>, {}, {}>;
declare const TranslatedListItemLink: React.FC<TranslatedListItemLinkProps>;
export default TranslatedListItemLink;
