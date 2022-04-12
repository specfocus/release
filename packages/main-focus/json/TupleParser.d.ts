import { SimpleType } from '../object';
import { Parser } from './Parser';
export declare type Tuple = [number | string, SimpleType];
export declare class TupleParser extends Parser {
    tuples: Array<SimpleType | Tuple>;
    onValue(value: SimpleType): void;
    onToken(token: any, value: any): void;
}
