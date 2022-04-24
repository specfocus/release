import type { Any, Array as SimpleArray, Shape, Tuple } from '../any';
import type { ArrayJsonSchema } from './array';
import type { BooleanJsonSchema } from './boolean';
import { NullableJsonSchema } from './nullable';
import type { NumberJsonSchema } from './number';
import type { ObjectJsonSchema } from './object';
import type { StringJsonSchema } from './string';
import type { TupleJsonSchema } from './tuple';
export declare const TYPES: readonly ["array", "boolean", "integer", "null", "number", string[], "string", string[], "object"];
export declare type Type = typeof TYPES[number];
export declare type JsonType<T extends string, _partial extends boolean> = _partial extends true ? T | undefined : T;
export declare type SomeJsonSchema = JsonSchema<Any, true>;
export declare type JsonSchema<T, _partial extends boolean = false> = (T extends number ? NumberJsonSchema<_partial> : T extends string ? StringJsonSchema<_partial> : T extends boolean ? BooleanJsonSchema : T extends Tuple ? TupleJsonSchema<T, _partial> : T extends SimpleArray ? ArrayJsonSchema<any, _partial> : T extends Shape ? ObjectJsonSchema<T, _partial> : T extends null ? NullableJsonSchema : never) & {
    [keyword: string]: any;
    $id?: string;
    $ref?: string;
    $defs?: {
        [Key in string]?: JsonSchema<Any, true>;
    };
    definitions?: {
        [Key in string]?: JsonSchema<Any, true>;
    };
    allOf?: Partial<JsonSchema<T, true>>[];
    anyOf?: Partial<JsonSchema<T, true>>[];
    oneOf?: Partial<JsonSchema<T, true>>[];
    if?: Partial<JsonSchema<T, true>>;
    then?: Partial<JsonSchema<T, true>>;
    else?: Partial<JsonSchema<T, true>>;
    not?: Partial<JsonSchema<T, true>>;
};
