"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CRUD_GET_MANY_SUCCESS = exports.CRUD_GET_MANY_FAILURE = exports.CRUD_GET_MANY_LOADING = exports.CRUD_GET_MANY = exports.crudGetMany = void 0;
const __1 = require("../..");
const crudGetMany = (resource, ids) => ({
    type: exports.CRUD_GET_MANY,
    payload: { ids },
    meta: {
        resource,
        fetch: __1.GET_MANY,
        onFailure: {
            notification: {
                body: 'ra.notification.http_error',
                level: 'warning',
            },
        },
    },
});
exports.crudGetMany = crudGetMany;
exports.CRUD_GET_MANY = 'CRUD_GET_MANY';
exports.CRUD_GET_MANY_LOADING = 'CRUD_GET_MANY_LOADING';
exports.CRUD_GET_MANY_FAILURE = 'CRUD_GET_MANY_FAILURE';
exports.CRUD_GET_MANY_SUCCESS = 'CRUD_GET_MANY_SUCCESS';
