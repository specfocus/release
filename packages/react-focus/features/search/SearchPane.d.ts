import { IconButtonProps } from '@mui/material/IconButton';
import { InputBaseProps } from '@mui/material/InputBase';
import { MenuProps } from '@mui/material/Menu';
import React from 'react';
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
interface Props {
}
export declare const SearchPane: ({}: Props) => JSX.Element;
export default function useSearchPane(): {
    isOpen: boolean;
    close: () => void;
    open: () => void;
};
export {};
