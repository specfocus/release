import { Model } from '../model';
import { SimpleObject } from '../object';
export declare class GenerationContext<T extends {} = SimpleObject> {
    readonly collection: T[];
    readonly target: Model<T>;
    readonly sources: Record<string, Model>;
    private readonly generators;
    private readonly indexes;
    constructor(collection: T[], target: Model<T>, sources: Record<string, Model>);
    claim(key: string, val: number | string, index: number): boolean;
    find(key: string, val: number | string): number | undefined;
    init(): void;
    make(): T;
    push(item: T): number;
}
