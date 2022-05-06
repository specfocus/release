"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useQuery = void 0;
const react_1 = require("react");
const hooks_1 = require("../util/hooks");
const useDataProvider_1 = __importDefault(require("./useDataProvider"));
const useDataProviderWithDeclarativeSideEffects_1 = __importDefault(require("./useDataProviderWithDeclarativeSideEffects"));
const useVersion_1 = __importDefault(require("../controller/useVersion"));
/**
 * Call the data provider on mount
 *
 * The return value updates according to the request state:
 *
 * - start: { loading: true, loaded: false, refetch }
 * - success: { data: [data from response], total: [total from response], loading: false, loaded: true, refetch }
 * - error: { error: [error from response], loading: false, loaded: false, refetch }
 *
 * @param {Object} query
 * @param {string} query.type The method called on the data provider, e.g. 'getList', 'getOne'. Can also be a custom method if the dataProvider supports is.
 * @param {string} query.resource A resource name, e.g. 'posts', 'comments'
 * @param {Object} query.payload The payload object, e.g; { post_id: 12 }
 * @param {Object} options
 * @param {string} options.action Redux action type
 * @param {boolean} options.enabled Flag to conditionally run the query. True by default. If it's false, the query will not run
 * @param {Function} options.onSuccess Side effect function to be executed upon success, e.g. () => refresh()
 * @param {Function} options.onFailure Side effect function to be executed upon failure, e.g. (error) => notify(error.message)
 * @param {boolean} options.withDeclarativeSideEffectsSupport Set to true to support legacy side effects e.g. { onSuccess: { refresh: true } }
 *
 * @returns The current request state. Destructure as { data, total, error, loading, loaded, refetch }.
 *
 * @example
 *
 * import { useQuery } from '../app';
 *
 * const UserProfile = ({ record }) => {
 *     const { data, loading, error } = useQuery({
 *         type: 'getOne',
 *         resource: 'users',
 *         payload: { id: record.id }
 *     });
 *     if (loading) { return <Loading />; }
 *     if (error) { return <p>ERROR</p>; }
 *     return <div>User {data.username}</div>;
 * };
 *
 * @example
 *
 * import { useQuery } from '../app';
 *
 * const payload = {
 *    pagination: { page: 1, perPage: 10 },
 *    sort: { field: 'username', order: 'ASC' },
 * };
 * const UserList = () => {
 *     const { data, total, loading, error } = useQuery({
 *         type: 'getList',
 *         resource: 'users',
 *         payload
 *     });
 *     if (loading) { return <Loading />; }
 *     if (error) { return <p>ERROR</p>; }
 *     return (
 *         <div>
 *             <p>Total users: {total}</p>
 *             <ul>
 *                 {data.map(user => <li key={user.username}>{user.username}</li>)}
 *             </ul>
 *         </div>
 *     );
 * };
 */
const useQuery = (query, options = { onSuccess: undefined }) => {
    const { type, resource, payload } = query;
    const { withDeclarativeSideEffectsSupport } = options, otherOptions = __rest(options, ["withDeclarativeSideEffectsSupport"]);
    const version = (0, useVersion_1.default)(); // used to allow force reload
    // used to force a refetch without relying on version
    // which might trigger other queries as well
    const [innerVersion, setInnerVersion] = (0, react_1.useState)(0);
    const refetch = (0, react_1.useCallback)(() => {
        setInnerVersion(prevInnerVersion => prevInnerVersion + 1);
    }, []);
    const requestSignature = JSON.stringify({
        query,
        options: otherOptions,
        version,
        innerVersion,
    });
    const [state, setState] = (0, hooks_1.useSafeSetState)({
        data: undefined,
        error: null,
        total: null,
        loading: true,
        loaded: false,
        refetch,
    });
    const dataProvider = (0, useDataProvider_1.default)();
    const dataProviderWithDeclarativeSideEffects = (0, useDataProviderWithDeclarativeSideEffects_1.default)();
    /* eslint-disable react-hooks/exhaustive-deps */
    (0, react_1.useEffect)(() => {
        /**
         * Support legacy side effects, e.g. { onSuccess: { refresh: true, unSelectAll: true }}
         *
         * @deprecated to be removed in 4.0
         */
        const finalDataProvider = withDeclarativeSideEffectsSupport
            ? dataProviderWithDeclarativeSideEffects
            : dataProvider;
        setState(prevState => (Object.assign(Object.assign({}, prevState), { loading: true })));
        finalDataProvider[type]
            .apply(finalDataProvider, typeof resource !== 'undefined'
            ? [resource, payload, otherOptions]
            : [payload, otherOptions])
            .then(({ data, total }) => {
            setState({
                data,
                total,
                loading: false,
                loaded: true,
                refetch,
            });
        })
            .catch(error => {
            setState({
                error,
                loading: false,
                loaded: false,
                refetch,
            });
        });
    }, [
        requestSignature,
        dataProvider,
        dataProviderWithDeclarativeSideEffects,
        setState,
    ]);
    /* eslint-enable react-hooks/exhaustive-deps */
    return state;
};
exports.useQuery = useQuery;
