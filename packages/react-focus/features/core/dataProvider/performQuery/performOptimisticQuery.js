"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.performOptimisticQuery = void 0;
const validateResponseFormat_1 = __importDefault(require("../validateResponseFormat"));
const getFetchType_1 = __importDefault(require("../getFetchType"));
const undoActions_1 = require("../../actions/undoActions");
const fetchActions_1 = require("../../actions/fetchActions");
const stackedCalls_1 = require("./stackedCalls");
/**
 * In optimistic mode, the useDataProvider hook dispatches an optimistic action
 * and executes the success side effects right away. Then it immediately calls
 * the dataProvider.
 *
 * We call that "optimistic" because the hook returns a resolved Promise
 * immediately (although it has an empty value). That only works if the
 * caller reads the result from the Redux store, not from the Promise.
 */
const performOptimisticQuery = ({ type, payload, resource, action, rest, onSuccess, onFailure, dataProvider, dispatch, logoutIfAccessDenied, allArguments, }) => {
    dispatch((0, undoActions_1.startOptimisticMode)());
    dispatch({
        type: action,
        payload,
        meta: Object.assign({ resource }, rest),
    });
    dispatch({
        type: `${action}_OPTIMISTIC`,
        payload,
        meta: {
            resource,
            fetch: (0, getFetchType_1.default)(type),
            optimistic: true,
        },
    });
    onSuccess && onSuccess({});
    setTimeout(() => {
        dispatch((0, undoActions_1.stopOptimisticMode)());
        dispatch({
            type: `${action}_LOADING`,
            payload,
            meta: Object.assign({ resource }, rest),
        });
        dispatch({ type: fetchActions_1.FETCH_START });
        try {
            dataProvider[type]
                .apply(dataProvider, typeof resource !== 'undefined'
                ? [resource, payload]
                : allArguments)
                .then(response => {
                if (process.env.NODE_ENV !== 'production') {
                    (0, validateResponseFormat_1.default)(response, type);
                }
                dispatch({
                    type: `${action}_SUCCESS`,
                    payload: response,
                    requestPayload: payload,
                    meta: Object.assign(Object.assign({}, rest), { resource, fetchResponse: (0, getFetchType_1.default)(type), fetchStatus: fetchActions_1.FETCH_END }),
                });
                dispatch({ type: fetchActions_1.FETCH_END });
                (0, stackedCalls_1.replayStackedCalls)();
            })
                .catch(error => {
                if (process.env.NODE_ENV !== 'production') {
                    console.error(error);
                }
                return logoutIfAccessDenied(error).then(loggedOut => {
                    if (loggedOut)
                        return;
                    dispatch({
                        type: `${action}_FAILURE`,
                        error: error.message ? error.message : error,
                        payload: error.body ? error.body : null,
                        requestPayload: payload,
                        meta: Object.assign(Object.assign({}, rest), { resource, fetchResponse: (0, getFetchType_1.default)(type), fetchStatus: fetchActions_1.FETCH_ERROR }),
                    });
                    dispatch({ type: fetchActions_1.FETCH_ERROR, error });
                    onFailure && onFailure(error);
                });
            });
        }
        catch (e) {
            if (process.env.NODE_ENV !== 'production') {
                console.error(e);
            }
            throw new Error('The dataProvider threw an error. It should return a rejected Promise instead.');
        }
    });
    return Promise.resolve({});
};
exports.performOptimisticQuery = performOptimisticQuery;
