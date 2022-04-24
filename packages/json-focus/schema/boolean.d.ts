import { Maybe } from '@specfocus/main-focus/src/maybe';
import { AnyObject } from '@specfocus/main-focus/src/object';
import BaseSchema, { Config, Defined, NotNull, Thunk, ToggleDefault } from './base';
import type { JsonType } from './json';
import { Message } from './validate/types';
export declare const BOOLEAN_TYPE = "boolean";
export declare type BooleanType = typeof BOOLEAN_TYPE;
export declare interface BooleanJsonSchema<_partial extends boolean = false> {
    type: JsonType<BooleanType, _partial>;
}
export declare function create(): BooleanSchema;
export declare function create<T extends boolean, TContext = AnyObject>(): BooleanSchema<T | undefined, Config<TContext>>;
export declare namespace create {
    var prototype: BooleanSchema<any, any>;
}
export default class BooleanSchema<TType extends Maybe<boolean> = boolean | undefined, TConfig extends Config<any, any> = Config> extends BaseSchema<TType, TConfig> {
    constructor();
    protected _typeCheck(v: any): v is NonNullable<TType>;
    isTrue(message?: Message<any>): BooleanSchema<TType | true, TConfig>;
    isFalse(message?: Message<any>): BooleanSchema<TType | false, TConfig>;
}
export default interface BooleanSchema<TType extends Maybe<boolean>, TConfig extends Config<any, any> = Config> extends BaseSchema<TType, TConfig> {
    default<D extends Maybe<TType>>(def: Thunk<D>): BooleanSchema<TType, ToggleDefault<TConfig, D>>;
    concat<TOther extends BooleanSchema<any, any>>(schema: TOther): TOther;
    defined(msg?: Message): BooleanSchema<Defined<TType>, TConfig>;
    optional(): BooleanSchema<TType | undefined, TConfig>;
    required(msg?: Message): BooleanSchema<NonNullable<TType>, TConfig>;
    notRequired(): BooleanSchema<Maybe<TType>, TConfig>;
    nullable(msg?: Message): BooleanSchema<TType | null, TConfig>;
    nonNullable(): BooleanSchema<NotNull<TType>, TConfig>;
}
