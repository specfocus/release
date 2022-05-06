"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultSort = void 0;
const react_1 = require("react");
const queryReducer_1 = require("../reducer/admin/resource/list/queryReducer");
const sortReducer = (state, action) => {
    switch (action.type) {
        case 'SET_SORT':
            return action.payload.sort;
        case 'SET_SORT_FIELD': {
            const { field } = action.payload;
            const order = state.field === field
                ? state.order === queryReducer_1.SORT_ASC
                    ? queryReducer_1.SORT_DESC
                    : queryReducer_1.SORT_ASC
                : queryReducer_1.SORT_ASC;
            return { field, order };
        }
        case 'SET_SORT_ORDER': {
            const { order } = action.payload;
            return Object.assign(Object.assign({}, state), { order });
        }
        default:
            return state;
    }
};
exports.defaultSort = { field: 'id', order: 'DESC' };
/**
 * Set the sort { field, order }
 * @name setSort
 * @function
 * @param {SortPayload} sort the sort object
 */
/**
 * Set the sort field, swap the order if the field is the same
 * @name setSortField
 * @function
 * @param {string} field the sort field
 */
/**
 * Set the sort order
 * @name setSortOrder
 * @function
 * @param {string} order The sort order, either ASC or DESC
 */
/**
 * @typedef SortProps
 * @type {Object}
 * @property {Object} sort: the sort object.
 * @property {string} sort.field: the sort object.
 * @property {'ASC' | 'DESC'} sort.order: the sort object.
 * @property {setSort} setSort
 * @property {setSortField} setSortField
 * @property {setSortOrder} setSortOrder
 */
/**
 * Hooks to provide sort state
 *
 * @example
 *
 * const { sort, setSort, setSortField, setSortOrder } = useSort({
 *      field: 'name',
 *      order: 'ASC',
 * });
 *
 * setSort({ field: 'name', order: 'ASC' });
 * // is the same as
 * setSortField('name');
 * setSortOrder('ASC');
 *
 * @param {Object} initialSort
 * @param {string} initialSort.field The initial sort field
 * @param {string} initialSort.order The initial sort order
 * @returns {SortProps} The sort props
 */
const useSortState = (initialSort = exports.defaultSort) => {
    const [sort, dispatch] = (0, react_1.useReducer)(sortReducer, initialSort);
    const isFirstRender = (0, react_1.useRef)(true);
    (0, react_1.useEffect)(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        dispatch({ type: 'SET_SORT', payload: { sort: initialSort } });
    }, [initialSort.field, initialSort.order]); // eslint-disable-line react-hooks/exhaustive-deps
    return {
        setSort: (0, react_1.useCallback)((sort) => dispatch({ type: 'SET_SORT', payload: { sort } }), [dispatch]),
        setSortField: (0, react_1.useCallback)((field) => dispatch({ type: 'SET_SORT_FIELD', payload: { field } }), [dispatch]),
        setSortOrder: (0, react_1.useCallback)((order) => dispatch({ type: 'SET_SORT_ORDER', payload: { order } }), [dispatch]),
        sort,
    };
};
exports.default = useSortState;
