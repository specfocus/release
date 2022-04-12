export declare function cleanseAssertionOperators<T extends number | string | symbol = string>(parsedName: string): T;
export interface NameofOptions {
    /**
     * Take only the last property of nested properties.
     */
    lastProp?: boolean;
}
export declare function nameof<T extends object>(nameFunction: ((obj: T) => any) | (new (...params: any[]) => T), options?: NameofOptions): string;
export declare function nameOf<T extends object>(nameFunction: (obj: T) => unknown): keyof T;
export default nameof;
