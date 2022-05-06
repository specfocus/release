"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const debounce_1 = __importDefault(require("lodash/debounce"));
const isEqual_1 = __importDefault(require("lodash/isEqual"));
const util_1 = require("../util");
const defaultFilterToQuery = (v) => ({ q: v });
/**
 * Hooks to provide filter state and setFilter which update the query part of the filter
 *
 * @example
 *
 * const { filter, setFilter } = useFilter({
 *      filterToQuery: v => ({ query: v }),
 *      permanentFilter: { foo: 'bar' },
 *      debounceTime: 500,
 * });
 * // filter initial value:
 * {
 *      query: '',
 *      foo: 'bar'
 * }
 *  // after updating filter
 *  setFilter('needle');
 *  {
 *      query: 'needle',
 *      foo: 'bar'
 *  }
 *
 * @param {Object} option
 * @param {Function} option.filterToQuery Function to convert the filter string to a filter object. Defaults to v => ({ q: v }).
 * @param {Object} option.permanentFilter Permanent filter to be merged with the filter string. Defaults to {}.
 * @param {number} option.debounceTime Time in ms between filter updates - used to debounce the search. Defaults to 500ms.
 *
 * @returns {UseFilterStateOptions} The filter props
 */
exports.default = ({ filterToQuery = defaultFilterToQuery, permanentFilter = {}, debounceTime = 500, }) => {
    const permanentFilterProp = (0, react_1.useRef)(permanentFilter);
    const latestValue = (0, react_1.useRef)();
    const [filter, setFilterValue] = (0, util_1.useSafeSetState)(Object.assign(Object.assign({}, permanentFilter), filterToQuery('')));
    // Developers often pass an object literal as permanent filter
    // e.g. <ReferenceInput source="book_id" reference="books" filter={{ is_published: true }}>
    // The effect should execute again when the parent component updates the filter value,
    // but not when the object literal describes the same values. Therefore,
    // we use JSON.stringify(permanentFilter) in the `useEffect` and `useCallback`
    // dependencies instead of permanentFilter.
    const permanentFilterSignature = JSON.stringify(permanentFilter);
    (0, react_1.useEffect)(() => {
        if (!(0, isEqual_1.default)(permanentFilterProp.current, permanentFilter)) {
            permanentFilterProp.current = permanentFilter;
            setFilterValue(Object.assign(Object.assign({}, permanentFilter), filterToQuery(latestValue.current)));
        }
    }, [permanentFilterSignature, permanentFilterProp, filterToQuery]); // eslint-disable-line react-hooks/exhaustive-deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const setFilter = (0, react_1.useCallback)((0, debounce_1.default)((value) => {
        setFilterValue(Object.assign(Object.assign({}, permanentFilter), filterToQuery(value)));
        latestValue.current = value;
    }, debounceTime), [permanentFilterSignature] // eslint-disable-line react-hooks/exhaustive-deps
    );
    return {
        filter,
        setFilter,
    };
};
