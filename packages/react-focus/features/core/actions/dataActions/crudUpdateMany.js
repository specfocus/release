"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CRUD_UPDATE_MANY_SUCCESS = exports.CRUD_UPDATE_MANY_FAILURE = exports.CRUD_UPDATE_MANY_LOADING = exports.CRUD_UPDATE_MANY = exports.crudUpdateMany = void 0;
const __1 = require("../..");
const crudUpdateMany = (resource, ids, data, basePath, refresh = true) => ({
    type: exports.CRUD_UPDATE_MANY,
    payload: { ids, data },
    meta: {
        resource,
        fetch: __1.UPDATE_MANY,
        onSuccess: {
            notification: {
                body: 'ra.notification.updated',
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
exports.crudUpdateMany = crudUpdateMany;
exports.CRUD_UPDATE_MANY = 'CRUD_UPDATE_MANY';
exports.CRUD_UPDATE_MANY_LOADING = 'CRUD_UPDATE_MANY_LOADING';
exports.CRUD_UPDATE_MANY_FAILURE = 'CRUD_UPDATE_MANY_FAILURE';
exports.CRUD_UPDATE_MANY_SUCCESS = 'CRUD_UPDATE_MANY_SUCCESS';
