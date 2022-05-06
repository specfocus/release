import { BaseDomain } from './BaseDomain';
export declare const NUMBER_DOMAIN = "NUMBER";
export declare const NUMBER_DOMAINS: readonly ["NUMBER"];
export declare type NumberDomainType = typeof NUMBER_DOMAINS[number];
export interface NumberDomain extends BaseDomain {
    integer?: true;
    reference?: string;
}
export interface IntegerDomain extends Omit<NumberDomain, 'integer'> {
    integer: true;
}
