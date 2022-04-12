import { ObjectSchema } from './schema/ObjectSchema';
export declare const BOOLEAN_DOMAIN_TYPE = "boolean";
export declare const NUMBER_DOMAIN_TYPE = "number";
export declare const STRING_DOMAIN_TYPE = "string";
export declare const DOMAIN_TYPES: readonly ["boolean", "number", "string"];
export declare type Domain = BooleanDomain | NumberDomain | StringDomain;
export declare type DomainType = typeof DOMAIN_TYPES[number];
export declare type DomainValue<T extends number | string> = T | {};
export declare type DomainValues<T extends number | string> = DomainValue<T>[] | {
    [key: number | string]: DomainValue<T>;
};
export interface BooleanDomain {
    type: typeof BOOLEAN_DOMAIN_TYPE;
}
export interface DateDomain extends StringDomain {
    format: 'date' | 'date-time' | 'duration' | 'time';
}
export interface IntegerDomain extends Omit<NumberDomain, 'integer'> {
    integer: true;
}
export interface NumberDomain {
    base?: string;
    integer?: true;
    reference?: string;
    type: typeof NUMBER_DOMAIN_TYPE;
    values?: DomainValues<number>;
}
export interface StringDomain {
    base?: string;
    format?: string;
    mask?: string;
    reference?: string;
    schema?: ObjectSchema;
    type: typeof STRING_DOMAIN_TYPE;
    variant?: string;
    values?: DomainValues<string>;
}
