import { ArrayJsonSchema } from '../json/schema/ArrayJsonSchema';
import { SimpleArray } from '../object';
import { Schema } from './Schema';
export interface ArraySchema<T extends SimpleArray> extends Omit<ArrayJsonSchema<SimpleArray, false>, 'contains' | 'items'> {
    items: Schema<T[0]>;
    optional?: boolean;
}
