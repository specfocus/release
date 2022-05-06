export interface CoreState {
    notifications: any[];
    ui: {
        sidebarOpen: boolean;
    };
}
export declare const atomCoreState: import("recoil").RecoilState<CoreState>;
export declare const selectorNotifications: import("recoil").RecoilValueReadOnly<Notification[]>;
export declare const selectorUI: import("recoil").RecoilValueReadOnly<{
    sidebarOpen: boolean;
}>;
