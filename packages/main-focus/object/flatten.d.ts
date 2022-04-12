import { SimpleValue } from '.';
import { SimpleObject } from './simple';
declare const flatten: <T extends {} = SimpleObject>(src: T, path?: string[]) => Record<string, SimpleValue | SimpleValue[]>;
export default flatten;
