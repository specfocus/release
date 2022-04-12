import { ARRAY } from '../../array';
import { BooleanType } from '../../boolean';
import { DateType } from '../../date';
import { IntegerType, NumberType } from '../../number';
import { SimpleObject } from '../../object';
import { DICTIONARY, RECORD, RecordType } from '../../record';
import { StringType } from '../../string';
export declare type PrimitiveNameOf<T> = T extends Boolean ? BooleanType : T extends Date ? DateType : T extends BigInt ? IntegerType : T extends Number ? NumberType : T extends String ? StringType : RecordType;
declare type FieldsOf<T> = typeof RECORD | [string, typeof RECORD] | FieldMap<T>;
declare type ArrayOf<U> = U extends SimpleObject ? [FieldMap<U> | typeof RECORD, typeof ARRAY] | [string, typeof RECORD, typeof ARRAY] : [PrimitiveNameOf<U>, typeof ARRAY];
declare type DictionaryOf<V> = V extends SimpleObject ? typeof RECORD | [string, typeof RECORD, typeof DICTIONARY, StringType?] | [typeof RECORD, typeof DICTIONARY, StringType?] | [FieldMap<V>, typeof DICTIONARY, StringType?] : [PrimitiveNameOf<V>, typeof DICTIONARY, StringType?];
export declare type TypeOf<T> = T extends Array<infer U> ? ArrayOf<U> : T extends Record<string, infer V> ? DictionaryOf<V> : T extends SimpleObject ? FieldsOf<T> : PrimitiveNameOf<T>;
export interface FieldModel<T> {
    default?: T;
    name: string;
    type: TypeOf<T>;
}
export declare type FieldDescriptor<T> = Omit<FieldModel<T>, 'name'>;
export declare type FieldMap<T extends {}> = {
    [P in keyof T]: FieldDescriptor<T[P]>;
};
export {};
