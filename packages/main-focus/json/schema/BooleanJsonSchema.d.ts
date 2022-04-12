import type { BooleanType } from '../domain';
import type { JsonType } from './JsonType';
export declare interface BooleanJsonSchema<_partial extends boolean = false> {
    type: JsonType<BooleanType, _partial>;
}
