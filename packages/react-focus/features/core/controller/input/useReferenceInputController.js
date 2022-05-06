"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useReferenceInputController = void 0;
const react_1 = require("react");
const useGetList_1 = __importDefault(require("../../dataProvider/useGetList"));
const referenceDataStatus_1 = require("./referenceDataStatus");
const useTranslate_1 = __importDefault(require("../../i18n/useTranslate"));
const useReference_1 = __importDefault(require("../useReference"));
const usePaginationState_1 = __importDefault(require("../usePaginationState"));
const __1 = require("..");
const useFilterState_1 = __importDefault(require("../useFilterState"));
const useSelectionState_1 = __importDefault(require("../useSelectionState"));
const __2 = require("../..");
const defaultReferenceSource = (resource, source) => `${resource}@${source}`;
const defaultFilter = {};
/**
 * A hook for choosing a reference record. Useful for foreign keys.
 *
 * This hook fetches the possible values in the reference resource
 * (using `dataProvider.getList()`), it returns the possible choices
 * as the `choices` attribute.
 *
 * @example
 * const {
 *      choices, // the available reference resource
 * } = useReferenceInputController({
 *      input, // the input props
 *      resource: 'comments',
 *      reference: 'posts',
 *      source: 'post_id',
 * });
 *
 * The hook also allow to filter results. It returns a `setFilter`
 * function. It uses the value to create a filter
 * for the query - by default { q: [searchText] }. You can customize the mapping
 * searchText => searchQuery by setting a custom `filterToQuery` function option
 * You can also add a permanentFilter to further filter the result:
 *
 * @example
 * const {
 *      choices, // the available reference resource
 *      setFilter,
 * } = useReferenceInputController({
 *      input, // the input props
 *      resource: 'comments',
 *      reference: 'posts',
 *      source: 'post_id',
 *      permanentFilter: {
 *          author: 'john'
 *      },
 *      filterToQuery: searchText => ({ title: searchText })
 * });
 */
const useReferenceInputController = (props) => {
    const { basePath, input, page: initialPage = 1, perPage: initialPerPage = 25, filter = defaultFilter, reference, filterToQuery, sort: sortOverride, } = props;
    const resource = (0, __2.useResourceContext)(props);
    const translate = (0, useTranslate_1.default)();
    // pagination logic
    const { pagination, setPagination, page, setPage, perPage, setPerPage, } = (0, usePaginationState_1.default)({ page: initialPage, perPage: initialPerPage });
    // sort logic
    const { sort, setSort: setSortObject } = (0, __1.useSortState)(sortOverride);
    const setSort = (0, react_1.useCallback)((field, order = 'ASC') => {
        setSortObject({ field, order });
        setPage(1);
    }, [setPage, setSortObject]);
    // filter logic
    const { filter: filterValues, setFilter } = (0, useFilterState_1.default)({
        permanentFilter: filter,
        filterToQuery,
    });
    const displayedFilters = [];
    // plus showFilter and hideFilter defined outside of the hook because
    // they never change
    // selection logic
    const { selectedIds, onSelect, onToggleItem, onUnselectItems, } = (0, useSelectionState_1.default)();
    // fetch possible values
    const { ids: possibleValuesIds, data: possibleValuesData, total: possibleValuesTotal, loaded: possibleValuesLoaded, loading: possibleValuesLoading, error: possibleValuesError, refetch: refetchGetList, } = (0, useGetList_1.default)(reference, pagination, sort, filterValues);
    // fetch current value
    const { referenceRecord, refetch: refetchReference, error: referenceError, loading: referenceLoading, loaded: referenceLoaded, } = (0, useReference_1.default)({
        id: input.value,
        reference,
    });
    // add current value to possible sources
    let finalIds, finalData, finalTotal;
    if (!referenceRecord || possibleValuesIds.includes(input.value)) {
        finalIds = possibleValuesIds;
        finalData = possibleValuesData;
        finalTotal = possibleValuesTotal;
    }
    else {
        finalIds = [input.value, ...possibleValuesIds];
        finalData = Object.assign({ [input.value]: referenceRecord }, possibleValuesData);
        finalTotal = possibleValuesTotal + 1;
    }
    // overall status
    const dataStatus = (0, referenceDataStatus_1.getStatusForInput)({
        input,
        matchingReferences: Object.keys(finalData).map(id => finalData[id]),
        referenceRecord,
        translate,
    });
    const refetch = (0, react_1.useCallback)(() => {
        refetchGetList();
        refetchReference();
    }, [refetchGetList, refetchReference]);
    return {
        // should match the ListContext shape
        possibleValues: {
            basePath,
            data: finalData,
            ids: finalIds,
            total: finalTotal,
            error: possibleValuesError,
            loaded: possibleValuesLoaded,
            loading: possibleValuesLoading,
            hasCreate: false,
            page,
            setPage,
            perPage,
            setPerPage,
            currentSort: sort,
            setSort,
            filterValues,
            displayedFilters,
            setFilters: setFilter,
            showFilter,
            hideFilter,
            selectedIds,
            onSelect,
            onToggleItem,
            onUnselectItems,
            refetch,
            resource,
        },
        referenceRecord: {
            data: referenceRecord,
            loaded: referenceLoaded,
            loading: referenceLoading,
            error: referenceError,
            refetch: refetchReference,
        },
        dataStatus: {
            error: dataStatus.error,
            loading: dataStatus.waiting,
            warning: dataStatus.warning,
        },
        choices: finalIds.map(id => finalData[id]),
        // kept for backwards compatibility
        // @deprecated to be removed in 4.0
        error: dataStatus.error,
        loading: possibleValuesLoading || referenceLoading,
        loaded: possibleValuesLoaded && referenceLoaded,
        filter: filterValues,
        refetch,
        setFilter,
        pagination,
        setPagination,
        sort,
        setSort: setSortObject,
        warning: dataStatus.warning,
    };
};
exports.useReferenceInputController = useReferenceInputController;
const hideFilter = () => { };
const showFilter = () => { };
