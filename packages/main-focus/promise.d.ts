/// <reference types="node" />
export declare const isPromise: <T>(val: unknown) => val is Promise<T>;
export declare const isPending: <T>(promise: Promise<T>) => boolean;
export declare const getTruthy: (promise: Promise<boolean>) => boolean | undefined;
export declare const getResult: <T>(promise: Promise<T>) => T;
export declare const promiseWithTimeout: <T>(promise: Promise<T>) => [Promise<void | T>, NodeJS.Timeout];
