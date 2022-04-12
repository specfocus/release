/**
 * Based on Kendo UI Core expression code <https://github.com/telerik/kendo-ui-core#license-information>
 */
export declare class Cache {
    _maxSize: number;
    _values: Record<string, any>;
    _size: number;
    constructor(maxSize: number);
    clear: () => void;
    get: (key: string) => any;
    set: (key: string, value: any) => any;
}
declare type Callback = (part: string, isBracket: boolean, isArray: boolean, idx: number, parts: string[]) => void;
export declare const setter: (path: string) => any;
export declare const getter: (path: string, safe?: boolean) => any;
export declare const join: (segments: string[]) => string;
export declare const forEach: (path: string | string[], cb: Callback, thisArg?: any) => void;
export declare const normalizePath: (path: string) => any;
export declare const split: (path: string) => string[];
export {};
