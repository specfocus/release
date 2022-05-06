"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crudGetMatchingAccumulate = exports.CRUD_GET_MATCHING_ACCUMULATE = exports.crudGetManyAccumulate = exports.CRUD_GET_MANY_ACCUMULATE = void 0;
const dataActions_1 = require("./dataActions");
exports.CRUD_GET_MANY_ACCUMULATE = 'CRUD_GET_MANY_ACCUMULATE';
const crudGetManyAccumulate = (resource, ids) => ({
    type: exports.CRUD_GET_MANY_ACCUMULATE,
    payload: { resource, ids },
    meta: { accumulate: dataActions_1.crudGetMany },
});
exports.crudGetManyAccumulate = crudGetManyAccumulate;
exports.CRUD_GET_MATCHING_ACCUMULATE = 'CRUD_GET_MATCHING_ACCUMULATE';
const crudGetMatchingAccumulate = (reference, relatedTo, pagination, sort, filter) => {
    const action = (0, dataActions_1.crudGetMatching)(reference, relatedTo, pagination, sort, filter);
    return {
        type: exports.CRUD_GET_MATCHING_ACCUMULATE,
        meta: {
            accumulate: () => action,
            accumulateValues: () => true,
            accumulateKey: JSON.stringify(Object.assign({ resource: reference, relatedTo }, action.payload)),
        },
    };
};
exports.crudGetMatchingAccumulate = crudGetMatchingAccumulate;
