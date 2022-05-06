"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataActions_1 = require("../../../../actions/dataActions");
const core_1 = require("../../../../core");
const totalReducer = (previousState = null, action) => {
    if (action.type === dataActions_1.CRUD_GET_LIST_SUCCESS) {
        return action.payload.total;
    }
    if (action.meta && action.meta.optimistic) {
        if (action.meta.fetch === core_1.DELETE) {
            return previousState === null ? null : previousState - 1;
        }
        if (action.meta.fetch === core_1.DELETE_MANY) {
            return previousState === null
                ? null
                : previousState - action.payload.ids.length;
        }
    }
    return previousState;
};
exports.default = totalReducer;
