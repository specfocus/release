declare type Bit = 0 | 1;
declare type ProjectArr<U> = U extends boolean | number | string ? Bit : Record<string, Bit>;
declare type ProjectObj2<T, K> = T extends (infer U)[] ? ProjectArr<U> : Record<string, Bit>;
declare type ProjectType<T> = T extends boolean | number | string ? Bit : ProjectObj2<T, keyof T>;
export declare type Project<T extends {}> = {
    [K in keyof T]: ProjectType<T[K]>;
};
export {};
