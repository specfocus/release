import type { JsonSchema, PartialJsonSchema } from './JsonSchema';
import type { SimpleArray } from '../../object';
import type { ArrayType } from '../domain';
import type { JsonType } from './JsonType';
export declare interface ArrayJsonSchema<T extends SimpleArray, _partial extends boolean = false> {
    type: JsonType<ArrayType, _partial>;
    items: JsonSchema<T[0]>;
    contains?: PartialJsonSchema<T[0]>;
    minItems?: number;
    maxItems?: number;
    minContains?: number;
    maxContains?: number;
    uniqueItems?: true;
    additionalItems?: never;
}
