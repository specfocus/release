import React from 'react';
export interface AppSidebarConfig {
    drawerWidth: number;
    drawerOpen: boolean;
    lists: Array<{
        subheader?: string;
        items: Array<{
            type: string;
            to: string;
            strict?: boolean;
            icon: React.ReactElement<any, any>;
            primary: string;
            secondary?: string;
            help?: string;
        }>;
    }>;
}
export declare const APP_SIDEBAR = "appSidebar2";
export declare const appSidebar: import("recoil").RecoilState<AppSidebarConfig>;
export declare const useAppSidebar: () => AppSidebarConfig;
