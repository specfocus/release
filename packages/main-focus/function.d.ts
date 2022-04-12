export declare const FUNCTION = "function";
export declare type Func = (...args: any) => any;
export declare const isFunction: (val: unknown) => val is Func;
export declare type FunctionPropertyNames<T> = {
    [K in keyof T]: T[K] extends Func ? K : never;
}[keyof T];
export declare type FunctionProperties<T> = Pick<T, FunctionPropertyNames<T>>;
export declare type NonFunctionPropertyNames<T> = {
    [K in keyof T]: T[K] extends Func ? never : K;
}[keyof T];
export declare type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>;
