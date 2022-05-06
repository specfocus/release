"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fetchActions_1 = require("../../actions/fetchActions");
const loadingReducer = (previousState = 0, { type }) => {
    switch (type) {
        case fetchActions_1.FETCH_START:
            return previousState + 1;
        case fetchActions_1.FETCH_END:
        case fetchActions_1.FETCH_ERROR:
        case fetchActions_1.FETCH_CANCEL:
            return Math.max(previousState - 1, 0);
        default:
            return previousState;
    }
};
exports.default = loadingReducer;
