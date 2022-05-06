import { ActionType } from './ActionSchema';
import { ArrayType } from './ArraySchema';
import { BooleanType } from './BooleanSchema';
import { NumberType } from './NumberSchema';
import { StringType } from './StringSchema';
export interface BaseDomain {
    help?: string;
    label: string;
    length?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    mask?: string;
    type: ActionType | ArrayType | BooleanType | NumberType | StringType;
}
