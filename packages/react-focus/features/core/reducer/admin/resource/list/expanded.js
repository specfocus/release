"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const listActions_1 = require("../../../../actions/listActions");
const initialState = [];
const expanded = (previousState = initialState, action) => {
    if (action.type === listActions_1.TOGGLE_LIST_ITEM_EXPAND) {
        const index = previousState
            .map(el => el == action.payload) // eslint-disable-line eqeqeq
            .indexOf(true);
        if (index === -1) {
            // expand
            return [...previousState, action.payload];
        }
        else {
            // close
            return [
                ...previousState.slice(0, index),
                ...previousState.slice(index + 1),
            ];
        }
    }
    return previousState;
};
exports.default = expanded;
