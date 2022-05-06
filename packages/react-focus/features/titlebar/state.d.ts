import React from 'react';
export interface TitlebarConfig {
    title: string;
    tools: React.ReactNode[];
}
export declare const atomTitlebar: import("recoil").RecoilState<TitlebarConfig>;
export declare const useTitlebar: (config: TitlebarConfig) => void;
