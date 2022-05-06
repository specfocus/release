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
const get_1 = __importDefault(require("lodash/get"));
const react_1 = require("react");
const isEqual_1 = __importDefault(require("lodash/isEqual"));
const util_1 = require("../../util");
const dataProvider_1 = require("../../dataProvider");
const sideEffect_1 = require("../../sideEffect");
const usePaginationState_1 = __importDefault(require("../usePaginationState"));
const useSelectionState_1 = __importDefault(require("../useSelectionState"));
const useSortState_1 = __importDefault(require("../useSortState"));
const __1 = require("../..");
const defaultFilter = {};
/**
 * Fetch reference records, and return them when available
 *
 * The reference prop should be the name of one of the <Resource> components
 * added as <Admin> child.
 *
 * @example
 *
 * const { loaded, referenceRecord, resourceLinkPath } = useReferenceManyFieldController({
 *     resource
 *     reference: 'users',
 *     record: {
 *         userId: 7
 *     }
 *     target: 'comments',
 *     source: 'userId',
 *     basePath: '/comments',
 *     page: 1,
 *     perPage: 25,
 * });
 *
 * @param {Object} props
 * @param {string} props.resource The current resource name
 * @param {string} props.reference The linked resource name
 * @param {Object} props.record The current resource record
 * @param {string} props.target The target resource key
 * @param {Object} props.filter The filter applied on the recorded records list
 * @param {string} props.source The key of the linked resource identifier
 * @param {string} props.basePath basepath to current resource
 * @param {number} props.page the page number
 * @param {number} props.perPage the number of item per page
 * @param {Object} props.sort the sort to apply to the referenced records
 *
 * @returns {ReferenceManyProps} The reference many props
 */
const useReferenceManyFieldController = (props) => {
    const { reference, record, target, filter = defaultFilter, source, basePath, page: initialPage, perPage: initialPerPage, sort: initialSort = { field: 'id', order: 'DESC' }, } = props;
    const resource = (0, __1.useResourceContext)(props);
    const notify = (0, sideEffect_1.useNotify)();
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
        setFilterValues(previousState => (Object.assign(Object.assign({}, previousState), { [filterName]: defaultValue })));
    }, [setDisplayedFilters, setFilterValues]);
    const setFilters = (0, react_1.useCallback)((filters, displayedFilters) => {
        setFilterValues((0, util_1.removeEmpty)(filters));
        setDisplayedFilters(displayedFilters);
        setPage(1);
    }, [setDisplayedFilters, setFilterValues, setPage]);
    // handle filter prop change
    (0, react_1.useEffect)(() => {
        if (!(0, isEqual_1.default)(filter, filterRef.current)) {
            filterRef.current = filter;
            setFilterValues(filter);
        }
    });
    const referenceId = (0, get_1.default)(record, source);
    const { data, ids, total, error, loading, loaded, refetch, } = (0, dataProvider_1.useGetManyReference)(reference, target, referenceId, { page, perPage }, sort, filterValues, resource, {
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
    return {
        basePath: basePath
            ? basePath.replace(resource, reference)
            : `/${reference}`,
        currentSort: sort,
        data,
        defaultTitle: null,
        displayedFilters,
        error,
        filterValues,
        hasCreate: false,
        hideFilter,
        ids,
        loaded,
        loading,
        onSelect,
        onToggleItem,
        onUnselectItems,
        page,
        perPage,
        refetch,
        resource: reference,
        selectedIds,
        setFilters,
        setPage,
        setPerPage,
        setSort,
        showFilter,
        total,
    };
};
exports.default = useReferenceManyFieldController;
