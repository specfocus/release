import { Record, PaginationPayload, SortPayload } from '../../types';
import { GET_LIST } from '../..';
import { FETCH_END, FETCH_ERROR } from '../fetchActions';
import { NotificationSideEffect, CallbackSideEffect } from '../../sideEffect';
export declare const crudGetAll: (resource: string, sort: SortPayload, filter: object, maxResults: number, callback?: CallbackSideEffect) => CrudGetAllAction;
interface RequestPayload {
    pagination: PaginationPayload;
    sort: SortPayload;
    filter: object;
}
export declare const CRUD_GET_ALL = "CRUD_GET_ALL";
interface CrudGetAllAction {
    readonly type: typeof CRUD_GET_ALL;
    readonly payload: RequestPayload;
    readonly meta: {
        resource: string;
        fetch: typeof GET_LIST;
        onFailure: {
            notification: NotificationSideEffect;
        };
        onSuccess: {
            callback?: CallbackSideEffect;
        };
    };
}
export declare const CRUD_GET_ALL_LOADING = "CRUD_GET_ALL_LOADING";
export interface CrudGetAllLoadingAction {
    readonly type: typeof CRUD_GET_ALL_LOADING;
    readonly payload: RequestPayload;
    readonly meta: {
        resource: string;
    };
}
export declare const CRUD_GET_ALL_FAILURE = "CRUD_GET_ALL_FAILURE";
export interface CrudGetAllFailureAction {
    readonly type: typeof CRUD_GET_ALL_FAILURE;
    readonly error: string | object;
    readonly payload: string;
    readonly requestPayload: RequestPayload;
    readonly meta: {
        resource: string;
        notification: NotificationSideEffect;
        fetchResponse: typeof GET_LIST;
        fetchStatus: typeof FETCH_ERROR;
    };
}
export declare const CRUD_GET_ALL_SUCCESS = "CRUD_GET_ALL_SUCCESS";
export interface CrudGetAllSuccessAction {
    readonly type: typeof CRUD_GET_ALL_SUCCESS;
    readonly payload: {
        data: Record[];
        total: number;
    };
    readonly requestPayload: RequestPayload;
    readonly meta: {
        resource: string;
        callback: any;
        fetchResponse: typeof GET_LIST;
        fetchStatus: typeof FETCH_END;
    };
}
export {};
