import { ContainerProps } from '@mui/material/Container';
import { IconProps } from '@mui/material/Icon';
import React from 'react';
import { FormProps } from 'react-final-form';
import { SimpleObject } from '../../lib/ObjectSchema';
export declare function panelProps(index: any): {
    role: string;
    key: string;
    id: string;
    'aria-labelledby': string;
};
export declare const useStyles: (props?: any) => import("@mui/styles").ClassNameMap<"title" | "button" | "icon" | "toolbar" | "speedDial" | "container" | "divider" | "buttons" | "strip" | "speedDialFav" | "stepper">;
export interface WidgetAction {
    action: any;
    icon: React.FC<IconProps>;
    label: string;
}
export interface FormPanelProps extends Pick<ContainerProps, 'children'> {
    activeIndex: number;
    activeChange: (value: number) => void;
    actions: Record<string, WidgetAction>;
    formProps: FormProps<SimpleObject, SimpleObject>;
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
export default function FormPanel({ activeIndex, activeChange, actions, children, formProps: { render: renderForm, ...formProps }, icon: Icon, maxWidth, reducer, sections, subtitle, title, variant, ...props }: FormPanelProps): JSX.Element;
