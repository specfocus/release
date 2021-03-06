import { Identifier } from '../types';
export declare const CRUD_CHANGE_LIST_PARAMS = "CRUD_CHANGE_LIST_PARAMS";
export interface ListParams {
    sort: string;
    order: string;
    page: number;
    perPage: number;
    filter: any;
    displayedFilters: any;
}
export interface ChangeListParamsAction {
    readonly type: typeof CRUD_CHANGE_LIST_PARAMS;
    readonly payload: ListParams;
    readonly meta: {
        resource: string;
    };
}
export declare const changeListParams: (resource: string, params: ListParams) => ChangeListParamsAction;
export declare const SET_LIST_SELECTED_IDS = "SET_LIST_SELECTED_IDS";
export interface SetListSelectedIdsAction {
    readonly type: typeof SET_LIST_SELECTED_IDS;
    readonly payload: Identifier[];
    readonly meta: {
        resource: string;
    };
}
export declare const setListSelectedIds: (resource: string, ids: Identifier[]) => SetListSelectedIdsAction;
export declare const TOGGLE_LIST_ITEM = "TOGGLE_LIST_ITEM";
export interface ToggleListItemAction {
    readonly type: typeof TOGGLE_LIST_ITEM;
    readonly payload: any;
    readonly meta: {
        resource: string;
    };
}
export declare const toggleListItem: (resource: string, id: any) => ToggleListItemAction;
export declare const TOGGLE_LIST_ITEM_EXPAND = "TOGGLE_LIST_ITEM_EXPAND";
export interface ToggleListItemExpandAction {
    readonly type: typeof TOGGLE_LIST_ITEM_EXPAND;
    readonly payload: Identifier;
    readonly meta: {
        resource: string;
    };
}
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
export declare const toggleListItemExpand: (resource: string, id: Identifier) => ToggleListItemExpandAction;
