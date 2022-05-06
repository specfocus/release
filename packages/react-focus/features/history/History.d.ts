import type { Location } from 'react-router';
export declare const atomHistory: import("recoil").RecoilState<Location[]>;
export declare const useHistory: () => Location[];
export declare const selectorLocation: import("recoil").RecoilState<Location>;
export declare const usePopLocationOnce: () => Location | undefined;
export declare const usePushLocationOnce: (location: Location) => void;
declare const HistoryController: () => any;
export default HistoryController;
