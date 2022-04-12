export declare type Defined<T> = T extends undefined ? never : T;
export declare type Maybe<T> = T | Nil;
export declare type MaybePromise<T> = Promise<T> | T;
export declare type Nil = null | undefined;
export declare type NotNull<T> = T extends null ? never : T;
export declare type Optionals<T> = Extract<T, null | undefined>;
export declare type Preserve<T, U> = T extends U ? U : never;
export declare const isEmpty: (val: unknown) => val is null;
export declare const isNull: (val: unknown) => val is null;
export declare const isNil: (val: unknown) => val is null;
export declare const isSome: <T>(input: T) => input is Exclude<T, null>;
export declare const isUndefined: (val: unknown) => val is undefined;
export declare type If<T, Y, N> = Exclude<T, undefined> extends never ? Y : N;
export declare type _<T> = T extends {} ? {
    [k in keyof T]: T[k];
} : T;
