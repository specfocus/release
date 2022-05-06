"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CRUD_GET_LIST_SUCCESS = exports.CRUD_GET_LIST_FAILURE = exports.CRUD_GET_LIST_LOADING = exports.CRUD_GET_LIST = exports.crudGetList = void 0;
const __1 = require("../..");
const crudGetList = (resource, pagination, sort, filter) => ({
    type: exports.CRUD_GET_LIST,
    payload: { pagination, sort, filter },
    meta: {
        resource,
        fetch: __1.GET_LIST,
        onFailure: {
            notification: {
                body: 'ra.notification.http_error',
                level: 'warning',
            },
        },
    },
});
exports.crudGetList = crudGetList;
exports.CRUD_GET_LIST = 'CRUD_GET_LIST';
exports.CRUD_GET_LIST_LOADING = 'CRUD_GET_LIST_LOADING';
exports.CRUD_GET_LIST_FAILURE = 'CRUD_GET_LIST_FAILURE';
exports.CRUD_GET_LIST_SUCCESS = 'CRUD_GET_LIST_SUCCESS';
