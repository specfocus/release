import { ObjectJsonSchema } from '../json/schema';
import { Nullable } from '../json/schema/Nullable';
import { SimpleObject } from '../object';
import { Schema } from './Schema';
export declare interface ObjectSchema<T extends SimpleObject = SimpleObject, _partial extends boolean = false> extends Pick<ObjectJsonSchema<T, _partial>, 'required' | 'type'> {
    properties?: _partial extends true ? Partial<PropertiesSchema<T>> : PropertiesSchema<T>;
    optional?: boolean;
}
export declare type PropertiesSchema<T> = {
    [K in keyof T]-?: (Schema<T[K]> & Nullable<T[K]>) | {
        $ref: string;
    };
};
