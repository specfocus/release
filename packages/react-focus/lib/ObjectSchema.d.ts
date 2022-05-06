import { BaseSchema } from './BaseSchema';
import { Schema } from './Schema';
export declare const OBJECT_TYPE = "object";
export declare type ObjectType = typeof OBJECT_TYPE;
export declare type ValueType = bigint | Date | number | string | boolean;
export declare type SimpleType = SimpleObject | [SimpleType, ...SimpleType[]] | SimpleType[] | ValueType | null;
export interface SimpleObject extends Record<string, SimpleType> {
}
export interface ObjectSchema<T = SimpleObject> extends BaseSchema {
    detail?: string[];
    domain?: string;
    fields: Record<keyof T, Schema>;
    head?: string[];
    required?: string[];
    type: ObjectType;
}
export declare const flatten: (obj: SimpleObject, path?: string[]) => SimpleObject;
export declare const isSimpleObject: (val: unknown) => val is SimpleObject;
