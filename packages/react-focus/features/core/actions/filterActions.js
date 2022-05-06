"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setFilter = exports.CRUD_SET_FILTER = exports.hideFilter = exports.CRUD_HIDE_FILTER = exports.showFilter = exports.CRUD_SHOW_FILTER = void 0;
exports.CRUD_SHOW_FILTER = 'CRUD_SHOW_FILTER';
const showFilter = (resource, field) => ({
    type: exports.CRUD_SHOW_FILTER,
    payload: { field },
    meta: { resource },
});
exports.showFilter = showFilter;
exports.CRUD_HIDE_FILTER = 'CRUD_HIDE_FILTER';
const hideFilter = (resource, field) => ({
    type: exports.CRUD_HIDE_FILTER,
    payload: { field },
    meta: { resource },
});
exports.hideFilter = hideFilter;
exports.CRUD_SET_FILTER = 'CRUD_SET_FILTER';
const setFilter = (resource, field, value) => ({
    type: exports.CRUD_SET_FILTER,
    payload: { field, value },
    meta: { resource },
});
exports.setFilter = setFilter;
