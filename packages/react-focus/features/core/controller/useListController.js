"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitizeListRestProps = exports.getListControllerProps = exports.injectedProps = void 0;
const react_1 = require("react");
const checkMinimumRequiredProps_1 = require("./checkMinimumRequiredProps");
const useListParams_1 = __importDefault(require("./useListParams"));
const useRecordSelection_1 = __importDefault(require("./useRecordSelection"));
const useTranslate_1 = __importDefault(require("../i18n/useTranslate"));
const useNotify_1 = __importDefault(require("../sideEffect/useNotify"));
const useGetMainList_1 = require("../dataProvider/useGetMainList");
const queryReducer_1 = require("../reducer/admin/resource/list/queryReducer");
const actions_1 = require("../actions");
const defaultExporter_1 = __importDefault(require("../export/defaultExporter"));
const __1 = require("..");
const defaultSort = {
    field: 'id',
    order: queryReducer_1.SORT_ASC,
};
/**
 * Prepare data for the List view
 *
 * @param {Object} props The props passed to the List component.
 *
 * @return {Object} controllerProps Fetched and computed data for the List view
 *
 * @example
 *
 * import { useListController } from '../app';
 * import ListView from './ListView';
 *
 * const MyList = props => {
 *     const controllerProps = useListController(props);
 *     return <ListView {...controllerProps} {...props} />;
 * }
 */
const useListController = (props) => {
    (0, checkMinimumRequiredProps_1.useCheckMinimumRequiredProps)('List', ['basePath'], props);
    const { basePath, exporter = defaultExporter_1.default, filterDefaultValues, hasCreate, sort = defaultSort, perPage = 10, filter, debounce = 500, syncWithLocation, } = props;
    const resource = (0, __1.useResourceContext)(props);
    if (!resource) {
        throw new Error(`<List> was called outside of a ResourceContext and without a resource prop. You must set the resource prop.`);
    }
    if (filter && (0, react_1.isValidElement)(filter)) {
        throw new Error('<List> received a React element as `filter` props. If you intended to set the list filter elements, use the `filters` (with an s) prop instead. The `filter` prop is internal and should not be set by the developer.');
    }
    const translate = (0, useTranslate_1.default)();
    const notify = (0, useNotify_1.default)();
    const [query, queryModifiers] = (0, useListParams_1.default)({
        resource,
        filterDefaultValues,
        sort,
        perPage,
        debounce,
        syncWithLocation,
    });
    const [selectedIds, selectionModifiers] = (0, useRecordSelection_1.default)(resource);
    /**
     * We want the list of ids to be always available for optimistic rendering,
     * and therefore we need a custom action (CRUD_GET_LIST) that will be used.
     */
    const { ids, data, total, error, loading, loaded, refetch, } = (0, useGetMainList_1.useGetMainList)(resource, {
        page: query.page,
        perPage: query.perPage,
    }, { field: query.sort, order: query.order }, Object.assign(Object.assign({}, query.filter), filter), {
        action: actions_1.CRUD_GET_LIST,
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
    const totalPages = Math.ceil(total / query.perPage) || 1;
    (0, react_1.useEffect)(() => {
        if (query.page <= 0 ||
            (!loading && query.page > 1 && ids.length === 0)) {
            // Query for a page that doesn't exist, set page to 1
            queryModifiers.setPage(1);
        }
        else if (!loading && query.page > totalPages) {
            // Query for a page out of bounds, set page to the last existing page
            // It occurs when deleting the last element of the last page
            queryModifiers.setPage(totalPages);
        }
    }, [loading, query.page, ids, queryModifiers, total, totalPages]);
    const currentSort = (0, react_1.useMemo)(() => ({
        field: query.sort,
        order: query.order,
    }), [query.sort, query.order]);
    const getResourceLabel = (0, __1.useGetResourceLabel)();
    const defaultTitle = translate('ra.page.list', {
        name: getResourceLabel(resource, 2),
    });
    return {
        basePath,
        currentSort,
        data,
        defaultTitle,
        displayedFilters: query.displayedFilters,
        error,
        exporter,
        filter,
        filterValues: query.filterValues,
        hasCreate,
        hideFilter: queryModifiers.hideFilter,
        ids,
        loaded: loaded || ids.length > 0,
        loading,
        onSelect: selectionModifiers.select,
        onToggleItem: selectionModifiers.toggle,
        onUnselectItems: selectionModifiers.clearSelection,
        page: query.page,
        perPage: query.perPage,
        refetch,
        resource,
        selectedIds,
        setFilters: queryModifiers.setFilters,
        setPage: queryModifiers.setPage,
        setPerPage: queryModifiers.setPerPage,
        setSort: queryModifiers.setSort,
        showFilter: queryModifiers.showFilter,
        total: total,
    };
};
exports.injectedProps = [
    'basePath',
    'currentSort',
    'data',
    'defaultTitle',
    'displayedFilters',
    'error',
    'exporter',
    'filterValues',
    'hasCreate',
    'hideFilter',
    'ids',
    'loading',
    'loaded',
    'onSelect',
    'onToggleItem',
    'onUnselectItems',
    'page',
    'perPage',
    'refetch',
    'refresh',
    'resource',
    'selectedIds',
    'setFilters',
    'setPage',
    'setPerPage',
    'setSort',
    'showFilter',
    'total',
    'totalPages',
    'version',
];
/**
 * Select the props injected by the useListController hook
 * to be passed to the List children need
 * This is an implementation of pick()
 */
const getListControllerProps = props => exports.injectedProps.reduce((acc, key) => (Object.assign(Object.assign({}, acc), { [key]: props[key] })), {});
exports.getListControllerProps = getListControllerProps;
/**
 * Select the props not injected by the useListController hook
 * to be used inside the List children to sanitize props injected by List
 * This is an implementation of omit()
 */
const sanitizeListRestProps = props => Object.keys(props)
    .filter(propName => !exports.injectedProps.includes(propName))
    .reduce((acc, key) => (Object.assign(Object.assign({}, acc), { [key]: props[key] })), {});
exports.sanitizeListRestProps = sanitizeListRestProps;
exports.default = useListController;
