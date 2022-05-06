import { Reducer } from 'redux';
import { NotificationPayload } from '../../actions/notificationActions';
declare type State = NotificationPayload[];
declare const notificationsReducer: Reducer<State>;
export default notificationsReducer;
/**
 * Returns the first available notification to show
 */
export declare const firstNotification: import("recoil").RecoilValueReadOnly<any>;
