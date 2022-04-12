/// <reference types="node" />
export declare const LEFT_BRACE = 1;
export declare const LEFT_BRACKET = 3;
export declare const VALUE = 113;
export declare const KEY = 114;
export declare const OBJECT = 129;
export declare const ARRAY = 130;
export declare class Parser {
    static C: Record<string, number>;
    tState: number;
    value: any;
    string: any;
    stringBuffer: Buffer;
    stringBufferOffset: number;
    unicode: any;
    highSurrogate: any;
    key: any;
    mode: any;
    stack: any;
    state: any;
    bytes_remaining: number;
    bytes_in_sequence: number;
    temp_buffs: any;
    offset: number;
    constructor();
    static toknam(code: any): any;
    charError(buffer: any, i: any): void;
    appendStringChar(char: any): void;
    appendStringBuf(buf: any, start?: number, end?: number): void;
    emit(value: any): void;
    onError(err: any): void;
    onToken(token: any, value: any): void;
    onValue(value: any): void;
    parseError(token: any, value: any): void;
    pop(): void;
    push(): void;
    numberReviver(text: any, buffer: any, i: any): any;
    write(buffer: any): any;
}
