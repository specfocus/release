"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DATE_WEEKEND = exports.DATE_WEEKDAY = exports.DATE_WEDNESDAY = exports.DATE_TUESDAY = exports.DATE_SUNDAY = exports.DATE_SATURDAY = exports.DATE_MONDAY = exports.DATE_FRIDAY = exports.DATE_BACKWARD = exports.DATE_FORWARD = exports.DATE_ISO = void 0;
const date_fns_1 = __importDefault(require("@date-io/date-fns"));
const date_fns_2 = require("date-fns");
const StringSchema_1 = require("../StringSchema");
exports.DATE_ISO = {
    format: 'date',
    mask: 'yyyy-MM-dd',
    dateFunsUtils: date_fns_1.default,
    label: 'Date',
    type: StringSchema_1.STRING_TYPE,
};
exports.DATE_FORWARD = Object.assign(Object.assign({}, exports.DATE_ISO), { shouldDisableDate: (date) => !(0, date_fns_2.isPast)(date) });
exports.DATE_BACKWARD = Object.assign(Object.assign({}, exports.DATE_ISO), { shouldDisableDate: (date) => !(0, date_fns_2.isFuture)(date) });
exports.DATE_FRIDAY = Object.assign(Object.assign({}, exports.DATE_ISO), { shouldDisableDate: (date) => !(0, date_fns_2.isFriday)(date), label: 'Friday' });
exports.DATE_MONDAY = Object.assign(Object.assign({}, exports.DATE_ISO), { shouldDisableDate: (date) => !(0, date_fns_2.isMonday)(date), label: 'Monday' });
exports.DATE_SATURDAY = Object.assign(Object.assign({}, exports.DATE_ISO), { shouldDisableDate: (date) => !(0, date_fns_2.isSaturday)(date), label: 'Saturday' });
exports.DATE_SUNDAY = Object.assign(Object.assign({}, exports.DATE_ISO), { shouldDisableDate: (date) => !(0, date_fns_2.isSunday)(date), label: 'Sunday' });
exports.DATE_TUESDAY = Object.assign(Object.assign({}, exports.DATE_ISO), { shouldDisableDate: (date) => !(0, date_fns_2.isTuesday)(date), label: 'Tuesday' });
exports.DATE_WEDNESDAY = Object.assign(Object.assign({}, exports.DATE_ISO), { shouldDisableDate: (date) => !(0, date_fns_2.isWednesday)(date), label: 'Wednesday' });
exports.DATE_WEEKDAY = Object.assign(Object.assign({}, exports.DATE_ISO), { shouldDisableDate: date_fns_2.isWeekend, label: 'Weekday' });
exports.DATE_WEEKEND = Object.assign(Object.assign({}, exports.DATE_ISO), { shouldDisableDate: (date) => !(0, date_fns_2.isWeekend)(date), label: 'Weekend' });
