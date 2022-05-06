import DateFnsUtils from '@date-io/date-fns';
import { StringDomain } from './StringDomain';
export declare const DATE_DOMAIN = "DATE";
export declare const DATE_DOMAINS: readonly ["DATE"];
export declare type DateDomainType = typeof DATE_DOMAINS[number];
export interface DateDomain extends StringDomain {
    format: 'date' | 'date-time' | 'duration' | 'time';
    mask: string;
    dateFunsUtils: typeof DateFnsUtils;
    shouldDisableDate?: (date: Date) => boolean;
}
