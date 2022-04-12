import type { SimpleArray, SimpleObject, SimpleTuple, SimpleType } from '../../object';
import type { ArrayJsonSchema } from './ArrayJsonSchema';
import type { BooleanJsonSchema } from './BooleanJsonSchema';
import type { NullableJsonSchema } from './NullableJsonSchema';
import type { NumericJsonSchema } from './NumericJsonSchema';
import type { ObjectJsonSchema } from './ObjectJsonSchema';
import type { StringJsonSchema } from './StringJsonSchema';
import type { TupleJsonSchema } from './TupleJsonSchema';
export declare type SomeJsonSchema = JsonSchema<SimpleType, true>;
export declare type PartialJsonSchema<T> = Partial<JsonSchema<T, true>>;
export declare type JsonSchema<T, _partial extends boolean = false> = (T extends number ? NumericJsonSchema<_partial> : T extends string ? StringJsonSchema<_partial> : T extends boolean ? BooleanJsonSchema : T extends SimpleTuple ? TupleJsonSchema<T, _partial> : T extends SimpleArray ? ArrayJsonSchema<any, _partial> : T extends SimpleObject ? ObjectJsonSchema<T, _partial> : T extends null ? NullableJsonSchema : never) & {
    [keyword: string]: any;
    $id?: string;
    $ref?: string;
    $defs?: {
        [Key in string]?: JsonSchema<SimpleType, true>;
    };
    definitions?: {
        [Key in string]?: JsonSchema<SimpleType, true>;
    };
    allOf?: PartialJsonSchema<T>[];
    anyOf?: PartialJsonSchema<T>[];
    oneOf?: PartialJsonSchema<T>[];
    if?: PartialJsonSchema<T>;
    then?: PartialJsonSchema<T>;
    else?: PartialJsonSchema<T>;
    not?: PartialJsonSchema<T>;
};
