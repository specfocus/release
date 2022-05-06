import { BaseSchema } from './BaseSchema';
import { BooleanDomainType } from './BooleanDomain';
export declare const BOOLEAN_TYPE = "boolean";
export declare type BooleanType = typeof BOOLEAN_TYPE;
export interface BooleanSchema extends BaseSchema {
    domain?: BooleanDomainType;
    type: BooleanType;
    group?: string;
}
