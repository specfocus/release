"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Gets a list of values indexed by field based on a list of records
 *
 * @example
 * const records = [
 *     {
 *         id: 1,
 *         title: "Lorem Ipsum",
 *         views: 254,
 *         user_id: 123,
 *     },
 *     {
 *         id: 2,
 *         title: "Sic Dolor amet",
 *         views: 65,
 *         user_id: 456,
 *     },
 * ];
 * getValuesFromRecords(records);
 * // {
 * //    id: [1, 2],
 * //    title: ['Lorem Ipsum', 'Sic Dolor amet'],
 * //    views: [254, 65],
 * //    user_id: [123, 456],
 * // }
 */
exports.default = (records) => records.reduce((values, record) => {
    Object.keys(record).forEach(fieldName => {
        if (!values[fieldName]) {
            values[fieldName] = [];
        }
        if (record[fieldName] != null) {
            const value = Array.isArray(record[fieldName])
                ? [record[fieldName]]
                : record[fieldName];
            values[fieldName] = values[fieldName].concat(value);
        }
    });
    return values;
}, {});
