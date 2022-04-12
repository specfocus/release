export declare function getAsyncIterator<T>(asyncIterable: AsyncIterable<T>): AsyncIterator<T>;
export declare function isAsyncIterable<T>(input: unknown): input is AsyncIterable<T>;
export declare type PushPullAsyncIterableIterator<T> = {
    pushValue: (value: T) => void;
    asyncIterableIterator: AsyncIterableIterator<T>;
};
/**
 * makePushPullAsyncIterableIterator
 *
 * The iterable will publish values until return or throw is called.
 * Afterwards it is in the completed state and cannot be used for publishing any further values.
 * It will handle back-pressure and keep pushed values until they are consumed by a source.
 */
export declare function makePushPullAsyncIterableIterator<T>(): PushPullAsyncIterableIterator<T>;
export interface Sink<TValue = unknown, TError = unknown> {
    next: (value: TValue) => void;
    error: (error: TError) => void;
    complete: () => void;
}
export declare const makeAsyncIterableIteratorFromSink: <TValue = unknown, TError = unknown>(make: (sink: Sink<TValue, TError>) => () => void) => AsyncIterableIterator<TValue>;
export declare function applyAsyncIterableIteratorToSink<TValue = unknown, TError = unknown>(asyncIterableIterator: AsyncIterableIterator<TValue>, sink: Sink<TValue, TError>): () => void;
