"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doQuery = void 0;
const performOptimisticQuery_1 = require("./performOptimisticQuery");
const performUndoableQuery_1 = require("./performUndoableQuery");
const performPessimisticQuery_1 = require("./performPessimisticQuery");
const answerWithCache_1 = require("./answerWithCache");
const replyWithCache_1 = require("../replyWithCache");
/**
 * Execute a dataProvider call
 *
 * Delegates execution to cache, optimistic, undoable, or pessimistic queries
 *
 * @see useDataProvider
 */
const doQuery = ({ type, payload, resource, action, rest, onSuccess, onFailure, dataProvider, dispatch, logoutIfAccessDenied, allArguments, store, mutationMode, }) => {
    const resourceState = store.getState().admin.resources[resource];
    if ((0, replyWithCache_1.canReplyWithCache)(type, payload, resourceState)) {
        return (0, answerWithCache_1.answerWithCache)({
            type,
            payload,
            resource,
            action,
            rest,
            onSuccess,
            resourceState,
            dispatch,
        });
    }
    else if (mutationMode === 'optimistic') {
        return (0, performOptimisticQuery_1.performOptimisticQuery)({
            type,
            payload,
            resource,
            action,
            rest,
            onSuccess,
            onFailure,
            dataProvider,
            dispatch,
            logoutIfAccessDenied,
            allArguments,
        });
    }
    else if (mutationMode === 'undoable') {
        return (0, performUndoableQuery_1.performUndoableQuery)({
            type,
            payload,
            resource,
            action,
            rest,
            onSuccess,
            onFailure,
            dataProvider,
            dispatch,
            logoutIfAccessDenied,
            allArguments,
        });
    }
    else {
        return (0, performPessimisticQuery_1.performPessimisticQuery)({
            type,
            payload,
            resource,
            action,
            rest,
            onSuccess,
            onFailure,
            dataProvider,
            dispatch,
            logoutIfAccessDenied,
            allArguments,
        });
    }
};
exports.doQuery = doQuery;
