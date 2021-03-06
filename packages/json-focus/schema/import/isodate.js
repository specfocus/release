"use strict";
/* eslint-disable */
/**
 *
 * Date.parse with progressive enhancement for ISO 8601 <https://github.com/csnover/js-iso8601>
 * NON-CONFORMANT EDITION.
 * © 2011 Colin Snover <http://zetafleet.com>
 * Released under MIT license.
 */
Object.defineProperty(exports, "__esModule", { value: true });
//              1 YYYY                 2 MM        3 DD              4 HH     5 mm        6 ss            7 msec         8 Z 9 ±    10 tzHH    11 tzmm
const isoReg = /^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;
function parseIsoDate(date) {
    const numericKeys = [1, 4, 5, 6, 7, 10, 11];
    let minutesOffset = 0;
    let timestamp;
    let struct;
    if ((struct = isoReg.exec(date))) {
        // avoid NaN timestamps caused by “undefined” values being passed to Date.UTC
        // @ts-ignore
        for (let i = 0, k; (k = numericKeys[i]); ++i)
            struct[k] = +struct[k] || 0;
        // allow undefined days and months
        // @ts-ignore
        struct[2] = (+struct[2] || 1) - 1;
        // @ts-ignore
        struct[3] = +struct[3] || 1;
        // allow arbitrary sub-second precision beyond milliseconds
        // @ts-ignore
        struct[7] = struct[7] ? String(struct[7]).substr(0, 3) : 0;
        // timestamps without timezone identifiers should be considered local time
        if ((struct[8] === undefined || struct[8] === '') &&
            (struct[9] === undefined || struct[9] === ''))
            timestamp = +new Date(
            // @ts-ignore
            struct[1], struct[2], struct[3], struct[4], struct[5], struct[6], struct[7]);
        else {
            if (struct[8] !== 'Z' && struct[9] !== undefined) {
                // @ts-ignore
                minutesOffset = struct[10] * 60 + struct[11];
                if (struct[9] === '+')
                    minutesOffset = 0 - minutesOffset;
            }
            timestamp = Date.UTC(
            // @ts-ignore
            struct[1], struct[2], struct[3], struct[4], struct[5] + minutesOffset, struct[6], struct[7]);
        }
    }
    else
        timestamp = Date.parse ? Date.parse(date) : NaN;
    return timestamp;
}
exports.default = parseIsoDate;
