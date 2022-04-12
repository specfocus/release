import { SimpleType } from '../object';
import { Tuple } from './TupleParser';
declare function generator(source: AsyncIterable<string>): AsyncGenerator<SimpleType | Tuple, void, any>;
export default generator;
