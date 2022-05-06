import * as DOMAINS from './domains';
import * as STRING_DOMAINS from './domains/string';
import { BaseDomain } from './BaseDomain';
import { Schema } from './Schema';
import { StringDomain } from './StringDomain';
import { StringType } from './StringSchema';
export declare const ENUM_DOMAIN = "ENUM";
export declare const ENUM_DOMAINS: readonly ["ENUM"];
export declare type EnumDomainType = typeof ENUM_DOMAINS[number];
export interface Enum extends BaseDomain {
    type: StringType;
    key: keyof typeof STRING_DOMAINS;
    value: keyof typeof DOMAINS;
}
declare type StringDomainType = keyof typeof STRING_DOMAINS;
export interface EnumDomain<T> extends StringDomain {
    canFreeSolo?: boolean;
    canAutocomplete?: boolean;
    valueDomain: StringDomainType;
    optionSchema?: Schema;
    getOptionIcon?: (option: T) => string;
    getOptionLabel?: (option: T) => string;
    getOptionSelected?: (option: T, value: T) => boolean;
    getOptionValue?: (option: T) => any;
    getOptions: (filter?: any) => Promise<Array<T>>;
    getOptionText?: (option: T, t: (t: string) => string) => string;
    isOptionEqualToValue: (option: T, value: T) => boolean;
}
export {};
