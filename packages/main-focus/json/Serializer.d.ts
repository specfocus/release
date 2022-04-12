import { JsonStream } from './JsonStream';
export declare class Serializer {
    op?: any;
    sep?: any;
    cl?: any;
    indent?: number;
    stream: JsonStream;
    first: boolean;
    anyData: boolean;
    constructor(op?: any, sep?: any, cl?: any, indent?: number);
    transform(data: any, _: any, cb: any): void;
    flush(cb: any): void;
}
