import type { IntegerType, NumberType } from '../domain';
import type { JsonType } from './JsonType';
export declare interface NumericJsonSchema<_partial extends boolean = false> {
    type: JsonType<NumberType | IntegerType, _partial>;
    minimum?: number;
    maximum?: number;
    exclusiveMinimum?: number;
    exclusiveMaximum?: number;
    multipleOf?: number;
    format?: string;
}
