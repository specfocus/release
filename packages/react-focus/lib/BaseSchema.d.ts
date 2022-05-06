import { BaseDomain } from './BaseDomain';
export interface BaseSchema<TDomain extends BaseDomain = BaseDomain> {
    domain?: string;
}
