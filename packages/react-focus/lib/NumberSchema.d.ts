import { BaseSchema } from './BaseSchema';
import { NumberDomain, NumberDomainType } from './NumberDomain';
export declare const NUMBER_TYPE = "number";
export declare type NumberType = typeof NUMBER_TYPE;
export interface NumberSchema extends BaseSchema<NumberDomain> {
    domain?: NumberDomainType;
    type: NumberType;
}
