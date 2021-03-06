import { Reducer } from 'redux';
import { Identifier } from '../../../../types';
declare type IdentifierArray = Identifier[];
/**
 * List of the ids of the latest loaded page, regardless of params
 *
 * When loading the list for the first time, useListController grabs the ids
 * from the cachedRequests reducer (not this ids reducer). It's only when the user
 * changes page, sort, or filter, that the useListController hook uses the ids
 * reducer, so as to show the previous list of results while loading the new
 * list (instead of displaying a blank page each time the list params change).
 *
 * @see useListController
 *
 */
declare const idsReducer: Reducer<IdentifierArray>;
export default idsReducer;
export declare const getIds: (state: any) => any;
