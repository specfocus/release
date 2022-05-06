export declare const FETCH_START = "FETCH_START";
export interface FetchStartAction {
    readonly type: typeof FETCH_START;
}
export declare const fetchStart: () => FetchStartAction;
export declare const FETCH_END = "FETCH_END";
export interface FetchEndAction {
    readonly type: typeof FETCH_END;
}
export declare const fetchEnd: () => FetchEndAction;
export declare const FETCH_ERROR = "FETCH_ERROR";
export interface FetchErrorAction {
    readonly type: typeof FETCH_ERROR;
}
export declare const fetchError: () => FetchErrorAction;
export declare const FETCH_CANCEL = "FETCH_CANCEL";
export interface FetchCancelAction {
    readonly type: typeof FETCH_CANCEL;
}
export declare const fetchCancel: () => FetchCancelAction;
