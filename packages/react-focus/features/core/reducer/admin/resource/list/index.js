"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const cachedRequests_1 = __importDefault(require("./cachedRequests"));
const expanded_1 = __importDefault(require("./expanded"));
const ids_1 = __importDefault(require("./ids"));
const loadedOnce_1 = __importDefault(require("./loadedOnce"));
const params_1 = __importDefault(require("./params"));
const selectedIds_1 = __importDefault(require("./selectedIds"));
const total_1 = __importDefault(require("./total"));
const defaultReducer = () => null;
exports.default = (0, redux_1.combineReducers)({
    /**
     * ts-jest does some aggressive module mocking when unit testing reducers individually.
     * To avoid 'No reducer provided for key "..."' warnings,
     * we pass default reducers. Sorry for legibility.
     *
     * @see https://stackoverflow.com/questions/43375079/redux-warning-only-appearing-in-tests
     */
    cachedRequests: cachedRequests_1.default || defaultReducer,
    expanded: expanded_1.default || defaultReducer,
    ids: ids_1.default || defaultReducer,
    loadedOnce: loadedOnce_1.default || defaultReducer,
    params: params_1.default || defaultReducer,
    selectedIds: selectedIds_1.default || defaultReducer,
    total: total_1.default || defaultReducer,
});
