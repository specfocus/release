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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useIsAutomaticRefreshEnabled = exports.withDataProvider = exports.useRefreshWhenVisible = exports.useDeleteMany = exports.useDelete = exports.useCreate = exports.useUpdateMany = exports.useUpdate = exports.useGetMatching = exports.useGetManyReference = exports.useGetMany = exports.useGetMainList = exports.useGetList = exports.useGetOne = exports.useMutation = exports.useDataProvider = exports.undoableEventEmitter = exports.Query = exports.Mutation = exports.HttpError = exports.fetchUtils = exports.DataProviderContext = exports.convertLegacyDataProvider = exports.cacheDataProviderProxy = void 0;
const convertLegacyDataProvider_1 = __importDefault(require("./convertLegacyDataProvider"));
exports.convertLegacyDataProvider = convertLegacyDataProvider_1.default;
const DataProviderContext_1 = __importDefault(require("./DataProviderContext"));
exports.DataProviderContext = DataProviderContext_1.default;
const HttpError_1 = __importDefault(require("./HttpError"));
exports.HttpError = HttpError_1.default;
const fetchUtils = __importStar(require("./fetch"));
exports.fetchUtils = fetchUtils;
const Mutation_1 = __importDefault(require("./Mutation"));
exports.Mutation = Mutation_1.default;
const Query_1 = __importDefault(require("./Query"));
exports.Query = Query_1.default;
const cacheDataProviderProxy_1 = __importDefault(require("./cacheDataProviderProxy"));
exports.cacheDataProviderProxy = cacheDataProviderProxy_1.default;
const undoableEventEmitter_1 = __importDefault(require("./undoableEventEmitter"));
exports.undoableEventEmitter = undoableEventEmitter_1.default;
const useDataProvider_1 = __importDefault(require("./useDataProvider"));
exports.useDataProvider = useDataProvider_1.default;
const useMutation_1 = __importDefault(require("./useMutation"));
exports.useMutation = useMutation_1.default;
const withDataProvider_1 = __importDefault(require("./withDataProvider"));
exports.withDataProvider = withDataProvider_1.default;
const useGetOne_1 = __importDefault(require("./useGetOne"));
exports.useGetOne = useGetOne_1.default;
const useGetList_1 = __importDefault(require("./useGetList"));
exports.useGetList = useGetList_1.default;
const useGetMainList_1 = require("./useGetMainList");
Object.defineProperty(exports, "useGetMainList", { enumerable: true, get: function () { return useGetMainList_1.useGetMainList; } });
const useGetMany_1 = __importDefault(require("./useGetMany"));
exports.useGetMany = useGetMany_1.default;
const useGetManyReference_1 = __importDefault(require("./useGetManyReference"));
exports.useGetManyReference = useGetManyReference_1.default;
const useGetMatching_1 = __importDefault(require("./useGetMatching"));
exports.useGetMatching = useGetMatching_1.default;
const useUpdate_1 = __importDefault(require("./useUpdate"));
exports.useUpdate = useUpdate_1.default;
const useUpdateMany_1 = __importDefault(require("./useUpdateMany"));
exports.useUpdateMany = useUpdateMany_1.default;
const useCreate_1 = __importDefault(require("./useCreate"));
exports.useCreate = useCreate_1.default;
const useDelete_1 = __importDefault(require("./useDelete"));
exports.useDelete = useDelete_1.default;
const useDeleteMany_1 = __importDefault(require("./useDeleteMany"));
exports.useDeleteMany = useDeleteMany_1.default;
const useRefreshWhenVisible_1 = __importDefault(require("./useRefreshWhenVisible"));
exports.useRefreshWhenVisible = useRefreshWhenVisible_1.default;
const useIsAutomaticRefreshEnabled_1 = __importDefault(require("./useIsAutomaticRefreshEnabled"));
exports.useIsAutomaticRefreshEnabled = useIsAutomaticRefreshEnabled_1.default;
__exportStar(require("./useQueryWithStore"), exports);
__exportStar(require("./useQuery"), exports);
