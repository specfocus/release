import { ContainerProps } from '@mui/material/Container';
import { IconProps } from '@mui/material/Icon';
import React from 'react';
export interface AsideProps extends ContainerProps {
    title: string;
    onClose?: () => void;
}
export declare const useStyles: (props?: any) => import("@mui/styles").ClassNameMap<"title" | "button" | "header" | "content" | "icon" | "toolbar" | "speedDial" | "container" | "divider" | "buttons" | "speedDialFav">;
export interface AsideAction {
    action: any;
    icon: React.FC<IconProps>;
    label: string;
}
export interface AsideProps extends Pick<ContainerProps, 'children' | 'maxWidth'> {
}
declare const Aside: React.FC<AsideProps>;
export default Aside;
