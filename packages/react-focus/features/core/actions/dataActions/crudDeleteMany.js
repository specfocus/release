"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CRUD_DELETE_MANY_SUCCESS = exports.CRUD_DELETE_MANY_FAILURE = exports.CRUD_DELETE_MANY_LOADING = exports.CRUD_DELETE_MANY = exports.crudDeleteMany = void 0;
const __1 = require("../..");
const crudDeleteMany = (resource, ids, basePath, refresh = true) => ({
    type: exports.CRUD_DELETE_MANY,
    payload: { ids },
    meta: {
        resource,
        fetch: __1.DELETE_MANY,
        onSuccess: {
            notification: {
                body: 'ra.notification.deleted',
                level: 'info',
                messageArgs: {
                    smart_count: ids.length,
                },
            },
            basePath,
            refresh,
            unselectAll: true,
        },
        onFailure: {
            notification: {
                body: 'ra.notification.http_error',
                level: 'warning',
            },
        },
    },
});
exports.crudDeleteMany = crudDeleteMany;
exports.CRUD_DELETE_MANY = 'CRUD_DELETE_MANY';
exports.CRUD_DELETE_MANY_LOADING = 'CRUD_DELETE_MANY_LOADING';
exports.CRUD_DELETE_MANY_FAILURE = 'CRUD_DELETE_MANY_FAILURE';
exports.CRUD_DELETE_MANY_SUCCESS = 'CRUD_DELETE_MANY_SUCCESS';
