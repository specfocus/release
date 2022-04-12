import type { StringType } from '../domain';
import type { JsonType } from './JsonType';
export declare interface StringJsonSchema<_partial extends boolean = false> {
    type: JsonType<StringType, _partial>;
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    format?: string;
}
