/// <reference types="node" />
import { SimpleType } from '@specfocus/main-focus/src/object';
export declare const LEFT_BRACE = 1;
export declare const LEFT_BRACKET = 3;
export declare const VALUE = 113;
export declare const KEY = 114;
export declare const OBJECT = 129;
export declare const ARRAY = 130;
export interface ArrayToken {
    type: 'array';
}
export interface ContinueToken {
    type: 'continue';
}
export interface EntryToken {
    type: 'entry';
    key: string;
    value: SimpleType;
}
export interface ErrorToken {
    type: 'error';
    message: string;
}
export interface ItemToken {
    type: 'item';
    index: number;
    value: SimpleType;
}
export interface ShapeToken {
    type: 'shape';
}
export interface ValueToken {
    type: 'value';
    value: boolean | number | string;
}
export declare type Token = ArrayToken | ContinueToken | EntryToken | ErrorToken | ItemToken | ShapeToken | ValueToken;
export default class Tokenizer {
    static C: Record<string, number>;
    static toknam(code: any): any;
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
    tokenize(data: Uint8Array): Iterable<Token>;
    private appendStringBuf;
    private appendStringChar;
    private charError;
    private numberReviver;
    private onToken;
    private parseError;
    private pop;
    private push;
    private parse;
}
