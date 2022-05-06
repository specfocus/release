"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../../../../core");
const initialState = [];
const idsReducer = (previousState = initialState, action) => {
    if (action.meta && action.meta.fetchResponse === core_1.GET_LIST) {
        return action.payload.data.map(({ id }) => id);
    }
    return previousState;
};
exports.default = idsReducer;
