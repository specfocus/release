export declare const DATE = "date";
export declare const DATE_TIME = "datetime";
export declare const DATE_TYPES: readonly ["date", "datetime"];
export declare type DateType = typeof DATE_TYPES[number];
export declare const isDate: (val: unknown) => val is Date;
export declare const isWeekday: (val: unknown) => val is Date;
export declare const isWeekend: (val: unknown) => val is Date;
declare const PERIOD: {
    ms: number;
    s: number;
    m: number;
    h: number;
    w: number;
};
export declare const periods: (ms: number) => Partial<typeof PERIOD>;
export declare const period: (ms: number) => string;
export {};
