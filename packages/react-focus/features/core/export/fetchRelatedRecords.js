"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRelatedIds = void 0;
/**
 * Helper function for calling the dataProvider.getMany() method,
 * and getting a Promise for the records indexed by id in return.
 *
 * @example
 *     fetchRelatedRecords(dataProvider)(records, 'post_id', 'posts').then(posts =>
 *         posts.map(record => ({
 *             ...record,
 *             post_title: posts[record.post_id].title,
 *         }))
 *     );
 */
const fetchRelatedRecords = (dataProvider) => (data, field, resource) => dataProvider
    .getMany(resource, { ids: (0, exports.getRelatedIds)(data, field) })
    .then(({ data }) => data.reduce((acc, post) => {
    acc[post.id] = post;
    return acc;
}, {}));
/**
 * Extracts, aggregates and deduplicates the ids of related records
 *
 * @example
 *     const books = [
 *         { id: 1, author_id: 123, title: 'Pride and Prejudice' },
 *         { id: 2, author_id: 123, title: 'Sense and Sensibility' },
 *         { id: 3, author_id: 456, title: 'War and Peace' },
 *     ];
 *     getRelatedIds(books, 'author_id'); => [123, 456]
 *
 * @example
 *     const books = [
 *         { id: 1, tag_ids: [1, 2], title: 'Pride and Prejudice' },
 *         { id: 2, tag_ids: [2, 3], title: 'Sense and Sensibility' },
 *         { id: 3, tag_ids: [4], title: 'War and Peace' },
 *     ];
 *     getRelatedIds(records, 'tag_ids'); => [1, 2, 3, 4]
 *
 * @param {Object[]} records An array of records
 * @param {string} field the identifier of the record field to use
 */
const getRelatedIds = (records, field) => Array.from(new Set(records
    .filter(record => record[field] != null)
    .map(record => record[field])
    .reduce((ids, value) => ids.concat(value), [])));
exports.getRelatedIds = getRelatedIds;
exports.default = fetchRelatedRecords;
