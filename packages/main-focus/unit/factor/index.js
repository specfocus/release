"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.POWER2SYMBOL = exports.POWER2KEYWORD = exports.KEYWORD2SYMBOL = exports.KEYWORD2POWER = exports.FACTORS = exports.KEYWORDS = exports.POWER = exports.KEYWORD = void 0;
const kw = __importStar(require("./keywords"));
const pow = __importStar(require("./powers"));
exports.KEYWORD = kw;
exports.POWER = pow;
exports.KEYWORDS = [
    kw.YOTTA,
    kw.ZETTA,
    kw.EXA,
    kw.PETA,
    kw.TERA,
    kw.GIGA,
    kw.MEGA,
    kw.KILO,
    kw.HECTO,
    kw.DEKA,
    kw.DECI,
    kw.CENTI,
    kw.MILLI,
    kw.MICRO,
    kw.NANO,
    kw.PICO,
    kw.FEMTO,
    kw.ATTO,
    kw.ZEPTO,
    kw.YOCTO
];
exports.FACTORS = [
    { factor: pow.YOTTA, keyword: kw.YOTTA, symbol: 'Y' },
    { factor: pow.ZETTA, keyword: kw.ZETTA, symbol: 'Z' },
    { factor: pow.EXA, keyword: kw.EXA, symbol: 'E' },
    { factor: pow.PETA, keyword: kw.PETA, symbol: 'P' },
    { factor: pow.TERA, keyword: kw.TERA, symbol: 'T' },
    { factor: pow.GIGA, keyword: kw.GIGA, symbol: 'G' },
    { factor: pow.MEGA, keyword: kw.MEGA, symbol: 'M' },
    { factor: pow.KILO, keyword: kw.KILO, symbol: 'k' },
    { factor: pow.HECTO, keyword: kw.HECTO, symbol: 'h' },
    { factor: pow.DEKA, keyword: kw.DEKA, symbol: 'dav' },
    { factor: pow.DECI, keyword: kw.DECI, symbol: 'd' },
    { factor: pow.CENTI, keyword: kw.CENTI, symbol: 'c' },
    { factor: pow.MILLI, keyword: kw.MILLI, symbol: 'm' },
    { factor: pow.MICRO, keyword: kw.MICRO, symbol: 'µ' },
    { factor: pow.NANO, keyword: kw.NANO, symbol: 'n' },
    { factor: pow.PICO, keyword: kw.PICO, symbol: 'p' },
    { factor: pow.FEMTO, keyword: kw.FEMTO, symbol: 'f' },
    { factor: pow.ATTO, keyword: kw.ATTO, symbol: 'a' },
    { factor: pow.ZEPTO, keyword: kw.ZEPTO, symbol: 'z' },
    { factor: pow.YOCTO, keyword: kw.YOCTO, symbol: 'y' }
];
exports.KEYWORD2POWER = {
    [pow.YOTTA]: kw.YOTTA,
    [pow.ZETTA]: kw.ZETTA,
    [pow.EXA]: kw.EXA,
    [pow.PETA]: kw.PETA,
    [pow.TERA]: kw.TERA,
    [pow.GIGA]: kw.GIGA,
    [pow.MEGA]: kw.MEGA,
    [pow.KILO]: kw.KILO,
    [pow.HECTO]: kw.HECTO,
    [pow.DEKA]: kw.DEKA,
    [pow.DECI]: kw.DECI,
    [pow.CENTI]: kw.CENTI,
    [pow.MILLI]: kw.MILLI,
    [pow.MICRO]: kw.MICRO,
    [pow.NANO]: kw.NANO,
    [pow.PICO]: kw.PICO,
    [pow.FEMTO]: kw.FEMTO,
    [pow.ATTO]: kw.ATTO,
    [pow.ZEPTO]: kw.ZEPTO,
    [pow.YOCTO]: kw.YOCTO,
};
exports.KEYWORD2SYMBOL = {
    [kw.YOTTA]: 'Y',
    [kw.ZETTA]: 'Z',
    [kw.EXA]: 'E',
    [kw.PETA]: 'P',
    [kw.TERA]: 'T',
    [kw.GIGA]: 'G',
    [kw.MEGA]: 'M',
    [kw.KILO]: 'k',
    [kw.HECTO]: 'h',
    [kw.DEKA]: 'dav',
    [kw.DECI]: 'd',
    [kw.CENTI]: 'c',
    [kw.MILLI]: 'm',
    [kw.MICRO]: 'µ',
    [kw.NANO]: 'n',
    [kw.PICO]: 'p',
    [kw.FEMTO]: 'f',
    [kw.ATTO]: 'a',
    [kw.ZEPTO]: 'z',
    [kw.YOCTO]: 'y'
};
exports.POWER2KEYWORD = {
    [pow.YOTTA]: kw.YOTTA,
    [pow.ZETTA]: kw.ZETTA,
    [pow.EXA]: kw.EXA,
    [pow.PETA]: kw.PETA,
    [pow.TERA]: kw.TERA,
    [pow.GIGA]: kw.GIGA,
    [pow.MEGA]: kw.MEGA,
    [pow.KILO]: kw.KILO,
    [pow.HECTO]: kw.HECTO,
    [pow.DEKA]: kw.DEKA,
    [pow.DECI]: kw.DECI,
    [pow.CENTI]: kw.CENTI,
    [pow.MILLI]: kw.MILLI,
    [pow.MICRO]: kw.MICRO,
    [pow.NANO]: kw.NANO,
    [pow.PICO]: kw.PICO,
    [pow.FEMTO]: kw.FEMTO,
    [pow.ATTO]: kw.ATTO,
    [pow.ZEPTO]: kw.ZEPTO,
    [pow.YOCTO]: kw.YOCTO,
};
exports.POWER2SYMBOL = {
    [pow.YOTTA]: 'Y',
    [pow.ZETTA]: 'Z',
    [pow.EXA]: 'E',
    [pow.PETA]: 'P',
    [pow.TERA]: 'T',
    [pow.GIGA]: 'G',
    [pow.MEGA]: 'M',
    [pow.KILO]: 'k',
    [pow.HECTO]: 'h',
    [pow.DEKA]: 'dav',
    [pow.DECI]: 'd',
    [pow.CENTI]: 'c',
    [pow.MILLI]: 'm',
    [pow.MICRO]: 'µ',
    [pow.NANO]: 'n',
    [pow.PICO]: 'p',
    [pow.FEMTO]: 'f',
    [pow.ATTO]: 'a',
    [pow.ZEPTO]: 'z',
    [pow.YOCTO]: 'y'
};
