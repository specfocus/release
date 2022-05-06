"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const actions_1 = require("../../../../actions");
const core_1 = require("../../../../core");
const initialState = [];
const selectedIdsReducer = (previousState = initialState, action) => {
    if (action.type === actions_1.SET_LIST_SELECTED_IDS) {
        return action.payload;
    }
    if (action.type === actions_1.TOGGLE_LIST_ITEM) {
        const index = previousState.indexOf(action.payload);
        if (index > -1) {
            return [
                ...previousState.slice(0, index),
                ...previousState.slice(index + 1),
            ];
        }
        else {
            return [...previousState, action.payload];
        }
    }
    if (action.type === actions_1.CRUD_DELETE_SUCCESS) {
        const index = previousState.indexOf(action.payload.data.id);
        if (index > -1) {
            return [
                ...previousState.slice(0, index),
                ...previousState.slice(index + 1),
            ];
        }
    }
    if (action.meta && action.meta.optimistic) {
        if (action.meta.fetch === core_1.DELETE) {
            const index = previousState.indexOf(action.payload.id);
            if (index === -1) {
                return previousState;
            }
            return [
                ...previousState.slice(0, index),
                ...previousState.slice(index + 1),
            ];
        }
        if (action.meta.fetch === core_1.DELETE_MANY) {
            return previousState.filter(id => !action.payload.ids.includes(id));
        }
    }
    return action.meta && action.meta.unselectAll
        ? initialState
        : previousState;
};
exports.default = selectedIdsReducer;
