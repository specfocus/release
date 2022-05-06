import { BaseSchema } from './BaseSchema';
import { SimpleObject } from './ObjectSchema';
export declare const ACTION_TYPE = "action";
export declare type ActionType = typeof ACTION_TYPE;
export interface ActionSchema<T = SimpleObject> extends BaseSchema {
    payload: T;
    type: ActionType;
}
