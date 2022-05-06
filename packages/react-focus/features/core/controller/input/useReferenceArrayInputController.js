"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useReferenceArrayInputController = void 0;
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const isEqual_1 = __importDefault(require("lodash/isEqual"));
const difference_1 = __importDefault(require("lodash/difference"));
const dataProvider_1 = require("../../dataProvider");
const react_final_form_1 = require("react-final-form");
const useGetMatching_1 = __importDefault(require("../../dataProvider/useGetMatching"));
const i18n_1 = require("../../i18n");
const referenceDataStatus_1 = require("./referenceDataStatus");
const __1 = require("../..");
const __2 = require("..");
const util_1 = require("../../util");
/**
 * Prepare data for the ReferenceArrayInput components
 *
 * @example
 *
 * const { choices, error, loaded, loading } = useReferenceArrayInputController({
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
 * @return {Object} controllerProps Fetched data and callbacks for the ReferenceArrayInput components
 */
const useReferenceArrayInputController = (props) => {
    const { filter: defaultFilter, filterToQuery = defaultFilterToQuery, input, page: initialPage = 1, perPage: initialPerPage = 25, sort: initialSort = { field: 'id', order: 'DESC' }, options, reference, source, } = props;
    const resource = (0, __1.useResourceContext)(props);
    const translate = (0, i18n_1.useTranslate)();
    // We store the current input value in a ref so that we are able to fetch
    // only the missing references when the input value changes
    const inputValue = (0, react_1.useRef)(input.value);
    const [idsToFetch, setIdsToFetch] = (0, react_1.useState)(input.value);
    const [idsToGetFromStore, setIdsToGetFromStore] = (0, react_1.useState)([]);
    const referenceRecordsFromStore = (0, react_redux_1.useSelector)((state) => idsToGetFromStore.map(id => state.admin.resources[reference].data[id]));
    // optimization: we fetch selected items only once. When the user selects more items,
    // as we already have the past selected items in the store, we don't fetch them.
    (0, react_1.useEffect)(() => {
        // Only fetch new ids
        const newIdsToFetch = (0, difference_1.default)(input.value, inputValue.current);
        // Only get from store ids selected and already fetched
        const newIdsToGetFromStore = (0, difference_1.default)(input.value, newIdsToFetch);
        /*
            input.value (current)
                +------------------------+
                | ********************** |
                | ********************** |  inputValue.current (old)
                | ********** +-----------------------+
                | ********** | ooooooooo |           |
                | ********** | ooooooooo |           |
                | ********** | ooooooooo |           |
                | ********** | ooooooooo |           |
                +---|--------|------|----+           |
                    |        |      |                |
                    |        |      |                |
                    |        +------|----------------+
                    |               |
            newIdsToFetch    newIdsToGetFromStore
        */
        // Change states each time input values changes to avoid keeping previous values no more selected
        if (!(0, isEqual_1.default)(idsToFetch, newIdsToFetch)) {
            setIdsToFetch(newIdsToFetch);
        }
        if (!(0, isEqual_1.default)(idsToGetFromStore, newIdsToGetFromStore)) {
            setIdsToGetFromStore(newIdsToGetFromStore);
        }
        inputValue.current = input.value;
    }, [
        idsToFetch,
        idsToGetFromStore,
        input.value,
        setIdsToFetch,
        setIdsToGetFromStore,
    ]);
    // pagination logic
    const { page, setPage, perPage, setPerPage, pagination, setPagination, } = (0, __2.usePaginationState)({
        page: initialPage,
        perPage: initialPerPage,
    });
    const form = (0, react_final_form_1.useForm)();
    const onSelect = (0, react_1.useCallback)((newIds) => {
        const newValue = new Set(input.value);
        newIds.forEach(newId => {
            newValue.add(newId);
        });
        form.change(input.name, Array.from(newValue));
    }, [form, input.name, input.value]);
    const onUnselectItems = (0, react_1.useCallback)(() => {
        form.change(input.name, []);
    }, [form, input.name]);
    const onToggleItem = (0, react_1.useCallback)((id) => {
        if (input.value.some(selectedId => selectedId === id)) {
            form.change(input.name, input.value.filter(selectedId => selectedId !== id));
        }
        else {
            form.change(input.name, [...input.value, id]);
        }
    }, [form, input.name, input.value]);
    // sort logic
    const sortRef = (0, react_1.useRef)(initialSort);
    const { sort, setSort } = (0, __2.useSortState)(initialSort);
    // ReferenceArrayInput.setSort had a different signature than the one from ListContext.
    // In order to not break backward compatibility, we added this temporary setSortForList in the
    // ReferenceArrayInputContext
    const setSortForList = (0, react_1.useCallback)((field, order = 'ASC') => {
        setSort({ field, order });
        setPage(1);
    }, [setPage, setSort]);
    // Ensure sort can be updated through props too, not just by using the setSort function
    (0, react_1.useEffect)(() => {
        if (!(0, isEqual_1.default)(initialSort, sortRef.current)) {
            setSort(initialSort);
        }
    }, [setSort, initialSort]);
    // Ensure pagination can be updated through props too, not just by using the setPagination function
    const paginationRef = (0, react_1.useRef)({ initialPage, initialPerPage });
    (0, react_1.useEffect)(() => {
        if (!(0, isEqual_1.default)({ initialPage, initialPerPage }, paginationRef.current)) {
            setPagination({ page: initialPage, perPage: initialPerPage });
        }
    }, [setPagination, initialPage, initialPerPage]);
    // filter logic
    const [queryFilter, setFilter] = (0, react_1.useState)('');
    const filterRef = (0, react_1.useRef)(defaultFilter);
    const [displayedFilters, setDisplayedFilters] = (0, util_1.useSafeSetState)({});
    const [filterValues, setFilterValues] = (0, util_1.useSafeSetState)(defaultFilter);
    const hideFilter = (0, react_1.useCallback)((filterName) => {
        setDisplayedFilters(previousState => {
            const _a = previousState, _b = filterName, _ = _a[_b], newState = __rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
            return newState;
        });
        setFilterValues(previousState => {
            const _a = previousState, _b = filterName, _ = _a[_b], newState = __rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
            return newState;
        });
    }, [setDisplayedFilters, setFilterValues]);
    const showFilter = (0, react_1.useCallback)((filterName, defaultValue) => {
        setDisplayedFilters(previousState => (Object.assign(Object.assign({}, previousState), { [filterName]: true })));
        setFilterValues(previousState => (Object.assign(Object.assign({}, previousState), { [filterName]: defaultValue })));
    }, [setDisplayedFilters, setFilterValues]);
    const setFilters = (0, react_1.useCallback)((filters, displayedFilters) => {
        setFilterValues((0, util_1.removeEmpty)(filters));
        setDisplayedFilters(displayedFilters);
        setPage(1);
    }, [setDisplayedFilters, setFilterValues, setPage]);
    // handle filter prop change
    (0, react_1.useEffect)(() => {
        if (!(0, isEqual_1.default)(defaultFilter, filterRef.current)) {
            filterRef.current = defaultFilter;
            setFilterValues(defaultFilter);
        }
    });
    // Merge the user filters with the default ones
    const finalFilter = (0, react_1.useMemo)(() => (Object.assign(Object.assign({}, defaultFilter), filterToQuery(queryFilter))), [queryFilter, defaultFilter, filterToQuery]);
    const { data: referenceRecordsFetched, loaded, refetch: refetchGetMany, } = (0, dataProvider_1.useGetMany)(reference, idsToFetch || []);
    const referenceRecords = referenceRecordsFetched
        ? referenceRecordsFetched.concat(referenceRecordsFromStore)
        : referenceRecordsFromStore;
    // filter out not found references - happens when the dataProvider doesn't guarantee referential integrity
    const finalReferenceRecords = referenceRecords.filter(Boolean);
    const { data: matchingReferences, ids: matchingReferencesIds, total, refetch: refetchGetMatching, } = (0, useGetMatching_1.default)(reference, pagination, sort, finalFilter, source, resource, options);
    // We merge the currently selected records with the matching ones, otherwise
    // the component displaying the currently selected records may fail
    const finalMatchingReferences = matchingReferences && matchingReferences.length > 0
        ? mergeReferences(matchingReferences, finalReferenceRecords)
        : finalReferenceRecords.length > 0
            ? finalReferenceRecords
            : matchingReferences;
    const dataStatus = (0, referenceDataStatus_1.getStatusForArrayInput)({
        input,
        matchingReferences: finalMatchingReferences,
        referenceRecords: finalReferenceRecords,
        translate,
    });
    const refetch = (0, react_1.useCallback)(() => {
        refetchGetMany();
        refetchGetMatching();
    }, [refetchGetMany, refetchGetMatching]);
    return {
        basePath: props.basePath || `/${resource}`,
        choices: dataStatus.choices,
        currentSort: sort,
        // For the ListContext, we don't want to always display the selected items first.
        // Indeed it wouldn't work well regarding sorting and pagination
        data: matchingReferences && matchingReferences.length > 0
            ? (0, util_1.indexById)(matchingReferences)
            : {},
        displayedFilters,
        error: dataStatus.error,
        filterValues,
        hasCreate: false,
        hideFilter,
        // For the ListContext, we don't want to always display the selected items first.
        // Indeed it wouldn't work well regarding sorting and pagination
        ids: matchingReferencesIds || [],
        loaded,
        loading: dataStatus.waiting,
        onSelect,
        onToggleItem,
        onUnselectItems,
        page,
        perPage,
        refetch,
        resource,
        selectedIds: input.value,
        setFilter,
        setFilters,
        setPage,
        setPagination,
        setPerPage,
        setSort,
        setSortForList,
        showFilter,
        warning: dataStatus.warning,
        total,
    };
};
exports.useReferenceArrayInputController = useReferenceArrayInputController;
// concatenate and deduplicate two lists of records
const mergeReferences = (ref1, ref2) => {
    const res = [...ref1];
    const ids = ref1.map(ref => ref.id);
    ref2.forEach(ref => {
        if (!ids.includes(ref.id)) {
            ids.push(ref.id);
            res.push(ref);
        }
    });
    return res;
};
const defaultFilterToQuery = searchText => ({ q: searchText });
