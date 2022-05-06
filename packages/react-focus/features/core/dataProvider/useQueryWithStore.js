"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useQueryWithStore = void 0;
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const isEqual_1 = __importDefault(require("lodash/isEqual"));
const useDataProvider_1 = __importDefault(require("./useDataProvider"));
const useVersion_1 = __importDefault(require("../controller/useVersion"));
const getFetchType_1 = __importDefault(require("./getFetchType"));
const hooks_1 = require("../util/hooks");
const queriesThisTick = {};
/**
 * Default cache selector. Allows to cache responses by default.
 *
 * By default, custom queries are dispatched as a CUSTOM_QUERY Redux action.
 * The useDataProvider hook dispatches a CUSTOM_QUERY_SUCCESS when the response
 * comes, and the customQueries reducer stores the result in the store.
 * This selector reads the customQueries store and acts as a response cache.
 */
const defaultDataSelector = query => (state) => {
    const key = JSON.stringify(Object.assign(Object.assign({}, query), { type: (0, getFetchType_1.default)(query.type) }));
    return state.admin.customQueries[key]
        ? state.admin.customQueries[key].data
        : undefined;
};
const defaultTotalSelector = query => (state) => {
    const key = JSON.stringify(Object.assign(Object.assign({}, query), { type: (0, getFetchType_1.default)(query.type) }));
    return state.admin.customQueries[key]
        ? state.admin.customQueries[key].total
        : null;
};
const defaultIsDataLoaded = (data) => data !== undefined;
/**
 * Fetch the data provider through Redux, return the value from the store.
 *
 * The return value updates according to the request state:
 *
 * - start: { loading: true, loaded: false, refetch }
 * - success: { data: [data from response], total: [total from response], loading: false, loaded: true, refetch }
 * - error: { error: [error from response], loading: false, loaded: false, refetch }
 *
 * This hook will return the cached result when called a second time
 * with the same parameters, until the response arrives.
 *
 * @param {Object} query
 * @param {string} query.type The verb passed to th data provider, e.g. 'getList', 'getOne'
 * @param {string} query.resource A resource name, e.g. 'posts', 'comments'
 * @param {Object} query.payload The payload object, e.g; { post_id: 12 }
 * @param {Object} options
 * @param {string} options.action Redux action type
 * @param {boolean} options.enabled Flag to conditionally run the query. If it's false, the query will not run
 * @param {Function} options.onSuccess Side effect function to be executed upon success, e.g. () => refresh()
 * @param {Function} options.onFailure Side effect function to be executed upon failure, e.g. (error) => notify(error.message)
 * @param {Function} dataSelector Redux selector to get the result. Required.
 * @param {Function} totalSelector Redux selector to get the total (optional, only for LIST queries)
 * @param {Function} isDataLoaded
 *
 * @returns The current request state. Destructure as { data, total, error, loading, loaded, refetch }.
 *
 * @example
 *
 * import { useQueryWithStore } from '../app';
 *
 * const UserProfile = ({ record }) => {
 *     const { data, loading, error } = useQueryWithStore(
 *         {
 *             type: 'getOne',
 *             resource: 'users',
 *             payload: { id: record.id }
 *         },
 *         {},
 *         state => state.admin.resources.users.data[record.id]
 *     );
 *     if (loading) { return <Loading />; }
 *     if (error) { return <p>ERROR</p>; }
 *     return <div>User {data.username}</div>;
 * };
 */
const useQueryWithStore = (query, options = { action: 'CUSTOM_QUERY' }, dataSelector = defaultDataSelector(query), totalSelector = defaultTotalSelector(query), isDataLoaded = defaultIsDataLoaded) => {
    const { type, resource, payload } = query;
    const version = (0, useVersion_1.default)(); // used to allow force reload
    // used to force a refetch without relying on version
    // which might trigger other queries as well
    const [innerVersion, setInnerVersion] = (0, react_1.useState)(0);
    const requestSignature = JSON.stringify({
        query,
        options,
        version,
        innerVersion,
    });
    const requestSignatureRef = (0, react_1.useRef)(requestSignature);
    const data = (0, react_redux_1.useSelector)(dataSelector);
    const total = (0, react_redux_1.useSelector)(totalSelector);
    const refetch = (0, react_1.useCallback)(() => {
        setInnerVersion(prevInnerVersion => prevInnerVersion + 1);
    }, []);
    const [state, setState] = (0, hooks_1.useSafeSetState)({
        data,
        total,
        error: null,
        loading: (options === null || options === void 0 ? void 0 : options.enabled) === false ? false : true,
        loaded: (options === null || options === void 0 ? void 0 : options.enabled) === false ? false : isDataLoaded(data),
        refetch,
    });
    (0, react_1.useEffect)(() => {
        if (requestSignatureRef.current !== requestSignature) {
            // request has changed, reset the loading state
            requestSignatureRef.current = requestSignature;
            setState({
                data,
                total,
                error: null,
                loading: (options === null || options === void 0 ? void 0 : options.enabled) === false ? false : true,
                loaded: (options === null || options === void 0 ? void 0 : options.enabled) === false ? false : isDataLoaded(data),
                refetch,
            });
        }
        else if (!(0, isEqual_1.default)(state.data, data) || state.total !== total) {
            // the dataProvider response arrived in the Redux store
            if (typeof total !== 'undefined' && isNaN(total)) {
                console.error('Total from response is not a number. Please check your dataProvider or the API.');
            }
            else {
                setState(prevState => (Object.assign(Object.assign({}, prevState), { data,
                    total, loaded: true, loading: false })));
            }
        }
    }, [
        data,
        requestSignature,
        setState,
        state.data,
        state.total,
        total,
        isDataLoaded,
        refetch,
        options.enabled,
    ]);
    const dataProvider = (0, useDataProvider_1.default)();
    (0, react_1.useEffect)(() => {
        // When several identical queries are issued during the same tick,
        // we only pass one query to the dataProvider.
        // To achieve that, the closure keeps a list of dataProvider promises
        // issued this tick. Before calling the dataProvider, this effect
        // checks if another effect has already issued a similar dataProvider
        // call.
        if (!queriesThisTick.hasOwnProperty(requestSignature)) {
            queriesThisTick[requestSignature] = new Promise(resolve => {
                dataProvider[type](resource, payload, options)
                    .then(() => {
                    // We don't care about the dataProvider response here, because
                    // it was already passed to SUCCESS reducers by the dataProvider
                    // hook, and the result is available from the Redux store
                    // through the data and total selectors.
                    // In addition, if the query is optimistic, the response
                    // will be empty, so it should not be used at all.
                    if (requestSignature !== requestSignatureRef.current) {
                        resolve(undefined);
                    }
                    resolve({
                        error: null,
                        loading: false,
                        loaded: (options === null || options === void 0 ? void 0 : options.enabled) === false ? false : true,
                    });
                })
                    .catch(error => {
                    if (requestSignature !== requestSignatureRef.current) {
                        resolve(undefined);
                    }
                    resolve({
                        error,
                        loading: false,
                        loaded: false,
                    });
                });
            });
            // cleanup the list on next tick
            setTimeout(() => {
                delete queriesThisTick[requestSignature];
            }, 0);
        }
        (() => __awaiter(void 0, void 0, void 0, function* () {
            const newState = yield queriesThisTick[requestSignature];
            if (newState)
                setState(state => (Object.assign(Object.assign({}, state), newState)));
        }))();
        // deep equality, see https://github.com/facebook/react/issues/14476#issuecomment-471199055
    }, [requestSignature]); // eslint-disable-line
    return state;
};
exports.useQueryWithStore = useQueryWithStore;
