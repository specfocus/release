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
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const DataProviderContext_1 = __importDefault(require("./DataProviderContext"));
const defaultDataProvider_1 = __importDefault(require("./defaultDataProvider"));
const useLogoutIfAccessDenied_1 = __importDefault(require("../auth/useLogoutIfAccessDenied"));
const getDataProviderCallArguments_1 = require("./getDataProviderCallArguments");
const performQuery_1 = require("./performQuery");
/**
 * Hook for getting a dataProvider
 *
 * Gets a dataProvider object, which behaves just like the real dataProvider
 * (same methods returning a Promise). But it's actually a Proxy object, which
 * dispatches Redux actions along the process. The benefit is that ../../app
 * tracks the loading state when using this hook, and stores results in the
 * Redux store for future use.
 *
 * In addition to the 2 usual parameters of the dataProvider methods (resource,
 * payload), the Proxy supports a third parameter for every call. It's an
 * object literal which may contain side effects, or make the action optimistic
 * (with mutationMode: optimistic) or undoable (with mutationMode: undoable).
 *
 * @return dataProvider
 *
 * @example Basic usage
 *
 * import * as React from 'react';
 * import { useState } from 'react';
 * import { useDataProvider } from '../app';
 *
 * const PostList = () => {
 *      const [posts, setPosts] = useState([])
 *      const dataProvider = useDataProvider();
 *      useEffect(() => {
 *          dataProvider.getList('posts', { filter: { status: 'pending' }})
 *            .then(({ data }) => setPosts(data));
 *      }, [])
 *
 *      return (
 *          <Fragment>
 *              {posts.map((post, key) => <PostDetail post={post} key={key} />)}
 *          </Fragment>
 *     );
 * }
 *
 * @example Handling all states (loading, error, success)
 *
 * import { useState, useEffect } from 'react';
 * import { useDataProvider } from '../app';
 *
 * const UserProfile = ({ userId }) => {
 *     const dataProvider = useDataProvider();
 *     const [user, setUser] = useState();
 *     const [loading, setLoading] = useState(true);
 *     const [error, setError] = useState();
 *     useEffect(() => {
 *         dataProvider.getOne('users', { id: userId })
 *             .then(({ data }) => {
 *                 setUser(data);
 *                 setLoading(false);
 *             })
 *             .catch(error => {
 *                 setError(error);
 *                 setLoading(false);
 *             })
 *     }, []);
 *
 *     if (loading) return <Loading />;
 *     if (error) return <Error />
 *     if (!user) return null;
 *
 *     return (
 *         <ul>
 *             <li>Name: {user.name}</li>
 *             <li>Email: {user.email}</li>
 *         </ul>
 *     )
 * }
 *
 * @example Action customization
 *
 * dataProvider.getOne('users', { id: 123 });
 * // will dispatch the following actions:
 * // - CUSTOM_FETCH
 * // - CUSTOM_FETCH_LOADING
 * // - FETCH_START
 * // - CUSTOM_FETCH_SUCCESS
 * // - FETCH_END
 *
 * dataProvider.getOne('users', { id: 123 }, { action: CRUD_GET_ONE });
 * // will dispatch the following actions:
 * // - CRUD_GET_ONE
 * // - CRUD_GET_ONE_LOADING
 * // - FETCH_START
 * // - CRUD_GET_ONE_SUCCESS
 * // - FETCH_END
 */
const useDataProvider = () => {
    const dispatch = (0, react_redux_1.useDispatch)();
    const dataProvider = (0, react_1.useContext)(DataProviderContext_1.default) || defaultDataProvider_1.default;
    // optimistic mode can be triggered by a previous optimistic or undoable query
    const isOptimistic = (0, react_redux_1.useSelector)((state) => state.admin.ui.optimistic);
    const store = (0, react_redux_1.useStore)();
    const logoutIfAccessDenied = (0, useLogoutIfAccessDenied_1.default)();
    const dataProviderProxy = (0, react_1.useMemo)(() => {
        return new Proxy(dataProvider, {
            get: (target, name) => {
                if (typeof name === 'symbol') {
                    return;
                }
                return (...args) => {
                    const { resource, payload, allArguments, options, } = (0, getDataProviderCallArguments_1.getDataProviderCallArguments)(args);
                    const type = name.toString();
                    const _a = options || {}, { action = 'CUSTOM_FETCH', undoable = false, onSuccess = undefined, onFailure = undefined, mutationMode = undoable ? 'undoable' : 'pessimistic', enabled = true } = _a, rest = __rest(_a, ["action", "undoable", "onSuccess", "onFailure", "mutationMode", "enabled"]);
                    if (typeof dataProvider[type] !== 'function') {
                        throw new Error(`Unknown dataProvider function: ${type}`);
                    }
                    if (onSuccess && typeof onSuccess !== 'function') {
                        throw new Error('The onSuccess option must be a function');
                    }
                    if (onFailure && typeof onFailure !== 'function') {
                        throw new Error('The onFailure option must be a function');
                    }
                    if (mutationMode === 'undoable' && !onSuccess) {
                        throw new Error('You must pass an onSuccess callback calling notify() to use the undoable mode');
                    }
                    if (typeof enabled !== 'boolean') {
                        throw new Error('The enabled option must be a boolean');
                    }
                    if (enabled === false) {
                        return Promise.resolve({});
                    }
                    const params = {
                        resource,
                        type,
                        payload,
                        action,
                        onFailure,
                        onSuccess,
                        rest,
                        mutationMode,
                        // these ones are passed down because of the rules of hooks
                        dataProvider,
                        store,
                        dispatch,
                        logoutIfAccessDenied,
                        allArguments,
                    };
                    if (isOptimistic) {
                        // When in optimistic mode, fetch calls aren't executed
                        // right away. Instead, they are are stacked, to be
                        // executed once the dataProvider leaves optimistic mode.
                        // In the meantime, the admin uses data from the store.
                        if (mutationMode === 'undoable' ||
                            mutationMode === 'optimistic') {
                            // optimistic and undoable calls are added to a
                            // specific stack, as they must be replayed first
                            (0, performQuery_1.stackOptimisticCall)(params);
                        }
                        else {
                            // pessimistic calls are added to the regular stack
                            // and will be replayed last
                            (0, performQuery_1.stackCall)(params);
                        }
                        // Return a Promise that only resolves when the optimistic call was made
                        // otherwise hooks like useQueryWithStore will return loaded = true
                        // before the content actually reaches the Redux store.
                        // But as we can't determine when this particular query was finished,
                        // the Promise resolves only when *all* optimistic queries are done.
                        return waitFor(() => (0, performQuery_1.getRemainingStackedCalls)() === 0);
                    }
                    else {
                        return (0, performQuery_1.doQuery)(params);
                    }
                };
            },
        });
    }, [dataProvider, dispatch, isOptimistic, logoutIfAccessDenied, store]);
    return dataProviderProxy;
};
// get a Promise that resolves after a delay in milliseconds
const later = (delay = 100) => new Promise(function (resolve) {
    setTimeout(resolve, delay);
});
// get a Promise that resolves once a condition is satisfied
const waitFor = (condition) => new Promise(resolve => condition()
    ? resolve()
    : later().then(() => waitFor(condition).then(() => resolve())));
exports.default = useDataProvider;
