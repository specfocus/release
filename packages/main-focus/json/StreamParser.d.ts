/// <reference types="node" />
import { Parser } from './Parser';
import { Through } from '../through';
export declare class StreamParser extends Parser {
    path: string[];
    map: any;
    stream: Through;
    root?: any;
    header?: any;
    footer?: any;
    count: number;
    setHeaderFooter(key: string, value: string): void;
    constructor(path: string[], map: any);
    transform(chunk: any, encoding: BufferEncoding, callback: (error?: Error, data?: any) => void): void;
    flush(callback: (error?: Error, data?: any) => void): void;
    onValue(value: any): void;
    _onToken: (token: any, value: any) => void;
    onToken(token: any, value: any): void;
    onError(err: any): void;
}
