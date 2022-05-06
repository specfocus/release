"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const paginationReducer = (prevState, nextState) => {
    return Object.assign(Object.assign({}, prevState), nextState);
};
const defaultPagination = {
    page: 1,
    perPage: 25,
};
/**
 * Hooks to provide pagination state (page and perPage)
 *
 * @example
 *
 * const { page, setPage, perPage, setPerPage } = usePagination(initialPerPage);
 *
 * @param {number} initialPagination the initial value per page
 * @returns {PaginationHookResult} The pagination props
 */
exports.default = (initialPagination = {}) => {
    const [pagination, setPagination] = (0, react_1.useReducer)(paginationReducer, Object.assign(Object.assign({}, defaultPagination), initialPagination));
    const isFirstRender = (0, react_1.useRef)(true);
    const setPerPage = (0, react_1.useCallback)(perPage => setPagination({ perPage }), []);
    const setPage = (0, react_1.useCallback)(page => setPagination({ page }), []);
    (0, react_1.useEffect)(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        setPerPage(initialPagination.perPage || 25);
    }, [initialPagination.perPage, setPerPage]);
    return {
        page: pagination.page,
        perPage: pagination.perPage,
        pagination,
        setPage,
        setPerPage,
        setPagination,
    };
};
