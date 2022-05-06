import { IconButtonProps } from '@mui/material/IconButton';
import { MenuProps } from '@mui/material/Menu';
import React from 'react';
export declare type Density = 'standard' | 'compact' | 'comfortable';
interface RowDensityButtonProps extends IconButtonProps {
    toggle: React.MouseEventHandler<HTMLButtonElement>;
    value: Density;
}
export declare const RowDensityButton: ({ toggle, value, ...props }: RowDensityButtonProps) => JSX.Element;
interface RowDensityMenuProps extends MenuProps {
    change: (value: Density) => void;
    close: () => void;
    value: Density;
}
export declare const RowDensityMenu: ({ change, close, value, ...props }: RowDensityMenuProps) => JSX.Element;
export default function useRowDensity(): {
    rowDensity: Density;
    rowDensityAnchorEl: any;
    rowDensityChange: React.Dispatch<React.SetStateAction<Density>>;
    rowDensityClick: (event: any) => void;
    rowDensityOpen: boolean;
    rowDensityToggle: React.DispatchWithoutAction;
};
export {};
