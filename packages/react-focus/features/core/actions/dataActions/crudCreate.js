"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CRUD_CREATE_SUCCESS = exports.CRUD_CREATE_FAILURE = exports.CRUD_CREATE_LOADING = exports.CRUD_CREATE = exports.crudCreate = void 0;
const __1 = require("../..");
const crudCreate = (resource, data, basePath, redirectTo = 'edit') => ({
    type: exports.CRUD_CREATE,
    payload: { data },
    meta: {
        resource,
        fetch: __1.CREATE,
        onSuccess: {
            notification: {
                body: 'ra.notification.created',
                level: 'info',
                messageArgs: {
                    smart_count: 1,
                },
            },
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
exports.crudCreate = crudCreate;
exports.CRUD_CREATE = 'CRUD_CREATE';
exports.CRUD_CREATE_LOADING = 'CRUD_CREATE_LOADING';
exports.CRUD_CREATE_FAILURE = 'CRUD_CREATE_FAILURE';
exports.CRUD_CREATE_SUCCESS = 'CRUD_CREATE_SUCCESS';
