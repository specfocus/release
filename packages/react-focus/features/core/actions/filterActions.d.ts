export declare const CRUD_SHOW_FILTER = "CRUD_SHOW_FILTER";
export interface ShowFilterAction {
    readonly type: typeof CRUD_SHOW_FILTER;
    readonly payload: {
        field: string;
    };
    readonly meta: {
        resource: string;
    };
}
export declare const showFilter: (resource: string, field: string) => ShowFilterAction;
export declare const CRUD_HIDE_FILTER = "CRUD_HIDE_FILTER";
export interface HideFilterAction {
    readonly type: typeof CRUD_HIDE_FILTER;
    readonly payload: {
        field: string;
    };
    readonly meta: {
        resource: string;
    };
}
export declare const hideFilter: (resource: string, field: string) => HideFilterAction;
export declare const CRUD_SET_FILTER = "CRUD_SET_FILTER";
export interface SetFilterAction {
    readonly type: typeof CRUD_SET_FILTER;
    readonly payload: {
        field: string;
        value: any;
    };
    readonly meta: {
        resource: string;
    };
}
export declare const setFilter: (resource: string, field: string, value: any) => SetFilterAction;
