export declare type BinaryValidation = (val: unknown, other: any) => boolean;
declare type ConstructorType<T = any> = new (...args: any[]) => T;
export declare const is: (type: ConstructorType | string, val: any) => boolean;
export declare const isSameDate: (dateA: Date, dateB: Date) => boolean;
export {};
