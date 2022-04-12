import { BooleanType } from './boolean';
import { NumberType } from './number';
import { RecordType } from './record';
import { StringType } from './string';
export declare const ARRAY = "array";
export declare type ArrayType = [ArrayType | BooleanType | NumberType | StringType, typeof ARRAY] | [string, RecordType, typeof ARRAY];
export declare const isArray: <T = unknown>(val: unknown) => val is T[];
export declare const isArrayLike: (val: any) => val is IterableIterator<[number, unknown]>;
export declare const isEmpty: (val: unknown) => val is null;
export declare const isSet: (val: unknown) => val is Set<unknown>;
/**
 * Creates an array excluding all provided values using SameValueZero for equality comparisons.
 *
 * @param array The array to filter.
 * @param values The values to exclude.
 * @return Returns the new array of filtered values.
 */
export declare const without: <T, R extends T = T>(array: ArrayLike<T>, ...values: T[]) => T[];
