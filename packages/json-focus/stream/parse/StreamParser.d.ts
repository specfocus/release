/// <reference types="node" />
import Tokenizer, { Token } from '../input/tokenizer';
import { Through } from '@specfocus/main-focus/src/through';
export declare class StreamParser extends Tokenizer {
    path: string[];
    map: any;
    stream: Through;
    root?: any;
    header?: any;
    footer?: any;
    count: number;
    setHeaderFooter(key: string, value: string): void;
    constructor(path: string[], map: any);
    transform(chunk: string | Buffer, encoding: BufferEncoding, callback: (error?: Error, data?: Token) => void): void;
    flush(callback: (error?: Error, data?: Token) => void): void;
    onValue(value: any): void;
    onError(err: any): void;
}
