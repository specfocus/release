import { TupleJsonSchema } from '../json/schema/TupleJsonSchema';
import { SimpleTuple } from '../object';
import { Schema } from './Schema';
export interface TupleSchema<T extends SimpleTuple> extends Omit<TupleJsonSchema<T, false>, 'items'> {
    items: {
        [K in keyof T]-?: Schema<T[K]>;
    } & {
        length: T['length'];
    };
    optional?: boolean;
}
