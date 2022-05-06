import { ActionSchema } from './ActionSchema';
import { BaseSchema } from './BaseSchema';
import { StringDomain, StringDomainType } from './StringDomain';
export declare const STRING_TYPE = "string";
export declare type StringType = typeof STRING_TYPE;
export interface StringSchema extends BaseSchema<StringDomain> {
    action?: ActionSchema;
    domain?: StringDomainType;
    type: StringType;
}
