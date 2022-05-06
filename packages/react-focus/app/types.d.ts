import { ReduxState } from '../features/core';
export declare type ThemeName = 'light' | 'dark';
export interface AppState extends ReduxState {
    theme: ThemeName;
}
declare global {
    interface Window {
        restServer: any;
    }
}
