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
const jsx_runtime_1 = require("react/jsx-runtime");
const ListContext_1 = __importDefault(require("./ListContext"));
const ListFilterContext_1 = __importStar(require("./ListFilterContext"));
const ListSortContext_1 = __importStar(require("./ListSortContext"));
const ListPaginationContext_1 = __importStar(require("./ListPaginationContext"));
/**
 * Create a List Context and several thematic List subcontext.
 *
 * Allows children to subscribe to part of the ListContext, and bail out of
 * rendering when some parts of the context that they don't depend on change
 * (because unfortunately React doesn't allow to use context selectors yet).
 *
 * @example
 *
 * const MyList = (props) => {
 *     const controllerProps = useListController(props);
 *     return (
 *         <ListContextProvider value={controllerProps}>
 *             <MyListView>
 *         </ListContextProvider>
 *     );
 * };
 *
 * const MyListView = () => {
 *     const { data, ids, filterValues, setFilters } = useListContext();
 *     // or, to rerender only when filters change but not data
 *     const { filterValues, setFilters } = useListFilterContext();
 * }
 *
 * @see ListContext
 * @see ListFilterContext
 */
const ListContextProvider = ({ value, children }) => ((0, jsx_runtime_1.jsx)(ListContext_1.default.Provider, Object.assign({ value: value }, { children: (0, jsx_runtime_1.jsx)(ListFilterContext_1.default.Provider, Object.assign({ value: (0, ListFilterContext_1.usePickFilterContext)(value) }, { children: (0, jsx_runtime_1.jsx)(ListSortContext_1.default.Provider, Object.assign({ value: (0, ListSortContext_1.usePickSortContext)(value) }, { children: (0, jsx_runtime_1.jsx)(ListPaginationContext_1.default.Provider, Object.assign({ value: (0, ListPaginationContext_1.usePickPaginationContext)(value) }, { children: children }), void 0) }), void 0) }), void 0) }), void 0));
exports.default = ListContextProvider;
