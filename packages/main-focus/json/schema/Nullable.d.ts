export declare type Nullable<T> = undefined extends T ? {
    nullable: true;
    const?: never;
    enum?: (T | null)[];
    default?: T | null;
} : {
    const?: T;
    enum?: T[];
    default?: T;
};
