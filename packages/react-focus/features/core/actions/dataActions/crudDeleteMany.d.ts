import { Identifier, Record } from '../../types';
import { DELETE_MANY } from '../..';
import { FETCH_END, FETCH_ERROR } from '../fetchActions';
import { NotificationSideEffect, RefreshSideEffect } from '../../sideEffect';
export declare const crudDeleteMany: (resource: string, ids: Identifier[], basePath: string, refresh?: RefreshSideEffect) => CrudDeleteManyAction;
interface RequestPayload {
    ids: Identifier[];
}
export declare const CRUD_DELETE_MANY = "CRUD_DELETE_MANY";
export interface CrudDeleteManyAction {
    readonly type: typeof CRUD_DELETE_MANY;
    readonly payload: RequestPayload;
    readonly meta: {
        resource: string;
        fetch: typeof DELETE_MANY;
        onSuccess: {
            notification: NotificationSideEffect;
            refresh: RefreshSideEffect;
            basePath: string;
            unselectAll: boolean;
        };
        onFailure: {
            notification: NotificationSideEffect;
        };
    };
}
export declare const CRUD_DELETE_MANY_LOADING = "CRUD_DELETE_MANY_LOADING";
export interface CrudDeleteManyLoadingAction {
    readonly type: typeof CRUD_DELETE_MANY_LOADING;
    readonly payload: RequestPayload;
    readonly meta: {
        resource: string;
    };
}
export declare const CRUD_DELETE_MANY_FAILURE = "CRUD_DELETE_MANY_FAILURE";
export interface CrudDeleteMAnyFailureAction {
    readonly type: typeof CRUD_DELETE_MANY_FAILURE;
    readonly error: string | object;
    readonly payload: string;
    readonly requestPayload: RequestPayload;
    readonly meta: {
        resource: string;
        notification: NotificationSideEffect;
        fetchResponse: typeof DELETE_MANY;
        fetchStatus: typeof FETCH_ERROR;
    };
}
export declare const CRUD_DELETE_MANY_SUCCESS = "CRUD_DELETE_MANY_SUCCESS";
export interface CrudDeleteManySuccessAction {
    readonly type: typeof CRUD_DELETE_MANY_SUCCESS;
    readonly payload: {
        data: Record[];
    };
    readonly requestPayload: RequestPayload;
    readonly meta: {
        resource: string;
        notification: NotificationSideEffect;
        refresh: RefreshSideEffect;
        basePath: string;
        unselectAll: boolean;
        fetchResponse: typeof DELETE_MANY;
        fetchStatus: typeof FETCH_END;
    };
}
export {};
