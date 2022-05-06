"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CRUD_UPDATE_SUCCESS = exports.CRUD_UPDATE_FAILURE = exports.CRUD_UPDATE_LOADING = exports.CRUD_UPDATE = exports.crudUpdate = void 0;
const __1 = require("../..");
const crudUpdate = (resource, id, data, previousData, basePath, redirectTo = 'show', refresh = true) => ({
    type: exports.CRUD_UPDATE,
    payload: { id, data, previousData },
    meta: {
        resource,
        fetch: __1.UPDATE,
        onSuccess: {
            notification: {
                body: 'ra.notification.updated',
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
exports.crudUpdate = crudUpdate;
exports.CRUD_UPDATE = 'CRUD_UPDATE';
exports.CRUD_UPDATE_LOADING = 'CRUD_UPDATE_LOADING';
exports.CRUD_UPDATE_FAILURE = 'CRUD_UPDATE_FAILURE';
exports.CRUD_UPDATE_SUCCESS = 'CRUD_UPDATE_SUCCESS';
