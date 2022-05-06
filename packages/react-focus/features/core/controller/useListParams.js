"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNumberOrDefault = exports.getQuery = exports.hasCustomParams = exports.parseQueryFromLocation = exports.validQueryParams = void 0;
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const query_string_1 = require("query-string");
const debounce_1 = __importDefault(require("lodash/debounce"));
const pickBy_1 = __importDefault(require("lodash/pickBy"));
const react_router_dom_1 = require("react-router-dom");
const queryReducer_1 = __importStar(require("../reducer/admin/resource/list/queryReducer"));
const listActions_1 = require("../actions/listActions");
const removeEmpty_1 = __importDefault(require("../util/removeEmpty"));
const emptyObject = {};
const defaultSort = {
    field: 'id',
    order: queryReducer_1.SORT_ASC,
};
const defaultParams = {};
/**
 * Get the list parameters (page, sort, filters) and modifiers.
 *
 * These parameters are merged from 3 sources:
 *   - the query string from the URL
 *   - the params stored in the state (from previous navigation)
 *   - the options passed to the hook (including the filter defaultValues)
 *
 * @returns {Array} A tuple [parameters, modifiers].
 * Destructure as [
 *    { page, perPage, sort, order, filter, filterValues, displayedFilters, requestSignature },
 *    { setFilters, hideFilter, showFilter, setPage, setPerPage, setSort }
 * ]
 *
 * @example
 *
 * const [listParams, listParamsActions] = useListParams({
 *      resource: 'posts',
 *      location: location // From react-router. Injected to your component by ../../app inside a List
 *      filterDefaultValues: {
 *          published: true
 *      },
 *      sort: {
 *          field: 'published_at',
 *          order: 'DESC'
 *      },
 *      perPage: 25
 * });
 *
 * const {
 *      page,
 *      perPage,
 *      sort,
 *      order,
 *      filter,
 *      filterValues,
 *      displayedFilters,
 *      requestSignature
 * } = listParams;
 *
 * const {
 *      setFilters,
 *      hideFilter,
 *      showFilter,
 *      setPage,
 *      setPerPage,
 *      setSort,
 * } = listParamsActions;
 */
const useListParams = ({ resource, filterDefaultValues, sort = defaultSort, perPage = 10, debounce = 500, syncWithLocation = false, }) => {
    const dispatch = (0, react_redux_1.useDispatch)();
    const location = (0, react_router_dom_1.useLocation)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    const [localParams, setLocalParams] = (0, react_1.useState)(defaultParams);
    const params = (0, react_redux_1.useSelector)((reduxState) => reduxState.admin.resources[resource]
        ? reduxState.admin.resources[resource].list.params
        : defaultParams, react_redux_1.shallowEqual);
    const tempParams = (0, react_1.useRef)();
    const requestSignature = [
        location.search,
        resource,
        syncWithLocation ? params : localParams,
        filterDefaultValues,
        JSON.stringify(sort),
        perPage,
        syncWithLocation,
    ];
    const queryFromLocation = syncWithLocation
        ? (0, exports.parseQueryFromLocation)(location)
        : {};
    const query = (0, react_1.useMemo)(() => (0, exports.getQuery)({
        queryFromLocation,
        params: syncWithLocation ? params : localParams,
        filterDefaultValues,
        sort,
        perPage,
    }), requestSignature // eslint-disable-line react-hooks/exhaustive-deps
    );
    // if the location includes params (for example from a link like
    // the categories products on the demo), we need to persist them in the
    // redux state as well so that we don't lose them after a redirection back
    // to the list
    (0, react_1.useEffect)(() => {
        if (Object.keys(queryFromLocation).length > 0) {
            dispatch((0, listActions_1.changeListParams)(resource, query));
        }
    }, [location.search]); // eslint-disable-line
    const changeParams = (0, react_1.useCallback)(action => {
        if (!tempParams.current) {
            // no other changeParams action dispatched this tick
            tempParams.current = (0, queryReducer_1.default)(query, action);
            // schedule side effects for next tick
            setTimeout(() => {
                var _a, _b;
                if (syncWithLocation) {
                    navigate({
                        search: `?${(0, query_string_1.stringify)(Object.assign(Object.assign({}, tempParams.current), { filter: JSON.stringify((_a = tempParams.current) === null || _a === void 0 ? void 0 : _a.filter), displayedFilters: JSON.stringify((_b = tempParams.current) === null || _b === void 0 ? void 0 : _b.displayedFilters) }))}`
                    }, {
                        state: { _scrollToTop: action.type === queryReducer_1.SET_PAGE }
                    });
                    // the useEffect above will apply the changes to the params in the redux state
                }
                else {
                    setLocalParams(tempParams.current);
                }
                tempParams.current = undefined;
            }, 0);
        }
        else {
            // side effects already scheduled, just change the params
            tempParams.current = (0, queryReducer_1.default)(tempParams.current, action);
        }
    }, requestSignature); // eslint-disable-line react-hooks/exhaustive-deps
    const setSort = (0, react_1.useCallback)((sort, order) => changeParams({
        type: queryReducer_1.SET_SORT,
        payload: { sort, order },
    }), requestSignature // eslint-disable-line react-hooks/exhaustive-deps
    );
    const setPage = (0, react_1.useCallback)((newPage) => changeParams({ type: queryReducer_1.SET_PAGE, payload: newPage }), requestSignature // eslint-disable-line react-hooks/exhaustive-deps
    );
    const setPerPage = (0, react_1.useCallback)((newPerPage) => changeParams({ type: queryReducer_1.SET_PER_PAGE, payload: newPerPage }), requestSignature // eslint-disable-line react-hooks/exhaustive-deps
    );
    const filterValues = query.filter || emptyObject;
    const displayedFilterValues = query.displayedFilters || emptyObject;
    const debouncedSetFilters = (0, debounce_1.default)((filter, displayedFilters) => {
        changeParams({
            type: queryReducer_1.SET_FILTER,
            payload: {
                filter: (0, removeEmpty_1.default)(filter),
                displayedFilters,
            },
        });
    }, debounce);
    const setFilters = (0, react_1.useCallback)((filter, displayedFilters, debounce = true) => debounce
        ? debouncedSetFilters(filter, displayedFilters)
        : changeParams({
            type: queryReducer_1.SET_FILTER,
            payload: {
                filter: (0, removeEmpty_1.default)(filter),
                displayedFilters,
            },
        }), requestSignature // eslint-disable-line react-hooks/exhaustive-deps
    );
    const hideFilter = (0, react_1.useCallback)((filterName) => {
        changeParams({
            type: queryReducer_1.HIDE_FILTER,
            payload: filterName,
        });
    }, requestSignature); // eslint-disable-line react-hooks/exhaustive-deps
    const showFilter = (0, react_1.useCallback)((filterName, defaultValue) => {
        changeParams({
            type: queryReducer_1.SHOW_FILTER,
            payload: {
                filterName,
                defaultValue,
            },
        });
    }, requestSignature); // eslint-disable-line react-hooks/exhaustive-deps
    return [
        Object.assign({ 
            // @ts-ignore
            displayedFilters: displayedFilterValues, filterValues,
            requestSignature }, query),
        {
            changeParams,
            setPage,
            setPerPage,
            setSort,
            setFilters,
            hideFilter,
            showFilter,
        },
    ];
};
exports.validQueryParams = [
    'page',
    'perPage',
    'sort',
    'order',
    'filter',
    'displayedFilters',
];
const parseObject = (query, field) => {
    if (query[field] && typeof query[field] === 'string') {
        try {
            query[field] = JSON.parse(query[field]);
        }
        catch (err) {
            delete query[field];
        }
    }
};
const parseQueryFromLocation = ({ search }) => {
    const query = (0, pickBy_1.default)((0, query_string_1.parse)(search), (v, k) => exports.validQueryParams.indexOf(k) !== -1);
    parseObject(query, 'filter');
    parseObject(query, 'displayedFilters');
    return query;
};
exports.parseQueryFromLocation = parseQueryFromLocation;
/**
 * Check if user has already set custom sort, page, or filters for this list
 *
 * User params come from the Redux store as the params props. By default,
 * this object is:
 *
 * { filter: {}, order: null, page: 1, perPage: null, sort: null }
 *
 * To check if the user has custom params, we must compare the params
 * to these initial values.
 *
 * @param {Object} params
 */
const hasCustomParams = (params) => {
    return (params &&
        params.filter &&
        (Object.keys(params.filter).length > 0 ||
            params.order != null ||
            params.page !== 1 ||
            params.perPage != null ||
            params.sort != null));
};
exports.hasCustomParams = hasCustomParams;
/**
 * Merge list params from 3 different sources:
 *   - the query string
 *   - the params stored in the state (from previous navigation)
 *   - the props passed to the List component (including the filter defaultValues)
 */
const getQuery = ({ queryFromLocation, params, filterDefaultValues, sort, perPage, }) => {
    const query = Object.keys(queryFromLocation).length > 0
        ? queryFromLocation
        : (0, exports.hasCustomParams)(params)
            ? Object.assign({}, params) : { filter: filterDefaultValues || {} };
    if (!query.sort) {
        query.sort = sort.field;
        query.order = sort.order;
    }
    if (query.perPage == null) {
        query.perPage = perPage;
    }
    if (query.page == null) {
        query.page = 1;
    }
    return Object.assign(Object.assign({}, query), { page: (0, exports.getNumberOrDefault)(query.page, 1), perPage: (0, exports.getNumberOrDefault)(query.perPage, 10) });
};
exports.getQuery = getQuery;
const getNumberOrDefault = (possibleNumber, defaultValue) => {
    const parsedNumber = typeof possibleNumber === 'string'
        ? parseInt(possibleNumber, 10)
        : possibleNumber;
    return isNaN(parsedNumber) ? defaultValue : parsedNumber;
};
exports.getNumberOrDefault = getNumberOrDefault;
exports.default = useListParams;
