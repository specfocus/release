export declare const UNDOABLE = "UNDOABLE";
export interface StartUndoableAction {
    readonly type: typeof UNDOABLE;
    readonly payload: any;
}
export declare const startUndoable: (action: any) => StartUndoableAction;
export declare const UNDO = "UNDO";
export interface UndoAction {
    readonly type: typeof UNDO;
}
export declare const undo: () => UndoAction;
export declare const COMPLETE = "COMPLETE";
export interface CompleteAction {
    readonly type: typeof COMPLETE;
}
export declare const complete: () => CompleteAction;
export declare const START_OPTIMISTIC_MODE = "START_OPTIMISTIC_MODE";
export interface StartOptimisticModeAction {
    readonly type: typeof START_OPTIMISTIC_MODE;
}
export declare const startOptimisticMode: () => StartOptimisticModeAction;
export declare const STOP_OPTIMISTIC_MODE = "STOP_OPTIMISTIC_MODE";
export interface StopOptimisticModeAction {
    readonly type: typeof STOP_OPTIMISTIC_MODE;
}
export declare const stopOptimisticMode: () => StopOptimisticModeAction;
