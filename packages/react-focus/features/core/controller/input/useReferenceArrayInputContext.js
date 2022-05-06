"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useReferenceArrayInputContext = void 0;
const react_1 = require("react");
const defaults_1 = __importDefault(require("lodash/defaults"));
const ReferenceArrayInputContext_1 = require("./ReferenceArrayInputContext");
/**
 * Hook to get the ReferenceArrayInputContext.
 */
const useReferenceArrayInputContext = (props) => {
    const context = (0, react_1.useContext)(ReferenceArrayInputContext_1.ReferenceArrayInputContext);
    // Props take precedence over the context
    return (0, react_1.useMemo)(() => (0, defaults_1.default)({}, props != null
        ? extractReferenceArrayInputContextProps(props)
        : {}, context), [context, props]);
};
exports.useReferenceArrayInputContext = useReferenceArrayInputContext;
const extractReferenceArrayInputContextProps = ({ choices, error, loaded, loading, setFilter, setPagination, setSort, setSortForList, warning, }) => ({
    choices,
    error,
    loaded,
    loading,
    setFilter,
    setPagination,
    setSort,
    setSortForList,
    warning,
});
