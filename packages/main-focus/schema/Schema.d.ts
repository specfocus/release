import { SimpleArray, SimpleObject, SimpleTuple, SimpleType } from '../object';
import { ArraySchema } from './ArraySchema';
import { BooleanSchema } from './BooleanSchema';
import { NullableSchema } from './NullableSchema';
import { NumericSchema } from './NumericSchema';
import { ObjectSchema } from './ObjectSchema';
import { StringSchema } from './StringSchema';
import { TupleSchema } from './TupleSchema';
export declare type PartialSchema<T> = Partial<Schema<T, true>>;
export declare type Schema<T, _partial extends boolean = false> = (T extends number ? NumericSchema : T extends string ? StringSchema : T extends boolean ? BooleanSchema : T extends SimpleTuple ? TupleSchema<T> : T extends SimpleArray ? ArraySchema<any> : T extends SimpleObject ? ObjectSchema<T, _partial> : T extends null ? NullableSchema : never) & {
    [keyword: string]: any;
    $id?: string;
    $ref?: string;
    $defs?: {
        [Key in string]?: Schema<SimpleType, true>;
    };
    definitions?: {
        [Key in string]?: Schema<SimpleType, true>;
    };
    allOf?: PartialSchema<T>[];
    anyOf?: PartialSchema<T>[];
    oneOf?: PartialSchema<T>[];
    if?: PartialSchema<T>;
    then?: PartialSchema<T>;
    else?: PartialSchema<T>;
    not?: PartialSchema<T>;
};
