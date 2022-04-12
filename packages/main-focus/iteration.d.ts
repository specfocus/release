export declare const join: <T>(promises: Promise<T>[]) => Promise<T[]>;
export declare const unique: <T>(val: T, index: number, arr: T[]) => boolean;
export declare const distinct: <T>(arr: T[]) => T[];
export declare const first: <T>(iterable: Promise<AsyncIterable<T> | AsyncIterator<T, any, undefined>>) => Promise<T>;
export declare const last: <T>(iterable: Promise<AsyncIterable<T> | AsyncIterator<T, any, undefined>>) => Promise<T>;
export declare const skip: <T>(iterable: Promise<AsyncIterable<T> | AsyncIterator<T, any, undefined>>, count: number) => Promise<AsyncIteration<T>>;
export declare class AsyncIteration<T> {
    constructor(asyncIterable: AsyncIterable<T> | AsyncIterator<T>);
    asyncIterator: AsyncIterator<T>;
    first(): Promise<T | undefined>;
    last(): Promise<T | undefined>;
    next(): Promise<T | undefined>;
    skip(count: number): Promise<AsyncIteration<T>>;
}
