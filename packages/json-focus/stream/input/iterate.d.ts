import { Token } from './tokenizer';
declare function generator(source: AsyncIterable<Uint8Array>): AsyncGenerator<Token>;
export default generator;
