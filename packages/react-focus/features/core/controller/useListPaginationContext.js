"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const ListPaginationContext_1 = __importDefault(require("./ListPaginationContext"));
/**
 * Hook to read the list controller props from the ListContext.
 *
 * Must be used within a <ListContextProvider> (e.g. as a descendent of <List>
 * or <ListBase>).
 *
 * @typedef {Object} ListPaginationContextValue
 * @prop {integer}  total the total number of results for the current filters, excluding pagination. Useful to build the pagination controls. e.g. 23
 * @prop {integer}  page the current page. Starts at 1
 * @prop {Function} setPage a callback to change the page, e.g. setPage(3)
 * @prop {integer}  perPage the number of results per page. Defaults to 25
 * @prop {Function} setPerPage a callback to change the number of results per page, e.g. setPerPage(25)
 * @prop {string}   resource the resource name, deduced from the location. e.g. 'posts'
 *
 * @returns {ListPaginationContextValue} list controller props
 *
 * @see useListController for how it is filled
 */
const useListPaginationContext = (props) => {
    const context = (0, react_1.useContext)(ListPaginationContext_1.default);
    if (!context.setPage) {
        /**
         * The element isn't inside a <ListPaginationContext.Provider>
         *
         * This may only happen when using Datagrid / SimpleList / SingleFieldList components
         * outside of a List / ReferenceManyField / ReferenceArrayField -
         * which isn't documented but tolerated.
         * To avoid breakage in that case, fallback to props
         *
         * @deprecated - to be removed in 4.0
         */
        if (process.env.NODE_ENV !== 'production') {
            console.log("List components must be used inside a <ListContextProvider>. Relying on props rather than context to get List data and callbacks is deprecated and won't be supported in the next major version of ../../app.");
        }
        return props;
    }
    return context;
};
exports.default = useListPaginationContext;
