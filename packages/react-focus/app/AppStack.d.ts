import { SearchResult } from '../features/search/SearchState';
import { SimpleType } from '../lib/ObjectSchema';
export declare type AppAction = string | {
    type: string;
    [key: string]: SimpleType;
};
export interface AppFrame {
    search?: (term: string) => Promise<AsyncIterator<SearchResult>>;
    handle?: (action: AppAction) => AppAction | null;
}
export declare type AppStack = Record<string, AppFrame>;
export declare const APP_STACK = "appStack";
export declare const appStack: import("recoil").RecoilState<AppStack>;
export declare const useAppStack: () => {
    pop: (key: string) => void;
    push: (key: string, config: AppFrame) => void;
    trigger: (action: AppAction) => Promise<void>;
};
