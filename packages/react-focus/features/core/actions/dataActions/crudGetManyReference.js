"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CRUD_GET_MANY_REFERENCE_SUCCESS = exports.CRUD_GET_MANY_REFERENCE_FAILURE = exports.CRUD_GET_MANY_REFERENCE_LOADING = exports.CRUD_GET_MANY_REFERENCE = exports.crudGetManyReference = void 0;
const __1 = require("../..");
const crudGetManyReference = (reference, target, id, relatedTo, pagination, sort, filter, source) => ({
    type: exports.CRUD_GET_MANY_REFERENCE,
    payload: { target, id, pagination, sort, filter, source },
    meta: {
        resource: reference,
        relatedTo,
        fetch: __1.GET_MANY_REFERENCE,
        onFailure: {
            notification: {
                body: 'ra.notification.http_error',
                level: 'warning',
            },
        },
    },
});
exports.crudGetManyReference = crudGetManyReference;
exports.CRUD_GET_MANY_REFERENCE = 'CRUD_GET_MANY_REFERENCE';
exports.CRUD_GET_MANY_REFERENCE_LOADING = 'CRUD_GET_MANY_REFERENCE_LOADING';
exports.CRUD_GET_MANY_REFERENCE_FAILURE = 'CRUD_GET_MANY_REFERENCE_FAILURE';
exports.CRUD_GET_MANY_REFERENCE_SUCCESS = 'CRUD_GET_MANY_REFERENCE_SUCCESS';
