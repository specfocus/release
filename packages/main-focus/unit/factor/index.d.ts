import * as kw from './keywords';
import * as pow from './powers';
export declare const KEYWORD: typeof kw;
export declare const POWER: typeof pow;
export declare const KEYWORDS: readonly ["yotta", "zetta", "exa", "peta", "tera", "giga", "mega", "kilo", "hecto", "deka", "deci", "centi", "milli", "micro", "nano", "pico", "femto", "atto", "zepto", "yocto"];
export declare type Keyword = typeof KEYWORDS[number];
export declare const FACTORS: {
    factor: number;
    keyword: string;
    symbol: string;
}[];
export declare const KEYWORD2POWER: {
    [x: number]: string;
};
export declare const KEYWORD2SYMBOL: {
    yotta: string;
    zetta: string;
    exa: string;
    peta: string;
    tera: string;
    giga: string;
    mega: string;
    kilo: string;
    hecto: string;
    deka: string;
    deci: string;
    centi: string;
    milli: string;
    micro: string;
    nano: string;
    pico: string;
    femto: string;
    atto: string;
    zepto: string;
    yocto: string;
};
export declare const POWER2KEYWORD: {
    [x: number]: string;
};
export declare const POWER2SYMBOL: {
    [x: number]: string;
};
