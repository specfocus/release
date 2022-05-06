"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_1 = __importDefault(require("lodash/get"));
const dataProvider_1 = require("../../dataProvider");
const sideEffect_1 = require("../../sideEffect");
const __1 = require("../..");
const useList_1 = require("../useList");
const emptyArray = [];
const defaultFilter = {};
const defaultSort = { field: null, order: null };
/**
 * Hook that fetches records from another resource specified
 * by an array of *ids* in current record.
 *
 * @example
 *
 * const { ids, data, error, loaded, loading, referenceBasePath } = useReferenceArrayFieldController({
 *      basePath: 'resource';
 *      record: { referenceIds: ['id1', 'id2']};
 *      reference: 'reference';
 *      resource: 'resource';
 *      source: 'referenceIds';
 * });
 *
 * @param {Object} props
 * @param {string} props.basePath basepath to current resource
 * @param {Object} props.record The current resource record
 * @param {string} props.reference The linked resource name
 * @param {string} props.resource The current resource name
 * @param {string} props.source The key of the linked resource identifier
 *
 * @param {Props} props
 *
 * @returns {ReferenceArrayProps} The reference props
 */
const useReferenceArrayFieldController = (props) => {
    const { basePath, filter = defaultFilter, page = 1, perPage = 1000, record, reference, sort = defaultSort, source, } = props;
    const resource = (0, __1.useResourceContext)(props);
    const notify = (0, sideEffect_1.useNotify)();
    const ids = (0, get_1.default)(record, source) || emptyArray;
    const { data, error, loading, loaded, refetch } = (0, dataProvider_1.useGetMany)(reference, ids, {
        onFailure: error => notify(typeof error === 'string'
            ? error
            : error.message || 'ra.notification.http_error', 'warning', {
            _: typeof error === 'string'
                ? error
                : error && error.message
                    ? error.message
                    : undefined,
        }),
    });
    const listProps = (0, useList_1.useList)({
        data,
        error,
        filter,
        ids,
        loaded,
        loading,
        page,
        perPage,
        sort,
    });
    return Object.assign(Object.assign({ basePath: basePath
            ? basePath.replace(resource, reference)
            : `/${reference}` }, listProps), { defaultTitle: null, hasCreate: false, refetch, resource: reference });
};
exports.default = useReferenceArrayFieldController;
