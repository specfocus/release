import { Record, RecordMap } from '../types';
/**
 * Create a map of records indexed by their id property from an array of records.
 *
 * @param {Record[]} records. The array of records
 *
 * @example
 * const records = [{ id: 1, name: 'foo' }, { id: 2, name: 'bar' }];
 * const map = indexById(records);
 * // Map has the following structure:
 * {
 *     1: { id: 1, name: 'foo' },
 *     2: { id: 2, name: 'bar' },
 * }
 */
export declare const indexById: (records?: Record[]) => RecordMap;
