import { JsonSchema } from '../json/schema';
import { SimpleType } from '../object';
import { Schema } from './Schema';
declare const deflate: <T = SimpleType>(source: Schema<T, false>) => JsonSchema<T, false>;
export default deflate;
