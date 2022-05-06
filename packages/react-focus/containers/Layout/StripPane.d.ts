import { ContainerProps } from '@mui/material/Container';
import { IconProps } from '@mui/material/Icon';
import React from 'react';
export declare const BACKWARD = "BACKWARD";
export declare const FOREWARD = "FOREWARD";
export declare const PATCH = "NAV_TO";
export declare const useStyles: (props?: any) => import("@mui/styles").ClassNameMap<"title" | "button" | "header" | "content" | "icon" | "toolbar" | "speedDial" | "container" | "divider" | "buttons" | "strip" | "speedDialFav" | "stepper">;
export interface WidgetAction {
    action: any;
    icon: React.FC<IconProps>;
    label: string;
}
export interface StripPaneProps extends Pick<ContainerProps, 'children'> {
    actions: Record<string, WidgetAction>;
    icon: React.FC<IconProps>;
    maxWidth: ContainerProps['maxWidth'];
    reducer: (state: any, action: any) => any;
    sections: Record<string, {
        title: string;
        permisions: string[];
    }>;
    subtitle?: string;
    title: string;
    variant?: 'stepper' | 'tabs' | 'scroller';
}
export default function StripPane({ actions, children, icon: Icon, maxWidth, reducer, sections, subtitle, title, variant, ...props }: StripPaneProps): JSX.Element;
