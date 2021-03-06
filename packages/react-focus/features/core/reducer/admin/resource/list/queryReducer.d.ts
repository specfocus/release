import { Reducer } from 'redux';
import { ListParams } from '../../../../actions';
export declare const SET_SORT = "SET_SORT";
export declare const SORT_ASC = "ASC";
export declare const SORT_DESC = "DESC";
export declare const SET_PAGE = "SET_PAGE";
export declare const SET_PER_PAGE = "SET_PER_PAGE";
export declare const SET_FILTER = "SET_FILTER";
export declare const SHOW_FILTER = "SHOW_FILTER";
export declare const HIDE_FILTER = "HIDE_FILTER";
/**
 * This reducer is for the react-router query string, NOT for redux.
 */
declare const queryReducer: Reducer<ListParams>;
export default queryReducer;
