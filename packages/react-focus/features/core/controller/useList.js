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
exports.useList = void 0;
const react_1 = require("react");
const get_1 = __importDefault(require("lodash/get"));
const isEqual_1 = __importDefault(require("lodash/isEqual"));
const util_1 = require("../util");
const usePaginationState_1 = __importDefault(require("./usePaginationState"));
const useSortState_1 = __importDefault(require("./useSortState"));
const useSelectionState_1 = __importDefault(require("./useSelectionState"));
/**
 * Handle filtering, sorting and pagination on local data.
 *
 * Returns the data and callbacks expected by <ListContext>.
 *
 * @example
 * const data = [
 *     { id: 1, name: 'Arnold' },
 *     { id: 2, name: 'Sylvester' },
 *     { id: 3, name: 'Jean-Claude' },
 * ]
 * const ids = [1, 2, 3];
 *
 * const MyComponent = () => {
 *     const listContext = useList({
 *         data,
 *         ids,
 *         basePath: '/resource';
 *         resource: 'resource';
 *     });
 *     return (
 *         <ListContextProvider value={listContext}>
 *             <Datagrid>
 *                 <TextField source="id" />
 *                 <TextField source="name" />
 *             </Datagrid>
 *         </ListContextProvider>
 *     );
 * };
 *
 * @param {UseListOptions} props
 * @param {Record[]} props.data An array of records
 * @param {Identifier[]} props.ids An array of the record identifiers
 * @param {Boolean} props.loaded: A boolean indicating whether the data has been loaded at least once
 * @param {Boolean} props.loading: A boolean indicating whether the data is being loaded
 * @param {Error | String} props.error: Optional. The error if any occurred while loading the data
 * @param {Object} props.filter: Optional. An object containing the filters applied on the data
 * @param {Number} props.page: Optional. The initial page index
 * @param {Number} props.perPage: Optional. The initial page size
 * @param {SortPayload} props.sort: Optional. The initial sort (field and order)
 */
const useList = (props) => {
    const { data, error, filter = defaultFilter, ids, loaded, loading, page: initialPage = 1, perPage: initialPerPage = 1000, sort: initialSort = defaultSort, } = props;
    const [loadingState, setLoadingState] = (0, util_1.useSafeSetState)(loading);
    const [loadedState, setLoadedState] = (0, util_1.useSafeSetState)(loaded);
    const [finalItems, setFinalItems] = (0, util_1.useSafeSetState)(() => ({
        data: (0, util_1.indexById)(data),
        ids,
        total: ids.length,
    }));
    // pagination logic
    const { page, setPage, perPage, setPerPage } = (0, usePaginationState_1.default)({
        page: initialPage,
        perPage: initialPerPage,
    });
    // sort logic
    const { sort, setSort: setSortObject } = (0, useSortState_1.default)(initialSort);
    const setSort = (0, react_1.useCallback)((field, order = 'ASC') => {
        setSortObject({ field, order });
        setPage(1);
    }, [setPage, setSortObject]);
    // selection logic
    const { selectedIds, onSelect, onToggleItem, onUnselectItems, } = (0, useSelectionState_1.default)();
    // filter logic
    const filterRef = (0, react_1.useRef)(filter);
    const [displayedFilters, setDisplayedFilters] = (0, util_1.useSafeSetState)({});
    const [filterValues, setFilterValues] = (0, util_1.useSafeSetState)(filter);
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
        setFilterValues(previousState => (0, util_1.removeEmpty)(Object.assign(Object.assign({}, previousState), { [filterName]: defaultValue })));
    }, [setDisplayedFilters, setFilterValues]);
    const setFilters = (0, react_1.useCallback)((filters, displayedFilters) => {
        setFilterValues((0, util_1.removeEmpty)(filters));
        if (displayedFilters) {
            setDisplayedFilters(displayedFilters);
        }
        setPage(1);
    }, [setDisplayedFilters, setFilterValues, setPage]);
    // handle filter prop change
    (0, react_1.useEffect)(() => {
        if (!(0, isEqual_1.default)(filter, filterRef.current)) {
            filterRef.current = filter;
            setFilterValues(filter);
        }
    });
    // We do all the data processing (filtering, sorting, paginating) client-side
    (0, react_1.useEffect)(() => {
        if (!loaded)
            return;
        // 1. filter
        let tempData = data.filter(record => Object.entries(filterValues).every(([filterName, filterValue]) => {
            const recordValue = (0, get_1.default)(record, filterName);
            const result = Array.isArray(recordValue)
                ? Array.isArray(filterValue)
                    ? recordValue.some(item => filterValue.includes(item))
                    : recordValue.includes(filterValue)
                : Array.isArray(filterValue)
                    ? filterValue.includes(recordValue)
                    : filterValue == recordValue; // eslint-disable-line eqeqeq
            return result;
        }));
        const filteredLength = tempData.length;
        // 2. sort
        if (sort.field) {
            tempData = tempData.sort((a, b) => {
                if ((0, get_1.default)(a, sort.field) > (0, get_1.default)(b, sort.field)) {
                    return sort.order === 'ASC' ? 1 : -1;
                }
                if ((0, get_1.default)(a, sort.field) < (0, get_1.default)(b, sort.field)) {
                    return sort.order === 'ASC' ? -1 : 1;
                }
                return 0;
            });
        }
        // 3. paginate
        tempData = tempData.slice((page - 1) * perPage, page * perPage);
        const finalData = (0, util_1.indexById)(tempData);
        const finalIds = tempData
            .filter(data => typeof data !== 'undefined')
            .map(data => data.id);
        setFinalItems({
            data: finalData,
            ids: finalIds,
            total: filteredLength,
        });
    }, [
        data,
        filterValues,
        loaded,
        page,
        perPage,
        setFinalItems,
        sort.field,
        sort.order,
    ]);
    (0, react_1.useEffect)(() => {
        if (loaded !== loadedState) {
            setLoadedState(loaded);
        }
    }, [loaded, loadedState, setLoadedState]);
    (0, react_1.useEffect)(() => {
        if (loading !== loadingState) {
            setLoadingState(loading);
        }
    }, [loading, loadingState, setLoadingState]);
    return {
        currentSort: sort,
        data: finalItems.data,
        error,
        displayedFilters,
        filterValues,
        hideFilter,
        ids: finalItems.ids,
        loaded: loadedState,
        loading: loadingState,
        onSelect,
        onToggleItem,
        onUnselectItems,
        page,
        perPage,
        selectedIds,
        setFilters,
        setPage,
        setPerPage,
        setSort,
        showFilter,
        total: finalItems.total,
    };
};
exports.useList = useList;
const defaultFilter = {};
const defaultSort = { field: null, order: null };
