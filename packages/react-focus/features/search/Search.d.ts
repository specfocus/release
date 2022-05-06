import { IconButtonProps } from '@mui/material/IconButton';
import { InputBaseProps } from '@mui/material/InputBase';
import { MenuProps } from '@mui/material/Menu';
import React from 'react';
export declare const SEARCH_WIDGET = "SEARCH_WIDGET";
interface SearchBoxProps extends InputBaseProps {
    onMenuClick?: React.MouseEventHandler<HTMLButtonElement>;
}
export declare const SearchBox: ({ onMenuClick, ...props }: SearchBoxProps) => JSX.Element;
export declare const SearchButton: (props: IconButtonProps) => JSX.Element;
export declare const SearchControl: () => JSX.Element;
interface SearchMenuProps extends MenuProps {
    onWidget: () => void;
}
export declare const SearchMenu: ({ onClose, onWidget, ...props }: SearchMenuProps) => JSX.Element;
export {};
