import { SimpleObject, SimpleType } from './simple';
declare const simplify: (val: unknown) => SimpleType | undefined;
export declare const simplifyObject: <T extends {} = SimpleObject>(src: T) => SimpleObject;
export default simplify;
