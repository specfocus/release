import { BaseDomain } from './BaseDomain';
import { BOOLEAN_TYPE } from './BooleanSchema';
export declare const BOOLEAN_DOMAIN = "BOOLEAN";
export declare const BOOLEAN_XOR_DOMAIN = "XOR";
export declare const BOOLEAN_DOMAINS: readonly ["BOOLEAN", "XOR"];
export declare type BooleanDomainType = typeof BOOLEAN_DOMAINS[number];
export interface BooleanDomain extends BaseDomain {
    type: typeof BOOLEAN_TYPE;
}
