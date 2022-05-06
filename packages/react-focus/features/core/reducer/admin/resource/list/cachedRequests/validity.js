"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../../../../core");
const initialState = null;
const validityReducer = (previousState = initialState, { payload, meta }) => {
    switch (meta.fetchResponse) {
        case core_1.GET_LIST: {
            if (payload.validUntil) {
                // store the validity date
                return payload.validUntil;
            }
            else {
                // remove the validity date
                return initialState;
            }
        }
        default:
            return previousState;
    }
};
exports.default = validityReducer;
