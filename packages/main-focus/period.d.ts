export declare const PERIOD_DAILY = "daily";
export declare const PERIOD_MONTHLY = "monthly";
export declare const PERIOD_WEEKLY = "weekly";
export declare const PERIODS: readonly ["daily", "weekly", "monthly"];
export declare type PeriodType = typeof PERIODS[number];
export declare class Period {
    readonly d: Date;
    static UTC(d: Date): [number, number, number, number];
    constructor(d: Date);
    readonly date: Date;
    readonly day: number;
    readonly month: number;
    readonly week: number;
    readonly year: number;
    get daily(): string;
    get monthly(): string;
    get weekly(): string;
    toString(type: PeriodType): string;
}
