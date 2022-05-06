import { BaseDomain } from './BaseDomain';
export declare const STRING_DOMAIN = "STRING";
export declare const STRING_IDENTITY_DOMAIN = "STRING_IDENTITY";
export declare const STRING_DOMAINS: readonly ["STRING", ...string[]];
export declare type StringDomainType = typeof STRING_DOMAINS[number];
export interface StringDomain extends BaseDomain {
    enum?: true | ReadonlyArray<string>;
    format?: string;
    reference?: string;
}
