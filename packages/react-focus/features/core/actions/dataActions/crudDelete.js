"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CRUD_DELETE_SUCCESS = exports.CRUD_DELETE_FAILURE = exports.CRUD_DELETE_LOADING = exports.CRUD_DELETE = exports.crudDelete = void 0;
const __1 = require("../..");
const crudDelete = (resource, id, previousData, basePath, redirectTo = 'list', refresh = true) => ({
    type: exports.CRUD_DELETE,
    payload: { id, previousData },
    meta: {
        resource,
        fetch: __1.DELETE,
        onSuccess: {
            notification: {
                body: 'ra.notification.deleted',
                level: 'info',
                messageArgs: {
                    smart_count: 1,
                },
            },
            refresh,
            redirectTo,
            basePath,
        },
        onFailure: {
            notification: {
                body: 'ra.notification.http_error',
                level: 'warning',
            },
        },
    },
});
exports.crudDelete = crudDelete;
exports.CRUD_DELETE = 'CRUD_DELETE';
exports.CRUD_DELETE_LOADING = 'CRUD_DELETE_LOADING';
exports.CRUD_DELETE_FAILURE = 'CRUD_DELETE_FAILURE';
exports.CRUD_DELETE_SUCCESS = 'CRUD_DELETE_SUCCESS';
