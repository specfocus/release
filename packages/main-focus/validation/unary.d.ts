/// <reference types="node" />
import { Stream } from 'stream';
import { NumberOrString } from "../number";
export declare type ValidationTest = (val: unknown) => boolean;
export declare const isFunction: (val: unknown) => val is Function;
export declare const isLeapYear: (val: unknown) => val is number;
export declare const isNaN: (val: unknown) => val is number;
export declare const isNumberOrString: (val: unknown) => val is NumberOrString;
export declare const isPrimitive: (val: unknown) => boolean;
export declare const isStream: (val: any) => val is Stream;
export declare const isSymbol: (val: unknown) => val is symbol;
export declare const isUndefined: (val: unknown) => val is undefined;
