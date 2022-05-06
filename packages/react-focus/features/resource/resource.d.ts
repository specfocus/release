import type { Fieldset, Shape, Value } from './shape';
export declare type Range<V extends Value> = [V, V];
export declare type Filter<S extends Shape> = {
    [K in keyof S]: S[K] extends null ? S[K] : S[K] | Range<S[K]>;
};
export declare type Sort<S extends Shape> = Record<keyof S, -1 | 1>;
export interface View<S extends Shape> {
    keys: Array<number>;
    only: Filter<S>;
    seen?: number;
    sort: Sort<S>;
}
export declare type Nullable<S extends Shape> = {
    [K in keyof S]: S[K] | null;
};
export interface Resource<S extends Shape, K extends number | string> {
    buffer: Record<K, S>;
    fields: Fieldset<S>;
    lineup: Record<string, View<S>>;
}
