import { BaseDomain } from './BaseDomain';
import { DateDomain } from './DateDomain';
import { IntegerDomain, NumberDomain } from './NumberDomain';
import { NumberSchema } from './NumberSchema';
import { ObjectDomain } from './ObjectDomain';
import { ObjectSchema } from './ObjectSchema';
import { Schema } from './Schema';
import { StringDomain } from './StringDomain';
import { StringSchema } from './StringSchema';
export interface DomainManager {
    query(schema: NumberSchema): IntegerDomain | NumberDomain | null;
    query(schema: ObjectSchema): ObjectDomain | null;
    query(schema: StringSchema): DateDomain | StringDomain | null;
    query(schema: Schema): NumberDomain | ObjectDomain | StringDomain | null;
    store(name: string, domain: BaseDomain): void;
}
export declare class StaticDomainManager implements DomainManager {
    domains: Record<string, BaseDomain>;
    constructor(domains: Record<string, BaseDomain>);
    static readonly instance: DomainManager;
    query(schema: NumberSchema): IntegerDomain | NumberDomain | null;
    query(schema: ObjectSchema): ObjectDomain | null;
    query(schema: StringSchema): DateDomain | StringDomain | null;
    store<TDomain extends BaseDomain>(name: string, domain: TDomain): void;
}
