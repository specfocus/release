"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useReference = void 0;
const dataProvider_1 = require("../dataProvider");
/**
 * @typedef ReferenceProps
 * @type {Object}
 * @property {boolean} loading: boolean indicating if the reference is loading
 * @property {boolean} loaded: boolean indicating if the reference has loaded
 * @property {Object} referenceRecord: the referenced record.
 */
/**
 * Fetch reference record, and return it when available
 *
 * The reference prop should be the name of one of the <Resource> components
 * added as <Admin> child.
 *
 * @example
 *
 * const { loading, loaded, referenceRecord } = useReference({
 *     id: 7,
 *     reference: 'users',
 * });
 *
 * @param {Object} option
 * @param {string} option.reference The linked resource name
 * @param {string} option.id The id of the reference
 *
 * @returns {ReferenceProps} The reference record
 */
const useReference = ({ reference, id }) => {
    const { data, error, loading, loaded, refetch } = (0, dataProvider_1.useGetMany)(reference, [
        id,
    ]);
    return {
        referenceRecord: error ? undefined : data[0],
        refetch,
        error,
        loading,
        loaded,
    };
};
exports.useReference = useReference;
exports.default = exports.useReference;
