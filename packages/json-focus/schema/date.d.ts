import { Maybe } from '@specfocus/main-focus/src/maybe';
import { AnyObject } from '@specfocus/main-focus/src/object';
import BaseSchema, { Config, Defined, NotNull, Thunk, ToggleDefault } from './base';
import Ref from './reference';
import type { Message } from './validate/types';
export declare function create(): DateSchema;
export declare function create<T extends Date, TContext = AnyObject>(): DateSchema<T | undefined, Config<TContext>>;
export declare namespace create {
    var prototype: DateSchema<any, any>;
    var INVALID_DATE: Date;
}
export default class DateSchema<TType extends Maybe<Date> = Date | undefined, TConfig extends Config<any, any> = Config> extends BaseSchema<TType, TConfig> {
    static INVALID_DATE: Date;
    constructor();
    protected _typeCheck(v: any): v is NonNullable<TType>;
    private prepareParam;
    min(min: unknown | Ref<Date>, message?: Message<{
        min: string | Date;
    }>): this;
    max(max: unknown | Ref, message?: Message<{
        max: string | Date;
    }>): this;
}
export default interface DateSchema<TType extends Maybe<Date>, TConfig extends Config<any, any> = Config> extends BaseSchema<TType, TConfig> {
    default<D extends Maybe<TType>>(def: Thunk<D>): DateSchema<TType, ToggleDefault<TConfig, D>>;
    concat<TOther extends DateSchema<any, any>>(schema: TOther): TOther;
    defined(msg?: Message): DateSchema<Defined<TType>, TConfig>;
    optional(): DateSchema<TType | undefined, TConfig>;
    required(msg?: Message): DateSchema<NonNullable<TType>, TConfig>;
    notRequired(): DateSchema<Maybe<TType>, TConfig>;
    nullable(msg?: Message): DateSchema<TType | null, TConfig>;
    nonNullable(): DateSchema<NotNull<TType>, TConfig>;
}
