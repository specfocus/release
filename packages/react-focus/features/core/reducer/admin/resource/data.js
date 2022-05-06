"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRecord = exports.removeRecords = exports.addOneRecord = exports.addRecords = exports.addRecordsAndRemoveOutdated = exports.hideFetchedAt = void 0;
const isEqual_1 = __importDefault(require("lodash/isEqual"));
const actions_1 = require("../../../actions");
const core_1 = require("../../../core");
const getFetchedAt_1 = __importDefault(require("../../../util/getFetchedAt"));
/**
 * Make the fetchedAt property non enumerable
 */
const hideFetchedAt = (records) => {
    Object.defineProperty(records, 'fetchedAt', {
        enumerable: false,
        configurable: false,
        writable: false,
    });
    return records;
};
exports.hideFetchedAt = hideFetchedAt;
/**
 * Add new records to the pool, and remove outdated ones.
 *
 * This is the equivalent of a stale-while-revalidate caching strategy:
 * The cached data is displayed before fetching, and stale data is removed
 * only once fresh data is fetched.
 */
const addRecordsAndRemoveOutdated = (newRecords = [], oldRecords) => {
    const newRecordsById = {};
    newRecords.forEach(record => (newRecordsById[record.id] = record));
    const newFetchedAt = (0, getFetchedAt_1.default)(newRecords.map(({ id }) => id), oldRecords.fetchedAt);
    const records = { fetchedAt: newFetchedAt };
    Object.keys(newFetchedAt).forEach(id => (records[id] = newRecordsById[id]
        ? (0, isEqual_1.default)(newRecordsById[id], oldRecords[id])
            ? oldRecords[id] // do not change the record to avoid a redraw
            : newRecordsById[id]
        : oldRecords[id]));
    return (0, exports.hideFetchedAt)(records);
};
exports.addRecordsAndRemoveOutdated = addRecordsAndRemoveOutdated;
/**
 * Add new records to the pool, without touching the other ones.
 */
const addRecords = (newRecords = [], oldRecords) => {
    const newRecordsById = Object.assign({}, oldRecords);
    newRecords.forEach(record => {
        newRecordsById[record.id] = (0, isEqual_1.default)(record, oldRecords[record.id])
            ? oldRecords[record.id]
            : record;
    });
    const updatedFetchedAt = (0, getFetchedAt_1.default)(newRecords.map(({ id }) => id), oldRecords.fetchedAt);
    Object.defineProperty(newRecordsById, 'fetchedAt', {
        value: Object.assign(Object.assign({}, oldRecords.fetchedAt), updatedFetchedAt),
        enumerable: false,
    });
    return newRecordsById;
};
exports.addRecords = addRecords;
const addOneRecord = (newRecord, oldRecords, date = new Date()) => {
    const newRecordsById = Object.assign(Object.assign({}, oldRecords), { [newRecord.id]: (0, isEqual_1.default)(newRecord, oldRecords[newRecord.id])
            ? oldRecords[newRecord.id] // do not change the record to avoid a redraw
            : newRecord });
    return Object.defineProperty(newRecordsById, 'fetchedAt', {
        value: Object.assign(Object.assign({}, oldRecords.fetchedAt), { [newRecord.id]: date }),
        enumerable: false,
    });
};
exports.addOneRecord = addOneRecord;
const includesNotStrict = (items, element) => items.some((item) => item == element); // eslint-disable-line eqeqeq
/**
 * Remove records from the pool
 */
const removeRecords = (removedRecordIds = [], oldRecords) => {
    const records = Object.entries(oldRecords)
        .filter(([key]) => !includesNotStrict(removedRecordIds, key))
        .reduce((obj, [key, val]) => (Object.assign(Object.assign({}, obj), { [key]: val })), {
        fetchedAt: {}, // TypeScript warns later if this is not defined
    });
    records.fetchedAt = Object.entries(oldRecords.fetchedAt)
        .filter(([key]) => !includesNotStrict(removedRecordIds, key))
        .reduce((obj, [key, val]) => (Object.assign(Object.assign({}, obj), { [key]: val })), {});
    return (0, exports.hideFetchedAt)(records);
};
exports.removeRecords = removeRecords;
const initialState = (0, exports.hideFetchedAt)({ fetchedAt: {} });
const dataReducer = (previousState = initialState, { payload, meta }) => {
    if (meta && meta.optimistic) {
        if (meta.fetch === core_1.UPDATE) {
            const updatedRecord = Object.assign(Object.assign({}, previousState[payload.id]), payload.data);
            return (0, exports.addOneRecord)(updatedRecord, previousState);
        }
        if (meta.fetch === core_1.UPDATE_MANY) {
            const updatedRecords = payload.ids.map((id) => (Object.assign(Object.assign({}, previousState[id]), payload.data)));
            return (0, exports.addRecordsAndRemoveOutdated)(updatedRecords, previousState);
        }
        if (meta.fetch === core_1.DELETE) {
            return (0, exports.removeRecords)([payload.id], previousState);
        }
        if (meta.fetch === core_1.DELETE_MANY) {
            return (0, exports.removeRecords)(payload.ids, previousState);
        }
    }
    if (!meta || !meta.fetchResponse || meta.fetchStatus !== actions_1.FETCH_END) {
        return previousState;
    }
    switch (meta.fetchResponse) {
        case core_1.GET_LIST:
            return (0, exports.addRecordsAndRemoveOutdated)(payload.data, previousState);
        case core_1.GET_MANY:
        case core_1.GET_MANY_REFERENCE:
            return (0, exports.addRecords)(payload.data, previousState);
        case core_1.UPDATE:
        case core_1.CREATE:
        case core_1.GET_ONE:
            return (0, exports.addOneRecord)(payload.data, previousState);
        default:
            return previousState;
    }
};
const getRecord = (state, id) => state[id];
exports.getRecord = getRecord;
exports.default = dataReducer;
