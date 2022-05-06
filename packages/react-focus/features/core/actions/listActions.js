"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleListItemExpand = exports.TOGGLE_LIST_ITEM_EXPAND = exports.toggleListItem = exports.TOGGLE_LIST_ITEM = exports.setListSelectedIds = exports.SET_LIST_SELECTED_IDS = exports.changeListParams = exports.CRUD_CHANGE_LIST_PARAMS = void 0;
exports.CRUD_CHANGE_LIST_PARAMS = 'CRUD_CHANGE_LIST_PARAMS';
const changeListParams = (resource, params) => ({
    type: exports.CRUD_CHANGE_LIST_PARAMS,
    payload: params,
    meta: { resource },
});
exports.changeListParams = changeListParams;
exports.SET_LIST_SELECTED_IDS = 'SET_LIST_SELECTED_IDS';
const setListSelectedIds = (resource, ids) => ({
    type: exports.SET_LIST_SELECTED_IDS,
    payload: ids,
    meta: { resource },
});
exports.setListSelectedIds = setListSelectedIds;
exports.TOGGLE_LIST_ITEM = 'TOGGLE_LIST_ITEM';
const toggleListItem = (resource, id) => ({
    type: exports.TOGGLE_LIST_ITEM,
    payload: id,
    meta: { resource },
});
exports.toggleListItem = toggleListItem;
exports.TOGGLE_LIST_ITEM_EXPAND = 'TOGGLE_LIST_ITEM_EXPAND';
/**
 * Action creator to toggle the expanded state of a list item
 *
 * @param {string} resource The resource name, e.g. 'posts'
 * @param {string|integer} id The record identifier, e.g. 123
 *
 * @example
 *
 * const onToggleItem = () => dispatch(toggleListItemExpand('posts', 123));
 */
const toggleListItemExpand = (resource, id) => ({
    type: exports.TOGGLE_LIST_ITEM_EXPAND,
    payload: id,
    meta: { resource },
});
exports.toggleListItemExpand = toggleListItemExpand;
