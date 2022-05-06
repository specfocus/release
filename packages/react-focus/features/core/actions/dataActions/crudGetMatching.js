"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CRUD_GET_MATCHING_SUCCESS = exports.CRUD_GET_MATCHING_FAILURE = exports.CRUD_GET_MATCHING_LOADING = exports.CRUD_GET_MATCHING = exports.crudGetMatching = void 0;
const __1 = require("../..");
const crudGetMatching = (reference, relatedTo, pagination, sort, filter) => ({
    type: exports.CRUD_GET_MATCHING,
    payload: { pagination, sort, filter },
    meta: {
        resource: reference,
        relatedTo,
        fetch: __1.GET_LIST,
        onFailure: {
            notification: {
                body: 'ra.notification.http_error',
                level: 'warning',
            },
        },
    },
});
exports.crudGetMatching = crudGetMatching;
exports.CRUD_GET_MATCHING = 'CRUD_GET_MATCHING';
exports.CRUD_GET_MATCHING_LOADING = 'CRUD_GET_MATCHING_LOADING';
exports.CRUD_GET_MATCHING_FAILURE = 'CRUD_GET_MATCHING_FAILURE';
exports.CRUD_GET_MATCHING_SUCCESS = 'CRUD_GET_MATCHING_SUCCESS';
