"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// ISO 3166-1 alpha-2
// ⚠️ No support for IE11
const convertCountryCodeToFlag = (isoCode) => typeof String.fromCodePoint !== 'undefined'
    ? isoCode
        .toUpperCase()
        .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
    : isoCode;
exports.default = convertCountryCodeToFlag;
