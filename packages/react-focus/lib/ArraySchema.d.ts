import { BaseSchema } from './BaseSchema';
import { Schema } from './Schema';
export declare const ARRAY_TYPE = "array";
export declare type ArrayType = typeof ARRAY_TYPE;
export interface ArraySchema extends BaseSchema {
    type: ArrayType;
    items: Schema;
}
