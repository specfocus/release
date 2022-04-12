"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Period = exports.PERIODS = exports.PERIOD_WEEKLY = exports.PERIOD_MONTHLY = exports.PERIOD_DAILY = void 0;
exports.PERIOD_DAILY = "daily";
exports.PERIOD_MONTHLY = "monthly";
exports.PERIOD_WEEKLY = "weekly";
exports.PERIODS = [exports.PERIOD_DAILY, exports.PERIOD_WEEKLY, exports.PERIOD_MONTHLY];
class Period {
    constructor(d) {
        this.d = d;
        const [year, month, date, day] = Period.UTC(d);
        this.date = new Date(year, month, date);
        // Set to nearest Thursday: current date + 4 - current day number
        // Make Sunday's day number 7
        this.date.setUTCDate(date + 4 - day || 7);
        this.day = 1 + (this.date.getTime() - Date.UTC(year, 0, 1)) / 86400000;
        this.week = Math.ceil(this.day / 7);
        this.month = month + 1;
        this.year = year;
    }
    static UTC(d) {
        return [d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), d.getUTCDay()];
    }
    get daily() {
        return `${this.year}-${String(this.day).padStart(3, "0")}`;
    }
    get monthly() {
        return `${this.year}-${String(this.month).padStart(2, "0")}`;
    }
    get weekly() {
        return `${this.year}-${String(this.week).padStart(2, "0")}`;
    }
    toString(type) {
        return this[type];
    }
    ;
}
exports.Period = Period;
