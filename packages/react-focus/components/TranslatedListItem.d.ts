import { ListItemProps } from '@mui/material/ListItem';
import React from 'react';
export interface TranslatedItemLinkProps extends ListItemProps {
    icon: React.ReactElement;
    primary: string;
    secondary?: string;
}
export default function TranslatedListItem({ icon, primary, secondary, ...otherProps }: TranslatedItemLinkProps): JSX.Element;
