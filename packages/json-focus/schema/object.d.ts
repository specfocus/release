import { Maybe, Optionals, Preserve } from '@specfocus/main-focus/src/maybe';
import type { Shape } from '../any';
import BaseSchema, { AnySchema, Config, Defined, NotNull, ResolveFlags, SchemaObjectDescription, SchemaSpec, Thunk, ToggleDefault, TypedSchema, _ } from './base';
import type { JsonSchema, JsonType } from './json';
import type Lazy from './lazy';
import type { Nullable } from './nullable';
import type Reference from './reference';
import type { RequiredMembers } from './required';
import { Callback, InternalOptions, Message } from './validate/types';
import { ResolveOptions } from './condition';
import { MakePartial } from './partial';
export declare const OBJECT_TYPE = "object";
export declare type ObjectType = typeof OBJECT_TYPE;
export declare interface ObjectJsonSchema<T extends Shape, _partial extends boolean = false> {
    type: JsonType<ObjectType, _partial>;
    required: _partial extends true ? (keyof T)[] : RequiredMembers<T>[];
    additionalProperties?: boolean | JsonSchema<T[string]>;
    unevaluatedProperties?: boolean | JsonSchema<T[string]>;
    properties?: _partial extends true ? Partial<PropertiesSchema<T>> : PropertiesSchema<T>;
    patternProperties?: {
        [Pattern in string]?: JsonSchema<T[string]>;
    };
    propertyNames?: JsonSchema<string>;
    dependencies?: {
        [K in keyof T]?: (keyof T)[] | Partial<JsonSchema<T, true>>;
    };
    dependentRequired?: {
        [K in keyof T]?: (keyof T)[];
    };
    dependentSchemas?: {
        [K in keyof T]?: Partial<JsonSchema<T, true>>;
    };
    minProperties?: number;
    maxProperties?: number;
}
export declare type Assign<T extends {}, U extends {}> = {
    [P in keyof T]: P extends keyof U ? U[P] : T[P];
} & U;
export declare type AnyObject = Record<string, any>;
export declare type ObjectShape = Record<string, AnySchema | Reference | Lazy<any, any>>;
export declare type PropertiesSchema<T> = {
    [K in keyof T]-?: (JsonSchema<T[K]> & Nullable<T[K]>) | {
        $ref: string;
    };
};
declare type FieldType<T extends AnySchema | Reference | Lazy<any, any>, F extends '__type' | '__outputType'> = T extends TypedSchema ? T[F] : T extends Reference ? unknown : never;
export declare type DefaultFromShape<Shape extends ObjectShape> = {
    [K in keyof Shape]: Shape[K] extends ObjectSchema<infer TShape> ? DefaultFromShape<TShape> : Shape[K] extends {
        getDefault: () => infer D;
    } ? Preserve<D, undefined> extends never ? Defined<D> : Preserve<D, undefined> : undefined;
};
export declare type TypeOfShape<S extends ObjectShape> = {
    [K in keyof S]: FieldType<S[K], '__type'>;
};
export declare type AssertsShape<S extends ObjectShape> = MakePartial<{
    [K in keyof S]: FieldType<S[K], '__outputType'>;
}> & {
    [k: string]: any;
};
export declare type PartialSchema<S extends ObjectShape> = {
    [K in keyof S]: S[K] extends BaseSchema ? ReturnType<S[K]['optional']> : S[K];
};
export declare type DeepPartialSchema<S extends ObjectShape> = {
    [K in keyof S]: S[K] extends ObjectSchema<any, any, any> ? ReturnType<S[K]['deepPartial']> : S[K] extends BaseSchema ? ReturnType<S[K]['optional']> : S[K];
};
export declare type ObjectSchemaSpec = SchemaSpec<any> & {
    noUnknown?: boolean;
};
export default class ObjectSchema<TShape extends ObjectShape, TConfig extends Config<any, any> = Config<AnyObject, 'd'>, TIn extends Maybe<AssertsShape<TShape>> = AssertsShape<TShape> | undefined> extends BaseSchema<TIn, TConfig> {
    fields: TShape;
    spec: ObjectSchemaSpec;
    readonly __outputType: ResolveFlags<_<TIn>, TConfig['flags']>;
    private _sortErrors;
    private _nodes;
    private _excludedEdges;
    constructor(spec?: TShape);
    protected _typeCheck(value: any): value is NonNullable<TIn>;
    protected _cast(_value: any, options?: InternalOptions<TConfig['context']>): any;
    protected _validate(_value: any, opts: InternalOptions<TConfig['context']>, callback: Callback): void;
    clone(spec?: ObjectSchemaSpec): this;
    concat<TOther extends ObjectSchema<any, any, any>>(schema: TOther): TOther extends ObjectSchema<infer S, infer C, infer IType> ? ObjectSchema<TShape & S, TConfig & C, AssertsShape<TShape & S> | Optionals<IType>> : never;
    concat(schema: this): this;
    protected _getDefault(): any;
    getDefaultFromShape(): _<DefaultFromShape<TShape>>;
    private setFields;
    shape<TNextShape extends ObjectShape>(additions: TNextShape, excludes?: [string, string][]): ObjectSchema<Assign<TShape, TNextShape>, TConfig, Extract<TIn, null> | AssertsShape<Assign<TShape, TNextShape>>>;
    partial(): ObjectSchema<PartialSchema<TShape>, TConfig, Extract<TIn, null> | AssertsShape<PartialSchema<TShape>>>;
    deepPartial(): ObjectSchema<DeepPartialSchema<TShape>, TConfig, Optionals<TIn> | undefined | AssertsShape<DeepPartialSchema<TShape>>>;
    pick<TKey extends keyof TShape>(keys: TKey[]): ObjectSchema<Pick<TShape, TKey>, TConfig, Extract<TIn, null> | AssertsShape<Pick<TShape, TKey>>>;
    omit<TKey extends keyof TShape>(keys: TKey[]): ObjectSchema<Omit<TShape, TKey>, TConfig, Extract<TIn, null> | AssertsShape<Omit<TShape, TKey>>>;
    from(from: string, to: keyof TShape, alias?: boolean): this;
    noUnknown(noAllow?: boolean, message?: Message<any>): this;
    unknown(allow?: boolean, message?: Message<any>): this;
    transformKeys(fn: (key: string) => string): this;
    camelCase(): this;
    snakeCase(): this;
    constantCase(): this;
    describe(options?: ResolveOptions<TConfig['context']>): SchemaObjectDescription;
}
export declare function create<TShape extends ObjectShape = {}>(spec?: TShape): ObjectSchema<TShape, Config<AnyObject, "d">, AssertsShape<TShape>>;
export declare namespace create {
    var prototype: ObjectSchema<any, any, any>;
}
export default interface ObjectSchema<TShape extends ObjectShape, TConfig extends Config<any, any> = Config<AnyObject, 'd'>, TIn extends Maybe<AssertsShape<TShape>> = AssertsShape<TShape> | undefined> extends BaseSchema<TIn, TConfig> {
    default<D extends Maybe<AnyObject>>(def: Thunk<D>): ObjectSchema<TShape, ToggleDefault<TConfig, D>, TIn>;
    defined(msg?: Message): ObjectSchema<TShape, TConfig, Defined<TIn>>;
    optional(): ObjectSchema<TShape, TConfig, TIn | undefined>;
    required(msg?: Message): ObjectSchema<TShape, TConfig, NonNullable<TIn>>;
    notRequired(): ObjectSchema<TShape, TConfig, Maybe<TIn>>;
    nullable(isNullable?: true): ObjectSchema<TShape, TConfig, TIn | null>;
    nullable(isNullable: false): ObjectSchema<TShape, TConfig, NotNull<TIn>>;
}
export {};
