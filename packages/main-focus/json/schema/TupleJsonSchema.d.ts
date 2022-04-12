import type { SimpleTuple } from '../../object';
import type { ArrayType } from '../domain';
import type { JsonSchema } from './JsonSchema';
import type { JsonType } from './JsonType';
import type { Nullable } from './Nullable';
export declare type TupleJsonSchema<T extends SimpleTuple, _partial extends boolean = false> = {
    type: JsonType<ArrayType, _partial>;
    items: {
        [K in keyof T]-?: JsonSchema<T[K]> & Nullable<T[K]>;
    } & {
        length: T['length'];
    };
    minItems: T['length'];
} & ({
    maxItems: T['length'];
} | {
    additionalItems: false;
});
