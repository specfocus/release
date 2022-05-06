"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CRUD_GET_ONE_SUCCESS = exports.CRUD_GET_ONE_FAILURE = exports.CRUD_GET_ONE_LOADING = exports.CRUD_GET_ONE = exports.crudGetOne = void 0;
const __1 = require("../..");
const crudGetOne = (resource, id, basePath, refresh = true) => ({
    type: exports.CRUD_GET_ONE,
    payload: { id },
    meta: {
        resource,
        fetch: __1.GET_ONE,
        basePath,
        onFailure: {
            notification: {
                body: 'ra.notification.item_doesnt_exist',
                level: 'warning',
            },
            redirectTo: 'list',
            refresh,
        },
    },
});
exports.crudGetOne = crudGetOne;
exports.CRUD_GET_ONE = 'CRUD_GET_ONE';
exports.CRUD_GET_ONE_LOADING = 'CRUD_GET_ONE_LOADING';
exports.CRUD_GET_ONE_FAILURE = 'CRUD_GET_ONE_FAILURE';
exports.CRUD_GET_ONE_SUCCESS = 'CRUD_GET_ONE_SUCCESS';
