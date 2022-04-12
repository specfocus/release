export * from './binary';
export * from './unary';
import { Nil } from '../maybe';
import { Integer, NegativeInteger, NegativeNumber, NonNegativeInteger, NonNegativeNumber, NonPositiveInteger, NonPositiveNumber, NumberOrString, PositiveInteger, PositiveNumber } from '../number';
import { AbsoluteUrl, EmailAddress, Guid, LowerCase, UpperCase } from '../string';
declare type GlobalDomainName = keyof GlobalDomainRuleMap;
interface GlobalDomainRule<T> {
    name: GlobalDomainName;
    test: (val: unknown) => val is T;
}
declare class GlobalDomainRuleMap {
    AbsoluteUrl: GlobalDomainRule<AbsoluteUrl>;
    Array: GlobalDomainRule<unknown[]>;
    Boolean: GlobalDomainRule<boolean>;
    EmailAddress: GlobalDomainRule<EmailAddress>;
    Guid: GlobalDomainRule<Guid>;
    Intenger: GlobalDomainRule<Integer>;
    LowerCase: GlobalDomainRule<LowerCase>;
    NaN: GlobalDomainRule<number>;
    NegativeInteger: GlobalDomainRule<NegativeInteger>;
    NegativeNumber: GlobalDomainRule<NegativeNumber>;
    Nil: GlobalDomainRule<Nil>;
    NonNevativeInteger: GlobalDomainRule<NonNegativeInteger>;
    NonNevativeNumber: GlobalDomainRule<NonNegativeNumber>;
    NonPositiveInteger: GlobalDomainRule<NonPositiveInteger>;
    NonPositiveNumber: GlobalDomainRule<NonPositiveNumber>;
    Null: GlobalDomainRule<null>;
    Number: GlobalDomainRule<number>;
    NumberOrString: GlobalDomainRule<NumberOrString>;
    PositiveInteger: GlobalDomainRule<PositiveInteger>;
    PositiveNumber: GlobalDomainRule<PositiveNumber>;
    String: GlobalDomainRule<string>;
    UpperCase: GlobalDomainRule<UpperCase>;
}
export declare function ruleFor<T>(ruleFunction: (obj: GlobalDomainRuleMap) => GlobalDomainRule<T>): GlobalDomainRule<T>;
export declare class GlobalDomain {
    static has: (key: string) => boolean;
    static test: (name: GlobalDomainName, val: unknown) => boolean;
    static map: Readonly<GlobalDomainRuleMap>;
    static all: readonly (GlobalDomainRule<string> | GlobalDomainRule<unknown[]> | GlobalDomainRule<boolean> | GlobalDomainRule<number> | GlobalDomainRule<null> | GlobalDomainRule<NumberOrString>)[];
}
