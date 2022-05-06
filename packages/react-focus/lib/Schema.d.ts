import { ActionSchema } from './ActionSchema';
import { ArraySchema } from './ArraySchema';
import { BooleanSchema } from './BooleanSchema';
import { NumberSchema } from './NumberSchema';
import { ObjectSchema, SimpleObject } from './ObjectSchema';
import { StringSchema } from './StringSchema';
export declare type Schema = ActionSchema<SimpleObject> | ArraySchema | BooleanSchema | NumberSchema | ObjectSchema<SimpleObject> | StringSchema;
