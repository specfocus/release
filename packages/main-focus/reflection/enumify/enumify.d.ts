export declare class Enumify {
    static enumKeys: string[];
    static enumValues: Enumify[];
    static closeEnum(): void;
    /** Use case: parsing enum values */
    static enumValueOf(str: string): undefined | Enumify;
    static [Symbol.iterator](): IterableIterator<Enumify>;
    enumKey: string;
    enumOrdinal: number;
    toString(): string;
}
