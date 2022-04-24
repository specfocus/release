import { Maybe, Optionals } from '@specfocus/main-focus/src/maybe';
import BaseSchema, { Config, Defined, Thunk, ToggleDefault } from './base';
import { Message } from './validate/types';
export declare class MixedSchema<TType = any, TConfig extends Config<any, any> = Config> extends BaseSchema<TType, TConfig> {
    default<D extends Maybe<TType>>(def: Thunk<D>): MixedSchema<TType, ToggleDefault<TConfig, D>>;
    concat<IT, IC extends Config<any, any>>(schema: MixedSchema<IT, IC>): MixedSchema<NonNullable<TType> | IT, TConfig & IC>;
    concat<IT, IC extends Config<any, any>>(schema: BaseSchema<IT, IC>): MixedSchema<NonNullable<TType> | Optionals<IT>, TConfig & IC>;
    concat(schema: this): this;
    defined(msg?: Message): MixedSchema<Defined<TType>, TConfig>;
    optional(): MixedSchema<TType | undefined, TConfig>;
    required(msg?: Message): MixedSchema<NonNullable<TType>, TConfig>;
    notRequired(): MixedSchema<Maybe<TType>, TConfig>;
    nullable(msg?: Message): MixedSchema<TType | null, TConfig>;
    nonNullable(): MixedSchema<Exclude<TType, null>, TConfig>;
}
declare const Mixed: typeof MixedSchema;
export default Mixed;
export declare function create<TType = any>(): MixedSchema<TType, Config<import("../any").Any<false, false>, "">>;
export declare namespace create {
    var prototype: MixedSchema<any, any>;
}
