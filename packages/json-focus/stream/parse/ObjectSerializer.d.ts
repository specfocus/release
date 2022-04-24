import { Through } from '@specfocus/main-focus/src/through';
export declare class ObjectSerializer {
    op?: any;
    sep?: any;
    cl?: any;
    indent?: number;
    stream: Through;
    first: boolean;
    anyData: boolean;
    constructor(op?: any, sep?: any, cl?: any, indent?: number);
    transform(data: any, enc: any, cb: any): void;
    flush(cb: any): void;
}
