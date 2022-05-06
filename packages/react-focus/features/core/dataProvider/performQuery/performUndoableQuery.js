"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.performUndoableQuery = void 0;
const validateResponseFormat_1 = __importDefault(require("../validateResponseFormat"));
const getFetchType_1 = __importDefault(require("../getFetchType"));
const undoableEventEmitter_1 = __importDefault(require("../undoableEventEmitter"));
const undoActions_1 = require("../../actions/undoActions");
const notificationActions_1 = require("../../actions/notificationActions");
const uiActions_1 = require("../../actions/uiActions");
const fetchActions_1 = require("../../actions/fetchActions");
const stackedCalls_1 = require("./stackedCalls");
/**
 * In undoable mode, the hook dispatches an optimistic action and executes
 * the success side effects right away. Then it waits for a few seconds to
 * actually call the dataProvider - unless the user dispatches an Undo action.
 *
 * We call that "optimistic" because the hook returns a resolved Promise
 * immediately (although it has an empty value). That only works if the
 * caller reads the result from the Redux store, not from the Promise.
 */
const performUndoableQuery = ({ type, payload, resource, action, rest, onSuccess, onFailure, dataProvider, dispatch, logoutIfAccessDenied, allArguments, }) => {
    dispatch((0, undoActions_1.startOptimisticMode)());
    if (window) {
        window.addEventListener('beforeunload', warnBeforeClosingWindow, {
            capture: true,
        });
    }
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
    undoableEventEmitter_1.default.once('end', ({ isUndo }) => {
        dispatch((0, undoActions_1.stopOptimisticMode)());
        if (isUndo) {
            dispatch((0, notificationActions_1.showNotification)('ra.notification.canceled'));
            dispatch((0, uiActions_1.refreshView)());
            if (window) {
                window.removeEventListener('beforeunload', warnBeforeClosingWindow, {
                    capture: true,
                });
            }
            return;
        }
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
                if (window) {
                    window.removeEventListener('beforeunload', warnBeforeClosingWindow, {
                        capture: true,
                    });
                }
                (0, stackedCalls_1.replayStackedCalls)();
            })
                .catch(error => {
                if (window) {
                    window.removeEventListener('beforeunload', warnBeforeClosingWindow, {
                        capture: true,
                    });
                }
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
exports.performUndoableQuery = performUndoableQuery;
// event listener added as window.onbeforeunload when starting optimistic mode, and removed when it ends
const warnBeforeClosingWindow = event => {
    event.preventDefault(); // standard
    event.returnValue = ''; // Chrome
    return 'Your latest modifications are not yet sent to the server. Are you sure?'; // Old IE
};
