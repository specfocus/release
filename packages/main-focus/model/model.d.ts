import { JsonSchema, SimpleObject } from './types';
import { Reference } from '../reference';
import { FieldMap, TypeOf } from './field';
export declare type ModelReference = Reference<Model, 'name' | 'area'>;
export interface Model<T extends {} = SimpleObject> {
    area: string;
    name: string;
    hint: string;
    fields: FieldMap<T>;
}
export declare class Model2<T extends SimpleObject> {
    schema?: JsonSchema<T, false>;
    private domains;
    private properties;
    constructor(schema?: JsonSchema<T, false>);
}
export declare type NamedArgsOf<T> = {
    [P in keyof T]: TypeOf<T[P]>;
};
export declare const model: Model<Model>;
