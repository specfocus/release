import { Reducer } from 'redux';
import { Identifier } from '../../../../types';
declare type State = Identifier[];
declare const selectedIdsReducer: Reducer<State>;
export default selectedIdsReducer;
