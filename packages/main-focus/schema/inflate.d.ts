import { JsonSchema } from '../json/schema';
import { SimpleType } from '../object';
import { Schema } from './Schema';
declare const inflate: <T = SimpleType>(source: JsonSchema<T, false>) => Schema<T, false>;
export default inflate;
