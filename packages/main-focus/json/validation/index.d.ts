import { SimpleType } from '../../object';
import { JsonSchema } from '../schema';
export declare function validate<T extends SimpleType = SimpleType>(this: JsonSchema<T>, value: T): boolean;
