"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CRUD_GET_ALL_SUCCESS = exports.CRUD_GET_ALL_FAILURE = exports.CRUD_GET_ALL_LOADING = exports.CRUD_GET_ALL = exports.crudGetAll = void 0;
const __1 = require("../..");
const crudGetAll = (resource, sort, filter, maxResults, callback) => ({
    type: exports.CRUD_GET_ALL,
    payload: { sort, filter, pagination: { page: 1, perPage: maxResults } },
    meta: {
        resource,
        fetch: __1.GET_LIST,
        onSuccess: {
            callback,
        },
        onFailure: {
            notification: {
                body: 'ra.notification.http_error',
                level: 'warning',
            },
        },
    },
});
exports.crudGetAll = crudGetAll;
exports.CRUD_GET_ALL = 'CRUD_GET_ALL';
exports.CRUD_GET_ALL_LOADING = 'CRUD_GET_ALL_LOADING';
exports.CRUD_GET_ALL_FAILURE = 'CRUD_GET_ALL_FAILURE';
exports.CRUD_GET_ALL_SUCCESS = 'CRUD_GET_ALL_SUCCESS';
