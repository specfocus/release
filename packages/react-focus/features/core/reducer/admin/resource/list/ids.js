"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIds = void 0;
const uniq_1 = __importDefault(require("lodash/uniq"));
const actions_1 = require("../../../../actions");
const core_1 = require("../../../../core");
const initialState = [];
/**
 * List of the ids of the latest loaded page, regardless of params
 *
 * When loading the list for the first time, useListController grabs the ids
 * from the cachedRequests reducer (not this ids reducer). It's only when the user
 * changes page, sort, or filter, that the useListController hook uses the ids
 * reducer, so as to show the previous list of results while loading the new
 * list (instead of displaying a blank page each time the list params change).
 *
 * @see useListController
 *
 */
const idsReducer = (previousState = initialState, action) => {
    if (action.meta && action.meta.optimistic) {
        if (action.meta.fetch === core_1.DELETE) {
            const index = previousState
                .map(el => el === action.payload.id) // eslint-disable-line eqeqeq
                .indexOf(true);
            if (index === -1) {
                return previousState;
            }
            return [
                ...previousState.slice(0, index),
                ...previousState.slice(index + 1),
            ];
        }
        if (action.meta.fetch === core_1.DELETE_MANY) {
            const newState = previousState.filter(el => !action.payload.ids.includes(el));
            return newState;
        }
    }
    switch (action.type) {
        case actions_1.CRUD_GET_LIST_SUCCESS:
            return action.payload.data.map(({ id }) => id);
        case actions_1.CRUD_CREATE_SUCCESS:
            return (0, uniq_1.default)([action.payload.data.id, ...previousState]);
        default:
            return previousState;
    }
};
exports.default = idsReducer;
const getIds = state => state;
exports.getIds = getIds;
