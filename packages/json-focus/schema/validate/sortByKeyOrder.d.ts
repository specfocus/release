import { ValidationError } from './error';
export default function sortByKeyOrder(keys: string[]): (a: ValidationError, b: ValidationError) => number;
