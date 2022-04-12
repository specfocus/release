export declare type TimezoneType = string;
export declare class Timezone {
    static get local(): Timezone;
    static parse(tz: string): Timezone;
    static sanitize(year: number, month: number, date: number, hours: number, minutes: number, seconds: 0, milliseconds?: number): Date;
    static sign(hours: number, minutes: number): number;
    static stringify(d: Date): string;
    constructor(hours: number, minutes: number);
    readonly hours: number;
    readonly minutes: number;
    readonly value: string;
    format(d: Date): string;
    utc(d: Date): Date;
}
