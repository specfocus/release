/// <reference types="node" />
import { TransformOptions } from 'stream';
import { Through } from '../through';
export declare class JsonStream extends Through implements ReadableStream {
    constructor(transform: (chunk: any, encoding: BufferEncoding, callback: (error?: Error, data?: any) => void) => void, flush: (callback: (error?: Error, data?: any) => void) => void, options?: TransformOptions);
    locked: boolean;
    cancel(reason?: any): Promise<void>;
    getReader(): ReadableStreamDefaultReader<any>;
    pipeThrough<T>(transform: ReadableWritablePair<T, any>, options?: StreamPipeOptions): ReadableStream<T>;
    pipeTo(destination: WritableStream<any>, options?: StreamPipeOptions): Promise<void>;
    tee(): [ReadableStream<any>, ReadableStream<any>];
    forEach(callbackfn: (value: any, key: number, parent: ReadableStream<any>) => void, thisArg?: any): void;
}
