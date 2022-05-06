export declare const USER_LOGIN = "USER_LOGIN";
export declare const USER_LOGIN_LOADING = "USER_LOGIN_LOADING";
export declare const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";
export declare const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export interface UserLoginAction {
    readonly type: typeof USER_LOGIN;
    readonly payload: object;
    readonly meta: {
        auth: boolean;
        pathName: string;
    };
}
export declare const userLogin: (payload: object, pathName: string) => UserLoginAction;
export declare const USER_CHECK = "USER_CHECK";
export declare const USER_CHECK_SUCCESS = "USER_CHECK_SUCCESS";
export interface UserCheckAction {
    readonly type: typeof USER_CHECK;
    readonly payload: object;
    readonly meta: {
        auth: boolean;
        pathName: string;
    };
}
export declare const userCheck: (payload: object, pathName: string, routeParams?: object) => UserCheckAction;
export declare const USER_LOGOUT = "USER_LOGOUT";
export interface UserLogoutAction {
    readonly type: typeof USER_LOGOUT;
    readonly payload: {
        redirectTo?: string;
    };
    readonly meta: {
        auth: boolean;
    };
}
/**
 * Action to trigger logout of the current user. The entire redux state will be cleared
 * thanks to the resettableAppReducer in Admin.
 * @see: Admin.js
 * @param redirectTo Path to direct to after logout
 * @return {{type: string, payload: {redirectTo: string}, meta: {auth: boolean}}}
 */
export declare const userLogout: (redirectTo?: string) => UserLogoutAction;
