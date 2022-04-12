/// <reference types="node" />
import { Transform } from 'readable-stream';
import type { TransformOptions } from 'readable-stream';
export declare class Through extends Transform {
    root: any;
    constructor(transform: (chunk: any, encoding: BufferEncoding, callback: (error?: Error, data?: any) => void) => void, flush: (callback: (error?: Error, data?: any) => void) => void, options?: TransformOptions);
    destroy(...args: any[]): void;
    emit(...args: any[]): void;
    push(...args: any[]): void;
}
