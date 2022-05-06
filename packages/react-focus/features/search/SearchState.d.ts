/// <reference types="react" />
export interface SearchResult {
    primary: string;
    secondary?: string;
    details?: string | JSX.Element | (() => JSX.Element);
}
export declare const appSearchHistory: import("recoil").RecoilState<string[]>;
export declare const appSearchInput: import("recoil").RecoilState<string>;
export declare const appSearchResults: import("recoil").RecoilState<Record<string, SearchResult[]>>;
