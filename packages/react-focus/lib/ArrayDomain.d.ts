import { BaseDomain } from './BaseDomain';
import { ArrayType } from './ArraySchema';
export declare const ARRAY_DOMAIN = "ARRAY";
export declare const ARRAY_DOMAINS: readonly ["ARRAY"];
export declare type ArrayDomainType = typeof ARRAY_DOMAINS[number];
export interface ArrayDomain extends BaseDomain {
    maxLength?: number;
    minLength?: number;
    type: ArrayType;
}
