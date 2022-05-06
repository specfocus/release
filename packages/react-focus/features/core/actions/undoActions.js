"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stopOptimisticMode = exports.STOP_OPTIMISTIC_MODE = exports.startOptimisticMode = exports.START_OPTIMISTIC_MODE = exports.complete = exports.COMPLETE = exports.undo = exports.UNDO = exports.startUndoable = exports.UNDOABLE = void 0;
exports.UNDOABLE = 'UNDOABLE';
const startUndoable = (action) => ({
    type: exports.UNDOABLE,
    payload: { action },
});
exports.startUndoable = startUndoable;
exports.UNDO = 'UNDO';
const undo = () => ({
    type: exports.UNDO,
});
exports.undo = undo;
exports.COMPLETE = 'COMPLETE';
const complete = () => ({
    type: exports.COMPLETE,
});
exports.complete = complete;
exports.START_OPTIMISTIC_MODE = 'START_OPTIMISTIC_MODE';
const startOptimisticMode = () => ({
    type: exports.START_OPTIMISTIC_MODE,
});
exports.startOptimisticMode = startOptimisticMode;
exports.STOP_OPTIMISTIC_MODE = 'STOP_OPTIMISTIC_MODE';
const stopOptimisticMode = () => ({
    type: exports.STOP_OPTIMISTIC_MODE,
});
exports.stopOptimisticMode = stopOptimisticMode;
