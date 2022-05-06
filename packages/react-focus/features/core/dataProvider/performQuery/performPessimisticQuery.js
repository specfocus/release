"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.performPessimisticQuery = void 0;
const validateResponseFormat_1 = __importDefault(require("../validateResponseFormat"));
const getFetchType_1 = __importDefault(require("../getFetchType"));
const fetchActions_1 = require("../../actions/fetchActions");
/**
 * In pessimistic mode, the useDataProvider hook calls the dataProvider. When a
 * successful response arrives, the hook dispatches a SUCCESS action, executes
 * success side effects and returns the response. If the response is an error,
 * the hook dispatches a FAILURE action, executes failure side effects, and
 * throws an error.
 */
const performPessimisticQuery = ({ type, payload, resource, action, rest, onSuccess, onFailure, dataProvider, dispatch, logoutIfAccessDenied, allArguments, }) => {
    dispatch({
        type: action,
        payload,
        meta: Object.assign({ resource }, rest),
    });
    dispatch({
        type: `${action}_LOADING`,
        payload,
        meta: Object.assign({ resource }, rest),
    });
    dispatch({ type: fetchActions_1.FETCH_START });
    try {
        return dataProvider[type]
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
            onSuccess && onSuccess(response);
            return response;
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
                throw error;
            });
        });
    }
    catch (e) {
        if (process.env.NODE_ENV !== 'production') {
            console.error(e);
        }
        throw new Error('The dataProvider threw an error. It should return a rejected Promise instead.');
    }
};
exports.performPessimisticQuery = performPessimisticQuery;
