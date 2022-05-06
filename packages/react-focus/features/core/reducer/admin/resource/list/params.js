"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const listActions_1 = require("../../../../actions/listActions");
const defaultState = {
    sort: null,
    order: null,
    page: 1,
    perPage: null,
    filter: {},
};
const paramsReducer = (previousState = defaultState, action) => {
    switch (action.type) {
        case listActions_1.CRUD_CHANGE_LIST_PARAMS:
            return action.payload;
        default:
            return previousState;
    }
};
exports.default = paramsReducer;
