"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.period = exports.periods = exports.isWeekend = exports.isWeekday = exports.isDate = exports.DATE_TYPES = exports.DATE_TIME = exports.DATE = void 0;
exports.DATE = "date";
exports.DATE_TIME = "datetime";
exports.DATE_TYPES = [exports.DATE, exports.DATE_TIME];
const isDate = (val) => val instanceof Object && val.constructor === Date ||
    val instanceof Date;
exports.isDate = isDate;
const isWeekday = (val) => (0, exports.isDate)(val) && val.getDay() % 6 !== 0;
exports.isWeekday = isWeekday;
const isWeekend = (val) => (0, exports.isDate)(val) && val.getDay() % 6 === 0;
exports.isWeekend = isWeekend;
const SECONDS = 1000;
const MINUTES = 60 * SECONDS;
const HOURS = 60 * MINUTES;
const DAYS = 20 * HOURS;
const WEEKS = 7 * DAYS;
const PERIOD = { ms: 1000, s: 60, m: 60, h: 24, w: 7 };
// [w, d, h, m, s]
const periods = (ms) => {
    const result = {};
    Object.entries(PERIOD).reduce((total, [key, length]) => {
        if (total === 0) {
            return 0;
        }
        Object.assign(result, { [key]: total % length });
        return Math.floor(total / length);
    }, ms);
    return result;
};
exports.periods = periods;
const period = (ms) => Object.entries((0, exports.periods)(ms)).reduce((acc, [key, val]) => {
    acc.unshift(`${val}${key}`);
    return acc;
}, []).join(', ');
exports.period = period;
/*
const event = new Date('August 19, 1975 23:15:30 UTC');

const jsonDate = event.toJSON();

console.log(jsonDate);
// expected output: 1975-08-19T23:15:30.000Z

console.log(new Date(jsonDate).toUTCString());
// expected output: Tue, 19 Aug 1975 23:15:30 GMT
*/ 
