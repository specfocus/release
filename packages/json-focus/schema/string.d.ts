import { Maybe, Optionals } from '@specfocus/main-focus/src/maybe';
import { AnyObject } from '@specfocus/main-focus/src/object';
import BaseSchema, { AnyConfig, Config, Defined, MergeConfig, NotNull, SetFlag, Thunk, ToggleDefault } from './base';
import type { JsonType } from './json';
import type Reference from './reference';
import { MixedLocale } from './validate/locale';
import { Message } from './validate/types';
export declare const STRING_TYPE = "string";
export declare type StringType = typeof STRING_TYPE;
export declare interface StringJsonSchema<_partial extends boolean = false> {
    type: JsonType<StringType, _partial>;
    minLength?: number;
    maxLength?: number;
    pattern?: string;
    format?: string;
}
export declare type MatchOptions = {
    excludeEmptyString?: boolean;
    message: Message<{
        regex: RegExp;
    }>;
    name?: string;
};
declare function create(): StringSchema;
declare function create<T extends string, TContext = AnyObject>(): StringSchema<T | undefined, Config<TContext>>;
declare namespace create {
    var prototype: StringSchema<any, any>;
}
export { create };
export default class StringSchema<TType extends Maybe<string> = string | undefined, TConfig extends AnyConfig = Config> extends BaseSchema<TType, TConfig> {
    constructor();
    protected _typeCheck(value: any): value is NonNullable<TType>;
    protected _isPresent(value: any): boolean;
    length(length: number | Reference<number>, message?: Message<{
        length: number;
    }>): this;
    min(min: number | Reference<number>, message?: Message<{
        min: number;
    }>): this;
    max(max: number | Reference<number>, message?: Message<{
        max: number;
    }>): this;
    matches(regex: RegExp, options?: MatchOptions | MatchOptions['message']): this;
    email(message?: Message<{
        regex: RegExp;
    }>): this;
    url(message?: Message<{
        regex: RegExp;
    }>): this;
    uuid(message?: Message<{
        regex: RegExp;
    }>): this;
    ensure(): StringSchema<NonNullable<TType>>;
    trim(message?: Message<any>): this;
    lowercase(message?: Message<any>): this;
    uppercase(message?: Message<any>): this;
}
export default interface StringSchema<TType extends Maybe<string> = string | undefined, TConfig extends AnyConfig = Config> extends BaseSchema<TType, TConfig> {
    default<D extends Maybe<TType>>(def: Thunk<D>): StringSchema<TType, ToggleDefault<TConfig, D>>;
    oneOf<U extends TType>(arrayOfValues: ReadonlyArray<U | Reference>, message?: MixedLocale['oneOf']): StringSchema<U | Optionals<TType>, TConfig>;
    concat<T extends Maybe<string>, C extends AnyConfig>(schema: StringSchema<T, C>): StringSchema<NonNullable<TType> | T, MergeConfig<TConfig, C>>;
    concat(schema: this): this;
    defined(msg?: Message): StringSchema<Defined<TType>, TConfig>;
    optional(): StringSchema<TType | undefined, TConfig>;
    required(msg?: Message): StringSchema<NonNullable<TType>, TConfig>;
    notRequired(): StringSchema<Maybe<TType>, TConfig>;
    nullable(msg?: Message<any>): StringSchema<TType | null, TConfig>;
    nonNullable(): StringSchema<NotNull<TType>, TConfig>;
    strip(): StringSchema<TType, SetFlag<TConfig, 's'>>;
}
