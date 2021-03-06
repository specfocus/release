import { Reducer } from 'redux';
import { Record, Identifier } from '../../../types';
/**
 * A list of records indexed by id, together with their fetch dates
 *
 * Note that the fetchedAt property isn't enumerable.
 *
 * @example
 * {
 *      12: { id: 12, title: "hello" },
 *      34: { id: 34, title: "world" },
 *      fetchedAt: {
 *          12: new Date('2019-02-06T21:23:07.049Z'),
 *          34: new Date('2019-02-06T21:23:07.049Z'),
 *      }
 * }
 */
interface RecordSetWithDate {
    [key: string]: Record | object;
    [key: number]: Record;
    fetchedAt: {
        [key: string]: Date;
        [key: number]: Date;
    };
}
/**
 * Make the fetchedAt property non enumerable
 */
export declare const hideFetchedAt: (records: RecordSetWithDate) => RecordSetWithDate;
/**
 * Add new records to the pool, and remove outdated ones.
 *
 * This is the equivalent of a stale-while-revalidate caching strategy:
 * The cached data is displayed before fetching, and stale data is removed
 * only once fresh data is fetched.
 */
export declare const addRecordsAndRemoveOutdated: (newRecords: Record[], oldRecords: RecordSetWithDate) => RecordSetWithDate;
/**
 * Add new records to the pool, without touching the other ones.
 */
export declare const addRecords: (newRecords: Record[], oldRecords: RecordSetWithDate) => RecordSetWithDate;
export declare const addOneRecord: (newRecord: Record, oldRecords: RecordSetWithDate, date?: Date) => RecordSetWithDate;
/**
 * Remove records from the pool
 */
export declare const removeRecords: (removedRecordIds: Identifier[], oldRecords: RecordSetWithDate) => RecordSetWithDate;
declare const dataReducer: Reducer<RecordSetWithDate>;
export declare const getRecord: (state: {
    [x: string]: any;
}, id: string | number) => any;
export default dataReducer;
