import React from 'react';
import type { SvgIconProps } from '@mui/material/SvgIcon';
import type { ContainerProps } from '@mui/material/Container';
export declare const atomSidebar: import("recoil").RecoilState<"expanded" | "collapsed">;
export declare const atomTheme: import("recoil").RecoilState<"light" | "dark">;
export interface PaneAction {
    action: any;
    icon: React.FC<SvgIconProps>;
    label: string;
}
interface PaneState {
    contentComponent?: React.FC<any>;
    actions?: Record<string, PaneAction>;
    icon?: React.FC<SvgIconProps>;
    maxWidth?: ContainerProps['maxWidth'];
    reducer?: (state: any, action: any) => any;
    stripComponent?: React.FC<any>;
    title?: string;
}
export declare const atomPane: import("recoil").RecoilState<PaneState>;
export declare const useSetSidebarState: () => import("recoil").SetterOrUpdater<"expanded" | "collapsed">;
export declare const useSetThemeState: () => import("recoil").SetterOrUpdater<"light" | "dark">;
export declare const useSetWidgetState: () => import("recoil").SetterOrUpdater<PaneState>;
export declare const useSidebarState: () => ["expanded" | "collapsed", import("recoil").SetterOrUpdater<"expanded" | "collapsed">];
export declare const useSidebarValue: () => "expanded" | "collapsed";
export declare const useThemetState: () => ["light" | "dark", import("recoil").SetterOrUpdater<"light" | "dark">];
export declare const useThemetValue: () => "light" | "dark";
export declare const useWidgetState: () => [PaneState, import("recoil").SetterOrUpdater<PaneState>];
export declare const useWidgetValue: () => PaneState;
export {};
