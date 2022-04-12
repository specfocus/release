import type { JsonSchema, PartialJsonSchema } from './JsonSchema';
import type { RequiredMembers, SimpleObject } from '../../object';
import type { ObjectType } from '../domain';
import type { Nullable } from './Nullable';
import type { JsonType } from './JsonType';
export declare interface ObjectJsonSchema<T extends SimpleObject, _partial extends boolean = false> {
    type: JsonType<ObjectType, _partial>;
    required: _partial extends true ? (keyof T)[] : RequiredMembers<T>[];
    additionalProperties?: boolean | JsonSchema<T[string]>;
    unevaluatedProperties?: boolean | JsonSchema<T[string]>;
    properties?: _partial extends true ? Partial<PropertiesSchema<T>> : PropertiesSchema<T>;
    patternProperties?: {
        [Pattern in string]?: JsonSchema<T[string]>;
    };
    propertyNames?: JsonSchema<string>;
    dependencies?: {
        [K in keyof T]?: (keyof T)[] | PartialJsonSchema<T>;
    };
    dependentRequired?: {
        [K in keyof T]?: (keyof T)[];
    };
    dependentSchemas?: {
        [K in keyof T]?: PartialJsonSchema<T>;
    };
    minProperties?: number;
    maxProperties?: number;
}
export declare type PropertiesSchema<T> = {
    [K in keyof T]-?: (JsonSchema<T[K]> & Nullable<T[K]>) | {
        $ref: string;
    };
};
