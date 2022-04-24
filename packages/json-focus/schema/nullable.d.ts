export declare const NULL_TYPE = "null";
export declare type NullType = typeof NULL_TYPE;
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
export declare interface NullableJsonSchema {
    nullable: true;
}
