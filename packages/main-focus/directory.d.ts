declare type ValueType = bigint | boolean | number | string | symbol;
declare type NonObject = ValueType | unknown[];
export interface Directory<Terminal extends NonObject> {
    [key: string]: Terminal | Directory<Terminal>;
}
export declare const reduce: <Terminal extends NonObject>(directory: Directory<Terminal>) => Record<string, Terminal>;
export {};
