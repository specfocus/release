import { BaseDomain } from './BaseDomain';
import { ObjectSchema } from './ObjectSchema';
export interface ObjectDomain extends Omit<BaseDomain, 'type'>, ObjectSchema {
}
