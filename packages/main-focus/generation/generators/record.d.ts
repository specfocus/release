import { FieldMap, Model } from "../../model";
import { SimpleObject } from "../../object";
export declare function recordArray(type: string | FieldMap<SimpleObject>, count: number, models: Record<string, Model>): any[];
export declare function recordDictionary(type: string | FieldMap<SimpleObject>, count: number, models: Record<string, Model>, keyType?: string): {};
export default function record(type: string | FieldMap<SimpleObject>, models: Record<string, Model<SimpleObject>>): object | null;
